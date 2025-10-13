'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
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
                className="text-black font-normal"
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

      {/* About Content */}
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
                About Me
              </h1>
              <p className="text-xl text-gray-600 font-light max-w-2xl">
                A little more about who I am, what I do, and what drives me.
              </p>
            </div>

            {/* Main Content */}
            <div className="space-y-8 max-w-3xl">
              <div className="space-y-6">
                <h2 className="text-2xl font-light text-gray-900">Hello, I'm [Your Name]</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Welcome to my personal space on the internet. This is where I share my thoughts, 
                    ideas, and the various projects I'm working on. I believe in the power of 
                    thoughtful writing and meaningful conversations.
                  </p>
                  <p>
                    [Add your personal story here. Tell visitors about your background, interests, 
                    what you're passionate about, and what they can expect to find on your website.]
                  </p>
                  <p>
                    [Include another paragraph about your current focus, goals, or what you're 
                    exploring these days. Make it personal and authentic.]
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-light text-gray-900">What I Write About</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    My writings cover a range of topics that fascinate me. You'll find pieces on 
                    [mention your main topics of interest - could be technology, philosophy, 
                    creativity, personal development, etc.].
                  </p>
                  <p>
                    I believe in writing that makes you think, challenges assumptions, and 
                    explores ideas from different angles. Each piece is crafted with care and 
                    intended to spark meaningful dialogue.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-light text-gray-900">Let's Connect</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    I'm always interested in connecting with thoughtful people. Whether you want 
                    to discuss ideas, share feedback on something I've written, or just say hello, 
                    I'd love to hear from you.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <a 
                      href="mailto:your.email@example.com" 
                      className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors duration-200 font-light"
                    >
                      Email
                    </a>
                    <span className="text-gray-300">•</span>
                    <a 
                      href="https://twitter.com/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors duration-200 font-light"
                    >
                      Twitter
                    </a>
                    <span className="text-gray-300">•</span>
                    <a 
                      href="https://linkedin.com/in/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors duration-200 font-light"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="pt-12 border-t border-gray-200"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-light text-gray-900">
                  Ready to explore my thoughts?
                </h3>
                <Link
                  href="/writings"
                  className="inline-flex items-center px-6 py-3 text-base font-light text-white bg-black hover:bg-gray-800 transition-colors duration-200 rounded-sm"
                >
                  Read my writings
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
