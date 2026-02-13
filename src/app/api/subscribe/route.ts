import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const SUBSTACK_URL = 'https://abhiraheja.substack.com';

async function saveToNotion(email: string) {
  const databaseId = process.env.NOTION_SUBSCRIBERS_DATABASE_ID;
  if (!databaseId || !process.env.NOTION_API_KEY) return;

  const { Client } = await import('@notionhq/client');
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  await notion.pages.create({
    parent: { database_id: databaseId },
    properties: {
      Email: {
        title: [{ text: { content: email } }],
      },
      Date: {
        date: { start: new Date().toISOString() },
      },
    },
  });
}

async function subscribeToSubstack(email: string) {
  const { subscribe } = await import('substack-subscriber');
  return subscribe(email, SUBSTACK_URL);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Run both in parallel — if one fails, the other still succeeds
    const [substackResult, notionResult] = await Promise.allSettled([
      subscribeToSubstack(email),
      saveToNotion(email),
    ]);

    console.log('Substack result:', substackResult.status, substackResult.status === 'rejected' ? substackResult.reason?.message : 'ok');
    console.log('Notion result:', notionResult.status, notionResult.status === 'rejected' ? notionResult.reason?.message : 'ok');

    if (substackResult.status === 'rejected') {
      const err = substackResult.reason;
      if (err?.message?.includes('already subscribed') || err?.message?.includes('exists')) {
        return NextResponse.json(
          { success: false, error: 'This email is already subscribed.' },
          { status: 409 }
        );
      }
    }

    // As long as at least one succeeded, we're good
    const anySuccess =
      substackResult.status === 'fulfilled' || notionResult.status === 'fulfilled';

    if (!anySuccess) {
      return NextResponse.json(
        { success: false, error: 'Failed to subscribe. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Subscribed! Check your email to confirm.',
    });
  } catch (error: unknown) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}
