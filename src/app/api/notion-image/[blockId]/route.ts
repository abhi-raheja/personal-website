import { NextResponse } from 'next/server';
import { getNotionImageUrl } from '@/lib/notion';

export const dynamic = 'force-dynamic';

interface RouteContext {
  params: Promise<{
    blockId: string;
  }>;
}

export async function GET(_request: Request, { params }: RouteContext) {
  const { blockId } = await params;

  if (!blockId) {
    return NextResponse.json({ error: 'Missing Notion block ID' }, { status: 400 });
  }

  const imageUrl = await getNotionImageUrl(blockId);
  if (!imageUrl) {
    return NextResponse.json({ error: 'Image not found' }, { status: 404 });
  }

  const response = NextResponse.redirect(imageUrl, 307);
  response.headers.set('Cache-Control', 'no-store');
  return response;
}
