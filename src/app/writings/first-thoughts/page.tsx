'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SubscriptionForm from '@/components/SubscriptionForm';

export default function FirstThoughts() {
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

      {/* Article Content */}
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Back Link */}
            <Link 
              href="/writings"
              className="inline-flex items-center text-gray-600 hover:text-black transition-colors duration-200 font-light"
            >
              ← Back to all writings
            </Link>

            {/* Article Header */}
            <header className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 leading-tight">
                First Thoughts
              </h1>
              <div className="flex items-center space-x-4 text-gray-500 font-light">
                <span>January 2025</span>
                <span>•</span>
                <span>3 min read</span>
              </div>
            </header>

            {/* Article Body */}
            <article className="prose prose-lg max-w-none">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-xl font-light text-gray-600 border-l-2 border-gray-200 pl-6 italic">
                  Welcome to this space. This is where I'll be sharing thoughts, ideas, and 
                  reflections on the things that matter to me.
                </p>

                <p>
                  Starting a personal website feels both exciting and daunting. There's something 
                  vulnerable about putting your thoughts out into the world, knowing that anyone 
                  can read them, judge them, or simply ignore them entirely.
                </p>

                <p>
                  But I believe there's value in the practice of writing itself. Not just for 
                  the potential readers, but for the writer. Writing forces clarity. It makes 
                  you confront the fuzzy edges of your thinking and sharpen them into something 
                  more precise.
                </p>

                <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">
                  Why Write Publicly?
                </h2>

                <p>
                  The internet is full of voices, opinions, and noise. Why add another one? 
                  I've been asking myself this question for months, and I think I've found 
                  my answer.
                </p>

                <p>
                  Writing publicly creates accountability. When you know others might read 
                  your work, you naturally put more effort into making it coherent, well-reasoned, 
                  and worth someone's time. It's a forcing function for better thinking.
                </p>

                <p>
                  More importantly, it opens the door for connection. Some of the most 
                  meaningful conversations I've had started with something someone wrote 
                  that resonated with me. I hope to create those same opportunities here.
                </p>

                <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">
                  What to Expect
                </h2>

                <p>
                  I won't promise to write on a schedule. Good thinking takes time, and 
                  I'd rather share one thoughtful piece a month than four rushed ones. 
                  Quality over quantity.
                </p>

                <p>
                  The topics will vary based on what I'm exploring at the moment. You might 
                  find pieces on creativity, technology, philosophy, or simply observations 
                  about daily life. The common thread will be thoughtfulness and authenticity.
                </p>

                <p>
                  Thank you for being here, whether you stumbled upon this by accident or 
                  came looking specifically. I hope you find something worth your time.
                </p>
              </div>
            </article>

            {/* Footer Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="pt-12 border-t border-gray-200 flex justify-between items-center"
            >
              <Link 
                href="/writings"
                className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors duration-200 font-light"
              >
                ← All writings
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors duration-200 font-light"
              >
                About me →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
