import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: { // Allows for partial prerendering, meaning static elements 
  // are rendered first and then the dynamic elements are rendered
    ppr: 'incremental'
  }
};

export default nextConfig;
