import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { bangladeshPosts } from "@/lib/data/posts";

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

export const metadata = {
  title: "Search Field Dossiers | SHONAR TRAIL",
  description: "Search across Bangladesh travel logs, coordinates, guides, and practical permits.",
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = (q || "").trim().toLowerCase();

  const results = query
    ? bangladeshPosts.filter((post) => {
        const matchTitle = post.title.toLowerCase().includes(query);
        const matchExcerpt = post.excerpt.toLowerCase().includes(query);
        const matchLocation = post.location.toLowerCase().includes(query);
        const matchCategory = post.category.name.toLowerCase().includes(query);
        const matchTags = post.tags.some((t) => t.toLowerCase().includes(query));
        return matchTitle || matchExcerpt || matchLocation || matchCategory || matchTags;
      })
    : bangladeshPosts;

  const popularTags = [
    "beach", "clouds", "mangrove", "tea", "trekking", "island", "swamp forest", "UNESCO"
  ];

  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-[--surface] pt-20">
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-[#005c55] bg-[#005c55]/10 px-3 py-1 rounded-full">
              Field Gazette Search
            </span>
            <h1
              className="text-2xl sm:text-4xl md:text-5xl font-serif text-[--on-surface] font-bold mt-3 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Search Expeditions &amp; Dossiers
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-[--on-surface-variant] mt-2">
              Query by destination, district, activity, or keyword to retrieve route logs and practical advisories.
            </p>
          </div>

          {/* Search Form */}
          <form method="GET" action="/search" className="relative w-full max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center rounded-2xl bg-white border border-gray-200 shadow-lg p-2.5 sm:px-4 sm:py-3 focus-within:border-[#005c55] transition-all gap-2 sm:gap-0">
              <div className="flex items-center flex-1">
                <span className="material-symbols-outlined text-gray-400 text-2xl mr-2 sm:mr-3">search</span>
                <input
                  type="text"
                  name="q"
                  defaultValue={q || ""}
                  placeholder="Search Cox's Bazar, Sajek, tiger, tea..."
                  className="w-full bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none text-sm sm:text-base"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2.5 sm:py-2 rounded-xl bg-[#005c55] text-white text-xs font-bold hover:bg-[#0f766e] transition-colors sm:ml-2 shrink-0"
              >
                Search
              </button>
            </div>

            {/* Popular Suggestion Chips */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-4 text-xs">
              <span className="text-gray-400 font-medium">Quick suggestions:</span>
              {popularTags.map((tag) => (
                <Link
                  key={tag}
                  href={`/search?q=${tag}`}
                  className="px-2.5 py-1 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#005c55] hover:border-[#005c55] transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </form>

          {/* Results Summary */}
          <div className="border-t border-gray-200 pt-6 sm:pt-8">
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs sm:text-sm text-gray-600">
                {query ? (
                  <>Showing <strong>{results.length}</strong> results for &ldquo;<strong>{q}</strong>&rdquo;</>
                ) : (
                  <>Displaying all <strong>{results.length}</strong> available field dossiers</>
                )}
              </p>
              {query && (
                <Link href="/search" className="text-xs text-[#005c55] font-semibold hover:underline">
                  Reset search
                </Link>
              )}
            </div>

            {results.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 p-8">
                <span className="material-symbols-outlined text-4xl text-gray-300 mb-2">search_off</span>
                <h3 className="text-lg font-serif font-bold text-gray-700">No field logs found</h3>
                <p className="text-sm text-gray-500 mt-1 max-w-sm mx-auto">
                  Try searching for general terms such as &ldquo;beach&rdquo;, &ldquo;mangrove&rdquo;, &ldquo;Sajek&rdquo;, or &ldquo;tea&rdquo;.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <article className="group h-full rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                      <div>
                        <div className="relative h-48 w-full overflow-hidden">
                          <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: `url('${post.coverImage}')` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white border border-white/20 uppercase tracking-wider">
                            {post.category.name}
                          </span>
                          <span className="absolute bottom-3 left-3 text-white text-xs flex items-center gap-1 font-medium">
                            <span className="material-symbols-outlined text-[14px] text-[#80d5cb]">location_on</span>
                            {post.location}
                          </span>
                        </div>
                        <div className="p-5">
                          <h3
                            className="text-lg font-serif font-bold text-gray-900 group-hover:text-[#005c55] transition-colors leading-snug"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {post.title}
                          </h3>
                          <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>
                      <div className="px-5 pb-5 pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                        <span>{post.readingTime} min read</span>
                        <span className="font-semibold text-[#005c55] flex items-center gap-1">
                          View Dossier <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
