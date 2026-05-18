import assert from 'node:assert/strict';
import test from 'node:test';

import { blocksToHtml } from './notion.ts';

test('renders Notion file image blocks through the local image proxy', () => {
  const html = blocksToHtml([
    {
      id: '4874dc2e-203b-4d5c-a01a-5fe5b547aadb',
      type: 'image',
      image: {
        type: 'file',
        file: {
          url: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/signed-image.jpeg?X-Amz-Expires=3600',
        },
        caption: [],
      },
    },
  ]);

  assert.match(
    html,
    /<img src="\/api\/notion-image\/4874dc2e-203b-4d5c-a01a-5fe5b547aadb"/,
  );
  assert.doesNotMatch(html, /prod-files-secure\.s3/);
  assert.doesNotMatch(html, /X-Amz-Expires/);
});

test('keeps external Notion image URLs unchanged', () => {
  const html = blocksToHtml([
    {
      id: 'external-image-block',
      type: 'image',
      image: {
        type: 'external',
        external: {
          url: 'https://example.com/image.jpg',
        },
        caption: [],
      },
    },
  ]);

  assert.match(html, /<img src="https:\/\/example\.com\/image\.jpg"/);
});
