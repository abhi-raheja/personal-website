'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SubscriptionForm from '@/components/SubscriptionForm';

export default function PredictionMarketsPost() {
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
                Prediction Markets are Trending. Here's my Experience Building One.
              </h1>
              <div className="flex items-center text-gray-600 text-sm">
                <time dateTime="2025-09-25">September 25, 2025</time>
                <span className="mx-2">•</span>
                <span>8 min read</span>
              </div>
            </header>

            {/* Article Content */}
            <div className="text-gray-700 font-normal leading-relaxed space-y-6">
              <p className="text-base">
                Late 2023 to early 2024, I spent 6 months trying to build a prediction markets product. At its peak, we had about 600 users in beta.
              </p>

              <p className="text-base">
                It was called <a href="https://x.com/ariinaxyz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">@ariinaxyz</a>, and the idea was to embed prediction markets within users' Farcaster and eventually X feeds.
              </p>

              <p className="text-base">
                I failed miserably but here is what I learned:
              </p>

              <h2 className="text-xl font-semibold text-black mt-8 mb-4">The Fundamental Challenges</h2>

              <p className="text-base">
                Prediction markets have a few fundamental challenges that need to be solved before any decent product can take off:
              </p>

              <h3 className="text-lg font-semibold text-black mt-6 mb-3">a: Market Discovery</h3>
              
              <p className="text-base">
                One of the best growth hacks for attracting new users to a prediction market platform is to have the most relevant, and timely markets available for them to bet on. This is non-trivial and should be treated differently to listing of a new asset on a perp dex.
              </p>

              <p className="text-base">
                I pick relevance and timeliness because most user engagement on social platforms is tied to viral content; and attention, especially online, is ephemeral. Therefore the market discovery at the right time for the right person is almost as important as the existence of the market in the first place.
              </p>

              <h3 className="text-lg font-semibold text-black mt-6 mb-3">b: Market Creation</h3>
              
              <p className="text-base">
                The holy grail of prediction markets in the sense of 'wisdom of the crowds' is the ability of anyone anywhere in the world to create and seed a market to get answer to any question they desire. This is non-trivial as most performant solutions generally lead to liquidity fragmentation and market duplication.
              </p>

              <p className="text-base">
                The balance to let anyone create a market and to have the deepest, most liquid markets to deliver meaningful signal is tricky.
              </p>

              <h3 className="text-lg font-semibold text-black mt-6 mb-3">c: Bootstrapping Liquidity</h3>
              
              <p className="text-base">
                The classic critique of prediction markets has been that bootstrapping liquidity is the hardest part of building any successful platform. There have been many attempts to solve this problem both from a market design, as well as incentives and marketing angles.
              </p>

              <p className="text-base">
                I believe there is no singular correct approach and we shall continue to see a power law on most platforms where a few markets drive the majority of the volume and therefore fees for companies.
              </p>

              <h3 className="text-lg font-semibold text-black mt-6 mb-3">d: Resolution</h3>
              
              <p className="text-base">
                I believe the existing resolution mechanisms on most prediction markets is broken. We've all known of at least a few debates around UMA messing up a resolution, and Polymarket having to call their governor contract to resolve the market in a centralized manner.
              </p>

              <p className="text-base">
                I tend to believe that one of the biggest opportunity in prediction markets is in the oracle/resolution category.
              </p>

              <h3 className="text-lg font-semibold text-black mt-6 mb-3">e: Contextualization</h3>
              
              <p className="text-base">
                I am an idealist so it is difficult to see most of crypto twitter getting excited about the hyper-financialization aspect of prediction markets. However, I fell in love with them because of my experience and learnings as a former journalist.
              </p>

              <p className="text-base">
                I think prediction markets may be the most powerful tool we have available to pursue the closest version of truth - whether in business, politics, science or news. Ultimately, whoever gets to establish or define the truth on any given matter controls the narrative and therefore prediction markets can help immensely in taking that power away from corrupt media and politicians and give it back to the masses (ideally via crypto rails so there's true permissionless participation).
              </p>

              <p className="text-base">
                To that end, I believe one of the hardest challenges in prediction markets is to contextualize the participants' activity for others in a network.
              </p>

              <h2 className="text-xl font-semibold text-black mt-8 mb-4">Ariina's Core Idea</h2>

              <p className="text-base">
                Ariina's core idea was to show other people's participation, rate of winnings and whether they're putting their money where their mouth is (literally right under every social post), so we all can decide for ourselves whether to trust that person or not.
              </p>

              <h2 className="text-xl font-semibold text-black mt-8 mb-4">The AI Agent Opportunity</h2>

              <p className="text-base">
                With AI agents, the design space to extend and improve existing prediction market platforms is only just beginning. Like most problems in the world, all of the above challenges for prediction markets are also, in one way, a coordination problem.
              </p>

              <p className="text-base">
                Most solutions try to solve these coordination problems by simply working on deeper, more attractive incentives, however I think these efforts are directionally ill-informed. Because AI agents have a completely different set of values and one could argue that they don't value the financial incentives in the same way that us humans do, there is an opportunity to tackle the market discovery, creation, resolution, liquidity and contextualization problems in a way that has much more efficient coordination mechanisms.
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
