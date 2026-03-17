import type { BlogArticle, SocialLink } from '../../services/blogService';

export interface ArticleData {
  slug: string;
  category: string;
  title: string;
  authorInitials: string;
  authorName: string;
  authorRole: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
  socialLinks: SocialLink[];
}

export function mapApiToArticle(post: BlogArticle): ArticleData {
  return {
    slug: post.slug,
    category: post.category,
    title: post.title,
    authorInitials: post.author?.initials || '',
    authorName: post.author?.name || '',
    authorRole: post.author?.role || '',
    date: post.date,
    readTime: post.readTime,
    tags: post.tags || [],
    content: post.content || '',
    socialLinks: post.socialLinks || [],
  };
}

function processInline(text: string): string {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

export function markdownToHtml(md: string): string {
  if (!md) return '';
  const lines = md.split('\n');
  let html = '';
  let inList = false;
  let listTag = 'ul';

  function closeList() {
    if (inList) {
      html += `</${listTag}>`;
      inList = false;
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();

    if (!trimmed) {
      closeList();
      continue;
    }

    if (trimmed.startsWith('## ')) {
      closeList();
      html += `<h2>${processInline(trimmed.slice(3))}</h2>`;
      continue;
    }

    if (trimmed.startsWith('> ')) {
      closeList();
      const quoteText = trimmed.slice(2).replace(/^[""\u201C]|[""\u201D]$/g, '');
      html += `<div class="article-callout"><p>\u201C${processInline(quoteText)}\u201D</p></div>`;
      continue;
    }

    if (trimmed.startsWith('- **') || trimmed.startsWith('- ')) {
      if (!inList || listTag !== 'ul') {
        closeList();
        html += '<ul>';
        inList = true;
        listTag = 'ul';
      }
      html += `<li>${processInline(trimmed.slice(2))}</li>`;
      continue;
    }

    const olMatch = trimmed.match(/^(\d+)\.\s/);
    if (olMatch) {
      if (!inList || listTag !== 'ol') {
        closeList();
        html += '<ol>';
        inList = true;
        listTag = 'ol';
      }
      html += `<li>${processInline(trimmed.slice(olMatch[0].length))}</li>`;
      continue;
    }

    closeList();
    html += `<p>${processInline(trimmed)}</p>`;
  }

  closeList();
  return html;
}
