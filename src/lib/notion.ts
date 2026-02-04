import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const journalDatabaseId = process.env.NOTION_DATABASE_ID!;
const writingsDatabaseId = process.env.NOTION_WRITINGS_DATABASE_ID!;

// ============ JOURNAL TYPES & FUNCTIONS ============

export interface JournalEntry {
  id: string;
  date: string;
  time: string;
  content: string;
}

function getPropertyValue(property: any): string {
  if (!property) return '';

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
      database_id: journalDatabaseId,
    });

    const entries = response.results.map((page: any) => {
      const properties = page.properties;

      let content = getPropertyValue(properties.Content);
      if (!content) content = getPropertyValue(properties.Title);
      if (!content) content = getPropertyValue(properties.Name);

      const { date, time } = getDateValue(properties.Date, page.created_time);

      return {
        id: page.id,
        date,
        time,
        content,
      };
    });

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

// ============ WRITINGS TYPES & FUNCTIONS ============

export interface WritingsPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
}

export interface WritingsPostWithContent extends WritingsPost {
  contentHtml: string;
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function estimateReadTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export async function getWritingsPosts(): Promise<WritingsPost[]> {
  if (!process.env.NOTION_API_KEY || !process.env.NOTION_WRITINGS_DATABASE_ID) {
    console.warn('Notion writings credentials not configured');
    return [];
  }

  try {
    const response = await notion.databases.query({
      database_id: writingsDatabaseId,
      filter: {
        property: 'Status',
        status: {
          equals: 'Published',
        },
      },
      sorts: [
        {
          property: 'Target Publish Date',
          direction: 'descending',
        },
      ],
    });

    const posts = await Promise.all(
      response.results.map(async (page: any) => {
        const properties = page.properties;

        const title = getPropertyValue(properties.Title);
        const excerpt = getPropertyValue(properties.Description) || '';

        const dateProperty = properties['Target Publish Date'];
        let date = '';
        if (dateProperty?.date?.start) {
          date = dateProperty.date.start.split('T')[0];
        } else {
          date = new Date(page.created_time).toISOString().split('T')[0];
        }

        const slug = generateSlug(title);

        const blocks = await getPageBlocks(page.id);
        const textContent = blocks.map(b => blockToText(b)).join(' ');
        const readTime = estimateReadTime(textContent);

        return {
          id: page.id,
          slug,
          title,
          date,
          excerpt,
          readTime,
        };
      })
    );

    return posts;
  } catch (error) {
    console.error('Error fetching writings from Notion:', error);
    return [];
  }
}

export async function getWritingsPostBySlug(slug: string): Promise<WritingsPostWithContent | null> {
  const posts = await getWritingsPosts();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return null;
  }

  try {
    const blocks = await getPageBlocks(post.id);
    const contentHtml = blocksToHtml(blocks);

    return {
      ...post,
      contentHtml,
    };
  } catch (error) {
    console.error('Error fetching post content:', error);
    return null;
  }
}

async function getPageBlocks(pageId: string): Promise<any[]> {
  const blocks: any[] = [];
  let cursor: string | undefined;

  do {
    const response: any = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
    });

    blocks.push(...response.results);
    cursor = response.has_more ? response.next_cursor : undefined;
  } while (cursor);

  for (const block of blocks) {
    if (block.has_children) {
      block.children = await getPageBlocks(block.id);
    }
  }

  return blocks;
}

function blockToText(block: any): string {
  const type = block.type;
  const content = block[type];

  if (!content) return '';

  if (content.rich_text) {
    return content.rich_text.map((t: any) => t.plain_text).join('');
  }

  if (block.children) {
    return block.children.map((b: any) => blockToText(b)).join(' ');
  }

  return '';
}

function richTextToHtml(richText: any[]): string {
  if (!richText || richText.length === 0) return '';

  return richText
    .map((text: any) => {
      let content = text.plain_text;

      if (text.annotations) {
        if (text.annotations.bold) {
          content = `<strong class="font-semibold text-gray-900">${content}</strong>`;
        }
        if (text.annotations.italic) {
          content = `<em class="italic">${content}</em>`;
        }
        if (text.annotations.strikethrough) {
          content = `<del>${content}</del>`;
        }
        if (text.annotations.underline) {
          content = `<u>${content}</u>`;
        }
        if (text.annotations.code) {
          content = `<code class="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">${content}</code>`;
        }
      }

      if (text.href) {
        content = `<a href="${text.href}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">${content}</a>`;
      }

      return content;
    })
    .join('');
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function blocksToHtml(blocks: any[]): string {
  let html = '';
  let i = 0;

  while (i < blocks.length) {
    const block = blocks[i];
    const type = block.type;
    const content = block[type];

    // Handle list items by grouping them
    if (type === 'bulleted_list_item') {
      let listHtml = '<ul class="list-disc list-inside space-y-2 my-6 text-gray-700">';
      while (i < blocks.length && blocks[i].type === 'bulleted_list_item') {
        const itemContent = blocks[i].bulleted_list_item;
        const itemText = richTextToHtml(itemContent.rich_text);
        const children = blocks[i].children ? blocksToHtml(blocks[i].children) : '';
        listHtml += `<li class="mb-2">${itemText}${children}</li>`;
        i++;
      }
      listHtml += '</ul>';
      html += listHtml;
      continue;
    }

    if (type === 'numbered_list_item') {
      let listHtml = '<ol class="list-decimal list-inside space-y-2 my-6 text-gray-700">';
      while (i < blocks.length && blocks[i].type === 'numbered_list_item') {
        const itemContent = blocks[i].numbered_list_item;
        const itemText = richTextToHtml(itemContent.rich_text);
        const children = blocks[i].children ? blocksToHtml(blocks[i].children) : '';
        listHtml += `<li class="mb-2">${itemText}${children}</li>`;
        i++;
      }
      listHtml += '</ol>';
      html += listHtml;
      continue;
    }

    // Handle other block types
    switch (type) {
      case 'paragraph':
        const pText = richTextToHtml(content.rich_text);
        if (pText) html += `<p class="mb-6 text-gray-700 leading-relaxed">${pText}</p>`;
        break;

      case 'heading_1':
        html += `<h1 class="text-3xl font-bold text-gray-900 mt-12 mb-8">${richTextToHtml(content.rich_text)}</h1>`;
        break;

      case 'heading_2':
        html += `<h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-6">${richTextToHtml(content.rich_text)}</h2>`;
        break;

      case 'heading_3':
        html += `<h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">${richTextToHtml(content.rich_text)}</h3>`;
        break;

      case 'quote':
        html += `<blockquote class="border-l-4 border-gray-300 pl-4 my-6 italic text-gray-600">${richTextToHtml(content.rich_text)}</blockquote>`;
        break;

      case 'code':
        const codeText = content.rich_text.map((t: any) => t.plain_text).join('');
        html += `<pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6"><code class="text-sm font-mono">${escapeHtml(codeText)}</code></pre>`;
        break;

      case 'divider':
        html += '<hr class="my-8 border-gray-300">';
        break;

      case 'image':
        let imageUrl = '';
        if (content.type === 'external') {
          imageUrl = content.external.url;
        } else if (content.type === 'file') {
          imageUrl = content.file.url;
        }
        const caption = content.caption ? richTextToHtml(content.caption) : '';
        html += `<figure class="my-8"><img src="${imageUrl}" alt="${caption || 'Blog image'}" class="w-full rounded-lg" />${caption ? `<figcaption class="text-center text-sm text-gray-500 mt-2">${caption}</figcaption>` : ''}</figure>`;
        break;

      case 'callout':
        const calloutText = richTextToHtml(content.rich_text);
        const emoji = content.icon?.emoji || '💡';
        html += `<div class="bg-gray-50 border-l-4 border-gray-400 p-4 my-6 flex items-start"><span class="mr-3 text-xl">${emoji}</span><div class="text-gray-700">${calloutText}</div></div>`;
        break;

      case 'toggle':
        const toggleText = richTextToHtml(content.rich_text);
        const toggleChildren = block.children ? blocksToHtml(block.children) : '';
        html += `<details class="my-4"><summary class="cursor-pointer font-medium text-gray-900">${toggleText}</summary><div class="mt-2 pl-4">${toggleChildren}</div></details>`;
        break;

      case 'bookmark':
        const bookmarkUrl = content.url;
        html += `<a href="${bookmarkUrl}" target="_blank" rel="noopener noreferrer" class="block my-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-blue-600 hover:text-blue-800 break-all">${bookmarkUrl}</a>`;
        break;

      case 'video':
        if (content.type === 'external') {
          const videoUrl = content.external.url;
          if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
            const videoId = videoUrl.includes('youtu.be')
              ? videoUrl.split('/').pop()?.split('?')[0]
              : new URL(videoUrl).searchParams.get('v');
            html += `<div class="my-8 aspect-video"><iframe src="https://www.youtube.com/embed/${videoId}" class="w-full h-full rounded-lg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
          }
        }
        break;

      case 'embed':
        html += `<iframe src="${content.url}" class="w-full my-6 rounded-lg" height="400" frameborder="0"></iframe>`;
        break;
    }

    i++;
  }

  return html;
}
