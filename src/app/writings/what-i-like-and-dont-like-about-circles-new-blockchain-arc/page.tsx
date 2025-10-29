'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SubscriptionForm from '@/components/SubscriptionForm';

export default function CircleArcPost() {
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
                What I like and Don't like about Circle's new blockchain Arc
              </h1>
              <div className="flex items-center text-gray-600 text-sm">
                <time dateTime="2025-08-13">August 13, 2025</time>
                <span className="mx-2">•</span>
                <span>6 min read</span>
              </div>
            </header>

            {/* Article Content */}
            <div className="text-gray-700 font-normal leading-relaxed space-y-6">
              <p className="text-base">
                I read the Arc litepaper so you don't have to.
              </p>

              <p className="text-base">
                When my friend Sanket_Jain_ and his cracked team joined circle a few months back, I knew something new was coming.
              </p>

              <p className="text-base">
                Well, now Arc is here and here's what stands out for me in this launch 🧵👇
              </p>

              <p className="text-base">
                First of all, yes you heard that right: Arc is circle's new Layer-1 blockchain, that is focused on building *regulated* financial apps & services with stablecoins. w/ Arc, they want to combine the programmability of smart contracts and the enforceability of law (GENIUS Act).
              </p>

              <p className="text-base">
                I'm going to skip the part about whether this could be an L2 and that entire discussion. There are plenty of brilliant speculators on CT who can do a better job at that than me. However, I do find some really *interesting* design choices that I think are worth talking about.
              </p>

              <p className="text-base">
                But before we talk about design and feature set, it's worth wondering why a blockchain in the first place?
              </p>

              <ul className="list-disc list-inside space-y-2 text-base">
                <li>If the 'yield on T-bills' biz model was as good as it seemed as per the public markets, and the Coinbase deal was working as intended, this just seems changing course, no?</li>
                <li>is this the end of the fat protocol era? are we back to distribution is king? If yes, what happens to the base x circle deal?</li>
              </ul>

              <p className="text-base">
                btw no hate on changing course, in fact I respect biz leaders who are pragmatic. But if arc is now going to build a blockchain ecosystem, I would love to see more open comms on ecosystem decisions to build trust with builders.
              </p>

              <p className="text-base">
                Anywho - let's get back to what's underneath Arc:
              </p>

              <p className="text-base">
                Acc. to the litepaper, Arc's three pillars are:
              </p>

              <ul className="list-disc list-inside space-y-2 text-base">
                <li>Deterministic, sub-second finality with a *permissioned* consensus engine.</li>
                <li>Opt-in privacy for compliance and auditor-friendliness.</li>
                <li>Stablecoins (USDC and others via paymaster in the future) as network gas currency for predictable costs for enterprises</li>
              </ul>

              <p className="text-base">
                Initial design highlights:
              </p>
              <ul className="list-disc list-inside space-y-1 text-base">
                <li>Permissioned Tendermint BFT w/ &lt;1s finality</li>
                <li>USDC for gas + paymaster for other stables</li>
                <li>FX primitives (matching engine + RFQ)</li>
              </ul>

              <p className="text-base">
                Later releases:
              </p>
              <ul className="list-disc list-inside space-y-1 text-base">
                <li>Privacy initially via TEEs but modular</li>
                <li>Encrypted mempool</li>
                <li>Multiple concurrent proposers</li>
                <li>PoA -&gt; PoS</li>
              </ul>

              <p className="text-base">
                ok so, first - I find it fascinating that Arc is going to be *openly* permissioned.
              </p>

              <p className="text-base">
                It will be run by a set of known institutions.
              </p>

              <p className="text-base">
                fwiw, i think this is the pragmatic approach. The "next trillion dollars" will only come onchain when institutions can see accountability, directly
              </p>

              <p className="text-base">
                Arc claims to achieve sub-second finality with *Malachite.*
              </p>

              <p className="text-base">
                Malachite is a Rust-based, high-performance consensus engine achieving sub-second finality by finalizing blocks in milliseconds.
              </p>

              <p className="text-base">
                It basically implements the Tendermint BFT protocol and Arc saw:
              </p>

              <p className="text-base">
                ~ 3,000 TPS with
              </p>

              <h2 className="text-xl font-semibold text-black mt-8 mb-4">On Privacy:</h2>

              <p className="text-base">
                Don't forget, Sanket_Jain_'s Gateway_xyz was building in MPC. So it was a no brainer that there was going to be a privacy angle with USDC.
              </p>

              <p className="text-base">
                I am pleasantly surprised about Arc in this matter:
              </p>

              <p className="text-base">
                Arc will offer *opt-in* privacy features with an overall focus on
              </p>

              <p className="text-base">
                Other privacy features being considered:
              </p>
              <ul className="list-disc list-inside space-y-1 text-base">
                <li>encrypted mempools</li>
                <li>privacy-preserving ai treasury management</li>
                <li>dark pools (w/ private order books?)</li>
              </ul>

              <p className="text-base">
                Note, arc specifically points out their backend is designed in a way so as to be easily compatible with other tech like FHE, MPC and
              </p>

              <h2 className="text-xl font-semibold text-black mt-8 mb-4">On Native Assets:</h2>

              <p className="text-base">
                While native support for USDC, EURC, and USYC was a no-brainer, I found it interesting that Arc wants to allow "other issuers of tokenized money - from fiat-backed stablecoins, to tokenized bank deposits and central bank money."
              </p>

              <p className="text-base">
                This ^ along with the
              </p>

              <p className="text-base">
                Other very interesting features/things:
              </p>

              <p className="text-base">
                FX engine: pvp fx settlement between vetted counterparties.<br/>
                Offchain Request-for-Quote (RFQ) execution layer (permissioned).<br/>
                Invoicing metadata for Txs(!)<br/>
                Refund and dispute payments(!)
              </p>

              <p className="text-base">
                all very impressive.
              </p>

              <h2 className="text-xl font-semibold text-black mt-8 mb-4">My take:</h2>

              <ul className="list-disc list-inside space-y-2 text-base">
                <li>I find the overall deliverable here close to what you'd expect from a team like Circle. It doesn't WOW me, but it's competitive and pragmatic.</li>
                <li>Circle has done tons for our industry (to their own advantage also ofc!) but I think on a spectrum of private to public</li>
              </ul>
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

