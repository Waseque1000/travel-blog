import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { bangladeshPosts } from "@/lib/data/posts";

export const metadata = {
  title: "Expedition Categories & Archetypes | SHONAR TRAIL",
  description: "Browse travel dispatches grouped by travel discipline: Coastal & Reef, Cloud Trekking, Off-Grid Biosphere, Botanical Reserves, and Living Heritage.",
};

const categoryList = [
  {
    name: "Beach & Coastal Reef",
    slug: "beach",
    icon: "surfing",
    count: 3,
    description: "The 120km unbroken strand of Cox's Bazar, the coral waters of Saint Martin's Island, and Kuakata's dual sunrise and sunset horizon.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5L-2aKDmvpKbN1FtVhzYWzzC4_hcpUj-t1FBGitSIxvAYY5buhtTR7GRgNqspjjLX4AnzcTRczKDF1hmOA39fQ4PY7b85zOGseOJ-mQ13-TACCVo-gIXQwZl2IKm6ySZFRHSCJ5YKlYfyNRWCXhzN9E4tfMfND9zk5ODNaiYSKYdJLBpJExDRcx-R2x06Bhaa2LuqQMgBloc07n1pYdAWhTRRo02QMrcm_FSz2LhBQUc7VeeGt5w",
  },
  {
    name: "Mountain & Cloud Ridges",
    slug: "mountain",
    icon: "landscape",
    count: 1,
    description: "Sajek Valley's 1,800-foot ridge, tribal bamboo villages, and floating sea of morning cloud above the Lushei peaks.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBId_INVaDFA0n9xplmGUmZvmTX726opQZqHo1dY8O6oipc5lUcIHwSBfbg0OTfTushYP865EgBcGvF76c7_AQuYa7u50wDzPXwOQCYdwWVhtYNPeen52HWqxgcGvXLsxanSWuXQvuzMwdNX3t_PrM6lzTul6cKaW81goGobjtRzi7Ly-1ZRG11YE4lL792MKLoaEBTkeeUByxE2dMXUQPQ9XamYujP6LiU70S8Ja4_pyNNkojHgEU",
  },
  {
    name: "Adventure & Deep Trails",
    slug: "adventure",
    icon: "explore",
    count: 2,
    description: "Tracking Royal Bengal Tigers in the Sundarbans mangrove delta and scaling Keokradong & Boga Lake in Bandarban.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbVvMpUKP9P7jxNatdf7qmOGFl8uw-yIJs_sa9c6tbYr3iOvRUtzTZ51GvPFjpxkMmRKYfIfaB3QSHHGW3d87IQ1qbYCUfclLHGkyl9g2y8WCRatnqDb_Q7wjR-9zVhLQcQVe9dpcwo0vzt3Tj4jt2jlGtgXQSxG0sEiR_AljIct3E1YhL1swNqkSykyeG7C912aTHAY2zC-MbAaHHZkBiWOaI3m6QCeka-r5Oj8tHw539c9IY37Q",
  },
  {
    name: "Nature & Botanical Reserves",
    slug: "nature",
    icon: "forest",
    count: 2,
    description: "Srimangal's rolling heirloom tea estates, Lawachara gibbon canopies, and Ratargul freshwater swamp forest.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtGYPg9s8__7Ze0oncrPUz5NRp-4HFMQpaI_6UCXSUTEUCpShZLP7hDyQfh2Bu5phu6xsibq1pWIzV97JEqRry94cEVpxCwO9y4yRa6382bXfVF4PO-4yaeVFCxeTEXUotvYPAHCfihBpZ9ml7aLUQjmZLQ0H6Xv777Wkf4OA_X9kGlYdcnUeX9MvMnWifTVQpaCgXASgXS6rMKbQO_DIGt2QX1cuPQAaBTttjRjiMnWfPA0bryDg",
  },
  {
    name: "Living Heritage & UNESCO",
    slug: "heritage",
    icon: "temple_buddhist",
    count: 1,
    description: "Somapura Mahavihara 8th-century Buddhist monastery in Paharpur and Bagerhat's 77-domed Sixty Dome Mosque city.",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80",
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
              Expedition Disciplines
            </div>
            <h1
              className="text-2xl sm:text-4xl md:text-5xl font-serif text-[--on-surface] font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Curated Travel Archetypes
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-[--on-surface-variant]">
              Explore Bangladesh's geographical richness organized by your preferred style of travel: from sunlit coasts to dense rainforests and ancient monasteries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categoryList.map((cat) => (
              <Link key={cat.slug} href={`/blog?category=${cat.slug}`}>
                <article className="group h-full rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="relative h-60 w-full overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${cat.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#005c55] shadow-md">
                        <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
                      </div>
                      <span className="absolute bottom-4 left-4 text-white text-xs font-bold uppercase tracking-wider bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                        {cat.count} Field Guides
                      </span>
                    </div>

                    <div className="p-6">
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

                  <div className="px-6 pb-6 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#005c55]">
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
