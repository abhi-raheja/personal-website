'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MorphoPost() {
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
                Why I'm excited about Morpho on Base
              </h1>
              <div className="flex items-center text-gray-600 text-sm mb-6">
                <time dateTime="2025-09-03">September 3, 2025</time>
                <span className="mx-2">•</span>
                <span>5 min read</span>
              </div>
            </header>

            {/* Article Content */}
            <div className="text-gray-700 font-normal leading-relaxed space-y-6">
              <p className="text-base">
                I recently learned that Coinbase lets you borrow money using Bitcoin as collateral (powered by Morpho).
              </p>

              <p className="text-base">
                This led me down the Morpho rabbit hole and I was surprised to learn that there's a lot I didn't know about them.
              </p>

              <p className="text-base">
                Morpho is basically a coordination platform for lenders and borrowers. Think of it like a big, open pool of money on the blockchain. Different companies and people can participate on the platform to lend and borrow money.
              </p>

              <p className="text-base">
                In the case of Coinbase, instead of building out their own lending/borrowing product, they simply wrap your Bitcoin into a special token, send it to Morpho, borrow US dollars from Morpho, and give you the money.
              </p>

              <p className="text-base">
                This allows Coinbase to:
              </p>

              <p className="text-base">
                1/ Offer better interest rates because Morpho connects lots of lenders and borrowers, so there's more money available.
              </p>

              <p className="text-base">
                2/ Offer this new lending service without having to build out their own system (composability), and
              </p>

              <p className="text-base">
                3/ not require a full banking license to offer lending (which it doesn't have and would be expensive to get).
              </p>

              <p className="text-base">
                This is way more significant than it appears on the surface.
              </p>

              <p className="text-base">
                In my case, I remember specifically how hard it was to get an education loan in India, despite having admission offers and scholarships from amazing universities.
              </p>

              <p className="text-base">
                This insight and my new learnings about Morpho led me to realize that we're really just witnessing the first innings of what Morpho and similar DeFi products will do (in terms of impact), especially in the developing world.
              </p>

              <h2 className="text-xl font-semibold text-black mt-8 mb-4">Tokenization</h2>

              <p className="text-base">
                The Coinbase lending product is great, but how many people own bitcoin?
              </p>

              <p className="text-base">
                Imagine, being able to borrow money against your stocks, gold or any other tokenized commodity.
              </p>

              <p className="text-base">
                Imagine a world where your social reputation, intellectual property, carbon credits, or even owning a limited-edition pair of Air Force 1s allows you to access low-interest capital. Think of the doors that it would open for people in the developing countries. That opportunity to give your dream business a shot, or get an education pulling your family out of poverty, or building your dream home.
              </p>

              <p className="text-base">
                Morpho enables that.
              </p>

              <p className="text-base">
                This is what crypto/blockchains/web3 is all about. It is about rebuilding the financial system to be inclusive and equitable for all, everywhere.
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
