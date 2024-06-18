/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig;
