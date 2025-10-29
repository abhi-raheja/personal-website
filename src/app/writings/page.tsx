import Link from 'next/link';
import postsData from '@/data/posts.json';
import SubscriptionForm from '@/components/SubscriptionForm';

interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
}

function formatDate(dateString: string): string {
  // Parse the date string and ensure it's treated as local date
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day); // month is 0-indexed
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function Writings() {
  const posts = postsData;
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
          <div className="mb-16">
            {/* Page Title */}
            <h1 className="text-xl md:text-2xl font-semibold text-black mb-8">
              Writings
            </h1>
            <p className="text-base text-gray-700 font-normal leading-relaxed mb-8 max-w-2xl">
              Musings, jumbled thoughts, commentary and thought experiments in no particular order.
            </p>
          </div>

          {/* Posts List */}
          <div className="mb-16">
            <div className="space-y-6">
              {posts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 font-normal">No posts yet. Check back soon!</p>
                </div>
              ) : (
                posts.map((post, index) => (
                  <div key={post.slug} className="group">
                    <Link href={`/writings/${post.slug}`} className="block hover:bg-gray-50 -mx-4 px-4 py-3 rounded-sm transition-colors border-l-2 border-transparent hover:border-gray-300 cursor-pointer">
                      <h3 className="text-lg font-normal text-black group-hover:text-gray-800 transition-colors underline underline-offset-4 decoration-gray-300 hover:decoration-gray-600 mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {formatDate(post.date)} • {post.readTime}
                      </p>
                      <p className="text-gray-700 font-normal leading-relaxed">
                        {post.excerpt}
                      </p>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="mb-16">
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-3">
              Subscribe
            </h2>
            <p className="text-sm text-gray-600 mb-6 font-normal">
              Get my latest writing delivered to your inbox.
            </p>
            <SubscriptionForm />
          </div>

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
