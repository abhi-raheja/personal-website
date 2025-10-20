import { NextRequest, NextResponse } from 'next/server';
import { getPostBySlug, getPostContent } from '@/lib/blog';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    const post = getPostBySlug(slug);
    
    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    const content = await getPostContent(slug);
    
    return NextResponse.json({
      title: post.title,
      date: post.date,
      readTime: post.readTime,
      content,
    });
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
