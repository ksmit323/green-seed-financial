/** @type {import('next').NextConfig} */
const nextConfig = {
  // @dev Uncomment the following line to enable export mode.
  //      This will optimize images and generate static files for faster loading
  //      but will break the API route. You will optimize SEO and improve performance
  //      but SEO and performance are already pretty solid so probably won't help too much.
  // output: "export",
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