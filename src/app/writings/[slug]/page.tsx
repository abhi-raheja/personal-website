import { motion } from 'framer-motion';
import Link from 'next/link';
import BlogPostClient from './BlogPostClient';

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    const postsData = require('@/data/posts.json');
    return postsData.map((post: any) => ({
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
