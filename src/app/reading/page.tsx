'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Reading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content by accessibility feature */}
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
              href="/" 
              className="flex items-center text-gray-700 hover:text-black transition-colors font-normal"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Link>
            
            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <Link 
                href="/writings" 
                className="text-gray-700 hover:text-black transition-colors font-normal"
              >
                Writings
              </Link>
              <Link 
                href="/reading" 
                className="text-black font-normal"
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
          
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16"
          >
            <h1 className="text-xl md:text-2xl font-semibold text-black mb-8">
              Reading
            </h1>
            <p className="text-base text-gray-700 font-normal leading-relaxed mb-8 max-w-2xl">
              These are books I've met on my journey and like to revisit often. I like to learn a little bit about everything. I find most of my interests lie at the intersection of history, technology, spirituality, culture, and freedom.
            </p>
          </motion.div>

          {/* Books Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <div className="space-y-3">
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Aghora-At-Left-Hand-God/dp/8171673422" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    Aghora: At the Left Hand of God
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Robert E. Svoboda</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/New-Earth-Awakening-Purpose-Selection/dp/0452289963" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    A New Earth
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Eckhart Tolle</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Be-Here-Now-Ram-Dass/dp/0517543052" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    Be Here Now
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Ram Dass</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Being-Ram-Dass/dp/1649630131" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    Being Ram Dass
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Ram Dass</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Chaos-Monkeys-Obscene-Fortune-Failure/dp/0062458191" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    Chaos Monkeys
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Antonio García Martínez</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Courage-Calling-Fortune-Favors-Bold/dp/0593191676" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    Courage is Calling
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Ryan Holiday</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Discipline-Destiny-Power-Self-Control/dp/0593191692" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    Discipline is Destiny
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Ryan Holiday</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Elon-Musk-Walter-Isaacson/dp/1982181281" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    Elon Musk
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Walter Isaacson</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Fountainhead-Ayn-Rand/dp/0452273331" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    The Fountainhead
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Ayn Rand</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Great-CEO-Within-Tactical-Building/dp/0578599287" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    The Great CEO Within
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Matt Mochary</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Hard-Thing-About-Things-Building/dp/0062273205" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    The Hard Thing About Hard Things
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Ben Horowitz</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Infinite-Game-Simon-Sinek/dp/073521350X" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    The Infinite Game
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Simon Sinek</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Network-State-How-Start-Country-ebook/dp/B09VPKZR3G" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    The Network State
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Balaji Srinivasan</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/No-Bad-Parts-Healing-Trauma/dp/1683646681" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    No Bad Parts
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Richard Schwartz</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Outliers-Story-Success-Malcolm-Gladwell/dp/0316017930" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    The Outliers
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Malcolm Gladwell</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Paths-God-Ram-Dass/dp/1400054796" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    Paths to God
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Ram Dass</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Platform-Revolution-Networked-Markets-Transforming/dp/0393249131" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    Platform Revolution
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Geoffrey Parker</span>
                </p>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Read-Write-Own-Building-Internet/dp/0593731395" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    Read Write Own
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Chris Dixon</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316095" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    Sapiens
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Yuval Noah Harari</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Talking-Strangers-Should-about-People/dp/0316478520" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    Talking to Strangers
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Malcolm Gladwell</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Tao-Te-Ching-Lao-Tzu/dp/0061142662" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    Tao Te Ching
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Lao Tzu</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Bomber-Mafia-Dream-Horror-War/dp/0316296619" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    The Bomber Mafia
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Malcolm Gladwell</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Creative-Act-Way-Being/dp/0593652886" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    The Creative Act
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Rick Rubin</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Teachings-Don-Juan-Yaqui-Knowledge/dp/0671600419" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    The Teachings of Don Juan
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Carlos Castaneda</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Truth-Machine-Blockchain-Future-Everything/dp/1250114578" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    The Truth Machine
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Paul Vigna</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Untethered-Soul-Journey-Beyond-Yourself/dp/1572245379" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    The Untethered Soul
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Michael Singer</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/This-Your-Plants-Michael-Pollan/dp/0593296923" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    This is Your Mind on Plants
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Michael Pollan</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    Thinking, Fast and Slow
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Daniel Kahneman</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Token-Economy-Web3-reinvents-Internet/dp/3982103819" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    Token Economy
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Shermin Voshmgir</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Tuesdays-Morrie-Young-Greatest-Lesson/dp/0385484518" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    Tuesdays with Morrie
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Mitch Albom</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Web3-Marketing-Handbook-Internet-Revolution/dp/1394171951" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    Web3 Marketing
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Peter Yang</span>
                </p>
                
                <p className="text-gray-700 hover:text-black transition-colors">
                  <a href="https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    Zero to One
                  </a>
                  <span className="text-gray-500 text-sm ml-2">by Peter Thiel</span>
                </p>
              </div>
            </div>
          </motion.div>

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
