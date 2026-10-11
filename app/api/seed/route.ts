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
            'MongoDB connection not configured. Using static in-memory data bank.',
          count: bangladeshPosts.length,
          posts: bangladeshPosts.map((p) => ({ title: p.title, slug: p.slug })),
        },
        { status: 200 }
      );
    }

    // 1. Ensure default author
    let author = await User.findOne({ email: 'wasee@waseeonthego.com' });
    if (!author) {
      author = await User.create({
        name: 'Wasee Arafat',
        email: 'wasee@waseeonthego.com',
        password: 'demo_password_hash_only',
        role: 'admin',
        bio: 'Editorial Director & Expedition Chronicler covering global frontiers, rail routes, and alpine trails.',
      });
    }

    // 2. Ensure Categories
    const categoryData = [
      { name: 'Destinations & Itineraries', slug: 'destinations-itineraries', description: 'Actionable multi-day roadmaps & city guides', icon: 'map' },
      { name: 'Solo & Budget Travel', slug: 'solo-budget-travel', description: 'Backpacking, hostels, flight hacks & wallet-friendly routes', icon: 'savings' },
      { name: 'Travel Planning & Gear', slug: 'travel-planning-gear', description: 'Packing lists, travel credit cards, apps & logistics', icon: 'backpack' },
      { name: 'Adventure & Wilds', slug: 'adventure-outdoor', description: 'Alpine treks, road trips, wilderness camping & national parks', icon: 'landscape' },
      { name: 'Food & Culture', slug: 'food-culture', description: 'Street eats, culinary rituals, ancient heritage & markets', icon: 'restaurant' },
      { name: 'Travel Philosophy', slug: 'travel-style', description: 'Slow travel, digital nomad life & mindful expeditions', icon: 'menu_book' },
    ];

    const categoryMap = new Map();
    for (const cat of categoryData) {
      let existing = await Category.findOne({ slug: cat.slug });
      if (!existing) {
        existing = await Category.create(cat);
      }
      categoryMap.set(cat.slug, existing._id);
    }

    // 3. Upsert each of the 30 posts
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
      message: `Successfully seeded ${seeded.length} travel posts into MongoDB`,
      seededSlugs: seeded,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
