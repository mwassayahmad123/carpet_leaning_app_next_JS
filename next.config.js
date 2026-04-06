/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Avoid 502 on /_next/image when the host image optimizer is unavailable or misconfigured
    // (common on some Netlify / serverless setups). Images load as normal static URLs instead.
    unoptimized: true,
    // If you use next/image quality other than defaults (Next 16+), keep allowed values here.
    qualities: [75, 90],
  },
};

module.exports = nextConfig;

