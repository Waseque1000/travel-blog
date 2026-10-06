import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Global Destinations & Territorial Atlas | WASEE ON THE GO",
  description: "Explore hand-crafted itineraries, scenic rail routes, and comprehensive field guides across premier international travel regions.",
};

const allDestinations = [
  {
    name: "Tokyo & Kyoto",
    division: "Asia",
    region: "international",
    elevation: "40 m",
    coordinates: "35°41'N 139°41'E",
    tagline: "Bullet trains, neon Shibuya and ancient Zen shrines in Kyoto",
    image: "https://waseeonthego.com/wp-content/uploads/2026/10/japan-kyoto-temple-guide.jpg",
    budget: "$$$",
    slug: "10-day-japan-itinerary",
    category: "Culture",
  },
  {
    name: "Swiss Alps",
    division: "Europe",
    region: "international",
    elevation: "4,478 m",
    coordinates: "45°58'N 7°39'E",
    tagline: "Matterhorn peaks, panoramic railways and alpine glacier lakes",
    image: "https://waseeonthego.com/wp-content/uploads/2026/10/swiss-alps-hiking-matterhorn.jpg",
    budget: "$$$",
    slug: "swiss-alps-hiking-trails",
    category: "Mountain",
  },
  {
    name: "Iceland Ring Road",
    division: "Europe",
    region: "international",
    elevation: "Sea Level",
    coordinates: "64°08'N 21°56'W",
    tagline: "Route 1 volcanic landscapes, glacial waterfalls & black sands",
    image: "https://waseeonthego.com/wp-content/uploads/2026/10/iceland-ring-road-waterfall.jpg",
    budget: "$$$",
    slug: "iceland-ring-road-guide",
    category: "Adventure",
  },
  {
    name: "Morocco Sahara",
    division: "Africa",
    region: "international",
    elevation: "450 m",
    coordinates: "31°37'N 7°59'W",
    tagline: "Marrakech souks, Atlas mountain passes & Sahara dunes",
    image: "https://waseeonthego.com/wp-content/uploads/2026/10/morocco-sahara-desert-road-trip.jpg",
    budget: "$$",
    slug: "morocco-10-day-itinerary",
    category: "Adventure",
  },
  {
    name: "Greek Cyclades",
    division: "Europe",
    region: "international",
    elevation: "Sea Level",
    coordinates: "36°25'N 25°26'E",
    tagline: "Santorini caldera cliffs, whitewashed villages & Aegean sea",
    image: "https://waseeonthego.com/wp-content/uploads/2026/10/greece-santorini-7-days-itinerary.jpg",
    budget: "$$",
    slug: "7-days-in-greece-itinerary",
    category: "Coastal",
  },
  {
    name: "Bali Terraces",
    division: "Asia",
    region: "international",
    elevation: "350 m",
    coordinates: "8°20'S 115°09'E",
    tagline: "Sidemen emerald rice terraces, sacred water temples & quiet culture",
    image: "https://waseeonthego.com/wp-content/uploads/2026/10/bali-hidden-gems-cultural-temples.jpg",
    budget: "$$",
    slug: "bali-hidden-gems-cultural-guide",
    category: "Culture",
  },
  {
    name: "Norway Fjords",
    division: "Europe",
    region: "international",
    elevation: "Sea Level",
    coordinates: "62°06'N 7°00'E",
    tagline: "Geirangerfjord & Nærøyfjord dramatic glacial fjords and switchbacks",
    image: "https://waseeonthego.com/wp-content/uploads/2026/10/norway-fjords-cruises-roadtrip.jpg",
    budget: "$$$",
    slug: "norway-fjords-travel-guide",
    category: "Nature",
  },
  {
    name: "New Zealand South Island",
    division: "Oceania",
    region: "international",
    elevation: "3,724 m",
    coordinates: "44°24'S 168°44'E",
    tagline: "Milford Sound fjords, Mount Cook peaks and glacial highway",
    image: "https://waseeonthego.com/wp-content/uploads/2026/10/new-zealand-south-island-roadtrip.jpg",
    budget: "$$$",
    slug: "new-zealand-south-island-road-trip",
    category: "Adventure",
  },
  {
    name: "Costa Rica Rainforest",
    division: "Americas",
    region: "international",
    elevation: "1,633 m",
    coordinates: "10°27'N 84°42'W",
    tagline: "Monteverde cloud forests, Arenal volcano & Pacific coast",
    image: "https://waseeonthego.com/wp-content/uploads/2026/10/costa-rica-rainforest-eco-adventure.jpg",
    budget: "$$",
    slug: "costa-rica-2-week-itinerary",
    category: "Nature",
  },
  {
    name: "Italian Riviera & Cinque Terre",
    division: "Europe",
    region: "international",
    elevation: "Sea Level",
    coordinates: "44°08'N 9°42'E",
    tagline: "Hidden cliffside villages, vineyard terraces & Mediterranean coves",
    image: "https://waseeonthego.com/wp-content/uploads/2026/10/hidden-gems-italy-cinque-terre.jpg",
    budget: "$$",
    slug: "hidden-gems-in-italy",
    category: "Culture",
  },
];

interface DestinationsPageProps {
  searchParams: Promise<{
    division?: string;
  }>;
}

export default async function DestinationsPage({ searchParams }: DestinationsPageProps) {
  const { division } = await searchParams;

  const filtered = division
    ? allDestinations.filter((d) => d.division.toLowerCase() === division.toLowerCase())
    : allDestinations;

  const divisionsList = ["All", "Asia", "Europe", "Africa", "Americas", "Oceania"];

  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-[--surface] pt-20">
        {/* Header Section */}
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pt-8 sm:pt-10 pb-6 sm:pb-8 bg-[--surface]">
          <div className="max-w-6xl">
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-[--outline] mb-3">
              <span>Cartographic Gazette</span>
              <span>/</span>
              <span className="text-[--primary] font-semibold">Global Atlas</span>
              <span>/</span>
              <span>Volume IV · 2026</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h1
                className="text-2xl sm:text-4xl md:text-5xl font-serif text-[--on-surface] max-w-3xl leading-tight font-semibold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Global Atlas: Explore International Travel Destinations
              </h1>
              <div className="self-start md:self-auto flex items-center gap-2 shrink-0 bg-[--surface-container] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#005c55] animate-pulse" />
                <span className="font-semibold text-[--on-surface]">
                  {allDestinations.length} Global Territories Mapped
                </span>
              </div>
            </div>
          </div>

          {/* Region Filter Bar */}
          <div className="mt-6 sm:mt-8 p-3 sm:p-4 rounded-2xl bg-[--surface-container-low] border border-[--outline-variant]/40 flex flex-col gap-2.5 sm:gap-3">
            <span className="text-xs uppercase font-bold tracking-wider text-[--outline]">
              Filter by Geographic Region:
            </span>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {divisionsList.map((divName) => {
                const isSelected = (!division && divName === "All") || (division && division.toLowerCase() === divName.toLowerCase());
                return (
                  <Link
                    key={divName}
                    href={divName === "All" ? "/destinations" : `/destinations?division=${divName.toLowerCase()}`}
                    className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all ${
                      isSelected
                        ? "bg-[#005c55] text-white shadow-sm"
                        : "bg-white text-gray-700 hover:bg-gray-100 hover:text-black border border-gray-200"
                    }`}
                  >
                    {divName}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Destination Cards Grid */}
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-8 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((dest) => (
              <Link key={dest.name} href={`/blog/${dest.slug}`}>
                <article className="group h-full rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="relative h-60 w-full overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${dest.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-bold text-white border border-white/20 uppercase tracking-wider">
                          {dest.division}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-[#005c55]/80 text-[11px] font-semibold text-white">
                          {dest.category}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px] text-[#80d5cb]">explore</span>
                          {dest.coordinates}
                        </span>
                        <span className="font-mono text-[#80d5cb]">
                          {dest.elevation}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6">
                      <h3
                        className="text-xl font-serif text-gray-900 group-hover:text-[#005c55] transition-colors font-bold mb-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {dest.name}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                        {dest.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-medium">
                      Budget Scale: <strong className="text-gray-800">{dest.budget}</strong>
                    </span>
                    <span className="text-xs font-semibold text-[#005c55] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read Guide <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
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
