'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function JevonsParadoxFHEPost() {
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
                Jevon's Paradox and FHE
              </h1>
              <div className="flex items-center text-gray-600 text-sm mb-6">
                <time dateTime="2025-08-21">August 21, 2025</time>
                <span className="mx-2">•</span>
                <span>3 min read</span>
              </div>
            </header>

            {/* Article Content */}
            <div className="text-gray-700 font-normal leading-relaxed space-y-6">
              <p className="text-base">
                Jevon's paradox is an economic principle that states that when technological advancements increase the efficiency with which a resource is used, the overall consumption of that resource may increase rather than decrease.
              </p>

              <p className="text-base">
                For example, in making cars more fuel-efficient, we are practically lowering the cost per mile, which results in people actually driving more.
              </p>

              <p className="text-base">
                What's interesting is that the increased efficiency makes the resource cheaper and more accessible, leading to new applications and higher demand that can outpace the efficiency gains.
              </p>

              <p className="text-base">
                I believe we're in the first innings of witnessing something similar with respect to Fully Homomorphic Encryption (FHE).
              </p>

              <p className="text-base">
                In the next 6 months, we're going to see the first revenue-generating, business application of FHE, solving a real pain point for crypto companies that is costing them hundreds of millions of dollars annually. Although this application will be specific and what some may call 'niche', it will be scalable - potentially worth tens of millions in revenue.
              </p>

              <p className="text-base">
                This productization of FHE will allow us to further unlock more performance gains and cost savings (even fund specialized hardware) to make FHE overall more performant. All of which ultimately will allow us to further deploy FHE in more new applications, solving other bigger real-world problems that are too performance or cost-sensitive today.
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

