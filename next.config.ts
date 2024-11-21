import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  compress: false,
  images: {
    domains: ['avatars.githubusercontent.com'],
    unoptimized: true,
  },
};

export default nextConfig;
