import dbConnect from './mongodb';
import Post from '@/models/Post';
import Category from '@/models/Category';
import User from '@/models/User';
import { bangladeshPosts, BlogPost } from './data/posts';
import { fetchWordPressPosts, fetchWordPressPostBySlug } from './wordpress';

export async function fetchAllPosts(): Promise<BlogPost[]> {
  // Base list of verified posts
  const postMap = new Map<string, BlogPost>();
  for (const post of bangladeshPosts) {
    postMap.set(post.slug, post);
  }

  // 1. Try WordPress REST API if configured
  try {
    const wpPosts = await fetchWordPressPosts();
    if (wpPosts && wpPosts.length > 0) {
      for (const wp of wpPosts) {
        if (!postMap.has(wp.slug)) {
          postMap.set(wp.slug, wp);
        }
      }
    }
  } catch (err) {
    // WordPress not configured or unreachable, continue
  }

  // 2. Try MongoDB for any custom user-added posts
  try {
    const conn = await dbConnect();
    if (conn) {
      const docs = await Post.find({ status: 'published' })
        .populate('category')
        .populate('author')
        .sort({ publishedAt: -1 })
        .lean();

      if (docs && docs.length > 0) {
        for (const doc of docs as any[]) {
          // If this doc is already in postMap, keep the curated one; otherwise add
          if (!postMap.has(doc.slug)) {
            postMap.set(doc.slug, {
              id: doc._id.toString(),
              title: doc.title,
              slug: doc.slug,
              category: {
                name: doc.category?.name || 'Exploration',
                slug: doc.category?.slug || 'exploration',
              },
              tags: doc.tags || [],
              region: doc.region || 'international',
              country: doc.country || 'Global',
              location: doc.cityOrDistrict || 'Global Frontier',
              cityOrDistrict: doc.cityOrDistrict || 'Global',
              division: doc.cityOrDistrict?.split(',').pop()?.trim() || 'Global',
              readingTime: doc.readingTime || 5,
              views: doc.views || 0,
              featured: Boolean(doc.featured),
              status: doc.status || 'published',
              publishedAt: doc.publishedAt ? new Date(doc.publishedAt).toISOString().split('T')[0] : '2026-10-01',
              excerpt: doc.excerpt || '',
              coverImage: doc.coverImage || '',
              gallery: doc.gallery || [],
              author: {
                name: doc.author?.name || 'Wasee Arafat',
                role: doc.author?.bio || 'Editorial Director',
                initials: (doc.author?.name || 'WA').split(' ').map((n: string) => n[0]).join(''),
              },
              content: doc.content || '',
            });
          }
        }
      }
    }
  } catch (error) {
    console.warn('Database fetch optional check failed:', error);
  }

  return Array.from(postMap.values());
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  // 1. Direct hit on curated bank (fastest, zero-latency)
  const staticPost = bangladeshPosts.find((p) => p.slug === slug);
  if (staticPost) {
    return staticPost;
  }

  // 2. Try WordPress REST API if configured
  try {
    const wpPost = await fetchWordPressPostBySlug(slug);
    if (wpPost) {
      return wpPost;
    }
  } catch (err) {
    // WordPress not configured
  }

  // 3. Try MongoDB
  try {
    const conn = await dbConnect();
    if (!conn) {
      return null;
    }

    const doc = await Post.findOne({ slug, status: 'published' })
      .populate('category')
      .populate('author')
      .lean();

    if (!doc) {
      return null;
    }

    const anyDoc: any = doc;
    return {
      id: anyDoc._id.toString(),
      title: anyDoc.title,
      slug: anyDoc.slug,
      category: {
        name: anyDoc.category?.name || 'Exploration',
        slug: anyDoc.category?.slug || 'exploration',
      },
      tags: anyDoc.tags || [],
      region: anyDoc.region || 'international',
      country: anyDoc.country || 'Global',
      location: anyDoc.cityOrDistrict || 'Global Frontier',
      cityOrDistrict: anyDoc.cityOrDistrict || 'Global',
      division: anyDoc.cityOrDistrict?.split(',').pop()?.trim() || 'Global',
      readingTime: anyDoc.readingTime || 5,
      views: anyDoc.views || 0,
      featured: Boolean(anyDoc.featured),
      status: anyDoc.status || 'published',
      publishedAt: anyDoc.publishedAt ? new Date(anyDoc.publishedAt).toISOString().split('T')[0] : '2026-10-01',
      excerpt: anyDoc.excerpt || '',
      coverImage: anyDoc.coverImage || '',
      gallery: anyDoc.gallery || [],
      author: {
        name: anyDoc.author?.name || 'Wasee Arafat',
        role: anyDoc.author?.bio || 'Editorial Director',
        initials: (anyDoc.author?.name || 'WA').split(' ').map((n: string) => n[0]).join(''),
      },
      content: anyDoc.content || '',
    };
  } catch (error) {
    console.warn('Database fetch by slug failed:', error);
    return null;
  }
}
