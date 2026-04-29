/** @type {import('next').NextConfig} */
const nextConfig = {
  // Strict mode catches rendering issues early
  reactStrictMode: true,

  // Remove "X-Powered-By: Next.js" header (tiny security + perf win)
  poweredByHeader: false,

  // Compress responses with gzip — faster page load
  compress: true,

  images: {
    // Avoid 502 on /_next/image when the host image optimizer is unavailable or misconfigured
    // (common on some Netlify / serverless setups). Images load as normal static URLs instead.
    unoptimized: true,
    qualities: [75, 90],
    // Lazy-load images by default (reduces initial paint cost)
    formats: ['image/avif', 'image/webp'],
  },

  async rewrites() {
    return [
      { source: '/favicon.ico', destination: '/logo.webp' },
    ];
  },

  async headers() {
    return [
      // SEO: allow all crawlers
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
          // Prevent content-type sniffing (security + perf)
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Hint to browser: use high-refresh-rate rendering when available
          { key: 'Vary', value: 'Accept-Encoding' },
        ],
      },
      // Long-term cache for all static assets (_next/static)
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache public assets (images, videos, fonts) for 7 days
      {
        source: '/(.*)\\.(webp|png|jpg|jpeg|svg|gif|ico|woff2|woff|ttf|otf|mp4|webm)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
