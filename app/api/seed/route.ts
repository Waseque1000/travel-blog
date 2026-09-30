import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Post from '@/models/Post';
import Category from '@/models/Category';
import User from '@/models/User';
import { bangladeshPosts } from '@/lib/data/posts';

export async function GET() {
  try {
    const conn = await dbConnect();
    if (!conn) {
      return NextResponse.json(
        {
          success: false,
          message:
            'MongoDB connection not configured. Using static/in-memory data bank.',
          count: bangladeshPosts.length,
          posts: bangladeshPosts.map((p) => ({ title: p.title, slug: p.slug })),
        },
        { status: 200 }
      );
    }

    // 1. Ensure default author
    let author = await User.findOne({ email: 'editorial@shonartrail.com' });
    if (!author) {
      author = await User.create({
        name: 'Tanvir Ahmed',
        email: 'editorial@shonartrail.com',
        password: 'demo_password_hash_only',
        role: 'admin',
        bio: 'Lead Conservation & Expedition Correspondent covering Bangladesh and global frontiers.',
      });
    }

    // 2. Ensure Categories
    const categoryData = [
      { name: 'Beach', slug: 'beach', description: 'Coasts, sand strands & coral islands', icon: 'surfing' },
      { name: 'Mountain', slug: 'mountain', description: 'Cloud ridges, high trails & indigenous villages', icon: 'landscape' },
      { name: 'Adventure', slug: 'adventure', description: 'Deep mangrove safaris & hill treks', icon: 'explore' },
      { name: 'Nature', slug: 'nature', description: 'Rainforests, freshwater swamps & tea estates', icon: 'forest' },
      { name: 'Heritage', slug: 'heritage', description: 'UNESCO world heritage sites, viharas & medieval mosques', icon: 'temple_buddhist' },
    ];

    const categoryMap = new Map();
    for (const cat of categoryData) {
      let existing = await Category.findOne({ slug: cat.slug });
      if (!existing) {
        existing = await Category.create(cat);
      }
      categoryMap.set(cat.slug, existing._id);
    }

    // 3. Upsert each of the 9 posts
    const seeded = [];
    for (const post of bangladeshPosts) {
      const catId = categoryMap.get(post.category.slug) || null;
      const updated = await Post.findOneAndUpdate(
        { slug: post.slug },
        {
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: post.content,
          coverImage: post.coverImage,
          gallery: post.gallery,
          category: catId,
          tags: post.tags,
          region: post.region,
          country: post.country,
          cityOrDistrict: post.cityOrDistrict,
          readingTime: post.readingTime,
          featured: post.featured,
          status: post.status,
          author: author._id,
          publishedAt: new Date(post.publishedAt),
        },
        { upsert: true, new: true }
      );
      seeded.push(updated.slug);
    }

    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${seeded.length} Bangladesh travel posts into MongoDB`,
      seededSlugs: seeded,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
