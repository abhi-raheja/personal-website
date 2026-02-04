import Link from 'next/link';
import { Metadata } from 'next';
import { getWritingsPosts, getWritingsPostBySlug } from '@/lib/notion';
import SubscriptionForm from '@/components/SubscriptionForm';

// Revalidate every 60 seconds to pick up Notion changes
export const revalidate = 60;

// Generate static params for all published posts
export async function generateStaticParams() {
  try {
    const posts = await getWritingsPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getWritingsPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  const postUrl = `https://abhiraheja.com/writings/${slug}/`;

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      siteName: "Abhi Raheja",
      images: [
        {
          url: "https://abhiraheja.com/social-preview.jpg",
          width: 1200,
          height: 630,
          alt: `${post.title} - Abhi Raheja`,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["https://abhiraheja.com/social-preview.jpg"],
    },
  };
}

function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = await getWritingsPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Post not found</h1>
          <Link href="/writings" className="text-blue-600 hover:text-blue-800 underline">
            Back to Writings
          </Link>
        </div>
      </div>
    );
  }

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
                href="/journal"
                className="text-gray-700 hover:text-black transition-colors font-normal"
              >
                Journal
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
          {/* Subscribe Section - at the very top, above title */}
          <div className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-3">
              Subscribe to my posts
            </h2>
            <p className="text-sm text-gray-600 mb-6 font-normal">
              Get my latest writing delivered to your inbox.
            </p>
            <SubscriptionForm />
          </div>

          <div className="mb-16">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-4">
              {post.title}
            </h1>
            <p className="text-gray-600 text-sm mb-8">
              {formatDate(post.date)} • {post.readTime}
            </p>

            {/* Content from Notion - sanitized through our converter */}
            <div
              className="prose prose-lg max-w-none text-gray-700 font-normal leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
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
