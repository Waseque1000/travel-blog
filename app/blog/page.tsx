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
  title: "Field Dispatches & Territorial Archive | Wasee On The Go",
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
    { label: "All Dossiers (9)", slug: "" },
    { label: "Adventure & Wilds", slug: "adventure" },
    { label: "Coastal & Coral", slug: "beach" },
    { label: "High Ridges", slug: "mountain" },
    { label: "Tea & Swamps", slug: "nature" },
    { label: "UNESCO Heritage", slug: "heritage" },
  ];

  const divisions = [
    { label: "All (20)", slug: "", count: 20 },
    { label: "Asia & Pacific", slug: "asia", count: 6 },
    { label: "Europe", slug: "europe", count: 6 },
    { label: "Scandinavia", slug: "scandinavia", count: 3 },
    { label: "Americas", slug: "americas", count: 3 },
    { label: "North Africa", slug: "africa", count: 2 },
  ];

  const leadPost = allPosts.find((p) => p.slug === "10-day-japan-itinerary") || allPosts[0];

  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-[#fcf9f4] pt-20">
        {/* 1. Archive Cinematic Hero */}
        <section className="relative w-full py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-24 bg-[#0c1815] text-white overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0c1815]/90 to-[#0c1815] z-0" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAj6w5-wfrzCkNXp1TPvu8dbftR965O8AsworziSc3yeUtnmhi0a0k8GlmHDq3gbuB5FeR0nwe3OdMnQ8pOQfvWGPBqm9-aTsHZq0nn5R6Dmn1oR0cbloFATNGysPg0sb6vlnX7zHGzqcMWOcXh8F7CJ_aBz0jXerWQyuwineXU7ZzgzxzLu9PhNBU6siJB_e-ti_EEclemDoWsg7j1u47sqk3q9Lto-brDUCpYbFWjb7RsHzhNGYE=w1600-rw')`,
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            {/* Live Archive Pulse Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#005c55]/40 border border-[#80d5cb]/30 backdrop-blur-md shadow-lg mb-5">
              <span className="w-2 h-2 rounded-full bg-[#80d5cb] shadow-[0_0_10px_#80d5cb]" />
              <span className="text-[11px] font-bold tracking-[1.5px] text-[#9cf2e8] uppercase">
                THE OFFICIAL WAYFARER ARCHIVE · 20 VERIFIED EXPEDITIONS
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-3xl sm:text-5xl md:text-6xl font-serif text-white leading-tight font-bold tracking-tight mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Field Dispatches, Scenic Routes &amp; Global Dossiers.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl font-light mb-8 leading-relaxed">
              Comprehensive, ground-verified navigational dossiers across international frontiers. Scenic railways, alpine ascents, cultural heritage, and high-resolution route guides compiled on the road.
            </p>

            {/* Search Input Bar */}
            <form action="/blog" method="GET" className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 flex items-center gap-3 shadow-2xl mb-6">
              <span className="material-symbols-outlined text-[#80d5cb] text-2xl pl-2">search</span>
              <input
                type="text"
                name="q"
                defaultValue={q || ""}
                placeholder="Search by destination, country (e.g. Japan, Iceland, Swiss Alps)..."
                className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/50 text-sm sm:text-base font-normal"
              />
              {category && <input type="hidden" name="category" value={category} />}
              {division && <input type="hidden" name="division" value={division} />}
              {region && <input type="hidden" name="region" value={region} />}
              <button
                type="submit"
                className="bg-[#005c55] hover:bg-[#004842] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors shrink-0"
              >
                Search
              </button>
            </form>

            {/* Archetype Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl">
              {categories.map((cat) => {
                const isActive = (!category && cat.slug === "") || category === cat.slug;
                return (
                  <Link
                    key={cat.label}
                    href={`/blog?${new URLSearchParams({
                      ...(region ? { region } : {}),
                      ...(division ? { division } : {}),
                      ...(cat.slug ? { category: cat.slug } : {}),
                      ...(q ? { q } : {}),
                    }).toString()}`}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-[#005c55] text-white border border-[#80d5cb] shadow-md"
                        : "bg-white/5 text-white/80 border border-white/15 hover:bg-white/10"
                    }`}
                  >
                    {cat.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* 2. Lead Bento Feature Spotlight */}
        {!category && !division && !q && leadPost && (
          <section className="w-full px-4 sm:px-8 md:px-12 lg:px-24 pt-12 pb-6">
            <div className="max-w-7xl mx-auto bg-white rounded-3xl border border-[#005c55]/12 shadow-xl overflow-hidden flex flex-col lg:flex-row">
              {/* Left Image */}
              <Link href={`/blog/${leadPost.slug}`} className="relative lg:w-[52%] min-h-[340px] sm:min-h-[420px] overflow-hidden group">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${leadPost.coverImage}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-5 left-5 flex gap-2">
                  <span className="bg-[#005c55] text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                    EDITOR&apos;S ESSENTIAL CHOICE
                  </span>
                  <span className="bg-black/50 backdrop-blur-md text-[#9cf2e8] text-[11px] font-semibold px-3 py-1 rounded-full border border-white/20">
                    {leadPost.country ? leadPost.country.toUpperCase() : leadPost.division.toUpperCase()}
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white flex justify-between items-end">
                  <div>
                    <div className="font-mono text-xs text-[#9cf2e8] tracking-widest">{leadPost.coordinates || "35°41'N 139°41'E"} · {leadPost.location.toUpperCase()}</div>
                    <div className="text-xs text-white/80 font-light">International Field Dossier</div>
                  </div>
                  <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#005c55] transition-colors">
                    <span className="material-symbols-outlined text-white text-xl">arrow_forward</span>
                  </div>
                </div>
              </Link>

              {/* Right Content */}
              <div className="lg:w-[48%] p-6 sm:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs text-[#6e7977] mb-3 font-medium">
                  <span className="text-[#005c55] font-bold tracking-wider uppercase">EXPEDITION DOSSIER #01</span>
                  <span>·</span>
                  <span>{leadPost.readingTime} MIN READ</span>
                  <span>·</span>
                  <span>OCTOBER 2026</span>
                </div>
                <h2
                  className="text-2xl sm:text-3xl font-serif font-bold text-[#1c1c19] hover:text-[#005c55] transition-colors leading-tight mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  <Link href={`/blog/${leadPost.slug}`}>{leadPost.title}</Link>
                </h2>
                <p className="text-sm sm:text-base text-[#4a5553] leading-relaxed mb-6 font-normal">
                  {leadPost.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {leadPost.tags.map((t) => (
                    <span key={t} className="bg-[#eef6f4] text-[#005c55] text-xs font-semibold px-2.5 py-1 rounded-md">
                      #{t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-4 flex-wrap pt-4 border-t border-[#005c55]/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#005c55] text-white flex items-center justify-center font-bold text-xs">
                      {leadPost.author.initials}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#1c1c19]">{leadPost.author.name}</div>
                      <div className="text-[11px] text-[#6e7977]">{leadPost.author.role}</div>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${leadPost.slug}`}
                    className="inline-flex items-center gap-2 bg-[#005c55] hover:bg-[#004842] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-lg"
                  >
                    <span>Read Complete Dossier</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 3. Division Quick Strip & Dossier Grid */}
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-24 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto">
            {/* Division Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#005c55]/10 mb-8">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1c1c19] mr-1">
                  Filter By Region:
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
                        ...(q ? { q } : {}),
                      }).toString()}`}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                        isActive
                          ? "bg-[#005c55] text-white font-semibold"
                          : "bg-white text-[#4a5553] border border-[#005c55]/15 hover:bg-[#f3eee5]"
                      }`}
                    >
                      {div.label} ({div.count})
                    </Link>
                  );
                })}
              </div>
              <div className="text-xs text-[#6e7977] font-medium">
                Showing {filteredPosts.length} of {allPosts.length} verified route guides
              </div>
            </div>

            {/* Post Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post, idx) => {
                const dossierNum = String(idx + 1).padStart(2, "0");
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-[#005c55]/12 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer block select-none text-inherit no-underline"
                  >
                    <article className="flex flex-col justify-between h-full cursor-pointer">
                      {/* Image Header */}
                      <div className="relative h-56 w-full overflow-hidden block cursor-pointer">
                        <div
                          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                          style={{ backgroundImage: `url('${post.coverImage}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                        <div className="absolute top-3.5 left-3.5 flex gap-1.5 pointer-events-none">
                          <span className="bg-[#005c55] text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                            {post.category.name}
                          </span>
                          <span className="bg-black/50 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/20">
                            {post.division}
                          </span>
                        </div>
                        <div className="absolute bottom-3 left-3.5 right-3.5 flex justify-between items-center text-white text-[11px] font-mono pointer-events-none">
                          <span>{post.coordinates || post.location}</span>
                          <span>{post.readingTime} min read</span>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="p-6 flex-1 flex flex-col justify-between cursor-pointer">
                        <div className="pointer-events-none">
                          <div className="text-[11px] font-bold tracking-wider text-[#8a9391] uppercase mb-2">
                            DOSSIER #{dossierNum} · {post.division.toUpperCase()}
                          </div>
                          <h3
                            className="text-xl font-serif font-bold text-[#1c1c19] group-hover:text-[#005c55] transition-colors leading-snug mb-2.5"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {post.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#525e5b] line-clamp-3 leading-relaxed mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mb-5">
                            {post.tags.slice(0, 3).map((t) => (
                              <span key={t} className="bg-[#005c55]/5 text-[#005c55] text-[11px] font-semibold px-2 py-0.5 rounded">
                                #{t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Card Action Footer */}
                        <div className="pt-4 border-t border-[#005c55]/8 flex items-center justify-between pointer-events-none">
                          <span className="text-xs text-[#788481] font-medium">October 2026</span>
                          <span
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#005c55] group-hover:text-[#af4c00] group-hover:gap-2.5 transition-all"
                          >
                            <span>Read Guide</span>
                            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-[#005c55]/20 p-8">
                <span className="material-symbols-outlined text-5xl text-[#8a9391] mb-3">travel_explore</span>
                <h4 className="text-xl font-serif font-bold text-[#1c1c19] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  No Corresponding Dossiers Found
                </h4>
                <p className="text-sm text-[#6e7977] mb-4">Try broadening your search term or reset filters to display all 9 verified routes.</p>
                <Link
                  href="/blog"
                  className="inline-block bg-[#005c55] text-white px-5 py-2.5 rounded-lg text-xs font-semibold"
                >
                  Reset All Filters
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* 4. Authority Metrics Strip */}
        <section className="w-full bg-[#f3eee5] py-12 px-4 sm:px-8 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-2xl border border-[#005c55]/10 shadow-sm">
              <div className="text-4xl font-serif font-bold text-[#005c55] mb-1.5" style={{ fontFamily: "var(--font-playfair)" }}>9 / 9</div>
              <div className="text-xs font-bold tracking-wider text-[#1c1c19] uppercase mb-1">Verified Expeditions</div>
              <div className="text-xs text-[#6e7977]">Covering all major geopolitical divisions</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#005c55]/10 shadow-sm">
              <div className="text-4xl font-serif font-bold text-[#005c55] mb-1.5" style={{ fontFamily: "var(--font-playfair)" }}>1,200+ KM</div>
              <div className="text-xs font-bold tracking-wider text-[#1c1c19] uppercase mb-1">Trails &amp; Waterways</div>
              <div className="text-xs text-[#6e7977]">Personally chartered &amp; hiked on foot</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#005c55]/10 shadow-sm">
              <div className="text-4xl font-serif font-bold text-[#005c55] mb-1.5" style={{ fontFamily: "var(--font-playfair)" }}>100%</div>
              <div className="text-xs font-bold tracking-wider text-[#1c1c19] uppercase mb-1">Indigenous Verification</div>
              <div className="text-xs text-[#6e7977]">Direct tribal &amp; local boatman contacts</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#005c55]/10 shadow-sm">
              <div className="text-4xl font-serif font-bold text-[#af4c00] mb-1.5" style={{ fontFamily: "var(--font-playfair)" }}>Zero</div>
              <div className="text-xs font-bold tracking-wider text-[#1c1c19] uppercase mb-1">Sponsored Fluff</div>
              <div className="text-xs text-[#6e7977]">Unvarnished, objective navigational notes</div>
            </div>
          </div>
        </section>

        {/* 5. Wayfarer Gazette Newsletter */}
        <section className="w-full bg-[#0c1815] py-16 px-4 sm:px-8 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto bg-[#005c55] rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-white">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-[#9cf2e8] text-[11px] font-bold tracking-wider uppercase mb-3.5">
                ✉️ PRIVATE NAVIGATIONAL INTELLIGENCE
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold leading-tight mb-2.5" style={{ fontFamily: "var(--font-playfair)" }}>
                Get Secret Waypoint Logs in Your Inbox.
              </h3>
              <p className="text-sm text-white/85 font-light leading-relaxed mb-4">
                Private offline coordinate packages, boatman direct telephone logs, and early warnings on seasonal weather changes delivered once a month.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-[#a3faef]">
                <span>✓ Offline KML / GPX Trails</span>
                <span>✓ Hidden Mangrove Campsites</span>
                <span>✓ Zero Marketing Noise</span>
              </div>
            </div>
            <div className="w-full lg:max-w-md">
              <form action="/contact" method="GET" className="flex flex-col gap-2.5">
                <div className="flex gap-2.5 flex-wrap sm:flex-nowrap">
                  <input
                    type="email"
                    placeholder="Your primary field email..."
                    required
                    className="flex-1 min-w-[200px] px-4 py-3.5 rounded-xl bg-white text-[#1c1c19] text-sm outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#af4c00] hover:bg-[#933f00] text-white px-6 py-3.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-colors"
                  >
                    Subscribe Free
                  </button>
                </div>
                <div className="font-serif italic text-xs text-white/70" style={{ fontFamily: "var(--font-playfair)" }}>
                  Strict confidentiality. We never sell your data or share your address.
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
