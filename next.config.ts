import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keeping on Vercel - iframe doesn't need API routes but can keep config flexible
  // output: 'export', // Only uncomment if switching to GitHub Pages
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Add basePath if deploying to GitHub Pages with a repository name
  // basePath: '/repository-name',
};

export default nextConfig;
