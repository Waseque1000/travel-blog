import dbConnect from './mongodb';
import Post from '@/models/Post';
import Category from '@/models/Category';
import User from '@/models/User';
import { bangladeshPosts, BlogPost } from './data/posts';
import { fetchWordPressPosts, fetchWordPressPostBySlug } from './wordpress';

export async function fetchAllPosts(): Promise<BlogPost[]> {
  // 1. Try WordPress REST API if configured
  try {
    const wpPosts = await fetchWordPressPosts();
    if (wpPosts && wpPosts.length > 0) {
      return wpPosts;
    }
  } catch (err) {
    console.warn('WordPress fetch failed, trying database/fallback:', err);
  }

  // 2. Try MongoDB
  try {
    const conn = await dbConnect();
    if (!conn) {
      return bangladeshPosts;
    }

    const docs = await Post.find({ status: 'published' })
      .populate('category')
      .populate('author')
      .sort({ publishedAt: -1 })
      .lean();

    if (!docs || docs.length === 0) {
      return bangladeshPosts;
    }

    return docs.map((doc: any) => ({
      id: doc._id.toString(),
      title: doc.title,
      slug: doc.slug,
      category: {
        name: doc.category?.name || 'Exploration',
        slug: doc.category?.slug || 'exploration',
      },
      tags: doc.tags || [],
      region: doc.region || 'bangladesh',
      country: doc.country || 'Bangladesh',
      location: doc.cityOrDistrict || 'Bangladesh',
      cityOrDistrict: doc.cityOrDistrict || 'Bangladesh',
      division: doc.cityOrDistrict?.split(',').pop()?.trim() || 'Bangladesh',
      readingTime: doc.readingTime || 4,
      views: doc.views || 0,
      featured: Boolean(doc.featured),
      status: doc.status || 'published',
      publishedAt: doc.publishedAt ? new Date(doc.publishedAt).toISOString().split('T')[0] : '2026-03-01',
      excerpt: doc.excerpt || '',
      coverImage: doc.coverImage || '',
      gallery: doc.gallery || [],
      author: {
        name: doc.author?.name || 'Tanvir Ahmed',
        role: doc.author?.bio || 'Editorial Correspondent',
        initials: (doc.author?.name || 'TA').split(' ').map((n: string) => n[0]).join(''),
      },
      content: doc.content || '',
    }));
  } catch (error) {
    console.warn('Database fetch failed, falling back to static posts:', error);
    return bangladeshPosts;
  }
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  // 1. Try WordPress REST API if configured
  try {
    const wpPost = await fetchWordPressPostBySlug(slug);
    if (wpPost) {
      return wpPost;
    }
  } catch (err) {
    console.warn('WordPress fetch by slug failed, checking database:', err);
  }

  // 2. Try MongoDB
  try {
    const conn = await dbConnect();
    if (!conn) {
      return bangladeshPosts.find((p) => p.slug === slug) || null;
    }

    const doc = await Post.findOne({ slug, status: 'published' })
      .populate('category')
      .populate('author')
      .lean();

    if (!doc) {
      return bangladeshPosts.find((p) => p.slug === slug) || null;
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
      region: anyDoc.region || 'bangladesh',
      country: anyDoc.country || 'Bangladesh',
      location: anyDoc.cityOrDistrict || 'Bangladesh',
      cityOrDistrict: anyDoc.cityOrDistrict || 'Bangladesh',
      division: anyDoc.cityOrDistrict?.split(',').pop()?.trim() || 'Bangladesh',
      readingTime: anyDoc.readingTime || 4,
      views: anyDoc.views || 0,
      featured: Boolean(anyDoc.featured),
      status: anyDoc.status || 'published',
      publishedAt: anyDoc.publishedAt ? new Date(anyDoc.publishedAt).toISOString().split('T')[0] : '2026-03-01',
      excerpt: anyDoc.excerpt || '',
      coverImage: anyDoc.coverImage || '',
      gallery: anyDoc.gallery || [],
      author: {
        name: anyDoc.author?.name || 'Tanvir Ahmed',
        role: anyDoc.author?.bio || 'Lead Expedition Correspondent',
        initials: (anyDoc.author?.name || 'TA').split(' ').map((n: string) => n[0]).join(''),
      },
      content: anyDoc.content || '',
    };
  } catch (error) {
    console.warn('Database fetch by slug failed, using fallback:', error);
    return bangladeshPosts.find((p) => p.slug === slug) || null;
  }
}
