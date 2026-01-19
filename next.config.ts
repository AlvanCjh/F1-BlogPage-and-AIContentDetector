import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allows Next.js to fetch from your local PHP server
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1', 
        port: '',
        pathname: '/api/user/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/api/user/uploads/**',
      },
    ],
  },
};

export default nextConfig;