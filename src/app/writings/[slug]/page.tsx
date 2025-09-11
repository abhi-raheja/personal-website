'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Post {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  content: string;
  contentHtml: string;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug as string;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;

      try {
        const response = await fetch(`/api/posts/${slug}`);
        if (response.ok) {
          const postData = await response.json();
          setPost(postData);
        } else if (response.status === 404) {
          setError('Post not found');
        } else {
          setError('Error loading post');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setError('Error loading post');
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-600 font-light">Loading...</div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-gray-900 mb-4">Post Not Found</h1>
          <Link href="/writings" className="text-gray-600 hover:text-black transition-colors duration-200">
            ← Back to all writings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-light tracking-wide">
              Your Name
            </Link>
            <div className="flex space-x-8">
              <Link 
                href="/about" 
                className="text-gray-600 hover:text-black transition-colors duration-200 font-light"
              >
                About
              </Link>
              <Link 
                href="/writings" 
                className="text-gray-600 hover:text-black transition-colors duration-200 font-light"
              >
                Writings
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Back Link */}
            <Link 
              href="/writings"
              className="inline-flex items-center text-gray-600 hover:text-black transition-colors duration-200 font-light"
            >
              ← Back to all writings
            </Link>

            {/* Article Header */}
            <header className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center space-x-4 text-gray-500 font-light">
                <span>{formatDate(post.date)}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </header>

            {/* Article Body */}
            <article className="prose prose-lg max-w-none">
              <div 
                className="space-y-6 text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />
            </article>

            {/* Footer Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="pt-12 border-t border-gray-200 flex justify-between items-center"
            >
              <Link 
                href="/writings"
                className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors duration-200 font-light"
              >
                ← All writings
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors duration-200 font-light"
              >
                About me →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
