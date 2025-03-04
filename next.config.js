/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    // formats: ['image/webp'],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // If you need to deploy to a custom domain with a CDN, you can use the following:
  // assetPrefix: 'https://cdn.greenseedfinancial.com',
  // trailingSlash: true,
}

module.exports = nextConfig