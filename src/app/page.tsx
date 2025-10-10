'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  externalLink?: string;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });
}

export default function Home() {
  const [recentPosts, setRecentPosts] = useState<PostMetadata[]>([]);

  useEffect(() => {
    // Same data source as writings page - keep this in sync
    const allPosts = [
      {
        slug: 'the-productivity-myth-ft-vibe-coding',
        title: 'The Productivity Myth (ft. Vibe Coding)',
        excerpt: 'Lately, I\'ve been building small apps using Cursor. It\'s been oddly satisfying. I guess the kids call it \'vibe coding,\' but something strange started happening that I couldn\'t ignore.',
        date: '2025-10-10',
        readTime: '3 min read'
      },
      {
        slug: 'prediction-markets-are-trending-heres-my-experience',
        title: 'Prediction Markets are Trending. Here\'s my Experience Building One.',
        excerpt: 'Late 2023 to early 2024, I spent 6 months trying to build a prediction markets product called Ariina. At its peak, we had about 600 users in beta. I failed miserably but here is what I learned about market discovery, creation, liquidity, resolution, and contextualization.',
        date: '2025-09-25',
        readTime: '8 min read'
      },
      {
        slug: 'the-biggest-challenge-facing-llms',
        title: 'The Biggest Challenge Facing LLMs',
        excerpt: 'One thing that\'s common among recent statements by leads of all top AI labs is that they\'ve used all the publicly available data for training frontier models. The next frontier is private, proprietary data.',
        date: '2025-09-19',
        readTime: '4 min read'
      },
      {
        slug: 'why-im-excited-about-morpho-on-base',
        title: 'Why I\'m excited about Morpho on Base',
        excerpt: 'I recently learned that Coinbase lets you borrow money using Bitcoin as collateral (powered by Morpho). This led me down the Morpho rabbit hole and I was surprised to learn that there\'s a lot I didn\'t know about them.',
        date: '2025-09-03',
        readTime: '5 min read'
      },
      {
        slug: 'jevons-paradox-and-fhe',
        title: 'Jevon\'s Paradox and FHE',
        excerpt: 'Jevon\'s paradox is an economic principle that states that when technological advancements increase the efficiency with which a resource is used, the overall consumption of that resource may increase rather than decrease. I believe we\'re witnessing something similar with FHE.',
        date: '2025-08-21',
        readTime: '3 min read'
      },
      {
        slug: 'what-i-like-and-dont-like-about-circles-new-blockchain-arc',
        title: 'What I like and Don\'t like about Circle\'s new blockchain Arc',
        excerpt: 'I read the Arc litepaper so you don\'t have to. When my friend Sanket and his cracked team joined Circle a few months back, I knew something new was coming. Well, now Arc is here and here\'s what stands out for me.',
        date: '2025-08-13',
        readTime: '6 min read'
      },
      {
        slug: 'state-of-fhe-2025',
        title: 'State of FHE | 2025',
        excerpt: 'Imagine being able to compute on secrets, without ever seeing them. That\'s the magic of Fully Homomorphic Encryption (FHE), a cryptography technique that lets you process encrypted data as if it were unlocked. It\'s privacy\'s holy grail.',
        date: '2025-08-09',
        readTime: '7 min read'
      },
      {
        slug: 'the-price-i-paid-for-a-university-degree',
        title: 'The Price I Paid for a University Degree',
        excerpt: 'A personal story about family, sacrifice, and the true cost of education. On March 27, 2017, I sat facing my father in our living room during an evening that would alter the course of my life.',
        date: '2021-03-09',
        readTime: '7 min read',
        externalLink: 'https://abhihereandnow.medium.com/the-price-i-paid-for-a-university-degree-f9a04d4eae69'
      },
    ];
    
    // Get the latest 3 posts
    setRecentPosts(allPosts.slice(0, 3));
  }, []);

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
          <div className="flex justify-end items-center">
            <div className="flex items-center space-x-8">
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
          
          {/* Hero Section with Profile Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              {/* Profile Photo */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg border-4 border-white">
                  <img 
                    src="/profile-photo.jpg" 
                    alt="Abhi Raheja"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to styled initials if image doesn't exist
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl md:text-3xl font-bold tracking-wide">AR</div>';
                      }
                    }}
                  />
                </div>
              </div>
              
              {/* Text Info (Center Aligned on Mobile, Left on Desktop) */}
              <div className="flex-1 flex flex-col justify-center text-center md:text-left">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-normal tracking-tight text-black mb-3 leading-tight">
                  Abhi Raheja
                </h1>
                
                {/* Location */}
                <div className="flex items-center justify-center md:justify-start text-gray-600 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span className="text-base font-normal">Montreal, QC</span>
                </div>
                
                {/* Professional Info */}
                <div className="mb-2">
                  <h2 className="text-lg md:text-xl font-medium text-gray-900">
                    COO at <a href="https://www.sunscreen.tech" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors underline underline-offset-4">Sunscreen</a>
                  </h2>
                </div>
                
                <div className="text-sm text-gray-600">
                  <span>Prev. <a href="https://cyber.co" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-colors underline underline-offset-4">Cyber</a>, <a href="https://caldera.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-colors underline underline-offset-4">Caldera</a>, <a href="https://goodable.co" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-colors underline underline-offset-4">Goodable</a></span>
                </div>
              </div>
              
              {/* Social Media Icons (Right Side) */}
              <div className="flex-shrink-0 flex flex-col justify-center">
                <div className="flex items-center space-x-4">
                  {/* Email */}
                  <a 
                    href="mailto:a@earlyasaservice.com" 
                    className="text-gray-600 hover:text-black transition-colors"
                    aria-label="Email"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                  
                  {/* X (Twitter) */}
                  <a 
                    href="https://x.com/abhihereandnow" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  
                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/in/abhiraheja" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  
                  {/* GitHub */}
                  <a 
                    href="https://github.com/abhi-raheja" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
          </motion.div>

          {/* About Me Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mb-16"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-6">
              About Me
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-base text-gray-700 font-normal leading-relaxed mb-6">
                I'm a former journalist, producer, writer and tech founder. I was born and raised in India and graduated from the Ryerson School of Journalism in Toronto.
              </p>
              <p className="text-base text-gray-700 font-normal leading-relaxed mb-6">
                I'm passionate about history, technology, the underground dance music scene, anti-authoritarian technology, prediction markets, game and information theory, space, consciousness, psychedelics, and formula one racing.
              </p>
            </div>
          </motion.div>

          {/* Recent Writing Section - nikunjk.com style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mb-16"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-8">
              Recent Writing
            </h2>
            
            <div className="space-y-6">
              {recentPosts.map((post, index) => (
                <div key={post.slug} className="group">
                  {post.externalLink ? (
                    <a 
                      href={post.externalLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block hover:bg-gray-50 -mx-4 px-4 py-3 rounded-sm transition-colors"
                    >
                      <h3 className="text-lg font-normal text-black group-hover:text-gray-800 transition-colors mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {formatDate(post.date)}
                      </p>
                    </a>
                  ) : (
                    <Link 
                      href={`/writings/${post.slug}`}
                      className="block hover:bg-gray-50 -mx-4 px-4 py-3 rounded-sm transition-colors"
                    >
                      <h3 className="text-lg font-normal text-black group-hover:text-gray-800 transition-colors mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {formatDate(post.date)}
                      </p>
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <Link 
                href="/writings" 
                className="text-gray-600 hover:text-black  transition-colors font-normal underline underline-offset-4"
              >
                View all writings
              </Link>
            </div>
          </motion.div>

          {/* Currently Reading Section - compact version */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mb-16"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
              Currently Reading
            </h2>
            
            <div className="space-y-3">
              <p className="text-gray-700 hover:text-black transition-colors">
                <a href="https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316095" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  Sapiens
                </a>
                <span className="text-gray-500 text-sm ml-2">by Yuval Noah Harari</span>
              </p>
              
              <p className="text-gray-700 hover:text-black transition-colors">
                <a href="https://www.amazon.com/When-Everyone-Knows-That-Knowledge-ebook/dp/B0DV6FDFT6" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  When Everyone Knows that Everyone Knows
                </a>
                <span className="text-gray-500 text-sm ml-2">by Stephen Pinker</span>
              </p>
              
              <p className="text-gray-700 hover:text-black transition-colors">
                <a href="https://www.amazon.com/Platform-Revolution-Networked-Markets-Transforming/dp/0393249131" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  Platform Revolution: How Networked Markets Are Transforming the Economy
                </a>
                <span className="text-gray-500 text-sm ml-2">by Geoffrey G. Parker, Marshall W. Van Alstyne, Sangeet Paul Choudary</span>
              </p>
            </div>
            
            <div className="mt-6">
              <Link 
                href="/reading" 
                className="text-gray-600 hover:text-black transition-colors font-normal underline underline-offset-4"
              >
                Books I've met + like to revisit often, and recommend
              </Link>
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
