/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  experimental: {
    // Enable React 19 features
    serverActions: true,
    typedRoutes: true,
  }
};

module.exports = nextConfig;
