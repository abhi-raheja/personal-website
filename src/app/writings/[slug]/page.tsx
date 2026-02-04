import Link from 'next/link';
import { Metadata } from 'next';
import { getWritingsPosts, getWritingsPostBySlug } from '@/lib/notion';
import postsData from '@/data/posts.json';
import fs from 'fs';
import path from 'path';
import SubscriptionForm from '@/components/SubscriptionForm';

// Revalidate every 60 seconds to pick up Notion changes
export const revalidate = 60;

// Generate static params for all posts (both markdown and Notion)
export async function generateStaticParams() {
  try {
    const notionPosts = await getWritingsPosts();
    const markdownSlugs = postsData.map((post) => post.slug);
    const notionSlugs = notionPosts.map((post) => post.slug);

    // Combine unique slugs
    const allSlugs = [...new Set([...markdownSlugs, ...notionSlugs])];

    return allSlugs.map((slug) => ({ slug }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return postsData.map((post) => ({ slug: post.slug }));
  }
}

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

// Check if a markdown file exists for this slug
function markdownPostExists(slug: string): boolean {
  const filePath = path.join(process.cwd(), 'content', 'posts', `${slug}.md`);
  return fs.existsSync(filePath);
}

// Get markdown post content
function getMarkdownPost(slug: string): { metadata: any; contentHtml: string } | null {
  try {
    const filePath = path.join(process.cwd(), 'content', 'posts', `${slug}.md`);
    const markdownContent = fs.readFileSync(filePath, 'utf8');

    // Extract frontmatter and content
    const contentMatch = markdownContent.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);

    if (!contentMatch) return null;

    // Parse frontmatter
    const frontmatter = contentMatch[1];
    const metadata: any = {};
    frontmatter.split('\n').forEach(line => {
      const match = line.match(/^(\w+):\s*"?([^"]*)"?$/);
      if (match) {
        metadata[match[1]] = match[2];
      }
    });

    const rawContent = contentMatch[2].trim();

    // Remove a leading H1 heading to avoid duplicate titles
    const contentWithoutLeadingH1 = rawContent.replace(/^#\s+[^\n]+\n+/, '');

    // Convert markdown to HTML (content from user's own markdown files - trusted source)
    const contentHtml = contentWithoutLeadingH1
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">$1</h3>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-6">$1</h2>')
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-gray-900 mt-12 mb-8">$1</h1>')
      .replace(/^---$/gm, '<hr class="my-8 border-gray-300">')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-gray-700">$1</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">$1</a>')
      .split('\n\n')
      .map(paragraph => {
        paragraph = paragraph.trim();
        if (!paragraph) return '';
        if (paragraph.startsWith('<h') || paragraph.startsWith('<hr')) return paragraph;
        if (paragraph.includes('\n• ') || paragraph.includes('\n* ')) {
          const listItems = paragraph
            .split(/\n[•*] /)
            .filter(item => item.trim())
            .map(item => `<li class="mb-2">${item.replace(/^[•*] /, '')}</li>`)
            .join('');
          return `<ul class="list-disc list-inside space-y-2 my-6 text-gray-700">${listItems}</ul>`;
        }
        return `<p class="mb-6 text-gray-700 leading-relaxed">${paragraph}</p>`;
      })
      .join('');

    return { metadata, contentHtml };
  } catch (error) {
    console.error('Error reading markdown file:', error);
    return null;
  }
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;

  // Try markdown first
  const markdownData = postsData.find((post) => post.slug === slug);
  if (markdownData) {
    const postUrl = `https://abhiraheja.com/writings/${slug}/`;
    return {
      title: markdownData.title,
      description: markdownData.excerpt,
      openGraph: {
        title: markdownData.title,
        description: markdownData.excerpt,
        url: postUrl,
        siteName: "Abhi Raheja",
        images: [{ url: "https://abhiraheja.com/social-preview.jpg", width: 1200, height: 630, alt: `${markdownData.title} - Abhi Raheja` }],
        locale: "en_US",
        type: "article",
        publishedTime: markdownData.date,
      },
      twitter: {
        card: "summary_large_image",
        title: markdownData.title,
        description: markdownData.excerpt,
        images: ["https://abhiraheja.com/social-preview.jpg"],
      },
    };
  }

  // Try Notion
  const notionPost = await getWritingsPostBySlug(slug);
  if (notionPost) {
    const postUrl = `https://abhiraheja.com/writings/${slug}/`;
    return {
      title: notionPost.title,
      description: notionPost.excerpt,
      openGraph: {
        title: notionPost.title,
        description: notionPost.excerpt,
        url: postUrl,
        siteName: "Abhi Raheja",
        images: [{ url: "https://abhiraheja.com/social-preview.jpg", width: 1200, height: 630, alt: `${notionPost.title} - Abhi Raheja` }],
        locale: "en_US",
        type: "article",
        publishedTime: notionPost.date,
      },
      twitter: {
        card: "summary_large_image",
        title: notionPost.title,
        description: notionPost.excerpt,
        images: ["https://abhiraheja.com/social-preview.jpg"],
      },
    };
  }

  return {
    title: 'Post Not Found',
    description: 'The requested blog post could not be found.',
  };
}

function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;

  // Try markdown first (for existing posts)
  const markdownMeta = postsData.find((post) => post.slug === slug);
  if (markdownMeta && markdownPostExists(slug)) {
    const markdownPost = getMarkdownPost(slug);
    if (markdownPost) {
      return (
        <div className="min-h-screen bg-white">
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded z-50">
            Skip to main content
          </a>

          <nav className="w-full py-6 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center">
                <Link href="/writings" className="flex items-center text-gray-700 hover:text-black transition-colors font-normal">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Writings
                </Link>
                <div className="flex items-center space-x-8">
                  <Link href="/writings" className="text-black font-normal">Writings</Link>
                  <Link href="/journal" className="text-gray-700 hover:text-black transition-colors font-normal">Journal</Link>
                  <Link href="/reading" className="text-gray-700 hover:text-black transition-colors font-normal">Reading</Link>
                </div>
              </div>
            </div>
          </nav>

          <main id="main-content" className="px-6 md:px-12 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 pb-8 border-b border-gray-200">
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-3">Subscribe to my posts</h2>
                <p className="text-sm text-gray-600 mb-6 font-normal">Get my latest writing delivered to your inbox.</p>
                <SubscriptionForm />
              </div>

              <div className="mb-16">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-4">{markdownMeta.title}</h1>
                <p className="text-gray-600 text-sm mb-8">{formatDate(markdownMeta.date)} • {markdownMeta.readTime}</p>
                {/* Content from user's own markdown files - trusted source */}
                <div className="prose prose-lg max-w-none text-gray-700 font-normal leading-relaxed" dangerouslySetInnerHTML={{ __html: markdownPost.contentHtml }} />
              </div>
            </div>
          </main>

          <footer className="px-6 md:px-12 py-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm text-gray-500 text-center">© 2025 Abhi Raheja</p>
            </div>
          </footer>
        </div>
      );
    }
  }

  // Try Notion
  const notionPost = await getWritingsPostBySlug(slug);
  if (notionPost) {
    return (
      <div className="min-h-screen bg-white">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded z-50">
          Skip to main content
        </a>

        <nav className="w-full py-6 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
              <Link href="/writings" className="flex items-center text-gray-700 hover:text-black transition-colors font-normal">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Writings
              </Link>
              <div className="flex items-center space-x-8">
                <Link href="/writings" className="text-black font-normal">Writings</Link>
                <Link href="/journal" className="text-gray-700 hover:text-black transition-colors font-normal">Journal</Link>
                <Link href="/reading" className="text-gray-700 hover:text-black transition-colors font-normal">Reading</Link>
              </div>
            </div>
          </div>
        </nav>

        <main id="main-content" className="px-6 md:px-12 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 pb-8 border-b border-gray-200">
              <h2 className="text-xl md:text-2xl font-semibold text-black mb-3">Subscribe to my posts</h2>
              <p className="text-sm text-gray-600 mb-6 font-normal">Get my latest writing delivered to your inbox.</p>
              <SubscriptionForm />
            </div>

            <div className="mb-16">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-4">{notionPost.title}</h1>
              <p className="text-gray-600 text-sm mb-8">{formatDate(notionPost.date)} • {notionPost.readTime}</p>
              {/* Content from user's own Notion database - trusted source */}
              <div className="prose prose-lg max-w-none text-gray-700 font-normal leading-relaxed" dangerouslySetInnerHTML={{ __html: notionPost.contentHtml }} />
            </div>
          </div>
        </main>

        <footer className="px-6 md:px-12 py-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-gray-500 text-center">© 2025 Abhi Raheja</p>
          </div>
        </footer>
      </div>
    );
  }

  // Post not found
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Post not found</h1>
        <Link href="/writings" className="text-blue-600 hover:text-blue-800 underline">Back to Writings</Link>
      </div>
    </div>
  );
}
