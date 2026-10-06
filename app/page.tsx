import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { bangladeshPosts } from "@/lib/data/posts";

// ─── Data ───────────────────────────────────────────────────────────────────

const featuredStories = [
  {
    id: 1,
    category: "JAPAN · ASIA PACIFIC",
    label: "CULTURE & HIGH-SPEED RAIL",
    title: "Ultimate 10-Day Japan Itinerary for First-Timers",
    excerpt: "From bullet trains and neon-lit Shibuya crossings to ancient Zen shrines and bamboo groves in Kyoto, here is the ultimate roadmap.",
    author: "Wasee Arafat",
    authorRole: "Editorial Director",
    authorInitials: "WA",
    readTime: "6 min read",
    views: "34.8k",
    slug: "10-day-japan-itinerary",
    image: "https://waseeonthego.com/wp-content/uploads/2026/10/japan-kyoto-temple-guide.jpg",
    span: "large",
  },
  {
    id: 2,
    category: "ICELAND · SCANDINAVIA",
    label: "VOLCANIC ROAD TRIP",
    title: "Iceland Ring Road: Complete 7-Day Self-Drive Guide",
    excerpt: "Volcanic landscapes, thundering glacial waterfalls, black sand coastlines, and geothermal hot springs along Route 1.",
    author: "Wasee Arafat",
    authorInitials: "WA",
    readTime: "7 min read",
    slug: "iceland-ring-road-guide",
    image: "https://waseeonthego.com/wp-content/uploads/2026/10/iceland-ring-road-waterfall.jpg",
    span: "small",
  },
  {
    id: 3,
    category: "SWITZERLAND · ALPS",
    label: "ALPINE TREKKING",
    title: "Swiss Alps Hiking: 8 Most Scenic Mountain Trails",
    excerpt: "World-class mountain trekking trails, turquoise glacier lakes, and scenic panoramic rail passes under the Matterhorn.",
    author: "Wasee Arafat",
    authorInitials: "WA",
    readTime: "6 min read",
    slug: "swiss-alps-hiking-trails",
    image: "https://waseeonthego.com/wp-content/uploads/2026/10/swiss-alps-hiking-matterhorn.jpg",
    span: "small",
  },
];

const globalDestinations = [
  {
    name: "Japan",
    slug: "japan",
    postSlug: "10-day-japan-itinerary",
    subtext: "Tokyo, Kyoto & Osaka",
    weather: "22°C",
    weatherIcon: "sunny",
    routes: 42,
    description: "From bullet trains and neon-lit Shibuya crossings to ancient Zen shrines and bamboo groves in Kyoto.",
    image: "https://waseeonthego.com/wp-content/uploads/2026/10/japan-kyoto-temple-guide.jpg",
  },
  {
    name: "Europe",
    slug: "europe",
    postSlug: "travel-europe-on-a-budget",
    subtext: "Scenic Rail & Capitals",
    weather: "19°C",
    weatherIcon: "train",
    routes: 38,
    description: "Budget rail journeys, historic cobblestone capitals, alpine vistas, and Mediterranean market culture.",
    image: "https://waseeonthego.com/wp-content/uploads/2026/10/travel-europe-budget-guide.jpg",
  },
  {
    name: "Iceland",
    slug: "iceland",
    postSlug: "iceland-ring-road-guide",
    subtext: "Ring Road & Waterfalls",
    weather: "12°C",
    weatherIcon: "foggy",
    routes: 25,
    description: "Volcanic landscapes, thundering glacial waterfalls, black sand coastlines, and geothermal hot springs.",
    image: "https://waseeonthego.com/wp-content/uploads/2026/10/iceland-ring-road-waterfall.jpg",
  },
  {
    name: "Swiss Alps",
    slug: "swiss-alps",
    postSlug: "swiss-alps-hiking-trails",
    subtext: "Matterhorn & Alpine Lakes",
    weather: "16°C",
    weatherIcon: "landscape",
    routes: 30,
    description: "World-class mountain trekking trails, turquoise glacier lakes, and scenic panoramic rail passes.",
    image: "https://waseeonthego.com/wp-content/uploads/2026/10/swiss-alps-hiking-matterhorn.jpg",
  },
];

const categories = [
  { icon: "surfing", label: "Coastal & Reef", count: 18 },
  { icon: "landscape", label: "Cloud Trekking", count: 34 },
  { icon: "temple_buddhist", label: "Living Heritage", count: 29 },
  { icon: "soup_kitchen", label: "Bespoke Culinary", count: 41 },
  { icon: "backpack", label: "Solo Wayfarer", count: 25 },
  { icon: "forest", label: "Off-Grid Biosphere", count: 16 },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-20 bg-[--surface] min-h-screen">

        {/* ═══════════════════════════════════════
            HERO SECTION — Cinematic Full-Viewport
        ══════════════════════════════════════ */}
        <section
          className="relative w-full min-h-[calc(100vh)] flex flex-col justify-between -mt-20 pt-24 pb-12 overflow-hidden bg-[--inverse-surface]"
        >
          {/* Atmospheric Canvas */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center scale-105"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAj6w5-wfrzCkNXp1TPvu8dbftR965O8AsworziSc3yeUtnmhi0a0k8GlmHDq3gbuB5FeR0nwe3OdMnQ8pOQfvWGPBqm9-aTsHZq0nn5R6Dmn1oR0cbloFATNGysPg0sb6vlnX7zHGzqcMWOcXh8F7CJ_aBz0jXerWQyuwineXU7ZzgzxzLu9PhNBU6siJB_e-ti_EEclemDoWsg7j1u47sqk3q9Lto-brDUCpYbFWjb7RsHzhNGYE')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Live Field Dispatch Pill */}
          <div className="relative z-10 w-full px-4 sm:px-8 md:px-10 lg:px-20 pt-6 sm:pt-8 flex flex-wrap items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md shadow-lg text-white border border-white/20 text-xs">
              <span className="w-2 h-2 rounded-full bg-[#80d5cb] animate-ping" />
              <span className="text-[0.7rem] sm:text-[0.75rem] tracking-[0.12em] font-semibold text-white" style={{ fontFamily: "var(--font-inter)" }}>
                FIELD DISPATCH: KYOTO ZEN SANCTUARIES
              </span>
              <span className="text-white/50">/</span>
              <span className="text-[0.7rem] sm:text-[0.75rem] tracking-[0.12em] font-semibold text-[#80d5cb]" style={{ fontFamily: "var(--font-inter)" }}>
                35°00'N 135°46'E · JAPAN
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20">
              <span className="material-symbols-outlined text-[16px] text-white">graphic_eq</span>
              <span className="text-[0.75rem] tracking-[0.12em] font-semibold text-white" style={{ fontFamily: "var(--font-inter)" }}>
                Soundscape: Temple Bell &amp; Stream (Live)
              </span>
            </div>
          </div>

          {/* Hero Headlines & Search */}
          <div className="relative z-10 w-full px-4 sm:px-8 md:px-10 lg:px-20 py-8 sm:py-10 flex flex-col items-start max-w-5xl">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#005c55]/40 backdrop-blur-sm border border-[#80d5cb]/30">
              <span className="material-symbols-outlined text-[#80d5cb] text-[16px]">verified</span>
              <span className="text-[0.7rem] sm:text-[0.75rem] tracking-[0.12em] font-semibold text-[#9cf2e8]" style={{ fontFamily: "var(--font-inter)" }}>
                EXPEDITION JOURNAL · VOLUME XIV
              </span>
            </div>

            <h1
              className="text-3xl sm:text-5xl md:text-[4rem] lg:text-[4.75rem] leading-tight md:leading-[5.25rem] text-white max-w-4xl tracking-tight drop-shadow-md"
              style={{ fontFamily: "var(--font-playfair)", fontWeight: 600 }}
            >
              Where Ancient Paths Meet &amp; the World Beckons.
            </h1>

            <p className="text-base sm:text-lg md:text-[1.25rem] leading-relaxed md:leading-[2rem] text-white/90 max-w-2xl mt-4 font-light drop-shadow-lg" style={{ fontFamily: "var(--font-inter)" }}>
              Award-winning travel journalism across scenic rail routes, alpine trails, cultural sanctuaries, and untamed soulful horizons across the globe.
            </p>

            {/* Glassmorphism Search Console */}
            <form
              action="/blog"
              method="GET"
              className="w-full mt-8 sm:mt-10 p-2.5 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl flex flex-col lg:flex-row items-stretch lg:items-center gap-2.5"
            >
              {/* Destination input */}
              <div className="flex-1 flex items-center px-4 py-3 rounded-xl bg-gray-50 gap-3">
                <span className="material-symbols-outlined text-[#005c55] text-[22px] shrink-0">explore</span>
                <div className="flex flex-col w-full text-left min-w-0">
                  <label className="text-[0.7rem] sm:text-[0.75rem] tracking-[0.12em] font-semibold text-gray-500 leading-none" style={{ fontFamily: "var(--font-inter)" }}>
                    Destination
                  </label>
                  <input
                    name="q"
                    className="bg-transparent text-gray-900 text-sm font-medium focus:outline-none placeholder:text-gray-400 w-full mt-0.5 truncate"
                    placeholder="Where do your boots wish to step? (e.g. Japan, Iceland, Swiss Alps)"
                    type="text"
                    style={{ fontFamily: "var(--font-inter)" }}
                  />
                </div>
              </div>

              {/* Filters */}
              <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <div className="flex-1 lg:w-48 px-4 py-3 rounded-xl bg-gray-50 flex flex-col text-left">
                  <label className="text-[0.7rem] sm:text-[0.75rem] tracking-[0.12em] font-semibold text-gray-500 leading-none" style={{ fontFamily: "var(--font-inter)" }}>
                    Region / Continent
                  </label>
                  <select name="division" className="bg-transparent text-gray-900 text-sm font-medium focus:outline-none cursor-pointer mt-0.5 pr-2 w-full" style={{ fontFamily: "var(--font-inter)" }}>
                    <option value="">All Regions</option>
                    <option value="asia">Asia &amp; Pacific</option>
                    <option value="europe">Europe</option>
                    <option value="scandinavia">Scandinavia</option>
                    <option value="americas">Americas</option>
                    <option value="africa">North Africa</option>
                  </select>
                </div>
                <div className="flex-1 lg:w-44 px-4 py-3 rounded-xl bg-gray-50 flex flex-col text-left">
                  <label className="text-[0.7rem] sm:text-[0.75rem] tracking-[0.12em] font-semibold text-gray-500 leading-none" style={{ fontFamily: "var(--font-inter)" }}>
                    Category
                  </label>
                  <select name="category" className="bg-transparent text-gray-900 text-sm font-medium focus:outline-none cursor-pointer mt-0.5 pr-2 w-full" style={{ fontFamily: "var(--font-inter)" }}>
                    <option value="">All Disciplines</option>
                    <option value="destinations-itineraries">Destinations</option>
                    <option value="solo-budget-travel">Solo &amp; Budget</option>
                    <option value="adventure-outdoor">Adventure</option>
                    <option value="culture-food">Culture &amp; Food</option>
                    <option value="travel-tips-gear">Travel Tips</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="w-full lg:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[--tertiary-container] hover:bg-[--tertiary] text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg group shrink-0">
                <span className="font-semibold tracking-wide text-sm sm:text-base whitespace-nowrap" style={{ fontFamily: "var(--font-inter)" }}>Explore Expeditions</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </form>

            {/* Trending Tags */}
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-[0.75rem] tracking-[0.12em] font-semibold text-white/70" style={{ fontFamily: "var(--font-inter)" }}>
                TRENDING DOSSIERS:
              </span>
              {[
                { tag: "#JapanItinerary", slug: "10-day-japan-itinerary" },
                { tag: "#SwissAlps", slug: "swiss-alps-hiking-trails" },
                { tag: "#IcelandRingRoad", slug: "iceland-ring-road-guide" },
                { tag: "#EuropeBudget", slug: "travel-europe-on-a-budget" },
              ].map(({ tag, slug }) => (
                <Link
                  key={tag}
                  href={`/blog/${slug}`}
                  className="px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white text-sm font-medium transition-colors border border-white/20"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="relative z-10 w-full flex flex-col items-center justify-center gap-1 text-white/70 animate-bounce">
            <span className="text-[0.625rem] tracking-[0.12em] font-semibold" style={{ fontFamily: "var(--font-inter)" }}>SCROLL INTO ARCHIVE</span>
            <span className="material-symbols-outlined text-[20px]">south</span>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            COVER STORY BENTO EDITORIAL GRID
        ══════════════════════════════════════ */}
        <section className="w-full px-4 sm:px-8 md:px-10 lg:px-20 py-10 sm:py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-0.5 bg-[--primary]" />
                <span className="text-[0.75rem] tracking-[0.12em] font-semibold text-[--primary]" style={{ fontFamily: "var(--font-inter)" }}>
                  CURATED FIELD JOURNAL
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-[3rem] leading-tight md:leading-[3.5rem] text-[--on-surface]" style={{ fontFamily: "var(--font-playfair)", fontWeight: 600 }}>
                Dispatch from the Frontiers
              </h2>
            </div>
            <p className="text-sm sm:text-base md:text-[1.25rem] leading-relaxed md:leading-[2rem] text-[--on-surface-variant] max-w-md" style={{ fontFamily: "var(--font-inter)" }}>
              Investigative wilderness prose, firsthand route logs, and photographic explorations captured on location worldwide.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Large Hero Card - col 7 */}
            <Link
              href={`/blog/${featuredStories[0].slug}`}
              className="lg:col-span-7 group rounded-2xl overflow-hidden bg-[--surface-container-lowest] shadow-xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl cursor-pointer block select-none text-inherit no-underline"
            >
              <article className="flex flex-col justify-between h-full cursor-pointer">
                <div className="relative h-64 sm:h-80 md:h-[420px] w-full overflow-hidden cursor-pointer">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    style={{ backgroundImage: `url('${featuredStories[0].image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[--inverse-surface] via-[--inverse-surface]/30 to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-[--surface-container-lowest]/80 backdrop-blur-md text-[0.75rem] tracking-[0.12em] font-semibold text-[--on-surface]" style={{ fontFamily: "var(--font-inter)" }}>
                      {featuredStories[0].category}
                    </span>
                    <span className="w-9 h-9 rounded-full bg-[--surface-container-lowest]/80 backdrop-blur-md flex items-center justify-center text-[--on-surface] group-hover:text-[--tertiary] transition-colors">
                      <span className="material-symbols-outlined text-[18px]">bookmark</span>
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                    <span className="text-[0.875rem] leading-[1.25rem] text-[--primary-fixed-dim]" style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>
                      {featuredStories[0].label}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-[2rem] leading-snug md:leading-[2.5rem] text-white group-hover:text-[--primary-fixed] transition-colors mt-1" style={{ fontFamily: "var(--font-playfair)", fontWeight: 500 }}>
                      {featuredStories[0].title}
                    </h3>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-between flex-1 bg-[--surface-container-lowest] cursor-pointer">
                  <div className="flex flex-col gap-4 pointer-events-none">
                    <p className="text-[1.125rem] leading-[1.875rem] text-[--on-surface-variant]">
                      {featuredStories[0].excerpt}
                    </p>

                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      From riding the Tokaido Shinkansen at 300 km/h past Mount Fuji to early dawn walks through the vermilion torii corridors of Fushimi Inari in Kyoto, this guide covers logistics, temple etiquette, and culinary highlights.
                    </p>

                    {/* Expedition Field Highlights Box */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 rounded-xl bg-[--surface-container-low] border border-[--outline-variant]/40 text-xs">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider">Coordinates</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200 font-mono">35°41'N 139°41'E</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider">Best Window</span>
                        <span className="font-semibold text-[#005c55]">Mar–May / Oct–Nov</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider">Access Point</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">Tokyo / HND &amp; NRT</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider">Permit Status</span>
                        <span className="font-semibold text-[#005c55]">Digital IC / JR Pass</span>
                      </div>
                    </div>

                    {/* Highlights Badges */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mr-1">Highlights:</span>
                      {["Shinkansen Rail", "Zen Temples", "Bamboo Groves", "Shibuya Crossing"].map((item) => (
                        <span key={item} className="px-2.5 py-0.5 rounded-full bg-[#005c55]/10 text-[#005c55] dark:text-[#9cf2e8] text-[11px] font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-5 flex items-center justify-between border-t border-[--outline-variant]/30 pointer-events-none">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[--primary-container] text-white flex items-center justify-center font-semibold text-sm shadow-sm">
                        {featuredStories[0].authorInitials}
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-[--on-surface] block" style={{ fontFamily: "var(--font-inter)" }}>{featuredStories[0].author}</span>
                        <span className="text-[0.875rem] text-[--outline]" style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>{featuredStories[0].authorRole}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-[--outline] text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span> {featuredStories[0].readTime}</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">visibility</span> {featuredStories[0].views}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>

            {/* Secondary Cards — col 5 */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {featuredStories.slice(1).map((story) => (
                <Link
                  key={story.id}
                  href={`/blog/${story.slug}`}
                  className="group rounded-2xl overflow-hidden bg-[--surface-container-lowest] shadow-xl flex flex-col sm:flex-row lg:flex-col transition-all duration-300 hover:shadow-2xl cursor-pointer block select-none text-inherit no-underline"
                >
                  <article className="flex flex-col sm:flex-row lg:flex-col h-full w-full cursor-pointer">
                    <div className="relative h-56 sm:h-auto sm:w-1/2 lg:w-full lg:h-52 overflow-hidden shrink-0 cursor-pointer">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                        style={{ backgroundImage: `url('${story.image}')` }}
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[--surface-container-lowest]/80 backdrop-blur-md text-[0.75rem] tracking-[0.12em] font-semibold text-[--on-surface] pointer-events-none" style={{ fontFamily: "var(--font-inter)" }}>
                        {story.category}
                      </span>
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-1 cursor-pointer">
                      <div className="pointer-events-none">
                        <span className="text-[0.75rem] tracking-[0.12em] font-semibold text-[--tertiary]" style={{ fontFamily: "var(--font-inter)" }}>{story.label}</span>
                        <h3 className="text-[1.5rem] leading-[2rem] text-[--on-surface] mt-1 group-hover:text-[--primary] transition-colors" style={{ fontFamily: "var(--font-playfair)", fontWeight: 500 }}>
                          {story.title}
                        </h3>
                        <p className="text-sm text-[--on-surface-variant] mt-2 line-clamp-2" style={{ fontFamily: "var(--font-inter)" }}>
                          {story.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-[--outline-variant]/30 pointer-events-none">
                        <span className="text-[0.875rem] text-[--outline]" style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>By {story.author}</span>
                        <span className="text-sm text-[--outline] flex items-center gap-1" style={{ fontFamily: "var(--font-inter)" }}>
                          <span className="material-symbols-outlined text-[14px]">schedule</span> {story.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            GLOBAL POST CONTENT BANK (SIGNATURE EXPEDITIONS)
        ══════════════════════════════════════ */}
        <section className="w-full px-4 sm:px-8 md:px-10 lg:px-20 py-10 sm:py-12 md:py-16 bg-[--surface-container-low]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-0.5 bg-[--primary]" />
                <span className="text-[0.75rem] tracking-[0.12em] font-semibold text-[--primary]" style={{ fontFamily: "var(--font-inter)" }}>
                  GLOBAL EXPEDITION DOSSIERS
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-[3rem] leading-tight md:leading-[3.5rem] text-[--on-surface]" style={{ fontFamily: "var(--font-playfair)", fontWeight: 600 }}>
                Signature Field Guides
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[--primary] hover:bg-[--primary-container] text-white text-sm font-semibold transition-colors shadow-md w-full sm:w-auto"
            >
              Explore Full Archive ({bangladeshPosts.length} Guides)
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bangladeshPosts.slice(0, 9).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="cursor-pointer block text-inherit no-underline select-none">
                <article className="group h-full rounded-2xl overflow-hidden bg-[--surface-container-lowest] border border-[--outline-variant]/30 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer">
                  <div className="cursor-pointer">
                    <div className="relative h-56 w-full overflow-hidden cursor-pointer">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                        style={{ backgroundImage: `url('${post.coverImage}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-none">
                        <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[0.75rem] tracking-[0.12em] font-semibold text-white border border-white/20">
                          {post.category.name}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs pointer-events-none">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px] text-[#80d5cb]">location_on</span>
                          {post.location}
                        </span>
                        <span className="flex items-center gap-1 font-mono text-[#80d5cb]">
                          {post.readingTime} MIN READ
                        </span>
                      </div>
                    </div>
                    <div className="p-6 cursor-pointer">
                      <div className="pointer-events-none">
                        <h3
                          className="text-xl font-serif text-[--on-surface] group-hover:text-[--primary] transition-colors font-semibold leading-snug"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {post.title}
                        </h3>
                        <p className="text-sm text-[--on-surface-variant] mt-2.5 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-3 border-t border-[--outline-variant]/20 flex items-center justify-between pointer-events-none">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((t) => (
                        <span key={t} className="text-[11px] text-[--outline] bg-[--surface-container-low] px-2 py-0.5 rounded">
                          #{t}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-[--primary] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read Guide <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FEATURED GLOBAL DESTINATIONS
        ══════════════════════════════════════ */}
        <section className="w-full bg-[--surface-container-low] py-10 sm:py-12 md:py-16" id="destinations">
          <div className="w-full px-4 sm:px-8 md:px-10 lg:px-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-[0.75rem] tracking-[0.12em] font-semibold text-[--primary]" style={{ fontFamily: "var(--font-inter)" }}>GLOBAL TRAVEL ATLAS</span>
                <h2 className="text-2xl sm:text-4xl md:text-[3rem] leading-tight md:leading-[3.5rem] text-[--on-surface] mt-1" style={{ fontFamily: "var(--font-playfair)", fontWeight: 600 }}>
                  Featured Global Destinations
                </h2>
              </div>
              <p className="text-sm sm:text-base md:text-[1.25rem] leading-relaxed md:leading-[2rem] text-[--on-surface-variant] max-w-md" style={{ fontFamily: "var(--font-inter)" }}>
                Explore hand-crafted itineraries, scenic rail routes, and comprehensive field guides across premier international travel regions.
              </p>
            </div>

            {/* Division Cards — Full Click Directly to Blog Post */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {globalDestinations.map((div) => (
                <Link
                  key={div.name}
                  href={`/blog/${div.postSlug}`}
                  className="group rounded-xl overflow-hidden bg-[--surface-container-lowest] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-1.5 cursor-pointer text-inherit no-underline"
                >
                  <div className="relative h-60 w-full overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${div.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[--inverse-surface]/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-[--surface-container-lowest]/80 backdrop-blur-md text-[0.75rem] tracking-[0.12em] font-semibold text-[--on-surface]" style={{ fontFamily: "var(--font-inter)" }}>
                      {div.name.toUpperCase()}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-inter)" }}>{div.subtext}</span>
                      <span className="flex items-center text-xs gap-1 text-[0.75rem] tracking-[0.12em] font-semibold" style={{ fontFamily: "var(--font-inter)" }}>
                        <span className="material-symbols-outlined text-[14px]">{div.weatherIcon}</span>
                        {div.weather}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <p className="text-sm text-[--on-surface-variant]" style={{ fontFamily: "var(--font-inter)" }}>{div.description}</p>
                    <div className="mt-4 pt-3 flex items-center justify-between border-t border-[--outline-variant]/30">
                      <span className="text-[0.75rem] tracking-[0.12em] font-semibold text-[--primary]" style={{ fontFamily: "var(--font-inter)" }}>
                        {div.routes} Expedition Routes
                      </span>
                      <span
                        className="text-[--primary] font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1 text-sm"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Read Guide <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/destinations"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[--outline-variant] text-[--on-surface-variant] hover:bg-[--surface-container] hover:text-[--on-surface] transition-all font-medium"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                View All Global Destinations
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            TRAVEL CATEGORIES
        ══════════════════════════════════════ */}
        <section className="w-full px-4 sm:px-8 md:px-10 lg:px-20 py-10 sm:py-12 md:py-16">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-[0.75rem] tracking-[0.12em] font-semibold text-[--tertiary]" style={{ fontFamily: "var(--font-inter)" }}>EXPEDITION DISCIPLINES</span>
            <h2 className="text-2xl sm:text-4xl md:text-[3rem] leading-tight md:leading-[3.5rem] text-[--on-surface] mt-1" style={{ fontFamily: "var(--font-playfair)", fontWeight: 600 }}>
              Curated Travel Archetypes
            </h2>
            <p className="text-sm sm:text-base md:text-[1.25rem] leading-relaxed md:leading-[2rem] text-[--on-surface-variant] mt-3" style={{ fontFamily: "var(--font-inter)" }}>
              Whether trekking high alpine ridges, cycling ancient European capitals, or resting in quiet island sanctuaries.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href="/blog"
                className="group p-5 rounded-2xl bg-[--surface-container-low] hover:bg-[--primary-container] border border-[--outline-variant]/30 hover:border-transparent transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1 shadow-sm hover:shadow-lg cursor-pointer text-inherit no-underline"
              >
                <div className="w-12 h-12 rounded-xl bg-[--surface-container-lowest] group-hover:bg-white/20 flex items-center justify-center text-[--primary] group-hover:text-white mb-3 transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">{cat.icon}</span>
                </div>
                <h3 className="font-semibold text-sm text-[--on-surface] group-hover:text-white transition-colors" style={{ fontFamily: "var(--font-inter)" }}>
                  {cat.label}
                </h3>
                <span className="text-xs text-[--outline] group-hover:text-white/80 mt-1 transition-colors">
                  {cat.count} Routes
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
