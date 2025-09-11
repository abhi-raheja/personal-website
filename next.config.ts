import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Add basePath if deploying to GitHub Pages with a repository name
  // basePath: '/repository-name',
};

export default nextConfig;
