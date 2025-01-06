import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
