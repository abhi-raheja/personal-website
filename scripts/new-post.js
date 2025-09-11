#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

function getCurrentDate() {
  return new Date().toISOString().split('T')[0];
}

async function createNewPost() {
  console.log('📝 Creating a new blog post...\n');
  
  try {
    const title = await question('Post title: ');
    if (!title.trim()) {
      console.log('❌ Title is required');
      process.exit(1);
    }

    const excerpt = await question('Brief excerpt (optional): ');
    const readTime = await question('Estimated read time (e.g., "5 min read"): ') || '5 min read';
    
    const slug = slugify(title);
    const date = getCurrentDate();
    
    const frontMatter = `---
title: "${title}"
date: "${date}"
excerpt: "${excerpt}"
readTime: "${readTime}"
---

# ${title}

Write your blog post content here using Markdown.

## Example Section

You can use:
- **Bold text**
- *Italic text*
- [Links](https://example.com)
- \`Code snippets\`

And much more! Check out the Markdown guide for all formatting options.
`;

    const postsDir = path.join(process.cwd(), 'content', 'posts');
    
    // Create posts directory if it doesn't exist
    if (!fs.existsSync(postsDir)) {
      fs.mkdirSync(postsDir, { recursive: true });
    }
    
    const filePath = path.join(postsDir, `${slug}.md`);
    
    // Check if file already exists
    if (fs.existsSync(filePath)) {
      console.log(`❌ A post with the slug "${slug}" already exists`);
      process.exit(1);
    }
    
    // Write the file
    fs.writeFileSync(filePath, frontMatter, 'utf8');
    
    console.log(`\n✅ New post created successfully!`);
    console.log(`📁 File: ${filePath}`);
    console.log(`🔗 URL: /writings/${slug}`);
    console.log(`\n📝 You can now edit the file and add your content.`);
    
  } catch (error) {
    console.error('❌ Error creating post:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

// Run the script
createNewPost();
