import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

export async function GET() {
  const debug: any = {
    hasApiKey: !!process.env.NOTION_API_KEY,
    apiKeyPrefix: process.env.NOTION_API_KEY?.slice(0, 10) + '...',
    hasDatabaseId: !!process.env.NOTION_DATABASE_ID,
    databaseId: process.env.NOTION_DATABASE_ID,
  };

  if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
    return NextResponse.json({
      error: 'Missing environment variables',
      debug,
    });
  }

  try {
    const notion = new Client({
      auth: process.env.NOTION_API_KEY,
    });

    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
    });

    debug.success = true;
    debug.resultCount = response.results.length;

    if (response.results.length > 0) {
      const firstPage: any = response.results[0];
      debug.sampleProperties = Object.keys(firstPage.properties);
      debug.propertyTypes = {};
      for (const [key, value] of Object.entries(firstPage.properties)) {
        debug.propertyTypes[key] = (value as any).type;
      }
      debug.firstEntry = firstPage.properties;
    }

    return NextResponse.json(debug);
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      code: error.code,
      debug,
    });
  }
}
