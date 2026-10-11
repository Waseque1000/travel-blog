import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchPostBySlug, fetchAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return {
      title: "Expedition Not Found | Wasee On The Go",
      description: "The requested expedition dossier could not be located.",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://waseeonthego.com";
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;
  const keywords = [
    ...(post.tags || []),
    post.country,
    post.location,
    post.category.name,
    "travel guide",
    "itinerary",
    "travel tips",
    "Wasee On The Go",
  ].filter(Boolean);

  return {
    title: `${post.title} — Travel Guide | Wasee On The Go`,
    description: post.excerpt,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${post.title} — Comprehensive Expedition Guide`,
      description: post.excerpt,
      url: canonicalUrl,
      siteName: "Wasee On The Go",
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author?.name || "Wasee Arafat"],
      tags: post.tags,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 800,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      creator: "@waseeonthego",
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };
}

export default async function PostDetailPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await fetchAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      // Prioritize same category or same country
      const scoreA = (a.category.slug === post.category.slug ? 2 : 0) + (a.country === post.country ? 2 : 0);
      const scoreB = (b.category.slug === post.category.slug ? 2 : 0) + (b.country === post.country ? 2 : 0);
      return scoreB - scoreA;
    })
    .slice(0, 3);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://waseeonthego.com";
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  // JSON-LD Schema: BlogPosting & BreadcrumbList for Google/Bing Rich Results
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": [post.coverImage, ...(post.gallery || [])],
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author.name || "Wasee Arafat",
      "jobTitle": post.author.role || "Editorial Director",
      "url": `${siteUrl}/about`,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Wasee On The Go",
      "url": siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo-icon.png`,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl,
    },
    "keywords": (post.tags || []).join(", "),
    "articleSection": post.category.name,
    "inLanguage": "en-US",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Dispatches & Guides",
        "item": `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.category.name,
        "item": `${siteUrl}/blog?category=${post.category.slug}`,
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": post.title,
        "item": postUrl,
      },
    ],
  };

  return (
    <>
      {/* Inject JSON-LD Structured Data for Search Engine Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />
      <main className="w-full min-h-screen bg-[--surface] pt-20">
        {/* ═══════════════════════════════════════
            ARTICLE HERO
        ══════════════════════════════════════ */}
        <section className="relative w-full min-h-[55vh] md:min-h-[70vh] flex flex-col justify-end -mt-20 pt-28 sm:pt-32 pb-10 sm:pb-14 px-4 sm:px-8 md:px-12 lg:px-24 overflow-hidden bg-[#0c1815]">
          {/* Background Image & Atmospheric Gradients */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"
            style={{ backgroundImage: `url('${post.coverImage}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35" />
            <div className="absolute inset-0 bg-[#00201d]/30 mix-blend-multiply" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl">
            {/* Breadcrumb & Badges */}
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 mb-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#80d5cb] border border-white/20 text-xs font-semibold uppercase tracking-wider hover:bg-black/80 transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span className="material-symbols-outlined text-[14px]">public</span>
                {post.country || post.division || "Global"}
              </Link>
              <span className="text-white/40">/</span>
              <Link
                href={`/blog?category=${post.category.slug}`}
                className="px-3 py-1 rounded-full bg-[#005c55]/70 text-[#9cf2e8] border border-[#80d5cb]/30 text-xs font-semibold uppercase tracking-wider hover:bg-[#005c55] transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {post.category.name}
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-white/80 text-xs font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">location_on</span>
                {post.location}
              </span>
            </nav>

            {/* Title */}
            <h1
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-serif leading-[1.15] tracking-tight drop-shadow-md"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {post.title}
            </h1>

            {/* Excerpt */}
            <p
              className="mt-3 sm:mt-5 text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-3xl drop-shadow"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {post.excerpt}
            </p>

            {/* Author & Meta Bar */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#005c55] border border-[#80d5cb]/40 flex items-center justify-center font-semibold text-white shadow-md text-sm">
                  {post.author.initials}
                </div>
                <div>
                  <span className="font-semibold text-white block text-sm sm:text-base">
                    {post.author.name}
                  </span>
                  <span className="text-xs text-white/70 italic" style={{ fontFamily: "var(--font-playfair)" }}>
                    {post.author.role}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/80">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px] sm:text-[16px] text-[#80d5cb]">calendar_today</span>
                  <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px] sm:text-[16px] text-[#80d5cb]">timer</span>
                  {post.readingTime} min read
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px] sm:text-[16px] text-[#80d5cb]">visibility</span>
                  {post.views.toLocaleString()} reads
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            MAIN ARTICLE BODY & SIDEBAR
        ══════════════════════════════════════ */}
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-24 py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Main Content Column */}
            <article className="lg:col-span-8 flex flex-col">
              {/* Back Link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[--primary] hover:text-[--tertiary] transition-colors mb-8"
              >
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                Back to All Expeditions &amp; Field Guides
              </Link>

              {/* Formatted Content */}
              <div
                className="prose prose-lg max-w-none text-[--on-surface] leading-relaxed
                  prose-headings:font-serif prose-headings:text-[--on-surface]
                  prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3
                  prose-p:mb-4 prose-p:text-[--on-surface-variant] prose-p:text-base md:prose-p:text-lg
                  prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6 prose-li:my-1.5 prose-li:text-[--on-surface-variant]
                  [&_.lead]:text-xl [&_.lead]:font-light [&_.lead]:text-[--on-surface] [&_.lead]:border-l-4 [&_.lead]:border-[--primary] [&_.lead]:pl-4 [&_.lead]:py-1
                  [&_.dispatch-callout]:my-8 [&_.dispatch-callout]:p-6 [&_.dispatch-callout]:rounded-2xl [&_.dispatch-callout]:bg-[--surface-container-low] [&_.dispatch-callout]:border [&_.dispatch-callout]:border-[--outline-variant]/50
                  [&_.dispatch-callout_h4]:text-lg [&_.dispatch-callout_h4]:font-bold [&_.dispatch-callout_h4]:text-[--primary] [&_.dispatch-callout_h4]:mb-3 [&_.dispatch-callout_h4]:flex [&_.dispatch-callout_h4]:items-center [&_.dispatch-callout_h4]:gap-2
                "
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Photo Gallery If Present */}
              {post.gallery && post.gallery.length > 0 && (
                <div className="mt-12 pt-8 border-t border-[--outline-variant]/30">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="material-symbols-outlined text-[--primary] text-xl">photo_library</span>
                    <h3 className="text-2xl font-serif text-[--on-surface]" style={{ fontFamily: "var(--font-playfair)" }}>
                      High-Definition Field Photography
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {post.gallery.map((img, idx) => (
                      <div
                        key={idx}
                        className="group relative h-52 rounded-xl overflow-hidden shadow-md bg-[--surface-container-low]"
                      >
                        <img
                          src={img}
                          alt={`${post.title} scene ${idx + 1}`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags Section */}
              <div className="mt-10 pt-6 border-t border-[--outline-variant]/30 flex flex-wrap items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[--outline] mr-2">
                  Dossier Tags:
                </span>
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?q=${encodeURIComponent(tag)}`}
                    className="px-3 py-1 rounded-full bg-[--surface-container-low] border border-[--outline-variant]/40 text-xs font-medium text-[--on-surface-variant] hover:border-[--primary] hover:text-[--primary] transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </article>

            {/* Sidebar Dossier Column */}
            <aside className="lg:col-span-4 flex flex-col gap-6">
              {/* Expedition Dossier Card */}
              <div className="p-6 rounded-2xl bg-[--surface-container-lowest] border border-[--outline-variant]/40 shadow-xl">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[--outline-variant]/30">
                  <span className="material-symbols-outlined text-[--primary] text-xl">travel_explore</span>
                  <h3
                    className="text-base font-bold uppercase tracking-wider text-[--on-surface]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Expedition Dossier
                  </h3>
                </div>

                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-wider font-semibold text-[--outline]">Territory &amp; Sector</dt>
                    <dd className="font-medium text-[--on-surface] mt-0.5">{post.location}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider font-semibold text-[--outline]">Country</dt>
                    <dd className="font-medium text-[--on-surface] mt-0.5">{post.country}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider font-semibold text-[--outline]">Category Archetype</dt>
                    <dd className="font-medium text-[--primary] mt-0.5">{post.category.name}</dd>
                  </div>
                  {post.coordinates && (
                    <div>
                      <dt className="text-xs uppercase tracking-wider font-semibold text-[--outline]">GPS Coordinates</dt>
                      <dd className="font-mono text-xs text-[--on-surface] mt-0.5">{post.coordinates}</dd>
                    </div>
                  )}
                  {post.elevation && (
                    <div>
                      <dt className="text-xs uppercase tracking-wider font-semibold text-[--outline]">Elevation Profile</dt>
                      <dd className="font-medium text-[--on-surface] mt-0.5">{post.elevation}</dd>
                    </div>
                  )}
                  {post.bestTime && (
                    <div>
                      <dt className="text-xs uppercase tracking-wider font-semibold text-[--outline]">Prime Window</dt>
                      <dd className="font-medium text-[#005c55] mt-0.5">{post.bestTime}</dd>
                    </div>
                  )}
                  {post.permits && (
                    <div>
                      <dt className="text-xs uppercase tracking-wider font-semibold text-[--outline]">Access &amp; Entry Requirements</dt>
                      <dd className="font-medium text-[--tertiary] mt-0.5">{post.permits}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-xs uppercase tracking-wider font-semibold text-[--outline]">Reading Cadence</dt>
                    <dd className="font-medium text-[--on-surface] mt-0.5">{post.readingTime} minutes</dd>
                  </div>
                </dl>

                {/* Field Advisory notice */}
                <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed">
                  <strong className="block font-semibold mb-1">Wayfarer Advisory:</strong>
                  Permit slots, shuttle passes, entry fees, and mountain weather windows adjust seasonally. Always verify current conditions with official park authorities before departure.
                </div>
              </div>

              {/* Newsletter / Dispatch Subscribe */}
              <div className="p-6 rounded-2xl bg-[#0c1815] text-white shadow-xl flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold tracking-widest text-[#80d5cb] uppercase">
                    Expedition Gazette
                  </span>
                  <h4 className="text-xl font-serif font-medium mt-1 text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                    Never miss a route log or hidden trail.
                  </h4>
                  <p className="text-xs text-white/80 mt-2 leading-relaxed">
                    Receive confidential itinerary dossiers, flight deals, and verified trail logs directly in your inbox twice a month.
                  </p>
                </div>
                <div className="mt-5 flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder="Your expedition dispatch email..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-[#80d5cb]"
                  />
                  <button className="w-full py-2.5 rounded-xl bg-[--primary-container] hover:bg-[#005c55] text-white font-semibold text-sm transition-colors shadow">
                    Join The Expedition Circle
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            RELATED EXPEDITIONS
        ══════════════════════════════════════ */}
        <section className="w-full bg-[--surface-container-low] py-14 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-semibold tracking-widest text-[--primary] uppercase">
                  Continue The Journey
                </span>
                <h3 className="text-3xl font-serif text-[--on-surface] mt-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  Related Expedition Dossiers
                </h3>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-[--primary] hover:text-[--tertiary]"
              >
                All 30 Guides <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <Link key={rel.slug} href={`/blog/${rel.slug}`}>
                  <article className="group rounded-2xl overflow-hidden bg-[--surface-container-lowest] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                    <div className="relative h-48 overflow-hidden bg-[--surface-container-low]">
                      <img
                        src={rel.coverImage}
                        alt={rel.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[--surface-container-lowest]/85 backdrop-blur-md text-[0.75rem] tracking-[0.12em] font-semibold text-[--on-surface]">
                        {rel.category.name}
                      </span>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-xs text-[--outline] block">{rel.location}</span>
                        <h4
                          className="text-lg font-serif text-[--on-surface] group-hover:text-[--primary] transition-colors mt-1 font-semibold"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {rel.title}
                        </h4>
                        <p className="text-xs text-[--on-surface-variant] mt-2 line-clamp-2">
                          {rel.excerpt}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-[--outline-variant]/30 flex items-center justify-between text-xs text-[--outline]">
                        <span>{rel.readingTime} min read</span>
                        <span className="flex items-center gap-1 font-medium text-[--primary]">
                          Read Dossier <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
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
