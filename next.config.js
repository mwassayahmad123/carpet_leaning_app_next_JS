/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Required when using next/image with quality other than defaults (Next.js 16+)
    qualities: [75, 90],
  },
  async rewrites() {
    return [
      // Browsers request /favicon.ico by default; serve existing logo to avoid 404
      { source: '/favicon.ico', destination: '/logo.webp' },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

