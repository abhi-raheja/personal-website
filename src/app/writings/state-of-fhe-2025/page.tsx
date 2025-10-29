'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SubscriptionForm from '@/components/SubscriptionForm';

export default function StateOfFHE2025Post() {
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
          {/* Subscribe Section - at the very top, above article */}
          <div className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-3">
              Subscribe to my posts
            </h2>
            <p className="text-sm text-gray-600 mb-6 font-normal">
              Get my latest writing delivered to your inbox.
            </p>
            <SubscriptionForm />
          </div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-none"
          >
            {/* Article Header */}
            <header className="mb-12">
              <h1 className="text-2xl md:text-3xl font-semibold text-black mb-4 leading-tight">
                State of FHE | 2025
              </h1>
              <div className="flex items-center text-gray-600 text-sm">
                <time dateTime="2025-08-09">August 9, 2025</time>
                <span className="mx-2">•</span>
                <span>7 min read</span>
              </div>
            </header>

            {/* Article Content */}
            <div className="text-gray-700 font-normal leading-relaxed space-y-6">
              <p className="text-base">
                Imagine being able to compute on secrets, without ever seeing them.
              </p>

              <p className="text-base">
                That's the magic of Fully Homomorphic Encryption (FHE), a cryptography technique that lets you process encrypted data as if it were unlocked. It's privacy's holy grail.
              </p>

              <h2 className="text-xl font-semibold text-black mt-8 mb-4">A Quick Explainer:</h2>

              <p className="text-base">
                Think of regular encryption as kind of a black box: you can store things 'securely', but to use them, you must unlock the box and take those things out.
              </p>

              <p className="text-base">
                FHE is like a magic box that lets you do computations (like execute smart contract functions, tally votes, or run algorithms), while the box itself stays sealed and data inside encrypted.
              </p>

              <p className="text-base">
                At its core, FHE allows two main tricks:
              </p>

              <p className="text-base">
                1/ Homomorphic addition: Encrypted(A) + Encrypted(B) = Encrypted(A+B)
              </p>

              <p className="text-base">
                2/ Homomorphic multiplication: Encrypted(A) × Encrypted(B) = Encrypted(A×B)
              </p>

              <p className="text-base">
                This means you can compute on encrypted numbers, and when you finally unlock the result, you get the answer as if you'd worked with the original data.
              </p>

              <h2 className="text-xl font-semibold text-black mt-8 mb-4">Why should we care?</h2>

              <p className="text-base">
                Stablecoins are taking off and the world's largest financial institutions and corporations are coming in. But big businesses don't want their competitors to see their day-to-day operations activity like who they're paying, how much and, when.
              </p>

              <p className="text-base">
                Hospitals want to share patient data with AI companies to train models that can help diagnose or cure life-threatening diseases, but cannot do so while upholding patient privacy.
              </p>

              <p className="text-base">
                Consumers apps want to outsource computations to powerful AI models in the cloud but do not want to give up user secrets.
              </p>

              <p className="text-base">
                FHE could make all this possible, from finance to machine learning.
              </p>

              <h2 className="text-xl font-semibold text-black mt-8 mb-4">So, Why isn't FHE Everywhere?</h2>

              <p className="text-base">
                Here's where our ongoing and future work lies:
              </p>

              <h3 className="text-lg font-semibold text-black mt-6 mb-3">1/ More theory, less applications.</h3>
              
              <p className="text-base">
                FHE schemes come in three main types: Boolean (good for comparisons), Modular Arithmetic (for integers), and Floating Point (for machine learning). Each has its own quirks and trade-offs, but there's little guidance on which to use. Choosing between them requires a cryptography PhD itself. Our team at <a href="https://sunscreen.tech" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Sunscreen</a> turns frontier FHE research into production-ready products, tooling, and infrastructure.
              </p>

              <h3 className="text-lg font-semibold text-black mt-6 mb-3">2/ Efficiency</h3>
              
              <p className="text-base">
                FHE is powerful, but slow (for now). Operations that are instant on normal data can take minutes or hours when encrypted. Multiplications, especially, are like trying to run in a suit of armor, each step adds "noise" to the data, and too much noise means you can't decrypt the result. Some schemes limit how many steps you can take before the noise drowns everything out. For <a href="https://sunscreen.tech" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Sunscreen</a>, it means focusing on FHE applications that are practical today and justify the added time and cost for high-value use cases.
              </p>

              <h3 className="text-lg font-semibold text-black mt-6 mb-3">3/ Usability</h3>
              
              <p className="text-base">
                Using FHE until a few years ago was like assembling a rocket from blueprints, every parameter matters, and the smallest mistake can send you off course. Libraries are complex, documentation is sparse, and you need a cryptography PhD just to get started. There was no "easy mode," until our Parasol Compiler and Secure Processing Framework (SPF) to write and deploy FHE programs.
              </p>

              <h2 className="text-xl font-semibold text-black mt-8 mb-4">What's Being Done?</h2>

              <div className="space-y-4">
                <p className="text-base">
                  <span className="font-semibold">✦ Net New Applications:</span> Apple is using already using homomorphic encryption on a billion devices for privacy-preserving live caller ID lookup and private information retrieval. This is a great example of focusing FHE applications on use cases that were simply not possible before.
                </p>

                <p className="text-base">
                  <span className="font-semibold">✦ Public Benchmarking:</span> Comprehensive, clear and nuanced evaluation of different schemes on equal footing to guide builders.
                </p>

                <p className="text-base">
                  <span className="font-semibold">✦ Standardization:</span> Efforts like the Privacy-Enhancing Cryptography project at NIST, and the Homomorphic Encryption Standardization consortium will be crucial in pave the way for standardization, especially crucial for highly regulated industries.
                </p>

                <p className="text-base">
                  <span className="font-semibold">✦ Hardware acceleration:</span> GPUs, FPGAs, and eventually ASICs will speed things up dramatically. <a href="https://sunscreen.tech" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Sunscreen's</a> FHE libraries and tooling is designed to leverage the most cutting-edge developments in both, hardware and software.
                </p>
              </div>
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

