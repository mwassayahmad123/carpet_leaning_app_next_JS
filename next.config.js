/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Avoid 502 on /_next/image when the host image optimizer is unavailable or misconfigured
    // (common on some Netlify / serverless setups). Images load as normal static URLs instead.
    unoptimized: true,
    // If you use next/image quality other than defaults (Next.js 16+), keep allowed values here.
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
