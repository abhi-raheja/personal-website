const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDirectory = path.join(process.cwd(), 'content/posts');
const outputFile = path.join(process.cwd(), 'src/data/posts.json');

function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

function generatePostsData() {
  try {
    // Ensure output directory exists
    const outputDir = path.dirname(outputFile);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Read all markdown files
    const fileNames = fs.readdirSync(postsDirectory);
    const posts = fileNames
      .filter(name => name.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title || slug,
          date: data.date || new Date().toISOString().split('T')[0],
          excerpt: data.excerpt || '',
          readTime: data.readTime || calculateReadTime(content),
        };
      })
      .sort((a, b) => (a.date > b.date ? -1 : 1)); // Sort by date, newest first

    // Write to JSON file
    fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
    console.log(`Generated posts data: ${posts.length} posts written to ${outputFile}`);
  } catch (error) {
    console.error('Error generating posts data:', error);
    // Write empty array as fallback
    fs.writeFileSync(outputFile, JSON.stringify([], null, 2));
  }
}

generatePostsData();
