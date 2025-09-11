# Content Management Guide

This guide shows you how to easily add new blog posts to your personal website.

## Quick Start

### Adding a New Post

1. **Run the new post script:**
   ```bash
   npm run new-post
   ```

2. **Follow the prompts:**
   - Enter your post title
   - Add a brief excerpt (optional)
   - Set estimated read time

3. **Edit your post:**
   - Open the generated `.md` file in `content/posts/`
   - Write your content using Markdown
   - Save the file

4. **View your post:**
   - Your post will automatically appear on the website
   - Visit `/writings` to see it in the list
   - Visit `/writings/your-post-slug` to see the full post

## Manual Method

If you prefer to create posts manually:

1. **Create a new `.md` file** in `content/posts/`
2. **Add front matter** at the top:
   ```markdown
   ---
   title: "Your Post Title"
   date: "2025-01-15"
   excerpt: "A brief description of your post"
   readTime: "5 min read"
   ---
   ```
3. **Write your content** below the front matter using Markdown

## Markdown Formatting

You can use standard Markdown formatting:

### Headings
```markdown
# Large Heading
## Medium Heading
### Small Heading
```

### Text Formatting
```markdown
**Bold text**
*Italic text*
~~Strikethrough~~
`Inline code`
```

### Links and Images
```markdown
[Link text](https://example.com)
![Image alt text](image-url.jpg)
```

### Lists
```markdown
- Bullet point 1
- Bullet point 2

1. Numbered item 1
2. Numbered item 2
```

### Code Blocks
```markdown
\`\`\`javascript
function example() {
  console.log("Hello, world!");
}
\`\`\`
```

### Quotes
```markdown
> This is a blockquote
> It can span multiple lines
```

## File Structure

```
content/
├── posts/
│   ├── your-first-post.md
│   ├── another-post.md
│   └── ...
```

## Tips

1. **File names** should be lowercase with hyphens (e.g., `my-great-post.md`)
2. **Slugs** are automatically generated from the filename
3. **Dates** should be in YYYY-MM-DD format
4. **Excerpts** appear on the writings page and should be 1-2 sentences
5. **Read times** help readers know what to expect

## Updating Content

To update an existing post:
1. Find the `.md` file in `content/posts/`
2. Edit the content or front matter
3. Save the file
4. Changes appear automatically on the website

## Need Help?

- Check existing posts in `content/posts/` for examples
- The Markdown guide: [Markdown Guide](https://www.markdownguide.org/)
- For technical issues, refer to the main README.md
