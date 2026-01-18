import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID!;

export interface JournalEntry {
  id: string;
  date: string;
  time: string;
  content: string;
}

export async function getJournalEntries(): Promise<JournalEntry[]> {
  if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
    console.warn('Notion credentials not configured');
    return [];
  }

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });

    return response.results.map((page: any) => {
      const properties = page.properties;

      // Get the date from the Date property or fall back to created_time
      let dateObj: Date;
      if (properties.Date?.date?.start) {
        dateObj = new Date(properties.Date.date.start);
      } else {
        dateObj = new Date(page.created_time);
      }

      const date = dateObj.toISOString().split('T')[0];
      const time = dateObj.toTimeString().slice(0, 5);

      // Get content from the Content property (rich_text) or Title property
      let content = '';
      if (properties.Content?.rich_text?.length > 0) {
        content = properties.Content.rich_text
          .map((block: any) => block.plain_text)
          .join('');
      } else if (properties.Title?.title?.length > 0) {
        content = properties.Title.title
          .map((block: any) => block.plain_text)
          .join('');
      } else if (properties.Name?.title?.length > 0) {
        content = properties.Name.title
          .map((block: any) => block.plain_text)
          .join('');
      }

      return {
        id: page.id,
        date,
        time,
        content,
      };
    });
  } catch (error) {
    console.error('Error fetching from Notion:', error);
    return [];
  }
}
