import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

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

    // Save to Notion as backup subscriber list
    const databaseId = process.env.NOTION_SUBSCRIBERS_DATABASE_ID;
    if (databaseId && process.env.NOTION_API_KEY) {
      try {
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
      } catch (notionError) {
        console.error('Notion save failed:', notionError);
        // Don't block — Substack redirect handles the actual subscription
      }
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save. Please try again.' },
      { status: 500 }
    );
  }
}
