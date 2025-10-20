import BlogPostClient from './BlogPostClient';
import postsData from '@/data/posts.json';

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    return postsData.map((post) => ({
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

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  return <BlogPostClient slug={slug} />;
}
