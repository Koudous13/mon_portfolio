/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    CACHE_BUSTER: "123456",
  },
  images: {
    domains: ['commondatastorage.googleapis.com'],
  },
  async rewrites() {
    return [
      {
        source: '/etape/:path*',
        destination: '/',
      },
    ]
  },
};

export default nextConfig;
