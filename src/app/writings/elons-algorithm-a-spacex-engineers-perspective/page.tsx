'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ElonsAlgorithmASpaceXEngineersPerspecitve() {
  const [content, setContent] = useState('');

  useEffect(() => {
    // In a real app, you'd fetch this from your markdown file
    // For now, we'll include the content directly
    setContent(`
This is a copy of a review of Elon's 'algorithm' by an anonymous SpaceX engineer. A deep dive into how SpaceX's engineering culture evolved from individual responsibility to systematized processes, and what that means for the future of innovation.

**Elon Musk's Engineering Algorithm:**

• Make the requirements less dumb.
• Delete parts or process.
• Simplify and optimize.
• Accelerate cycle time.
• Automate.

*- ModelThinkers.com, summarizing an interview with Elon Musk in 2021.*

From the moment I became interested in the aerospace industry, my understanding of it had been dominated by one story. It went like this:

Long ago, in the Space Race, people were willing to test a lot, fail fast and learn. The US and USSR exploded dozens of rockets in each test program, using their generational engineering talents to refine them to perfection. In doing so, they achieved the transcendental results of the Apollo program.

But over time, conservatism and bad incentives crept into space programs. Good engineering got choked by endless layers of process and review, and people became so terrified of the impression of failure that they would spend a hundred times as much to design perfect hardware.

And so: NASA's 1969 Space Task Group proposal aimed for a twenty-five-person moon base and nuclear-powered Mars trip in the late 1980s. Instead, fifty years later, we are stuck with boondoggles like the Space Launch System - NASA's new moon rocket - that cost more than the Saturn V, have less performance, and can launch maybe once every other year.

Throughout this whole period, the rage scream of the space nerds built. It expressed itself in a succession of space companies now unjustifiably ignored by history - Space Services, Inc, AMROC, Rotary Rocket Company, Orbital Sciences. Finally, amidst a boom in low orbit satellite construction, an eccentric rich person founded a company with a test site in Texas to change rocket launch forever. Then, after building the largest engine since Apollo, Andrew Beal's Beal Aerospace went bankrupt, and its test site was bought by the next challenger in line: Elon Musk's Space Exploration Technologies Corporation.

By the time I entered the aerospace industry, SpaceX (once known as SET, for "Space Exploration Technologies") had already carried out one of the great underdog stories in aerospace. From its beginnings exploding rockets in the Kwajalein Atoll, to teenage years releasing hype videos backed by Muse songs, SpaceX had dethroned the entrenched, government-supported monopolies and was rapidly becoming wildly, historically dominant in the space industry.

In the process, it told a powerful story of the secret to its success. The story went like this:

• SpaceX wasn't afraid of the appearance of failure, which meant that they could learn faster by carrying out tests that might not work.
• Everybody at SpaceX was the cream of the crop and held to high expectations in a hard-charging environment.
• Decisions were made based on "first principles". There was little stifling process and procedure.

All of this was instantiated through a process of Responsible Engineering. If you were the Responsible Engineer for the pneumatic system, you had absolute power over it, but (hypothetically) any failure on it was your fault. Your capital-R responsibility stretched the whole way - identifying what the pneumatic system was supposed to do, working with all of its stakeholders to individually identify the possible ways it could help or hurt other problems, and finding solutions to every problem.

If there was a great engineer responsible for each thing, the barriers were moved out of their way, and you got to test and fail until you succeeded, the company would win.

To a twenty-three year old engineer, this all seemed so obviously right that it was mystifying to me why anybody had done anything any differently.

---

When The Algorithm arrived - fresh off the presses of Elon's crushing experience increasing production rate at Tesla - it at first felt unsurprising.

In essence - as a exasperated reader might have noticed - it was a distillation of various extremely canonical Good Engineering Advice.

• Question the Requirements - so you solve exactly and only the problem you're trying to solve.
• Delete the part - became removing complexity makes problems more manageable.
• Optimize the part - good, but only after satisfying the first two.
• Accelerate - to get more production and enable test, but only once you know it's the right thing to produce.
• Automate - ditto, and ditto.

All of us seemed to read it as such. We nodded thoughtfully and continued along in the way that people since time immemorial have listened to, but not really absorbed, Good Engineering Advice. But slowly, it became clear that this time was different.

As I worked in the early 2020s, the Algorithm became a mantra around the office. It came up in presentations and one on ones. Our slides were practically required to mention the steps. Within a year, I could recite it when woken from a dead sleep. Steadily, it became clear that this wasn't advice, it was something new.

The essay continues with a detailed analysis of how "The Algorithm" became institutionalized at SpaceX, the unintended consequences of systematizing what was originally meant to be individual responsibility and first-principles thinking, and broader reflections on engineering culture, systems vs. individual responsibility, and the challenges of scaling innovative organizations.

The anonymous author provides a nuanced critique that doesn't dismiss The Algorithm entirely, but questions whether it captures what truly made SpaceX successful, and whether attempts to systematize innovation might paradoxically undermine the very qualities they seek to preserve.

*This is an excerpt from a much longer piece. The full essay explores the tension between individual responsibility and systematic processes in engineering organizations, using SpaceX as a case study for broader questions about innovation, scale, and organizational culture.*
    `);
  }, []);

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

      {/* Main Content */}
      <main id="main-content" className="px-6 md:px-12 py-8">
        <div className="max-w-3xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Article Header */}
            <header className="mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
                Elon's Algorithm: A SpaceX Engineer's Perspective
              </h1>
              
              <div className="flex items-center text-gray-600 text-sm">
                <time dateTime="2025-01-17">January 17, 2025</time>
                <span className="mx-2">•</span>
                <span>15 min read</span>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-800 font-normal leading-relaxed mb-6">
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <Link 
                  href="/writings"
                  className="text-gray-600 hover:text-black transition-colors font-normal underline underline-offset-4"
                >
                  ← Back to all writings
                </Link>
                
                <div className="flex items-center space-x-4">
                  {/* Share buttons could go here */}
                </div>
              </div>
            </footer>
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
