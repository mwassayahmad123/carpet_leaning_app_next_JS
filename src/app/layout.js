import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Five-Star Carpet & Upholstery Cleaning London | Deep Clean',
  description: 'Looking for professional carpet cleaning in London? We offer five-star eco-friendly deep steam cleaning for carpets, rugs & upholstery. Book your clean today!',
  icons: {
    icon: [{ url: '/logo.webp', type: 'image/webp' }],
    apple: [{ url: '/logo.webp', type: 'image/webp' }],
  },
  alternates: {
    canonical: 'https://fivestarcarpetcleaning.co.uk',
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

