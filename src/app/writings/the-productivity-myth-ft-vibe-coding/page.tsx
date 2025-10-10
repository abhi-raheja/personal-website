'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function TheProductivityMythFtVibeCoding() {
  const [content, setContent] = useState('');

  useEffect(() => {
    // In a real app, you'd fetch this from your markdown file
    // For now, we'll include the content directly
    setContent(`
Lately, I've been building small apps using Cursor. It's been oddly satisfying. I guess the kids call it 'vibe coding,' when you speak to the app (using wispr) and describe (to it) what you want and watch (it) spin your thought into existence. It's really fun. However, something strange started happening to me recently that I couldn't ignore.

The moment I hit enter and Cursor starts generating, my hand automatically reaches for my phone. Or I open X. Within seconds, I'm scrolling through tweets about things that have nothing to do with what I'm building. It's kind of a reflex.

My definition of productivity has always been about maximizing output. Something like, more output per unit of time. But this workflow, where AI writes as I wait (actually doomscroll), while technically makes me more productive, makes me feel somewhat uneasy. 

It's weird, even when I'm doing more work, it's not necessarily more focused work. 

There's something unsettling about those 30 seconds between instruction and output. The void feels expensive. So I fill it, with distraction. The irony is that the more powerful these tools become, I feel weaker, not stronger, in my capacity to be with and think for myself. I feel like I am no longer optimizing for results, instead just to get the task done. This reminds me of how TikTok makes me feel (I do not use it btw). But I see how it has trained all my friends' brains for micro-dopamine. I think Cursor may be training me (us?) for micro-dopamine at work. Actually, when you think about it, this might be the next stage of the same attention economy that sucked the soul out of 'leisure time,' now creeping into our knowledge work and creative process. 

In the past, waiting was part of the craft. A render took time. A compile took time. Thinking took time. Now, waiting feels like failure.
    `);
  }, []);

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
                The Productivity Myth (ft. Vibe Coding)
              </h1>
              
              <div className="flex items-center text-gray-600 text-sm">
                <time dateTime="2025-10-10">October 10, 2025</time>
                <span className="mx-2">•</span>
                <span>3 min read</span>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-800 font-normal leading-relaxed mb-6">
                  {paragraph.trim()}
                </p>
              ))}
            </div>

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
