/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
