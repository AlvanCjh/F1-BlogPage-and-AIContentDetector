import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/api/user/pfp/**', // Specifically for PFPs
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/api/user/uploads/**', // Specifically for Blog Posts
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        pathname: '/api/user/**',
      },
    ],
  },
};

export default nextConfig;