/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'localhost:3000',
      'http://localhost:3000',
      'localhost'
    ],
  },
};

module.exports = nextConfig;
