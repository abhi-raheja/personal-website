# Custom Domain Setup for Vercel

## Current Status
Your domains `abhiraheja.com` and `www.abhiraheja.com` are added to Vercel but show "Invalid Configuration" because DNS records need to be updated.

## Step-by-Step Fix

### 1. Get DNS Instructions from Vercel
- In your Vercel dashboard, click on `abhiraheja.com`
- Click "Refresh" or check the "Learn more" dropdown
- Vercel will show you the exact DNS records you need to add

### 2. Update DNS Records at Your Domain Registrar
You need to update DNS records where you registered `abhiraheja.com` (e.g., Namecheap, GoDaddy, Google Domains, etc.)

**For `abhiraheja.com` (apex domain):**
- Add/Update an **A record**:
  - Type: A
  - Name: `@` (or leave blank)
  - Value: `216.198.79.1`

**For `www.abhiraheja.com` (www subdomain):**
- Add/Update a **CNAME record**:
  - Type: CNAME
  - Name: `www`
  - Value: `79ed5e7725d2dec7.vercel-dns-017.com.` (note the trailing dot!)

### 3. DNS Propagation
- DNS changes can take 24-48 hours to propagate globally
- Usually works within a few minutes to a few hours
- You can check status using: `dig abhiraheja.com` or online tools like `dnschecker.org`

### 4. Verify in Vercel
- Once DNS propagates, go back to Vercel
- Click "Refresh" on the domain
- Status should change from "Invalid Configuration" to "Valid Configuration" ✅

## Quick Checklist
- [ ] Removed `public/CNAME` file (done automatically)
- [ ] Get DNS values from Vercel dashboard
- [ ] Add A record for `abhiraheja.com` → Vercel IP
- [ ] Add CNAME record for `www.abhiraheja.com` → Vercel CNAME target
- [ ] Wait for DNS propagation (check with Refresh button in Vercel)
- [ ] Verify subscription form works on `abhiraheja.com`

## Why This Matters
- GitHub Pages is static-only and doesn't support API routes
- Your subscription form needs API routes (serverless functions)
- Vercel provides the serverless infrastructure needed
- Once DNS points to Vercel, your subscription form will work on your custom domain

## Need Help?
If you're unsure about DNS settings:
1. Check which registrar you used for `abhiraheja.com`
2. Access your DNS management panel there
3. Follow Vercel's specific instructions (they'll show the exact values)
4. Or ask Vercel support for help with DNS setup

