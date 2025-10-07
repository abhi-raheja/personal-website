'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LLMsChallengePost() {
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
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-none"
          >
            {/* Article Header */}
            <header className="mb-12">
              <h1 className="text-2xl md:text-3xl font-semibold text-black mb-4 leading-tight">
                The Biggest Challenge Facing LLMs
              </h1>
              <div className="flex items-center text-gray-600 text-sm mb-6">
                <time dateTime="2025-09-19">September 19, 2025</time>
                <span className="mx-2">•</span>
                <span>4 min read</span>
              </div>
            </header>

            {/* Article Content */}
            <div className="text-gray-700 font-normal leading-relaxed space-y-6">
              <p className="text-base">
                One thing that's common among recent statements by leads of all top AI labs is that they've used all the publicly available data for training frontier models.
              </p>

              <p className="text-base">
                imo the next frontier is private, proprietary data.
              </p>

              <p className="text-base">
                in the short term, bespoke deals may work (see softbank x openai) but in the long term we're going to need:
              </p>

              <ol className="list-decimal list-inside space-y-2 text-base">
                <li>an economic solution, and</li>
                <li>a tech solution</li>
              </ol>

              <p className="text-base">
                crypto is going to be the top contender to solve for both of these.
              </p>

              <p className="text-base">
                by tokenizing ip, using TEEs and even through multi-server approaches like MPCs - we will see a lot of new capabilities that will address the challenges of monetization of private data for enterprises who own it with reasonably low leakage and trust guarantees.
              </p>

              <p className="text-base">
                however, my bull case for quantum computers is ~5 years. There will be a industry-wide frenzy to switch over to quantum-secure cryptography and verifiable computation techniques. Fully Homomorphic Encryption (FHE) will likely be the top contender here.
              </p>
            </div>
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
