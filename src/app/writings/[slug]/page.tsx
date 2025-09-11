'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { formatDate } from '@/lib/posts';

interface Post {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  content: string;
  contentHtml: string;
}

export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug as string;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;

      try {
        // For now, we'll use sample data based on the slug
        // Later this will be replaced with an API call
        const samplePosts: Record<string, Post> = {
          'first-thoughts': {
            slug: 'first-thoughts',
            title: 'First Thoughts',
            date: '2025-01-15',
            readTime: '3 min read',
            content: '',
            contentHtml: `
              <p class="text-xl font-light text-gray-600 border-l-2 border-gray-200 pl-6 italic mb-6">
                Welcome to this space. This is where I'll be sharing thoughts, ideas, and 
                reflections on the things that matter to me.
              </p>

              <p class="mb-6">
                Starting a personal website feels both exciting and daunting. There's something 
                vulnerable about putting your thoughts out into the world, knowing that anyone 
                can read them, judge them, or simply ignore them entirely.
              </p>

              <p class="mb-6">
                But I believe there's value in the practice of writing itself. Not just for 
                the potential readers, but for the writer. Writing forces clarity. It makes 
                you confront the fuzzy edges of your thinking and sharpen them into something 
                more precise.
              </p>

              <h2 class="text-2xl font-light text-gray-900 mt-8 mb-4">
                Why Write Publicly?
              </h2>

              <p class="mb-6">
                The internet is full of voices, opinions, and noise. Why add another one? 
                I've been asking myself this question for months, and I think I've found 
                my answer.
              </p>

              <p class="mb-6">
                Writing publicly creates accountability. When you know others might read 
                your work, you naturally put more effort into making it coherent, well-reasoned, 
                and worth someone's time. It's a forcing function for better thinking.
              </p>

              <p class="mb-6">
                More importantly, it opens the door for connection. Some of the most 
                meaningful conversations I've had started with something someone wrote 
                that resonated with me. I hope to create those same opportunities here.
              </p>

              <h2 class="text-2xl font-light text-gray-900 mt-8 mb-4">
                What to Expect
              </h2>

              <p class="mb-6">
                I won't promise to write on a schedule. Good thinking takes time, and 
                I'd rather share one thoughtful piece a month than four rushed ones. 
                Quality over quantity.
              </p>

              <p class="mb-6">
                The topics will vary based on what I'm exploring at the moment. You might 
                find pieces on creativity, technology, philosophy, or simply observations 
                about daily life. The common thread will be thoughtfulness and authenticity.
              </p>

              <p class="mb-6">
                Thank you for being here, whether you stumbled upon this by accident or 
                came looking specifically. I hope you find something worth your time.
              </p>
            `
          },
          'on-creativity': {
            slug: 'on-creativity',
            title: 'On Creativity and Daily Practice',
            date: '2025-01-12',
            readTime: '5 min read',
            content: '',
            contentHtml: `
              <p class="mb-6">
                Creativity isn't magic. It's not some mystical force that strikes randomly, leaving us helpless to control when inspiration hits. This romantic notion of the tortured artist waiting for divine intervention is not only misleading—it's counterproductive.
              </p>

              <p class="mb-6">
                The most creative people I know treat creativity like a craft. They show up every day, whether they feel inspired or not. They understand that creativity is a muscle that grows stronger with use, not a finite resource that depletes.
              </p>

              <h2 class="text-2xl font-light text-gray-900 mt-8 mb-4">
                The Myth of Inspiration
              </h2>

              <p class="mb-6">
                We've been sold a story about creativity that goes something like this: sit around, wait for inspiration to strike, then frantically capture the lightning in a bottle before it disappears. This approach might work occasionally, but it's hardly a reliable way to produce meaningful work.
              </p>

              <p class="mb-6">
                The truth is that inspiration often comes during the work, not before it. When you sit down to write, draw, code, or create in any form, the act of creating itself generates new ideas. Motion creates motion.
              </p>

              <h2 class="text-2xl font-light text-gray-900 mt-8 mb-4">
                Small Consistent Steps
              </h2>

              <p class="mb-6">
                I've found that committing to small, consistent actions yields better results than sporadic bursts of intensive work. Writing 200 words daily will produce more—and better—writing than waiting for the perfect moment to write 2,000 words.
              </p>

              <p class="mb-6">
                This isn't just about quantity. Consistent practice allows your subconscious to work on problems in the background. Solutions often appear not when you're actively struggling with them, but during the quiet moments in between sessions.
              </p>

              <p class="mb-6">
                Creativity flourishes in the mundane, in the daily choice to sit down and do the work regardless of how you feel. Make that choice, and watch what unfolds.
              </p>
            `
          }
        };

        const foundPost = samplePosts[slug];
        if (foundPost) {
          setPost(foundPost);
        } else {
          setError('Post not found');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setError('Error loading post');
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-600 font-light">Loading...</div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-gray-900 mb-4">Post Not Found</h1>
          <Link href="/writings" className="text-gray-600 hover:text-black transition-colors duration-200">
            ← Back to all writings
          </Link>
        </div>
      </div>
    );
  }

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
                {post.title}
              </h1>
              <div className="flex items-center space-x-4 text-gray-500 font-light">
                <span>{formatDate(post.date)}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </header>

            {/* Article Body */}
            <article className="prose prose-lg max-w-none">
              <div 
                className="space-y-6 text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />
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
