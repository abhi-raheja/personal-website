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

function getPropertyValue(property: any): string {
  if (!property) return '';

  // Handle different property types
  switch (property.type) {
    case 'title':
      return property.title?.map((t: any) => t.plain_text).join('') || '';
    case 'rich_text':
      return property.rich_text?.map((t: any) => t.plain_text).join('') || '';
    case 'text':
      return property.text?.content || '';
    default:
      return '';
  }
}

function getDateValue(property: any, fallback: string): { date: string; time: string } {
  if (property?.date?.start) {
    const dateObj = new Date(property.date.start);
    return {
      date: dateObj.toISOString().split('T')[0],
      time: property.date.start.includes('T')
        ? dateObj.toTimeString().slice(0, 5)
        : '12:00',
    };
  }

  // Fallback to created_time
  const dateObj = new Date(fallback);
  return {
    date: dateObj.toISOString().split('T')[0],
    time: dateObj.toTimeString().slice(0, 5),
  };
}

export async function getJournalEntries(): Promise<JournalEntry[]> {
  if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
    console.warn('Notion credentials not configured');
    return [];
  }

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });

    const entries = response.results.map((page: any) => {
      const properties = page.properties;

      // Get content - try Content first, then Title, then Name
      let content = getPropertyValue(properties.Content);
      if (!content) content = getPropertyValue(properties.Title);
      if (!content) content = getPropertyValue(properties.Name);

      // Get date
      const { date, time } = getDateValue(properties.Date, page.created_time);

      return {
        id: page.id,
        date,
        time,
        content,
      };
    });

    // Sort by date descending (newest first)
    return entries.sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`);
      const dateB = new Date(`${b.date}T${b.time}`);
      return dateB.getTime() - dateA.getTime();
    });
  } catch (error) {
    console.error('Error fetching from Notion:', error);
    return [];
  }
}
