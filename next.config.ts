import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only use static export when building for GitHub Pages
  // Vercel will automatically handle API routes as serverless functions
  // Uncomment the line below if you want to also build static exports for GitHub Pages
  // output: process.env.NODE_ENV === 'production' && process.env.BUILD_TARGET === 'static' ? 'export' : undefined,
  
  // For Vercel deployment, remove output: 'export' to allow API routes
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Add basePath if deploying to GitHub Pages with a repository name
  // basePath: '/repository-name',
};

export default nextConfig;
