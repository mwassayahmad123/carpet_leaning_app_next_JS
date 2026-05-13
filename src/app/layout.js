import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});

const searchEngineVerification = {
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : {}),
  ...(process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION
    ? { yandex: process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION }
    : {}),
  ...(process.env.NEXT_PUBLIC_YAHOO_SITE_VERIFICATION
    ? { yahoo: process.env.NEXT_PUBLIC_YAHOO_SITE_VERIFICATION }
    : {}),
  ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || process.env.NEXT_PUBLIC_PINTEREST_SITE_VERIFICATION
    ? {
        other: {
          ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
            ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
            : {}),
          ...(process.env.NEXT_PUBLIC_PINTEREST_SITE_VERIFICATION
            ? { 'p:domain_verify': process.env.NEXT_PUBLIC_PINTEREST_SITE_VERIFICATION }
            : {}),
        },
      }
    : {}),
};

export const metadata = {
  metadataBase: new URL('https://fivestarcarpetcleaning.co.uk'),
  title: {
    default: 'Carpet Cleaning London, UK | Five Star Carpet Cleaning',
    template: '%s | Five Star Carpet Cleaning UK',
  },
  description:
    'Professional carpet cleaning in London, UK. Eco-friendly steam cleaning for carpets, rugs, sofas and mattresses across East & South East London.',
  keywords: [
    'carpet cleaning London',
    'carpet cleaning London UK',
    'professional carpet cleaners London',
    'upholstery cleaning London',
    'sofa cleaning London',
    'rug cleaning London',
    'steam carpet cleaning London',
    'end of tenancy carpet cleaning London',
    'commercial carpet cleaning London',
    'mattress cleaning London',
    'pet stain removal London',
    'eco friendly carpet cleaning London',
    'affordable carpet cleaning London',
    'same day carpet cleaning London',
    'carpet cleaning East London',
    'carpet cleaning South East London',
    'carpet cleaners Leyton',
    'carpet cleaning Leytonstone',
    'carpet cleaning Stratford',
    'carpet cleaning Wanstead',
    'carpet cleaning Walthamstow',
    'carpet cleaning Hackney',
    'carpet cleaning Ilford',
    'stair carpet cleaning London',
    'office carpet cleaning London',
    'Five Star Carpet Cleaning',
  ],
  category: 'cleaning service',
  authors: [{ name: 'Five Star Carpet Cleaning' }],
  creator: 'Five Star Carpet Cleaning',
  publisher: 'Five Star Carpet Cleaning',
  applicationName: 'Five Star Carpet Cleaning',
  manifest: '/manifest.json',
  referrer: 'origin-when-cross-origin',
  verification: searchEngineVerification,
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  appleWebApp: {
    capable: true,
    title: 'Five Star Carpet Cleaning',
    statusBarStyle: 'black-translucent',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://fivestarcarpetcleaning.co.uk/',
    siteName: 'Five Star Carpet Cleaning',
    title: 'Carpet Cleaning London, UK | Five Star Carpet Cleaning',
    description:
      'Professional carpet cleaning in London, UK. Eco-friendly steam cleaning for carpets, rugs, sofas and mattresses across East & South East London.',
    images: [
      {
        url: '/logo.webp',
        width: 512,
        height: 512,
        alt: 'Five Star Carpet Cleaning London UK logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carpet Cleaning London, UK | Five Star Carpet Cleaning',
    description:
      'Professional carpet cleaning in London, UK. Eco-friendly steam cleaning for carpets, rugs, sofas and mattresses across East & South East London.',
    images: ['/logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.webp',
    apple: '/logo.webp',
  },
  other: {
    'geo.region': 'GB-LND',
    'geo.placename': 'London',
    'geo.position': '51.5674;0.0094',
    ICBM: '51.5674, 0.0094',
    'business:contact_data:locality': 'London',
    'business:contact_data:region': 'England',
    'business:contact_data:country_name': 'United Kingdom',
  },
};

// Viewport: enables high-refresh-rate rendering on 120Hz devices
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,           // Allow pinch-to-zoom for accessibility
  viewportFit: 'cover',      // Safe area on notched devices
  themeColor: '#0d1117',     // Match dark bg — prevents white flash on load
};


const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name: 'Five Star Carpet Cleaning',
  alternateName: ['Five Star Carpet & Upholstery Cleaning', 'Five Star Carpet Cleaning London'],
  image: 'https://fivestarcarpetcleaning.co.uk/logo.webp',
  logo: 'https://fivestarcarpetcleaning.co.uk/logo.webp',
  '@id': 'https://fivestarcarpetcleaning.co.uk/#localbusiness',
  url: 'https://fivestarcarpetcleaning.co.uk',
  telephone: '+44 7871 062227',
  email: 'fivestarservicesltduk@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '6 Frith Rd',
    addressLocality: 'London',
    addressRegion: 'England',
    postalCode: 'E11 4EY',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5674,
    longitude: 0.0094,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '08:00',
    closes: '20:00',
  },
  priceRange: '££',
  currenciesAccepted: 'GBP',
  paymentAccepted: ['Cash', 'Bank transfer', 'Card'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '150',
  },
  description:
    'Professional carpet, rug, mattress and upholstery cleaning in London, UK, with eco-friendly steam cleaning for homes, landlords and businesses.',
  areaServed: [
    { '@type': 'City', name: 'London' },
    { '@type': 'Place', name: 'East London' },
    { '@type': 'Place', name: 'South East London' },
    { '@type': 'Place', name: 'Leyton' },
    { '@type': 'Place', name: 'Leytonstone' },
    { '@type': 'Place', name: 'Stratford' },
    { '@type': 'Place', name: 'Wanstead' },
    { '@type': 'Place', name: 'Walthamstow' },
    { '@type': 'Place', name: 'Hackney' },
    { '@type': 'Place', name: 'Ilford' },
    { '@type': 'Place', name: 'Greenwich' },
    { '@type': 'Place', name: 'Canary Wharf' },
  ],
  serviceType: [
    'Carpet cleaning',
    'Upholstery cleaning',
    'Rug cleaning',
    'Mattress cleaning',
    'End of tenancy carpet cleaning',
    'Commercial carpet cleaning',
  ],
  hasMap: 'https://www.google.com/maps/search/?api=1&query=6+Frith+Rd,+London+E11+4EY,+UK',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+44 7871 062227',
    contactType: 'customer service',
    areaServed: 'GB',
    availableLanguage: ['English'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          suppressHydrationWarning
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
