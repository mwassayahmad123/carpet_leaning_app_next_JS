// Live Google Business Profile reviews via the Google Places API (New).
//
// Environment variables (set them in Netlify → Site configuration → Environment variables):
//   GOOGLE_PLACES_API_KEY  – required. A Google Cloud API key with "Places API (New)" enabled.
//   GOOGLE_PLACE_ID        – optional. If not set, the place is found by name and matched by phone number.
//
// Responses are cached and refreshed every REVIEWS_REVALIDATE seconds, so new reviews appear on the
// site automatically without a redeploy. Google returns at most 5 reviews per place.
// If the key is missing or Google is unreachable this returns null and the page shows a link to Google instead.

export const REVIEWS_REVALIDATE = 60 * 60 * 6; // 6 hours

const API = 'https://places.googleapis.com/v1';
const BUSINESS_NAME = 'Five Star Carpet Cleaning & Upholstery Specialists';
const BUSINESS_PHONE_DIGITS = '7871062227'; // used to make sure the search found the right business

const digits = (s = '') => s.replace(/\D/g, '');

async function findPlaceId(apiKey) {
  const res = await fetch(`${API}/places:searchText`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'places.id,places.internationalPhoneNumber,places.nationalPhoneNumber',
    },
    body: JSON.stringify({ textQuery: `${BUSINESS_NAME} London`, regionCode: 'GB' }),
    next: { revalidate: REVIEWS_REVALIDATE },
  });
  if (!res.ok) throw new Error(`Places text search failed: ${res.status} ${await res.text()}`);
  const { places = [] } = await res.json();
  const match = places.find((p) =>
    digits(p.internationalPhoneNumber || p.nationalPhoneNumber).endsWith(BUSINESS_PHONE_DIGITS)
  );
  if (!match) throw new Error('Places text search: no result matched the business phone number');
  return match.id;
}

export async function getGoogleReviews() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return null;

  try {
    const placeId = process.env.GOOGLE_PLACE_ID || (await findPlaceId(apiKey));
    const res = await fetch(`${API}/places/${encodeURIComponent(placeId)}?languageCode=en&regionCode=GB`, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'rating,userRatingCount,reviews,googleMapsUri',
      },
      next: { revalidate: REVIEWS_REVALIDATE },
    });
    if (!res.ok) throw new Error(`Place details failed: ${res.status} ${await res.text()}`);
    const place = await res.json();

    const reviews = (place.reviews || [])
      .map((r) => ({
        id: r.name,
        author: r.authorAttribution?.displayName || 'Google user',
        authorUrl: r.authorAttribution?.uri || null,
        authorPhoto: r.authorAttribution?.photoUri || null,
        rating: Math.round(r.rating || 0),
        text: (r.text?.text || r.originalText?.text || '').trim(),
        relativeTime: r.relativePublishTimeDescription || '',
        publishTime: r.publishTime || null,
        url: r.googleMapsUri || null,
      }))
      .filter((r) => r.text);

    return {
      rating: place.rating ?? null,
      count: place.userRatingCount ?? 0,
      url: place.googleMapsUri || null,
      writeReviewUrl: `https://search.google.com/local/writereview?placeid=${encodeURIComponent(placeId)}`,
      reviews,
    };
  } catch (error) {
    console.error('[google-reviews]', error.message);
    return null;
  }
}
