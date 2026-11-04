import ReviewsCarousel from './ReviewsCarousel';
import { StarIcon } from './Icons';
import { getGoogleReviews } from '../lib/googleReviews';

// Public link to the Google Business Profile (used when live reviews are unavailable).
const GBP_URL = 'https://share.google/FDQjhGpQsigBA0Nmm';

const GoogleWordmark = () => (
  <span className="font-semibold tracking-tight" aria-label="Google">
    <span className="text-[#4285F4]">G</span>
    <span className="text-[#EA4335]">o</span>
    <span className="text-[#FBBC05]">o</span>
    <span className="text-[#4285F4]">g</span>
    <span className="text-[#34A853]">l</span>
    <span className="text-[#EA4335]">e</span>
  </span>
);

// Customer reviews pulled live from the Google Business Profile (refreshed automatically).
const Reviews = async () => {
  const data = await getGoogleReviews();
  const profileUrl = data?.url || GBP_URL;

  return (
    <section id="reviews" className="relative py-20 sm:py-24 bg-navy-950 overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(217,174,67,0.14),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex justify-center gap-1 text-gold-400 mb-5" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <StarIcon key={i} className="w-5 h-5" />
            ))}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Customer Reviews
          </h2>
          <p className="text-lg text-navy-100 max-w-3xl mx-auto">
            See what our satisfied customers have to say
          </p>

          {/* Overall Google rating */}
          {data?.rating && (
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <span className="font-display text-4xl font-bold text-navy-900">{data.rating.toFixed(1)}</span>
              <span className="text-left">
                <span className="flex gap-0.5 text-gold-400" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <StarIcon key={i} className="w-5 h-5" />
                  ))}
                </span>
                <span className="block text-sm text-gray-600 mt-1">
                  Based on {data.count} <GoogleWordmark /> reviews
                </span>
              </span>
            </a>
          )}
        </div>

        {data?.reviews?.length ? (
          <ReviewsCarousel reviews={data.reviews} />
        ) : (
          <p className="text-center text-navy-100 max-w-xl mx-auto">
            Read what our customers say about us on our Google Business Profile.
          </p>
        )}

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold bg-gold-400 text-navy-950 hover:bg-gold-300 transition-colors"
          >
            See all reviews on Google
          </a>
          {data?.writeReviewUrl && (
            <a
              href={data.writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors"
            >
              Write a review
            </a>
          )}
        </div>
        <p className="mt-6 text-center text-xs text-navy-300">
          Reviews from <GoogleWordmark /> · Updated automatically
        </p>
      </div>
    </section>
  );
};

export default Reviews;
