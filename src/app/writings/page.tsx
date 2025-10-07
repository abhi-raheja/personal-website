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
  externalLink?: string;
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
    // For static export, we'll use hardcoded sample data
    const samplePosts = [
      {
        slug: 'prediction-markets-are-trending-heres-my-experience',
        title: 'Prediction Markets are Trending. Here\'s my Experience Building One.',
        excerpt: 'Late 2023 to early 2024, I spent 6 months trying to build a prediction markets product called Ariina. At its peak, we had about 600 users in beta. I failed miserably but here is what I learned about market discovery, creation, liquidity, resolution, and contextualization.',
        date: '2025-09-25',
        readTime: '8 min read'
      },
      {
        slug: 'the-biggest-challenge-facing-llms',
        title: 'The Biggest Challenge Facing LLMs',
        excerpt: 'One thing that\'s common among recent statements by leads of all top AI labs is that they\'ve used all the publicly available data for training frontier models. The next frontier is private, proprietary data.',
        date: '2025-09-19',
        readTime: '4 min read'
      },
      {
        slug: 'why-im-excited-about-morpho-on-base',
        title: 'Why I\'m excited about Morpho on Base',
        excerpt: 'I recently learned that Coinbase lets you borrow money using Bitcoin as collateral (powered by Morpho). This led me down the Morpho rabbit hole and I was surprised to learn that there\'s a lot I didn\'t know about them.',
        date: '2025-09-03',
        readTime: '5 min read'
      },
      {
        slug: 'jevons-paradox-and-fhe',
        title: 'Jevon\'s Paradox and FHE',
        excerpt: 'Jevon\'s paradox is an economic principle that states that when technological advancements increase the efficiency with which a resource is used, the overall consumption of that resource may increase rather than decrease. I believe we\'re witnessing something similar with FHE.',
        date: '2025-08-21',
        readTime: '3 min read'
      },
      {
        slug: 'what-i-like-and-dont-like-about-circles-new-blockchain-arc',
        title: 'What I like and Don\'t like about Circle\'s new blockchain Arc',
        excerpt: 'I read the Arc litepaper so you don\'t have to. When my friend Sanket and his cracked team joined Circle a few months back, I knew something new was coming. Well, now Arc is here and here\'s what stands out for me.',
        date: '2025-08-13',
        readTime: '6 min read'
      },
      {
        slug: 'state-of-fhe-2025',
        title: 'State of FHE | 2025',
        excerpt: 'Imagine being able to compute on secrets, without ever seeing them. That\'s the magic of Fully Homomorphic Encryption (FHE), a cryptography technique that lets you process encrypted data as if it were unlocked. It\'s privacy\'s holy grail.',
        date: '2025-08-09',
        readTime: '7 min read'
      },
      {
        slug: 'the-price-i-paid-for-a-university-degree',
        title: 'The Price I Paid for a University Degree',
        excerpt: 'A personal story about family, sacrifice, and the true cost of education. On March 27, 2017, I sat facing my father in our living room during an evening that would alter the course of my life.',
        date: '2021-03-09',
        readTime: '7 min read',
        externalLink: 'https://abhihereandnow.medium.com/the-price-i-paid-for-a-university-degree-f9a04d4eae69'
      },
      // Add new posts here - example:
      // {
      //   slug: 'your-new-post-slug',
      //   title: 'Your New Post Title',
      //   excerpt: 'A brief description of what this post is about...',
      //   date: '2025-01-15', // YYYY-MM-DD format
      //   readTime: '5 min read',
      //   externalLink: 'https://your-external-link.com/post' // Optional: for external links
      // },
    ];
    
    setPosts(samplePosts);
    setLoading(false);
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
              href="/" 
              className="flex items-center text-gray-700 hover:text-black transition-colors font-normal"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16"
          >
            {/* Page Title */}
            <h1 className="text-xl md:text-2xl font-semibold text-black mb-8">
              Writings
            </h1>
            <p className="text-base text-gray-700 font-normal leading-relaxed mb-8 max-w-2xl">
              Musings, jumbled thoughts, commentary and thought experiments in no particular order.
            </p>
          </motion.div>

          {/* Posts List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="space-y-6">
              {posts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 font-normal">No posts yet. Check back soon!</p>
                </div>
              ) : (
                posts.map((post, index) => (
                  <div key={post.slug} className="group">
                    {post.externalLink ? (
                      <a 
                        href={post.externalLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block hover:bg-gray-50 -mx-4 px-4 py-3 rounded-sm transition-colors border-l-2 border-transparent hover:border-gray-300 cursor-pointer"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-normal text-black group-hover:text-gray-800 transition-colors underline underline-offset-4 decoration-gray-300 hover:decoration-gray-600">
                            {post.title}
                          </h3>
                          <svg className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">
                          {formatDate(post.date)} • {post.readTime}
                        </p>
                        <p className="text-gray-700 font-normal leading-relaxed">
                          {post.excerpt}
                        </p>
                      </a>
                    ) : (
                      <Link href={`/writings/${post.slug}`} className="block hover:bg-gray-50 -mx-4 px-4 py-3 rounded-sm transition-colors border-l-2 border-transparent hover:border-gray-300 cursor-pointer">
                        <h3 className="text-lg font-normal text-black group-hover:text-gray-800 transition-colors underline underline-offset-4 decoration-gray-300 hover:decoration-gray-600 mb-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">
                          {formatDate(post.date)} • {post.readTime}
                        </p>
                        <p className="text-gray-700 font-normal leading-relaxed">
                          {post.excerpt}
                        </p>
                      </Link>
                    )}
                  </div>
                ))
              )}
            </div>
          </motion.div>


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
