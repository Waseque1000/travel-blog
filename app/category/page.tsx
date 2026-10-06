import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Travel Categories & Disciplines | WASEE ON THE GO",
  description: "Browse travel dispatches and expert itineraries grouped by style: Destinations & Itineraries, Solo & Budget Travel, Adventure & Outdoor, Travel Planning & Gear, and Food & Culture.",
};

const categoryList = [
  {
    name: "Destinations & Itineraries",
    slug: "destinations-itineraries",
    icon: "explore",
    count: 6,
    description: "Detailed step-by-step itineraries from 10 days in Japan to Greece island routes and New Zealand road trips.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Solo & Budget Travel",
    slug: "solo-budget-travel",
    icon: "backpack",
    count: 4,
    description: "Cost-saving hacks, hostel guides, safe solo female travel destinations, and euro-stretching transit tactics.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Adventure & Outdoor",
    slug: "adventure-outdoor",
    icon: "landscape",
    count: 4,
    description: "Alpine ridge hikes across Switzerland, Iceland glacier circuits, and wildlife trekking through Costa Rica.",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Travel Planning & Gear",
    slug: "travel-planning-gear",
    icon: "luggage",
    count: 3,
    description: "Carry-on only packing formulas, flight hacking algorithms, credit card points, and visa checklists.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Food & Culture",
    slug: "food-culture",
    icon: "restaurant",
    count: 2,
    description: "Southeast Asian night markets, authentic Balinese temple ceremonies, and hidden Italian trattorias.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Travel Style & Nomad",
    slug: "travel-style",
    icon: "laptop_mac",
    count: 2,
    description: "The art of slow travel, top global digital nomad hubs, remote work cafes, and long-term travel lifestyle.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
  },
];

export default function CategoryIndexPage() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-[--surface] pt-20">
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12">
          <div className="max-w-4xl mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#005c55]/10 text-[#005c55] text-xs font-bold uppercase tracking-wider mb-3">
              <span className="material-symbols-outlined text-[15px]">category</span>
              Travel Categories
            </div>
            <h1
              className="text-2xl sm:text-4xl md:text-5xl font-serif text-[--on-surface] font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Curated Travel Archetypes
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-[--on-surface-variant]">
              Explore global travel dispatches organized by your preferred style: from budget rail itineraries to alpine treks and culinary expeditions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categoryList.map((cat) => (
              <Link key={cat.slug} href={`/blog?category=${cat.slug}`} className="cursor-pointer block text-inherit no-underline select-none">
                <article className="group h-full rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer">
                  <div className="cursor-pointer">
                    <div className="relative h-60 w-full overflow-hidden cursor-pointer">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                        style={{ backgroundImage: `url('${cat.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#005c55] shadow-md pointer-events-none">
                        <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
                      </div>
                      <span className="absolute bottom-4 left-4 text-white text-xs font-bold uppercase tracking-wider bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm pointer-events-none">
                        {cat.count} Field Guides
                      </span>
                    </div>

                    <div className="p-6 cursor-pointer">
                      <div className="pointer-events-none">
                        <h2
                          className="text-2xl font-serif font-bold text-gray-900 group-hover:text-[#005c55] transition-colors"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {cat.name}
                        </h2>
                        <p className="text-sm text-gray-600 mt-2.5 leading-relaxed">
                          {cat.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#005c55] pointer-events-none">
                    <span>Browse All Guides</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
