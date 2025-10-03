'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content - accessibility feature like nikunjk.com */}
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
            <Link href="/" className="text-lg font-normal tracking-tight hover:text-gray-600 transition-colors">
              Abhi Raheja
            </Link>
            <div className="flex items-center space-x-8">
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-black transition-colors font-normal"
              >
                About
              </Link>
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

      {/* Main Content - nikunjk.com style */}
      <main id="main-content" className="px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Large Name Header - like "Nikunj Kothari" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black text-white mb-4 leading-tight">
              Abhi Raheja
            </h1>
            
            {/* Location with check-in icon */}
            <div className="flex items-center text-gray-600  mb-8">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span className="text-sm font-normal">Montreal, QC</span>
            </div>
          </div>
          
          {/* Professional tagline */}
          <div className="mb-16">
            <p className="text-lg md:text-xl text-gray-700  font-normal leading-relaxed max-w-3xl">
              COO at <a href="https://www.sunscreen.tech" target="_blank" rel="noopener noreferrer" className="hover:text-black  transition-colors underline underline-offset-4">Sunscreen</a>. Former journalist, founder and operator passionate about freedom and high-impact technology.
            </p>
            <p className="text-base text-gray-600  font-normal mt-4">
              Previously at Cyber, Caldera and Goodable.
            </p>
          </div>
          </motion.div>

          {/* Recent Writing Section - nikunjk.com style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-normal text-black text-white mb-8">
              Recent Writing
            </h2>
            
            <div className="space-y-6">
              <div className="group">
                <Link href="/writings/sample-post" className="block hover:bg-gray-50 hover:bg-gray-800 -mx-4 px-4 py-3 rounded-sm transition-colors">
                  <h3 className="text-lg font-normal text-black text-white group-hover:text-gray-600 group-hover: transition-colors mb-2">
                    Your First Blog Post Title
                  </h3>
                  <p className="text-gray-600  text-sm">
                    January 2025
                  </p>
                </Link>
              </div>
              
              <div className="group">
                <Link href="/writings" className="block hover:bg-gray-50 hover:bg-gray-800 -mx-4 px-4 py-3 rounded-sm transition-colors">
                  <h3 className="text-lg font-normal text-black text-white group-hover:text-gray-600 group-hover: transition-colors mb-2">
                    Another Blog Post
                  </h3>
                  <p className="text-gray-600  text-sm">
                    December 2024
                  </p>
                </Link>
              </div>
            </div>
            
            <div className="mt-6">
              <Link 
                href="/writings" 
                className="text-gray-600  hover:text-black  transition-colors font-normal underline underline-offset-4"
              >
                View all writings
              </Link>
            </div>
          </motion.div>

          {/* Currently Reading Section - compact version */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-normal text-black text-white mb-4">
              Currently Reading
            </h2>
            <p className="text-gray-600  text-sm mb-6">
              Books I've met and like to revisit often.
            </p>
            
            <div className="space-y-3">
              <p className="text-gray-700  hover:text-black  transition-colors">
                <a href="https://www.amazon.com/Network-State-How-Start-Country/dp/1736721398" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  The Network State
                </a>
                <span className="text-gray-500  text-sm ml-2">— Balaji Srinivasan</span>
              </p>
              
              <p className="text-gray-700  hover:text-black  transition-colors">
                <a href="https://www.amazon.com/Tao-Te-Ching-Lao-Tzu/dp/0061142662" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  Tao Te Ching
                </a>
                <span className="text-gray-500  text-sm ml-2">— Lao Tzu</span>
              </p>
              
              <p className="text-gray-700  hover:text-black  transition-colors">
                <a href="https://www.amazon.com/Creative-Act-Way-Being/dp/0593652886" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  The Creative Act
                </a>
                <span className="text-gray-500  text-sm ml-2">— Rick Rubin</span>
              </p>
            </div>
            
            <div className="mt-6">
              <Link 
                href="/reading" 
                className="text-gray-600  hover:text-black  transition-colors font-normal underline underline-offset-4"
              >
                View all books
              </Link>
            </div>
          </motion.div>

          {/* Contact Section - nikunjk.com style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-normal text-black text-white mb-6">
              Connect
            </h2>
            <div className="space-y-3">
              <p className="text-gray-700  font-normal">
                <Link 
                  href="mailto:a@earlyasaservice.com" 
                  className="hover:text-black  transition-colors underline underline-offset-4"
                >
                  Email
                </Link>
              </p>
              
              {/* Social Links */}
              <div className="flex flex-wrap gap-6">
                <Link 
                  href="https://x.com/abhihereandnow" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700  hover:text-black  transition-colors underline underline-offset-4"
                >
                  X
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/abhiraheja" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700  hover:text-black  transition-colors underline underline-offset-4"
                >
                  LinkedIn
                </Link>
                <Link 
                  href="https://github.com/abhiraheja" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700  hover:text-black  transition-colors underline underline-offset-4"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Footer - minimal like nikunjk.com */}
          <footer className="border-t border-gray-200 border-gray-700 pt-8 mt-16">
            <p className="text-sm text-gray-500 ">
              Made in Montreal
            </p>
          </footer>

        </div>
      </main>
    </div>
  );
}
