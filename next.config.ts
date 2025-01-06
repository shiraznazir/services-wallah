import { NextConfig } from 'next';
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  output: 'export', 
  domain: 'https://servicewalah.com/',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  webpack5: true, 
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    esmExternals: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  publicRuntimeConfig: {
    STATIC_PATH: '/static',
  },
  async rewrites() {
    return [
      {
        source: '/service',
        destination: '/service/1',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/service',
        permanent: true,
      },
    ];
  },  
};

export default nextConfig;
