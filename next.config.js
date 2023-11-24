/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.seabrook-wp.local:10013/',
        port: '',
        pathname: '/wp-content/uploads/2023/11/**',
      },
    ],
  },
}

module.exports = nextConfig
