/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
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
