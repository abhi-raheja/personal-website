import Link from 'next/link';
import postsData from '@/data/posts.json';
import fs from 'fs';
import path from 'path';

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    return postsData.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

function formatDate(dateString: string): string {
  // Parse the date string and ensure it's treated as local date
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day); // month is 0-indexed
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  
  // Find post metadata
  const postMetadata = postsData.find((post) => post.slug === slug);
  
  if (!postMetadata) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-red-500">Post not found</div>
      </div>
    );
  }

  // Read markdown file server-side
  let content = '';
  try {
    const filePath = path.join(process.cwd(), 'content', 'posts', `${slug}.md`);
    const markdownContent = fs.readFileSync(filePath, 'utf8');
    
    // Extract content after frontmatter
    const contentMatch = markdownContent.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
    const rawContent = contentMatch ? contentMatch[2].trim() : markdownContent;
    
    // Convert markdown to HTML (improved conversion)
    content = rawContent
      // Handle headers
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">$1</h3>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-6">$1</h2>')
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-gray-900 mt-12 mb-8">$1</h1>')
      // Handle horizontal rules
      .replace(/^---$/gm, '<hr class="my-8 border-gray-300">')
      // Handle bold and italic
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-gray-700">$1</em>')
      // Handle links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">$1</a>')
      // Split into paragraphs
      .split('\n\n')
      .map(paragraph => {
        paragraph = paragraph.trim();
        if (!paragraph) return '';
        
        // Skip if already HTML
        if (paragraph.startsWith('<h') || paragraph.startsWith('<hr')) {
          return paragraph;
        }
        
        // Handle bullet points
        if (paragraph.includes('\n• ') || paragraph.includes('\n* ')) {
          const listItems = paragraph
            .split(/\n[•*] /)
            .filter(item => item.trim())
            .map(item => `<li class="mb-2">${item.replace(/^[•*] /, '')}</li>`)
            .join('');
          return `<ul class="list-disc list-inside space-y-2 my-6 text-gray-700">${listItems}</ul>`;
        }
        
        // Regular paragraph
        return `<p class="mb-6 text-gray-700 leading-relaxed">${paragraph}</p>`;
      })
      .join('');
  } catch (error) {
    console.error('Error reading markdown file:', error);
    content = `<p>Error loading content for post: ${slug}</p>`;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content - accessibility feature */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      {/* Simple, minimal navigation */}
      <nav className="w-full py-6 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Back Button */}
            <Link 
              href="/writings" 
              className="flex items-center text-gray-700 hover:text-black transition-colors font-normal"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Writings
            </Link>
            
            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <Link 
                href="/writings" 
                className="text-black font-normal"
              >
                Writings
              </Link>
              <Link 
                href="/reading" 
                className="text-gray-700 hover:text-black transition-colors font-normal"
              >
                Reading
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main id="main-content" className="px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-4">
              {postMetadata.title}
            </h1>
            <p className="text-gray-600 text-sm mb-8">
              {formatDate(postMetadata.date)} • {postMetadata.readTime}
            </p>
            <div 
              className="prose prose-lg max-w-none text-gray-700 font-normal leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content }} 
            />
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="px-6 md:px-12 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-500 text-center">
            © 2025 Abhi Raheja
          </p>
        </div>
      </footer>
    </div>
  );
}
