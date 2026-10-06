import { BlogPost } from './data/posts';

const WP_API_URL = process.env.WORDPRESS_URL || process.env.NEXT_PUBLIC_WORDPRESS_URL;

interface WPPost {
  id: number;
  date: string;
  slug: string;
  status: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: Array<{
      id: number;
      name: string;
      description?: string;
      avatar_urls?: Record<string, string>;
    }>;
    'wp:featuredmedia'?: Array<{
      id: number;
      source_url: string;
      alt_text?: string;
    }>;
    'wp:term'?: Array<
      Array<{
        id: number;
        name: string;
        slug: string;
        taxonomy: string;
      }>
    >;
  };
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>?/gm, '').trim();
}

function calculateReadingTime(content: string): number {
  const words = stripHtml(content).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function transformWPPostToBlogPost(wpPost: WPPost): BlogPost {
  const embedded = wpPost._embedded || {};
  const authorObj = embedded.author?.[0];
  const mediaObj = embedded['wp:featuredmedia']?.[0];
  const terms = embedded['wp:term'] || [];

  const categories = terms[0] || [];
  const tags = terms[1] || [];

  const mainCategory = categories[0] || { name: 'Exploration', slug: 'exploration' };
  const rawExcerpt = wpPost.excerpt?.rendered ? stripHtml(wpPost.excerpt.rendered) : '';
  const rawTitle = wpPost.title?.rendered ? stripHtml(wpPost.title.rendered) : 'Untitled';
  const authorName = authorObj?.name || 'Wasee';
  const authorInitials = authorName
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .toUpperCase() || 'WA';

  return {
    id: `wp-${wpPost.id}`,
    title: rawTitle,
    slug: wpPost.slug,
    category: {
      name: mainCategory.name,
      slug: mainCategory.slug,
    },
    tags: tags.map((t) => t.name),
    region: 'bangladesh',
    country: 'Bangladesh',
    location: mainCategory.name || 'Bangladesh',
    cityOrDistrict: mainCategory.name || 'Bangladesh',
    division: 'Bangladesh',
    readingTime: calculateReadingTime(wpPost.content?.rendered || ''),
    views: 0,
    featured: false,
    status: wpPost.status === 'publish' ? 'published' : 'draft',
    publishedAt: wpPost.date ? wpPost.date.split('T')[0] : new Date().toISOString().split('T')[0],
    excerpt: rawExcerpt,
    coverImage: mediaObj?.source_url || '/placeholder.jpg',
    gallery: mediaObj?.source_url ? [mediaObj.source_url] : [],
    author: {
      name: authorName,
      role: authorObj?.description || 'Traveler & Writer',
      initials: authorInitials,
      avatar: authorObj?.avatar_urls?.['96'] || authorObj?.avatar_urls?.['48'] || undefined,
    },
    content: wpPost.content?.rendered || '',
  };
}

export async function fetchWordPressPosts(limit: number = 20): Promise<BlogPost[] | null> {
  if (!WP_API_URL) {
    return null;
  }

  try {
    const baseUrl = WP_API_URL.replace(/\/+$/, '');
    const endpoint = `${baseUrl}/wp-json/wp/v2/posts?_embed&per_page=${limit}&status=publish`;

    const res = await fetch(endpoint, {
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      console.warn(`[WordPress API] Failed to fetch posts: ${res.status} ${res.statusText}`);
      return null;
    }

    const posts: WPPost[] = await res.json();
    if (!Array.isArray(posts)) {
      return null;
    }

    return posts.map(transformWPPostToBlogPost);
  } catch (err) {
    console.warn('[WordPress API] Fetch error:', err);
    return null;
  }
}

export async function fetchWordPressPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!WP_API_URL) {
    return null;
  }

  try {
    const baseUrl = WP_API_URL.replace(/\/+$/, '');
    const endpoint = `${baseUrl}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`;

    const res = await fetch(endpoint, {
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      console.warn(`[WordPress API] Failed to fetch post by slug: ${res.status} ${res.statusText}`);
      return null;
    }

    const posts: WPPost[] = await res.json();
    if (!Array.isArray(posts) || posts.length === 0) {
      return null;
    }

    return transformWPPostToBlogPost(posts[0]);
  } catch (err) {
    console.warn('[WordPress API] Fetch by slug error:', err);
    return null;
  }
}
