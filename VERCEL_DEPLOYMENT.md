# Vercel Deployment Guide

## Custom Subscription Form

This project includes a custom subscription form that integrates with Substack. The form uses API routes that require serverless function support.

## Important Notes

### API Routes
- API routes (`/api/subscribe`) will **only work when deployed to Vercel**
- During local development with `npm run dev`, the API routes will work
- Static export (`npm run build`) will NOT include API routes (they'll be skipped)
- **You must deploy to Vercel** for the subscription form to function

### Deployment Steps

1. **Push your code to GitHub** (if not already done)

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your GitHub repository

3. **Vercel Configuration**:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build`
   - Output Directory: `.next` (Next.js default, but for static export use `out`)
   
   **Important**: To use API routes, you need to:
   - Either remove `output: 'export'` from `next.config.ts` temporarily
   - Or Vercel will handle API routes automatically if you keep Next.js default settings

4. **Recommended Config for Vercel**:
   
   For API routes to work, update `next.config.ts`:
   ```typescript
   const nextConfig: NextConfig = {
     // Remove or comment out 'output: export' for API routes
     // output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     },
   };
   ```
   
   Vercel will handle both static pages and API routes automatically.

5. **Environment Variables** (if needed in future):
   - No environment variables needed for basic setup
   - The Substack URL is hardcoded in the API route

6. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your site
   - Your subscription form will work at the deployed URL

## Testing

After deployment:
1. Visit your Vercel URL
2. Try subscribing with a test email
3. Check your email for the Substack confirmation
4. Verify the email appears in your Substack dashboard

## Alternative: Keep GitHub Pages + Vercel for API

If you want to keep GitHub Pages for static hosting:
- Keep `output: 'export'` for GitHub Pages builds
- Deploy API routes separately to Vercel
- Update the form to point to Vercel API URL

This is more complex and not recommended unless you have specific requirements.

