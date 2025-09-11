'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
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

      {/* Hero Section */}
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 leading-tight">
                Hello, I'm{' '}
                <span className="font-normal">Your Name</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl leading-relaxed">
                A brief, compelling description of who you are and what you do. 
                This should capture your essence in a few thoughtful words.
              </p>
            </div>

            {/* CTA Section */}
            <div className="pt-8 space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 text-base font-light text-white bg-black hover:bg-gray-800 transition-colors duration-200 rounded-sm"
                >
                  Learn more about me
                </Link>
                <Link
                  href="/writings"
                  className="inline-flex items-center px-6 py-3 text-base font-light text-black border border-gray-300 hover:border-gray-400 transition-colors duration-200 rounded-sm"
                >
                  Read my writings
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Featured Content Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-24 pt-12 border-t border-gray-200"
          >
            <h2 className="text-2xl font-light text-gray-900 mb-8">Latest Thoughts</h2>
            <div className="space-y-6">
              <article className="group cursor-pointer">
                <Link href="/writings/sample-post" className="block">
                  <div className="space-y-2">
                    <h3 className="text-lg font-normal text-gray-900 group-hover:text-gray-600 transition-colors duration-200">
                      Your First Blog Post Title
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      A brief preview of your blog post content. This should be engaging and give readers 
                      a taste of what they'll find when they click through to read more.
                    </p>
                    <p className="text-sm text-gray-400 font-light">
                      January 2025
                    </p>
                  </div>
                </Link>
              </article>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
