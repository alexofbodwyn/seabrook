/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // Check if the environment is production
    if (process.env.NODE_ENV === 'production') {
      return [
        {
          source: '/:path*',
          destination: 'https://seabrookfinance.com/:path*',
          permanent: true,
        },
      ];
    }

    // Return an empty array for local development
    return [];
  },
}

module.exports = nextConfig
