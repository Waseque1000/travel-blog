import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { bangladeshPosts } from "@/lib/data/posts";
import BangladeshMap from "@/components/BangladeshMap";

export const metadata = {
  title: "Destinations & Territorial Atlas | SHONAR TRAIL",
  description: "Explore 48 cartographic routes plotted across the 8 primeval divisions of Bangladesh and international horizons.",
};

const allDestinations = [
  {
    name: "Sajek Valley",
    division: "Chattogram",
    region: "bangladesh",
    elevation: "1,800 FT",
    coordinates: "23°23'N 92°17'E",
    tagline: "The sovereign mist of the Lushei peaks",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBId_INVaDFA0n9xplmGUmZvmTX726opQZqHo1dY8O6oipc5lUcIHwSBfbg0OTfTushYP865EgBcGvF76c7_AQuYa7u50wDzPXwOQCYdwWVhtYNPeen52HWqxgcGvXLsxanSWuXQvuzMwdNX3t_PrM6lzTul6cKaW81goGobjtRzi7Ly-1ZRG11YE4lL792MKLoaEBTkeeUByxE2dMXUQPQ9XamYujP6LiU70S8Ja4_pyNNkojHgEU",
    budget: "৳৳",
    slug: "sajek-valley-travel-guide",
    category: "Mountain",
  },
  {
    name: "Sundarbans Biome",
    division: "Khulna",
    region: "bangladesh",
    elevation: "Sea Level",
    coordinates: "21°56'N 89°11'E",
    tagline: "World's largest mangrove forest & Royal Bengal tiger kingdom",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbVvMpUKP9P7jxNatdf7qmOGFl8uw-yIJs_sa9c6tbYr3iOvRUtzTZ51GvPFjpxkMmRKYfIfaB3QSHHGW3d87IQ1qbYCUfclLHGkyl9g2y8WCRatnqDb_Q7wjR-9zVhLQcQVe9dpcwo0vzt3Tj4jt2jlGtgXQSxG0sEiR_AljIct3E1YhL1swNqkSykyeG7C912aTHAY2zC-MbAaHHZkBiWOaI3m6QCeka-r5Oj8tHw539c9IY37Q",
    budget: "৳৳৳",
    slug: "sundarbans-mangrove-forest-guide",
    category: "Adventure",
  },
  {
    name: "Srimangal Estates",
    division: "Sylhet",
    region: "bangladesh",
    elevation: "65 FT",
    coordinates: "24°18'N 91°44'E",
    tagline: "Rolling tea slopes, seven-layer brews & gibbon rainforests",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtGYPg9s8__7Ze0oncrPUz5NRp-4HFMQpaI_6UCXSUTEUCpShZLP7hDyQfh2Bu5phu6xsibq1pWIzV97JEqRry94cEVpxCwO9y4yRa6382bXfVF4PO-4yaeVFCxeTEXUotvYPAHCfihBpZ9ml7aLUQjmZLQ0H6Xv777Wkf4OA_X9kGlYdcnUeX9MvMnWifTVQpaCgXASgXS6rMKbQO_DIGt2QX1cuPQAaBTttjRjiMnWfPA0bryDg",
    budget: "৳৳",
    slug: "srimangal-tea-capital-guide",
    category: "Nature",
  },
  {
    name: "Cox's Bazar Strand",
    division: "Chattogram",
    region: "bangladesh",
    elevation: "Sea Level",
    coordinates: "21°26'N 91°59'E",
    tagline: "120 km of unbroken natural sand beach along Bay of Bengal",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5L-2aKDmvpKbN1FtVhzYWzzC4_hcpUj-t1FBGitSIxvAYY5buhtTR7GRgNqspjjLX4AnzcTRczKDF1hmOA39fQ4PY7b85zOGseOJ-mQ13-TACCVo-gIXQwZl2IKm6ySZFRHSCJ5YKlYfyNRWCXhzN9E4tfMfND9zk5ODNaiYSKYdJLBpJExDRcx-R2x06Bhaa2LuqQMgBloc07n1pYdAWhTRRo02QMrcm_FSz2LhBQUc7VeeGt5w",
    budget: "৳৳",
    slug: "coxs-bazar-beach-guide",
    category: "Beach",
  },
  {
    name: "Bandarban Peaks",
    division: "Chattogram",
    region: "bangladesh",
    elevation: "3,172 FT",
    coordinates: "22°11'N 92°13'E",
    tagline: "Keokradong ascents, Boga Lake crater & tribal valleys",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    budget: "৳৳",
    slug: "bandarban-hill-trekking-guide",
    category: "Adventure",
  },
  {
    name: "Saint Martin's Coral",
    division: "Chattogram",
    region: "bangladesh",
    elevation: "Sea Level",
    coordinates: "20°37'N 92°19'E",
    tagline: "Narikel Jinjira: Bangladesh's only coral island & Chhera Dwip",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    budget: "৳৳৳",
    slug: "saint-martins-island-guide",
    category: "Beach",
  },
  {
    name: "Ratargul & Jaflong",
    division: "Sylhet",
    region: "bangladesh",
    elevation: "115 FT",
    coordinates: "25°00'N 91°58'E",
    tagline: "Freshwater swamp canopies & Meghalaya border rivers",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEwzasUKPLVDarjCmOo8IpGHSP7zxhfimyjliZJuZiX60vll9uJKB4KhoNp71C_h4g6gT-KpzLrL9wOgiqeslP00seVImazu7RED1_PJNW6nv5oGg5xXOULKay8lmapnHFrjJZu85eIki8lD9yTp8072hfKw5-6B2sA1CaM51waOK4fCNRnMe0hHgSduG3JcU6QAQ7qK-N7DhFdF3IgnHBy8-yBQLLGoavzCfwm8V9mQzzBSeAg0Y",
    budget: "৳৳",
    slug: "sylhet-ratargul-jaflong-bisnakandi",
    category: "Nature",
  },
  {
    name: "Kuakata Shore",
    division: "Barishal",
    region: "bangladesh",
    elevation: "Sea Level",
    coordinates: "21°49'N 90°07'E",
    tagline: "Daughter of the Sea: sunrise and sunset over the open ocean",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkWSUBpy-9m2ugmNBatAuyMD03wsNPuyjfRJLclqxWrHd0sQTXNFm7UWidbOMdqymLqb4zUgXpN2Sz-gFxCTSigu2Fly6UbQiBbtvSZR6ayLch4orHSGODGqV15Bfeko37cp8nYTmS4EaRFzDi6lfkHOWJW5XPDV2zUycyutVERKMWZq5MIJmGlaATmx4RqwOjjwMPawnVqv_AksfT3OV5YFiA42NOcH3AesGe8ryRMYZHPxjztN4",
    budget: "৳৳",
    slug: "kuakata-sunrise-sunset-guide",
    category: "Beach",
  },
  {
    name: "Paharpur & Bagerhat",
    division: "Rajshahi",
    region: "bangladesh",
    elevation: "55 FT",
    coordinates: "25°01'N 88°58'E",
    tagline: "8th-century Somapura Mahavihara & 77-domed medieval mosque city",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80",
    budget: "৳",
    slug: "paharpur-bagerhat-heritage-guide",
    category: "Heritage",
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

  const divisionsList = [
    "All", "Chattogram", "Sylhet", "Khulna", "Barishal", "Rajshahi", "Rangpur", "Mymensingh", "Dhaka"
  ];

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
              <span className="text-[--primary] font-semibold">Territorial Coordinates</span>
              <span>/</span>
              <span>Volume IV · 2026</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h1
                className="text-2xl sm:text-4xl md:text-5xl font-serif text-[--on-surface] max-w-3xl leading-tight font-semibold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Territorial Atlas: Explore Destinations Across Bangladesh
              </h1>
              <div className="self-start md:self-auto flex items-center gap-2 shrink-0 bg-[--surface-container] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#005c55] animate-pulse" />
                <span className="font-semibold text-[--on-surface]">
                  {allDestinations.length} Key Coordinates Mapped
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Bangladesh Map with Tourist Places */}
          <div className="mt-6 sm:mt-8">
            <BangladeshMap />
          </div>

          {/* Division Filter Bar */}
          <div className="mt-6 sm:mt-8 p-3 sm:p-4 rounded-2xl bg-[--surface-container-low] border border-[--outline-variant]/40 flex flex-col gap-2.5 sm:gap-3">
            <span className="text-xs uppercase font-bold tracking-wider text-[--outline]">
              Filter by Geographic Division:
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
                        <span className="font-mono text-[#80d5cb]">{dest.coordinates}</span>
                        <span className="bg-black/40 px-2 py-0.5 rounded text-[11px]">{dest.elevation}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                        <span>Budget: <strong className="text-[#005c55]">{dest.budget}</strong></span>
                        <span>Route Log Available</span>
                      </div>
                      <h3
                        className="text-2xl font-serif font-bold text-gray-900 group-hover:text-[#005c55] transition-colors leading-snug"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {dest.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                        {dest.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#005c55]">
                    <span>Read Field Guide</span>
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
