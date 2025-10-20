# How to Add New Blog Posts

Your blog system is now fully automated! Here's how to add new posts:

## ✨ Quick Start

1. **Create a new markdown file** in `content/posts/`
2. **Add frontmatter** at the top
3. **Write your content**
4. **Commit and push**

That's it! Your post will automatically appear on your website.

## 📝 Step-by-Step Guide

### 1. Create the Markdown File

Create a new file in `content/posts/` with a descriptive filename:
```
content/posts/my-new-post-title.md
```

**Naming tips:**
- Use lowercase letters
- Replace spaces with hyphens
- Keep it descriptive but concise
- The filename becomes the URL slug

### 2. Add Frontmatter

Start your file with frontmatter (metadata between `---` lines):

```markdown
---
title: "Your Post Title"
date: "2025-01-20"
excerpt: "A brief description of your post that appears in listings"
readTime: "5 min read"
---

# Your Post Title

Your content starts here...
```

**Frontmatter fields:**
- `title`: The display title of your post
- `date`: Publication date in YYYY-MM-DD format
- `excerpt`: Brief description for post listings
- `readTime`: Estimated reading time (optional - will be calculated automatically if omitted)

### 3. Write Your Content

Use standard Markdown syntax:

```markdown
# Main Heading
## Subheading
### Smaller Heading

**Bold text**
*Italic text*

[Link text](https://example.com)

- Bullet point
- Another point

1. Numbered list
2. Second item

> This is a quote

`inline code`

```
Code block
```
```

### 4. Commit and Push

```bash
git add .
git commit -m "Add new post: Your Post Title"
git push origin main
```

## 🔄 How It Works

1. **Build Process**: When you push to GitHub, the `prebuild` script automatically:
   - Scans `content/posts/` for `.md` files
   - Extracts frontmatter and calculates reading time
   - Generates `src/data/posts.json` with all post metadata

2. **Website Updates**: Your website automatically:
   - Shows the latest 3 posts on the homepage
   - Lists all posts on the writings page (sorted by date)
   - Creates individual pages for each post at `/writings/[slug]`

## 📁 File Structure

```
content/posts/
├── my-first-post.md
├── another-great-post.md
└── latest-thoughts.md

src/data/
└── posts.json (auto-generated)
```

## 🎯 Pro Tips

- **Dates**: Use future dates to "schedule" posts (they'll appear when that date arrives)
- **Excerpts**: Keep them under 150 characters for best display
- **Slugs**: The filename becomes the URL, so choose wisely
- **Images**: Place images in `public/` and reference them as `/image.jpg`

## 🚀 Advanced: Using the Script

You can also generate the posts data manually:
```bash
node scripts/generate-posts-data.js
```

This is useful for testing locally before committing.

---

**That's it!** Your blog system is now completely automated. Just drop markdown files in `content/posts/` and they'll appear on your website automatically.
