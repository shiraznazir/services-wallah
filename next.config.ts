import { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // output: 'export',
  // domain: 'https://servicewalah.com/',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
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
  // async rewrites() {
  //   return [
  //     {
  //       source: '/service',
  //       destination: '/service/1',
  //     },
  //   ];
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: '/about',
  //       destination: '/about',
  //       permanent: true,
  //     },
  //   ];
  // },
  
  // async headers() {
  //   return [
  //     {
  //       source: '/service',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=3600',
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
