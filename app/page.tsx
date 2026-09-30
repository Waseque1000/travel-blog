import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { bangladeshPosts } from "@/lib/data/posts";

// ─── Data ───────────────────────────────────────────────────────────────────

const featuredStories = [
  {
    id: 1,
    category: "KHULNA · UNESCO MANGROVE",
    label: "WILDLIFE EXPEDITION",
    title: "The Sundarbans: Into the World's Largest Mangrove Forest",
    excerpt: "A UNESCO World Heritage Site and the home of the Royal Bengal tiger. How a Sundarbans boat trip works and what you can realistically see.",
    author: "Tanvir Ahmed",
    authorRole: "Lead Conservation Correspondent",
    authorInitials: "TA",
    readTime: "5 min read",
    views: "31.2k",
    slug: "sundarbans-mangrove-forest-guide",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbVvMpUKP9P7jxNatdf7qmOGFl8uw-yIJs_sa9c6tbYr3iOvRUtzTZ51GvPFjpxkMmRKYfIfaB3QSHHGW3d87IQ1qbYCUfclLHGkyl9g2y8WCRatnqDb_Q7wjR-9zVhLQcQVe9dpcwo0vzt3Tj4jt2jlGtgXQSxG0sEiR_AljIct3E1YhL1swNqkSykyeG7C912aTHAY2zC-MbAaHHZkBiWOaI3m6QCeka-r5Oj8tHw539c9IY37Q",
    span: "large",
  },
  {
    id: 2,
    category: "CHATTOGRAM · RANGAMATI",
    label: "CLOUD ASCENTS",
    title: "Sajek Valley: Clouds, Hills and Tribal Villages in Rangamati",
    excerpt: "A hill ridge above the clouds, home to Lushai, Pangkhua and Chakma communities. What to expect on the road and in the villages.",
    author: "Nabila Rahman",
    authorInitials: "NR",
    readTime: "4 min read",
    slug: "sajek-valley-travel-guide",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBId_INVaDFA0n9xplmGUmZvmTX726opQZqHo1dY8O6oipc5lUcIHwSBfbg0OTfTushYP865EgBcGvF76c7_AQuYa7u50wDzPXwOQCYdwWVhtYNPeen52HWqxgcGvXLsxanSWuXQvuzMwdNX3t_PrM6lzTul6cKaW81goGobjtRzi7Ly-1ZRG11YE4lL792MKLoaEBTkeeUByxE2dMXUQPQ9XamYujP6LiU70S8Ja4_pyNNkojHgEU",
    span: "small",
  },
  {
    id: 3,
    category: "SYLHET · MOULVIBAZAR",
    label: "BOTANICAL HERITAGE",
    title: "Srimangal: Tea Gardens and Rainforest in the Tea Capital",
    excerpt: "Rolling tea estates, a rainforest with hoolock gibbons, and the famous seven-layer tea. A slow weekend from Dhaka.",
    author: "Dr. Rafiqul Karim",
    authorInitials: "RK",
    readTime: "4 min read",
    slug: "srimangal-tea-capital-guide",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtGYPg9s8__7Ze0oncrPUz5NRp-4HFMQpaI_6UCXSUTEUCpShZLP7hDyQfh2Bu5phu6xsibq1pWIzV97JEqRry94cEVpxCwO9y4yRa6382bXfVF4PO-4yaeVFCxeTEXUotvYPAHCfihBpZ9ml7aLUQjmZLQ0H6Xv777Wkf4OA_X9kGlYdcnUeX9MvMnWifTVQpaCgXASgXS6rMKbQO_DIGt2QX1cuPQAaBTttjRjiMnWfPA0bryDg",
    span: "small",
  },
];

const divisions = [
  {
    name: "Chattogram",
    slug: "chattogram",
    subtext: "Bandarban, Inani & Sajek",
    weather: "28°C",
    weatherIcon: "sunny",
    routes: 42,
    description: "Home to the highest peaks of Bangladesh, untamed tribal valleys, and 120km of golden sand beaches.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5L-2aKDmvpKbN1FtVhzYWzzC4_hcpUj-t1FBGitSIxvAYY5buhtTR7GRgNqspjjLX4AnzcTRczKDF1hmOA39fQ4PY7b85zOGseOJ-mQ13-TACCVo-gIXQwZl2IKm6ySZFRHSCJ5YKlYfyNRWCXhzN9E4tfMfND9zk5ODNaiYSKYdJLBpJExDRcx-R2x06Bhaa2LuqQMgBloc07n1pYdAWhTRRo02QMrcm_FSz2LhBQUc7VeeGt5w",
  },
  {
    name: "Sylhet",
    slug: "sylhet",
    subtext: "Ratargul, Jaflong & Tea Estates",
    weather: "24°C",
    weatherIcon: "rainy",
    routes: 31,
    description: "The emerald realm of freshwater swamp sanctuaries, torrential monsoon cascades, and heirloom tea gardens.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEwzasUKPLVDarjCmOo8IpGHSP7zxhfimyjliZJuZiX60vll9uJKB4KhoNp71C_h4g6gT-KpzLrL9wOgiqeslP00seVImazu7RED1_PJNW6nv5oGg5xXOULKay8lmapnHFrjJZu85eIki8lD9yTp8072hfKw5-6B2sA1CaM51waOK4fCNRnMe0hHgSduG3JcU6QAQ7qK-N7DhFdF3IgnHBy8-yBQLLGoavzCfwm8V9mQzzBSeAg0Y",
  },
  {
    name: "Khulna",
    slug: "khulna",
    subtext: "Sundarbans & Shat Gombuj",
    weather: "26°C",
    weatherIcon: "foggy",
    routes: 27,
    description: "Tidal labyrinth of the Royal Bengal Tiger, UNESCO medieval brick mosques, and quiet delta estuary life.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsrB2Vf0d1u8M9uM3yOtXzmFL-ZMgxryItjYLj5YgrFY8HwhwdOqXtixA7L17jio1ruPMNcUMNy-boVyP6B7Wxyd_sOof6TyprSjw_bvQWdcJQEkOdllMNqrw2ldhc0DeXqyT8LEkN8kTIawYOYvAmrVcYtgjf5vFj3QeiJfCz399HGT6Tv00krcbCzQLm03ZoGPcvcUsn8un4XUDaqjcVM_XJTu2eFeSk6w5_gk2BQTB2qOXXUtQ",
  },
  {
    name: "Barishal",
    slug: "barishal",
    subtext: "Floating Markets & Kuakata",
    weather: "27°C",
    weatherIcon: "water",
    routes: 22,
    description: "The Venice of the East: floating fruit bazaars, water lilies of Satla, and Kuakata's dawn & dusk horizon.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkWSUBpy-9m2ugmNBatAuyMD03wsNPuyjfRJLclqxWrHd0sQTXNFm7UWidbOMdqymLqb4zUgXpN2Sz-gFxCTSigu2Fly6UbQiBbtvSZR6ayLch4orHSGODGqV15Bfeko37cp8nYTmS4EaRFzDi6lfkHOWJW5XPDV2zUycyutVERKMWZq5MIJmGlaATmx4RqwOjjwMPawnVqv_AksfT3OV5YFiA42NOcH3AesGe8ryRMYZHPxjztN4",
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

const worldStories = [
  {
    country: "MALDIVES · INDIAN OCEAN",
    label: "PRIVATE ATOLL ODYSSEY",
    title: "Beneath the Turquoise Skin: A Week in the Maldivian Atolls",
    author: "Priya Chowdhury",
    readTime: "7 min read",
    slug: "maldives-atoll-odyssey",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80",
  },
  {
    country: "NEPAL · HIMALAYAN FOOTHILLS",
    label: "HIGH ALTITUDE DISPATCH",
    title: "Annapurna Circuit: A 21-Day Solitude of Snowfields",
    author: "Kabir Hossain",
    readTime: "12 min read",
    slug: "annapurna-circuit-solitude",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    country: "THAILAND · NORTHERN HIGHLANDS",
    label: "HILL TRIBE IMMERSION",
    title: "Chiang Rai's Golden Triangle: Opium Fields Turned Rice Terraces",
    author: "Afrin Sultana",
    readTime: "9 min read",
    slug: "chiang-rai-golden-triangle",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

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
          <div className="relative z-10 w-full px-6 md:px-10 lg:px-20 pt-8 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md shadow-lg text-white border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#80d5cb] animate-ping" />
              <span className="text-[0.75rem] tracking-[0.12em] font-semibold text-white" style={{ fontFamily: "var(--font-inter)" }}>
                FIELD DISPATCH: SAJEK PEAKS
              </span>
              <span className="text-white/50">/</span>
              <span className="text-[0.75rem] tracking-[0.12em] font-semibold text-[#80d5cb]" style={{ fontFamily: "var(--font-inter)" }}>
                23°23'N 92°17'E · 1,800 FT
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20">
              <span className="material-symbols-outlined text-[16px] text-white">graphic_eq</span>
              <span className="text-[0.75rem] tracking-[0.12em] font-semibold text-white" style={{ fontFamily: "var(--font-inter)" }}>
                Soundscape: Dawn Chorus (Live)
              </span>
            </div>
          </div>

          {/* Hero Headlines & Search */}
          <div className="relative z-10 w-full px-6 md:px-10 lg:px-20 py-10 flex flex-col items-start max-w-5xl">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#005c55]/40 backdrop-blur-sm border border-[#80d5cb]/30">
              <span className="material-symbols-outlined text-[#80d5cb] text-[16px]">verified</span>
              <span className="text-[0.75rem] tracking-[0.12em] font-semibold text-[#9cf2e8]" style={{ fontFamily: "var(--font-inter)" }}>
                EXPEDITION JOURNAL · VOLUME XIV
              </span>
            </div>

            <h1
              className="text-[3rem] leading-[3.5rem] md:text-[4.75rem] md:leading-[5.25rem] text-white max-w-4xl tracking-tight drop-shadow-md"
              style={{ fontFamily: "var(--font-playfair)", fontWeight: 600 }}
            >
              Where the River Sings &amp; the World Beckons.
            </h1>

            <p className="text-[1.25rem] leading-[2rem] text-white/90 max-w-2xl mt-4 font-light drop-shadow-lg" style={{ fontFamily: "var(--font-inter)" }}>
              Award-winning travel journalism across the 8 primeval divisions of Bangladesh and untamed, soulful horizons across the globe.
            </p>

            {/* Glassmorphism Search Console */}
            <form
              action="/blog"
              method="GET"
              className="w-full mt-10 p-2 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl flex flex-col lg:flex-row items-stretch lg:items-center gap-2"
            >
              {/* Destination input */}
              <div className="flex-1 flex items-center px-4 py-3 rounded-xl bg-gray-50 gap-3">
                <span className="material-symbols-outlined text-[#005c55] text-[22px]">explore</span>
                <div className="flex flex-col w-full text-left">
                  <label className="text-[0.75rem] tracking-[0.12em] font-semibold text-gray-500 leading-none" style={{ fontFamily: "var(--font-inter)" }}>
                    Destination
                  </label>
                  <input
                    name="q"
                    className="bg-transparent text-gray-900 text-sm font-medium focus:outline-none placeholder:text-gray-400 w-full mt-0.5"
                    placeholder="Where do your boots wish to step? (e.g. Inani, Sajek, Sundarbans)"
                    type="text"
                    style={{ fontFamily: "var(--font-inter)" }}
                  />
                </div>
              </div>

              {/* Filters */}
              <div className="flex items-center gap-2">
                <div className="flex-1 sm:w-48 px-4 py-3 rounded-xl bg-gray-50 flex flex-col text-left">
                  <label className="text-[0.75rem] tracking-[0.12em] font-semibold text-gray-500 leading-none" style={{ fontFamily: "var(--font-inter)" }}>
                    Division / Realm
                  </label>
                  <select name="division" className="bg-transparent text-gray-900 text-sm font-medium focus:outline-none cursor-pointer mt-0.5 pr-2" style={{ fontFamily: "var(--font-inter)" }}>
                    <option value="">All 8 Divisions</option>
                    <option value="chattogram">Chattogram Hills</option>
                    <option value="sylhet">Sylhet Wet Rainforest</option>
                    <option value="khulna">Khulna Tidal Wilds</option>
                    <option value="barishal">Barishal Backwaters</option>
                    <option value="rajshahi">Rajshahi Living Relics</option>
                  </select>
                </div>
                <div className="flex-1 sm:w-44 px-4 py-3 rounded-xl bg-gray-50 flex flex-col text-left">
                  <label className="text-[0.75rem] tracking-[0.12em] font-semibold text-gray-500 leading-none" style={{ fontFamily: "var(--font-inter)" }}>
                    Category
                  </label>
                  <select name="category" className="bg-transparent text-gray-900 text-sm font-medium focus:outline-none cursor-pointer mt-0.5 pr-2" style={{ fontFamily: "var(--font-inter)" }}>
                    <option value="">All Disciplines</option>
                    <option value="adventure">Adventure</option>
                    <option value="mountain">Mountain</option>
                    <option value="beach">Beach</option>
                    <option value="nature">Nature</option>
                    <option value="heritage">Heritage</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="px-8 py-4 rounded-xl bg-[--tertiary-container] hover:bg-[--tertiary] text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg group">
                <span className="font-semibold tracking-wide" style={{ fontFamily: "var(--font-inter)" }}>Explore Expeditions</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </form>

            {/* Trending Tags */}
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-[0.75rem] tracking-[0.12em] font-semibold text-white/70" style={{ fontFamily: "var(--font-inter)" }}>
                TRENDING DOSSIERS:
              </span>
              {[
                { tag: "#CoxsBazar", slug: "coxs-bazar-beach-guide" },
                { tag: "#SajekValley", slug: "sajek-valley-travel-guide" },
                { tag: "#SundarbansTigerTrail", slug: "sundarbans-mangrove-forest-guide" },
                { tag: "#SrimangalTea", slug: "srimangal-tea-capital-guide" },
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
        <section className="w-full px-6 md:px-10 lg:px-20 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-0.5 bg-[--primary]" />
                <span className="text-[0.75rem] tracking-[0.12em] font-semibold text-[--primary]" style={{ fontFamily: "var(--font-inter)" }}>
                  CURATED FIELD JOURNAL
                </span>
              </div>
              <h2 className="text-[3rem] leading-[3.5rem] text-[--on-surface]" style={{ fontFamily: "var(--font-playfair)", fontWeight: 600 }}>
                Dispatch from the Frontiers
              </h2>
            </div>
            <p className="text-[1.25rem] leading-[2rem] text-[--on-surface-variant] max-w-md" style={{ fontFamily: "var(--font-inter)" }}>
              Investigative wilderness prose, firsthand route logs, and photographic explorations captured on location.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Large Hero Card - col 7 */}
            <Link
              href={`/blog/${featuredStories[0].slug}`}
              className="lg:col-span-7 group rounded-2xl overflow-hidden bg-[--surface-container-lowest] shadow-xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl"
            >
              <article className="flex flex-col justify-between h-full">
                <div className="relative h-96 sm:h-[420px] w-full overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${featuredStories[0].image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[--inverse-surface] via-[--inverse-surface]/30 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[--surface-container-lowest]/80 backdrop-blur-md text-[0.75rem] tracking-[0.12em] font-semibold text-[--on-surface]" style={{ fontFamily: "var(--font-inter)" }}>
                      {featuredStories[0].category}
                    </span>
                    <span className="w-9 h-9 rounded-full bg-[--surface-container-lowest]/80 backdrop-blur-md flex items-center justify-center text-[--on-surface] group-hover:text-[--tertiary] transition-colors">
                      <span className="material-symbols-outlined text-[18px]">bookmark</span>
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[0.875rem] leading-[1.25rem] text-[--primary-fixed-dim]" style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>
                      {featuredStories[0].label}
                    </span>
                    <h3 className="text-[2rem] leading-[2.5rem] text-white group-hover:text-[--primary-fixed] transition-colors mt-1" style={{ fontFamily: "var(--font-playfair)", fontWeight: 500 }}>
                      {featuredStories[0].title}
                    </h3>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-between flex-1 bg-[--surface-container-lowest]">
                  <p className="text-[1.125rem] leading-[1.875rem] text-[--on-surface-variant] line-clamp-3" style={{ fontFamily: "var(--font-inter)" }}>
                    {featuredStories[0].excerpt}
                  </p>
                  <div className="mt-6 pt-6 flex items-center justify-between border-t border-[--outline-variant]/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[--primary-container] text-white flex items-center justify-center font-semibold text-sm">
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
                <Link key={story.id} href={`/blog/${story.slug}`} className="group rounded-2xl overflow-hidden bg-[--surface-container-lowest] shadow-xl flex flex-col sm:flex-row lg:flex-col transition-all duration-300 hover:shadow-2xl">
                  <article className="flex flex-col sm:flex-row lg:flex-col h-full w-full">
                    <div className="relative h-56 sm:h-auto sm:w-1/2 lg:w-full lg:h-52 overflow-hidden shrink-0">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${story.image}')` }}
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[--surface-container-lowest]/80 backdrop-blur-md text-[0.75rem] tracking-[0.12em] font-semibold text-[--on-surface]" style={{ fontFamily: "var(--font-inter)" }}>
                        {story.category}
                      </span>
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-1">
                      <div>
                        <span className="text-[0.75rem] tracking-[0.12em] font-semibold text-[--tertiary]" style={{ fontFamily: "var(--font-inter)" }}>{story.label}</span>
                        <h3 className="text-[1.5rem] leading-[2rem] text-[--on-surface] mt-1 group-hover:text-[--primary] transition-colors" style={{ fontFamily: "var(--font-playfair)", fontWeight: 500 }}>
                          {story.title}
                        </h3>
                        <p className="text-sm text-[--on-surface-variant] mt-2 line-clamp-2" style={{ fontFamily: "var(--font-inter)" }}>
                          {story.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-[--outline-variant]/30">
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
            BANGLADESH POST CONTENT BANK (9 EXPEDITIONS)
        ══════════════════════════════════════ */}
        <section className="w-full px-6 md:px-10 lg:px-20 py-12 md:py-16 bg-[--surface-container-low]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-0.5 bg-[--primary]" />
                <span className="text-[0.75rem] tracking-[0.12em] font-semibold text-[--primary]" style={{ fontFamily: "var(--font-inter)" }}>
                  BANGLADESH POST CONTENT BANK
                </span>
              </div>
              <h2 className="text-[3rem] leading-[3.5rem] text-[--on-surface]" style={{ fontFamily: "var(--font-playfair)", fontWeight: 600 }}>
                Nine Signature Expeditions
              </h2>
            </div>
            <Link
              href="/blog?region=bangladesh"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[--primary] hover:bg-[--primary-container] text-white text-sm font-semibold transition-colors shadow-md"
            >
              Explore Full Archive (9 Guides)
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bangladeshPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group h-full rounded-2xl overflow-hidden bg-[--surface-container-lowest] border border-[--outline-variant]/30 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="relative h-56 w-full overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${post.coverImage}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[0.75rem] tracking-[0.12em] font-semibold text-white border border-white/20">
                          {post.category.name}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px] text-[#80d5cb]">location_on</span>
                          {post.location}
                        </span>
                        <span className="flex items-center gap-1 font-mono text-[#80d5cb]">
                          {post.readingTime} MIN READ
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
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
                  <div className="px-6 pb-6 pt-3 border-t border-[--outline-variant]/20 flex items-center justify-between">
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
            EXPLORE BANGLADESH BY DIVISION
        ══════════════════════════════════════ */}
        <section className="w-full bg-[--surface-container-low] py-12 md:py-16" id="divisions">
          <div className="w-full px-6 md:px-10 lg:px-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-[0.75rem] tracking-[0.12em] font-semibold text-[--primary]" style={{ fontFamily: "var(--font-inter)" }}>TERRITORIAL ATLAS</span>
                <h2 className="text-[3rem] leading-[3.5rem] text-[--on-surface] mt-1" style={{ fontFamily: "var(--font-playfair)", fontWeight: 600 }}>
                  Explore Bangladesh by Division
                </h2>
              </div>
              <p className="text-[1.25rem] leading-[2rem] text-[--on-surface-variant] max-w-md" style={{ fontFamily: "var(--font-inter)" }}>
                Eight unique geographical personalities, from the world's longest unbroken natural sea strand to tidal swamp mazes.
              </p>
            </div>

            {/* Division Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {divisions.map((div) => (
                <div key={div.name} className="group rounded-xl overflow-hidden bg-[--surface-container-lowest] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
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
                      <Link
                        href={`/blog?region=bangladesh&division=${div.slug}`}
                        className="text-[--on-surface] group-hover:text-[--primary] transition-colors flex items-center gap-1 text-sm font-medium"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Atlas <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/destinations"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[--outline-variant] text-[--on-surface-variant] hover:bg-[--surface-container] hover:text-[--on-surface] transition-all font-medium"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                View All 8 Divisions
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            TRAVEL CATEGORIES
        ══════════════════════════════════════ */}
        <section className="w-full px-6 md:px-10 lg:px-20 py-12 md:py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[0.75rem] tracking-[0.12em] font-semibold text-[--tertiary]" style={{ fontFamily: "var(--font-inter)" }}>EXPEDITION DISCIPLINES</span>
            <h2 className="text-[3rem] leading-[3.5rem] text-[--on-surface] mt-1" style={{ fontFamily: "var(--font-playfair)", fontWeight: 600 }}>
              Curated Travel Archetypes
            </h2>
            <p className="text-[1.25rem] leading-[2rem] text-[--on-surface-variant] mt-2" style={{ fontFamily: "var(--font-inter)" }}>
              Whether tracking predators through primeval swamps or finding solace in hill tribe bamboo sanctuaries.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href={`/category/${cat.label.toLowerCase().replace(/ &? /g, "-")}`}
                className="group p-5 rounded-2xl bg-[--surface-container-low] hover:bg-[--primary] transition-all duration-300 text-center flex flex-col items-center justify-between"
              >
                <div className="w-14 h-14 rounded-full bg-[--surface-container-lowest] group-hover:bg-[--primary-fixed] flex items-center justify-center transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[--primary] group-hover:text-[--on-primary-fixed] text-2xl">{cat.icon}</span>
                </div>
                <div className="mt-4">
                  <h4 className="text-base font-semibold text-[--on-surface] group-hover:text-white transition-colors" style={{ fontFamily: "var(--font-inter)" }}>
                    {cat.label}
                  </h4>
                  <span className="text-[0.875rem] text-[--outline] group-hover:text-[--primary-fixed-dim] transition-colors" style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>
                    {cat.count} Journals
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════
            WORLD JOURNEYS
        ══════════════════════════════════════ */}
        <section className="w-full bg-[--inverse-surface] text-[--surface] py-12 md:py-16" id="world">
          <div className="w-full px-6 md:px-10 lg:px-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[--primary-fixed] text-lg">public</span>
                  <span className="text-[0.75rem] tracking-[0.12em] font-semibold text-[--primary-fixed]" style={{ fontFamily: "var(--font-inter)" }}>WORLD JOURNEYS</span>
                </div>
                <h2 className="text-[3rem] leading-[3.5rem] text-white" style={{ fontFamily: "var(--font-playfair)", fontWeight: 600 }}>
                  Untamed Global Horizons
                </h2>
              </div>
              <Link href="/blog?region=international" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-sm text-white/70 hover:text-white hover:border-white/40 transition-all">
                All World Stories <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {worldStories.map((story) => (
                <Link key={story.slug} href={`/blog/${story.slug}`}>
                  <article className="group rounded-2xl overflow-hidden bg-[--surface-container-highest]/10 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl cursor-pointer">
                    <div className="relative h-56 overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${story.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[--inverse-surface]/80 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[--surface-container-lowest]/80 backdrop-blur-md text-[0.75rem] tracking-[0.12em] font-semibold text-[--on-surface]" style={{ fontFamily: "var(--font-inter)" }}>
                        {story.country}
                      </span>
                    </div>
                    <div className="p-5">
                      <span className="text-[0.75rem] tracking-[0.12em] font-semibold text-[--primary-fixed-dim]" style={{ fontFamily: "var(--font-inter)" }}>{story.label}</span>
                      <h3 className="text-[1.5rem] leading-[2rem] text-white mt-1 group-hover:text-[--primary-fixed] transition-colors" style={{ fontFamily: "var(--font-playfair)", fontWeight: 500 }}>
                        {story.title}
                      </h3>
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/10">
                        <span className="text-sm text-white/60" style={{ fontFamily: "var(--font-inter)" }}>By {story.author}</span>
                        <span className="text-sm text-white/60 flex items-center gap-1" style={{ fontFamily: "var(--font-inter)" }}>
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

      </main>
      <Footer />
    </>
  );
}
