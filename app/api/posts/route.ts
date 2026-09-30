import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Post from '@/models/Post';
import '@/models/Category';
import '@/models/User';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get('slug');
    const region = searchParams.get('region');
    const category = searchParams.get('category');
    const division = searchParams.get('division');
    const featured = searchParams.get('featured');

    if (slug) {
      const post = await Post.findOne({ slug, status: 'published' })
        .populate('category')
        .populate('author', 'name email avatar bio');
      if (!post) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }
      return NextResponse.json({ post });
    }

    const filter: any = { status: 'published' };
    if (region) filter.region = region;
    if (featured === 'true') filter.featured = true;

    const posts = await Post.find(filter)
      .populate('category')
      .populate('author', 'name email avatar bio')
      .sort({ publishedAt: -1 });

    return NextResponse.json({
      count: posts.length,
      posts,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
