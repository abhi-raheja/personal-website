'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Post {
  title: string;
  date: string;
  readTime: string;
  content: string;
}

interface BlogPostClientProps {
  slug: string;
}

export default function BlogPostClient({ slug }: BlogPostClientProps) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPost() {
      try {
        // For now, we'll load a basic post structure
        // In production, the content would be pre-generated at build time
        const postsModule = await import('@/data/posts.json');
        const posts = postsModule.default;
        const postMetadata = posts.find((p: any) => p.slug === slug);
        
        if (!postMetadata) {
          throw new Error('Post not found');
        }

        // For now, we'll show a placeholder content
        // In production, this would be the actual markdown content
        setPost({
          title: postMetadata.title,
          date: postMetadata.date,
          readTime: postMetadata.readTime,
          content: `<p>This post is available in the markdown file: <code>content/posts/${slug}.md</code></p>
                   <p>The full markdown rendering system will be available once the build system is properly configured.</p>
                   <p><strong>Title:</strong> ${postMetadata.title}</p>
                   <p><strong>Excerpt:</strong> ${postMetadata.excerpt}</p>`,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load post');
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      loadPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white">
        <nav className="w-full py-6 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/writings" 
              className="flex items-center text-gray-700 hover:text-black transition-colors font-normal"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Writings
            </Link>
          </div>
        </nav>
        <div className="px-6 md:px-12 py-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">{error}</p>
            <Link 
              href="/writings"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Return to Writings
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
                className="text-gray-700 hover:text-black transition-colors font-normal"
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
      <main id="main-content" className="px-6 md:px-12 py-8">
        <div className="max-w-3xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Article Header */}
            <header className="mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center text-gray-600 text-sm">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </header>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-em:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <Link 
                  href="/writings"
                  className="text-gray-600 hover:text-black transition-colors font-normal underline underline-offset-4"
                >
                  ← Back to all writings
                </Link>
                
                <div className="flex items-center space-x-4">
                  {/* Share buttons could go here */}
                </div>
              </div>
            </footer>
          </motion.article>
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
