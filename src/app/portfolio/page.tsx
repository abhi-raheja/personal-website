'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>

      {/* Navigation matching main site */}
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
                className="text-gray-700 hover:text-black transition-colors font-normal"
              >
                Reading
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main id="main-content" className="px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* X.com Style Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12"
          >
            {/* Cover Image */}
            <div className="relative w-full h-48 md:h-60 bg-gray-200 rounded-t-2xl overflow-hidden">
              <img 
                src="/portfolio-cover.jpg" 
                alt="Abhi Raheja presenting to an audience" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-gray-600"><div class="text-center"><svg class="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><p class="text-sm">Cover Image</p></div></div>';
                  }
                }}
              />
            </div>
            
            {/* Profile Info Section */}
            <div className="bg-white rounded-b-2xl border border-gray-200 border-t-0 px-6 pb-6">
              {/* Profile Photo - Overlapping the cover */}
              <div className="relative -mt-16 mb-4">
                <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-gray-100 shadow-lg">
                  <img 
                    src="/profile-photo.jpg" 
                    alt="Abhi Raheja" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">AR</div>';
                      }
                    }}
                  />
                </div>
                
                {/* Open to New Roles Button - Positioned absolutely */}
                <div className="absolute top-0 right-0">
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-50 hover:bg-green-100 border border-green-200 rounded-full text-green-700 font-medium text-sm transition-colors">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Open to New Roles
                  </button>
                </div>
              </div>
              
              {/* Name and Handle */}
              <div className="mb-3">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-black">Abhi Raheja</h1>
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  
                  {/* Social Icons on the right side */}
                  <div className="flex items-center space-x-3">
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
                    
                    <a 
                      href="mailto:a@earlyasaservice.com" 
                      className="text-gray-600 hover:text-black transition-colors"
                      aria-label="Email"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="text-gray-500 text-base mb-3">@abhihereandnow (abhir.eth)</p>
                
                {/* Location, Website, and Bitcoin line */}
                <div className="flex items-center gap-4 text-gray-500 text-sm">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span>Montreal, QC</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                    </svg>
                    <a href="https://abhiraheja.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">abhiraheja.com</a>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span>Bought BTC in 2017, Full-Time in crypto Since 2020</span>
                  </div>
                </div>
              </div>
              
              {/* Bio */}
              <div className="mb-4">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full mb-3">
                  <p className="text-blue-800 font-medium text-base leading-relaxed">
                    🔨 CMO & GTM Lead | Force Multiplier for Mission-Driven Founders
                  </p>
                </div>
                
                {/* Two-column layout for Roles and second box */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Roles Box */}
                  <div>
                    <div className="px-5 py-4 bg-gradient-to-r from-gray-50 to-slate-50 border border-gray-200 rounded-2xl">
                      <h3 className="text-sm font-semibold text-gray-700 mb-4">Roles</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          <div className="text-gray-800 font-medium text-sm leading-relaxed">
                            Currently CMO & COO <a href="https://www.sunscreen.tech" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@sunscreentech</a> (backed by Polychain)
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                          </svg>
                          <div className="text-gray-800 font-medium text-sm leading-relaxed">
                            <div className="mb-2">Formerly,</div>
                            <div className="space-y-1">
                              <div>CMO <a href="https://caldera.xyz" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@calderaxyz</a> (backed by Founders Fund)</div>
                              <div>CMO <a href="https://cyber.co" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@buildoncyber</a> (backed by Multicoin)</div>
                              <div>Cofounder <a href="https://x.com/ariinaxyz" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@ariinaxyz</a> <a href="https://goodable.co" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@goodable</a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Second Box */}
                  <div>
                    <div className="px-5 py-4 bg-gradient-to-r from-gray-50 to-slate-50 border border-gray-200 rounded-2xl h-full relative">
                      <h3 className="text-sm font-semibold text-gray-700 mb-4">Personal</h3>
                      
                      {/* Empty for now */}
                      <div className="text-gray-500 text-sm">
                        Coming soon...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </motion.div>

          {/* Quick Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mb-16"
          >
            <h2 className="text-lg md:text-xl font-semibold text-black mb-6">
              Quick Summary
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 font-normal leading-relaxed">
                Over the past 8 years, I've led product, ops, and GTM teams, developed product and brand narratives, built PR and marketing functions from the ground up, launched and scaled new, cross-functional initiatives for a range of breakout web2 and web3 teams across the globe.
              </p>
              
              <p className="text-gray-700 font-normal leading-relaxed">
                I'm a former founder, and a curious, adaptable operator with an impact-driven mindset and crypto-native experience in multiplying founders' impact within their teams.
              </p>
              
              <p className="text-gray-700 font-normal leading-relaxed">
                As a right-hand operative, and a trusted soundboard for founders, my work has directly contributed to:
              </p>
              
              <ul className="space-y-3 ml-4">
                <li className="flex items-start text-gray-700">
                  <span className="mr-3 mt-1">📱</span>
                  <span>Building products and communities engaging over 100 million+ users worldwide.</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="mr-3 mt-1">✌️</span>
                  <span>Scaling teams from 1 to 40+</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="mr-3 mt-1">🚢</span>
                  <span>Building resilient PR, marketing, and communications functions for clients ranging Caldera, Cyber, Thompson Reuters, Accenture, Amazon's Audible etc.</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="mr-3 mt-1">🤑</span>
                  <span>Helping founders raise over $40M in funding</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="mr-3 mt-1">🚀</span>
                  <span>Leading brand, product and feature GTM, combining efforts that touch upon several business functions.</span>
                </li>
              </ul>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-base font-medium text-black mb-3 flex items-center">
                  <span className="mr-2">☝️</span>
                  Oh, and also
                </h3>
                <p className="text-gray-700 font-normal leading-relaxed">
                  Life wasn't always so awesome. When I couldn't afford to pursue an education as a 17-year old in a small town in north India, I raised over $100k❗for my university education (ask me about it, seriously 😎).
                </p>
                <p className="text-gray-700 font-normal leading-relaxed mt-3">
                  Want to know more about me? Jump to the 'But Who Am I Really?' section.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Previous Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mb-16"
          >
            <h2 className="text-lg md:text-xl font-semibold text-black mb-6">
              Previous Experience
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-black mb-2">
                  <a href="https://cyber.co" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors underline underline-offset-4">
                    Cyber
                  </a>
                </h3>
                <p className="text-gray-600 text-sm mb-3">[Role] • [Year - Year]</p>
                <p className="text-gray-700 font-normal leading-relaxed">
                  [Add description of your role and key achievements at Cyber - focus on impact, responsibilities, and outcomes]
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-2">
                  <a href="https://caldera.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors underline underline-offset-4">
                    Caldera
                  </a>
                </h3>
                <p className="text-gray-600 text-sm mb-3">[Role] • [Year - Year]</p>
                <p className="text-gray-700 font-normal leading-relaxed">
                  [Add description of your role and key achievements at Caldera - focus on impact, responsibilities, and outcomes]
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-2">
                  <a href="https://goodable.co" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors underline underline-offset-4">
                    Goodable
                  </a>
                </h3>
                <p className="text-gray-600 text-sm mb-3">[Role] • [Year - Year]</p>
                <p className="text-gray-700 font-normal leading-relaxed">
                  [Add description of your role and key achievements at Goodable - focus on impact, responsibilities, and outcomes]
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education & Background */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mb-16"
          >
            <h2 className="text-lg md:text-xl font-semibold text-black mb-6">
              Education & Background
            </h2>
            
            <div>
              <h3 className="text-lg font-medium text-black mb-2">
                Ryerson School of Journalism
              </h3>
              <p className="text-gray-600 text-sm mb-3">Toronto, Canada • Graduated</p>
              <p className="text-gray-700 font-normal leading-relaxed">
                Studied journalism with a focus on digital media and storytelling. Born and raised in India, graduated from one of Canada's premier journalism programs with expertise in multimedia storytelling and digital content creation.
              </p>
            </div>
          </motion.div>

          {/* Projects/Work - Placeholder section for Notion content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mb-16"
          >
            <h2 className="text-lg md:text-xl font-semibold text-black mb-6">
              Projects & Work
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-black mb-2">
                  [Project/Work Title from Notion]
                </h3>
                <p className="text-gray-600 text-sm mb-3">[Date/Duration]</p>
                <p className="text-gray-700 font-normal leading-relaxed">
                  [Description from your Notion site - please provide the specific content you'd like to include here]
                </p>
              </div>
            </div>
          </motion.div>

          {/* But Who Am I Really? - Placeholder for additional content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="mb-16"
          >
            <h2 className="text-lg md:text-xl font-semibold text-black mb-6">
              But Who Am I Really?
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 font-normal leading-relaxed">
                [Add additional personal content from your Notion site here - stories, background, personality, values, etc.]
              </p>
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
