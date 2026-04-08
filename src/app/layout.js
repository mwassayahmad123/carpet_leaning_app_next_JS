import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://fivestarcarpetcleaning.co.uk'),
  title: {
    default: 'Five Star Carpet & Upholstery Cleaning London | Deep Clean',
    template: '%s | Five Star Carpet Cleaning London',
  },
  description:
    'Looking for professional carpet cleaning in London? We offer five-star eco-friendly deep steam cleaning for carpets, rugs & upholstery. Book your clean today!',
  keywords: [
    'carpet cleaning London',
    'upholstery cleaning London',
    'rug cleaning London',
    'deep steam carpet cleaning',
    'professional carpet cleaners near me',
    'eco-friendly carpet cleaning',
    'pet stain removal London',
    'mattress cleaning London',
    'a1carpet cleaning',
    'fivestarcapertservice',
  ],
  authors: [{ name: 'Five Star Carpet Cleaning' }],
  creator: 'Five Star Carpet Cleaning',
  publisher: 'Five Star Carpet Cleaning',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: '/',
    siteName: 'Five Star Carpet Cleaning',
    title: 'Five Star Carpet & Upholstery Cleaning London | Deep Clean',
    description:
      'Professional carpet cleaning London. Five-star eco-friendly deep steam cleaning for carpets, rugs & upholstery. Book today!',
    images: [
      {
        url: '/logo.webp',
        width: 512,
        height: 512,
        alt: 'Five Star Carpet Cleaning London Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Five Star Carpet & Upholstery Cleaning London | Deep Clean',
    description:
      'Professional carpet cleaning London. Five-star eco-friendly deep steam cleaning for carpets, rugs & upholstery. Book today!',
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
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Five Star Carpet Cleaning',
  image: 'https://fivestarcarpetcleaning.co.uk/logo.webp',
  '@id': 'https://fivestarcarpetcleaning.co.uk',
  url: 'https://fivestarcarpetcleaning.co.uk',
  telephone: '+447871062227',
  email: 'fivestarservicesltduk@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '6 Frith Rd',
    addressLocality: 'London',
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
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '150',
  },
  description:
    'Professional carpet cleaning London. Five-star eco-friendly deep steam cleaning for carpets, rugs & upholstery.',
  areaServed: {
    '@type': 'City',
    name: 'London',
  },
  sameAs: ['https://wa.me/447871062227'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
