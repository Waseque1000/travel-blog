import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { fetchAllPosts } from "@/lib/posts";

interface BlogPageProps {
  searchParams: Promise<{
    region?: string;
    division?: string;
    category?: string;
    q?: string;
  }>;
}

export const metadata = {
  title: "Expedition Archive | Bangladesh Travel Blog",
  description: "Comprehensive travel guides, field dispatches, and logistical dossiers across Bangladesh and global frontiers.",
};

export default async function BlogIndexPage({ searchParams }: BlogPageProps) {
  const { region, division, category, q } = await searchParams;
  const allPosts = await fetchAllPosts();

  // Filter posts based on query params
  const filteredPosts = allPosts.filter((post) => {
    if (region && post.region.toLowerCase() !== region.toLowerCase()) {
      return false;
    }
    if (division && !post.division.toLowerCase().includes(division.toLowerCase()) && !post.location.toLowerCase().includes(division.toLowerCase())) {
      return false;
    }
    if (category && post.category.slug.toLowerCase() !== category.toLowerCase()) {
      return false;
    }
    if (q) {
      const query = q.toLowerCase();
      const matchTitle = post.title.toLowerCase().includes(query);
      const matchExcerpt = post.excerpt.toLowerCase().includes(query);
      const matchLocation = post.location.toLowerCase().includes(query);
      const matchTags = post.tags.some((t) => t.toLowerCase().includes(query));
      if (!matchTitle && !matchExcerpt && !matchLocation && !matchTags) {
        return false;
      }
    }
    return true;
  });

  const categories = [
    { label: "All Categories", slug: "" },
    { label: "Beach", slug: "beach" },
    { label: "Mountain", slug: "mountain" },
    { label: "Adventure", slug: "adventure" },
    { label: "Nature", slug: "nature" },
    { label: "Heritage", slug: "heritage" },
  ];

  const divisions = [
    { label: "All Divisions", slug: "" },
    { label: "Chattogram", slug: "chattogram" },
    { label: "Sylhet", slug: "sylhet" },
    { label: "Khulna", slug: "khulna" },
    { label: "Barishal", slug: "barishal" },
    { label: "Rajshahi", slug: "rajshahi" },
  ];

  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-[--surface] pt-20">
        {/* Header Hero */}
        <section className="relative w-full py-10 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-24 bg-[--inverse-surface] text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 z-0" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAj6w5-wfrzCkNXp1TPvu8dbftR965O8AsworziSc3yeUtnmhi0a0k8GlmHDq3gbuB5FeR0nwe3OdMnQ8pOQfvWGPBqm9-aTsHZq0nn5R6Dmn1oR0cbloFATNGysPg0sb6vlnX7zHGzqcMWOcXh8F7CJ_aBz0jXerWQyuwineXU7ZzgzxzLu9PhNBU6siJB_e-ti_EEclemDoWsg7j1u47sqk3q9Lto-brDUCpYbFWjb7RsHzhNGYE')`,
            }}
          />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#005c55]/60 backdrop-blur-sm border border-[#80d5cb]/30 mb-4">
              <span className="material-symbols-outlined text-[#80d5cb] text-sm">collections_bookmark</span>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#9cf2e8]">
                Expedition Archive · Bangladesh Post Bank
              </span>
            </div>
            <h1
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight font-semibold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Field Dispatches &amp; Route Dossiers
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl font-light">
              Nine comprehensive guides across Bangladesh—from the unbroken strands of Cox's Bazar and the mist-laden ridges of Sajek, to ancient UNESCO ruins and primeval mangrove waterways.
            </p>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="sticky top-20 z-30 w-full bg-[--surface-container-lowest]/95 backdrop-blur-md border-b border-[--outline-variant]/30 px-4 sm:px-8 md:px-12 lg:px-24 py-3 sm:py-4 shadow-sm">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              <span className="text-xs font-semibold uppercase tracking-wider text-[--outline] shrink-0 mr-1">
                Category:
              </span>
              {categories.map((cat) => {
                const isActive = (!category && cat.slug === "") || category === cat.slug;
                return (
                  <Link
                    key={cat.label}
                    href={`/blog?${new URLSearchParams({
                      ...(region ? { region } : {}),
                      ...(division ? { division } : {}),
                      ...(cat.slug ? { category: cat.slug } : {}),
                    }).toString()}`}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                      isActive
                        ? "bg-[--primary] text-white"
                        : "bg-[--surface-container-low] text-[--on-surface-variant] hover:bg-[--surface-container]"
                    }`}
                  >
                    {cat.label}
                  </Link>
                );
              })}
            </div>

            {/* Division Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              <span className="text-xs font-semibold uppercase tracking-wider text-[--outline] shrink-0 mr-1">
                Division:
              </span>
              {divisions.map((div) => {
                const isActive = (!division && div.slug === "") || division === div.slug;
                return (
                  <Link
                    key={div.label}
                    href={`/blog?${new URLSearchParams({
                      ...(region ? { region } : {}),
                      ...(category ? { category } : {}),
                      ...(div.slug ? { division: div.slug } : {}),
                    }).toString()}`}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                      isActive
                        ? "bg-[--tertiary-container] text-white"
                        : "bg-[--surface-container-low] text-[--on-surface-variant] hover:bg-[--surface-container]"
                    }`}
                  >
                    {div.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Post Grid */}
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-24 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-[--on-surface-variant]">
                Showing <strong>{filteredPosts.length}</strong> field guides
              </p>
              {(category || division || region || q) && (
                <Link
                  href="/blog"
                  className="text-xs font-semibold text-[--primary] hover:underline flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[14px]">close</span>
                  Clear Filters
                </Link>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <article className="group rounded-2xl overflow-hidden bg-[--surface-container-lowest] border border-[--outline-variant]/30 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                    {/* Cover Image */}
                    <div className="relative h-60 w-full overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${post.coverImage}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[0.75rem] tracking-wider font-semibold text-white border border-white/20">
                          {post.category.name}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                        <span className="flex items-center gap-1 text-white/90">
                          <span className="material-symbols-outlined text-[14px] text-[#80d5cb]">location_on</span>
                          {post.location}
                        </span>
                        <span className="flex items-center gap-1 text-white/90">
                          <span className="material-symbols-outlined text-[14px] text-[#80d5cb]">schedule</span>
                          {post.readingTime} min
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h2
                          className="text-xl font-serif font-semibold text-[--on-surface] group-hover:text-[--primary] transition-colors leading-snug"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {post.title}
                        </h2>
                        <p className="mt-2.5 text-sm text-[--on-surface-variant] line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Footer tags & CTA */}
                      <div className="mt-6 pt-4 border-t border-[--outline-variant]/30 flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 2).map((t) => (
                            <span key={t} className="text-[11px] text-[--outline] bg-[--surface-container-low] px-2 py-0.5 rounded">
                              #{t}
                            </span>
                          ))}
                        </div>
                        <span className="text-xs font-semibold text-[--primary] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                          Read Guide <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
