'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function Writings() {
  const [posts, setPosts] = useState<PostMetadata[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/posts');
        if (response.ok) {
          const postsData = await response.json();
          setPosts(postsData);
        } else {
          console.error('Failed to fetch posts');
          setPosts([]);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-600 font-light">Loading...</div>
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
                className="text-black font-normal"
              >
                Writings
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Writings Content */}
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12"
          >
            {/* Page Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
                Writings
              </h1>
              <p className="text-xl text-gray-600 font-light max-w-2xl">
                Thoughts, ideas, and reflections on the things that matter to me.
              </p>
            </div>

            {/* Posts List */}
            <div className="space-y-8">
              {posts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 font-light">No posts yet. Check back soon!</p>
                </div>
              ) : (
                posts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                    className="group cursor-pointer border-b border-gray-100 pb-8 last:border-b-0"
                  >
                    <Link href={`/writings/${post.slug}`} className="block">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h2 className="text-2xl font-light text-gray-900 group-hover:text-gray-600 transition-colors duration-200">
                            {post.title}
                          </h2>
                          <span className="text-sm text-gray-400 font-light hidden sm:block">
                            {post.readTime}
                          </span>
                        </div>
                        <p className="text-gray-600 font-light leading-relaxed max-w-3xl">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400 font-light">
                            {formatDate(post.date)}
                          </span>
                          <span className="text-sm text-gray-400 font-light sm:hidden">
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))
              )}
            </div>

            {/* Coming Soon Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="pt-12 border-t border-gray-200"
            >
              <div className="text-center space-y-4">
                <h3 className="text-xl font-light text-gray-900">
                  More Coming Soon
                </h3>
                <p className="text-gray-600 font-light max-w-lg mx-auto">
                  I'm always working on new pieces. Each one takes time to craft thoughtfully, 
                  so check back regularly for fresh perspectives and ideas.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
