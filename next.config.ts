import { NextConfig } from 'next'; // TypeScript type for Next.js config
import path from 'path'; // Import path module

const nextConfig: NextConfig = {

  webpack(config) {
    // Set alias for '@' to map to the src directory
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },

  // Uncomment and configure these if needed
  images: {
    domains: ["servicewalah.com"], // Add external image domains here if required
  },

  // Uncomment for static exports (if applicable)
  // output: "export", 

  // Enable React Strict Mode if you want stricter checks during development
  reactStrictMode: true, 
};

export default nextConfig;
