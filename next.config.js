
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'localhost'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'http', 
        hostname: 'localhost',
        port: '3001',
      }
    ],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig
