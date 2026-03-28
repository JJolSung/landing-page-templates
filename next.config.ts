import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: process.env.LOCAL_IP_ADDRESS
    ? [process.env.LOCAL_IP_ADDRESS]
    : [],
};

export default nextConfig;
