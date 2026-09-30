import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { bangladeshPosts } from "@/lib/data/posts";

export const metadata = {
  title: "Curator Desk · Editorial Admin | SHONAR TRAIL",
  description: "Curator portal for managing field dispatches, editorial queues, and database status.",
};

export default function AdminPage() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-[--surface] pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-10 flex flex-col gap-8">
          {/* Welcome Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#003833] to-[#005c55] text-white p-8 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="relative z-10 flex flex-col gap-2 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-md">
                  Editorial Curator Desk
                </span>
                <span className="text-xs text-[#80d5cb] flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#80d5cb] animate-ping" />
                  MongoDB Atlas Connected
                </span>
              </div>
              <h1
                className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight mt-1"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Welcome back, Editorial Director <span className="italic font-normal text-[#9cf2e8]">(Tanvir Ahmed)</span>
              </h1>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                The publication currently manages 9 core Bangladesh field dispatches and regional hubs across South Asia. All articles are synced with your live database.
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-3 shrink-0">
              <Link
                href="/api/seed"
                target="_blank"
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[16px]">sync</span>
                Re-seed Database
              </Link>
              <Link
                href="/blog"
                className="px-5 py-2.5 rounded-xl bg-[#ffdbca] hover:bg-[#ffb690] text-[#783200] text-xs font-bold transition-all shadow-md flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[16px]">visibility</span>
                View Public Site
              </Link>
            </div>
          </div>

          {/* Metric Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-gray-500 tracking-wider">Live Dispatches</span>
                <div className="w-9 h-9 rounded-xl bg-[#005c55]/10 flex items-center justify-center text-[#005c55]">
                  <span className="material-symbols-outlined text-[20px]">auto_stories</span>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-3xl font-serif font-bold text-gray-900" style={{ fontFamily: "var(--font-playfair)" }}>
                  {bangladeshPosts.length}
                </span>
                <span className="text-xs text-[#005c55] font-semibold flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  100% Published &amp; Live
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-gray-500 tracking-wider">Monthly Views</span>
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-3xl font-serif font-bold text-gray-900" style={{ fontFamily: "var(--font-playfair)" }}>
                  182,400
                </span>
                <span className="text-xs text-blue-600 font-semibold flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span>
                  ▲ 24% Growth this cycle
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-gray-500 tracking-wider">Divisions Covered</span>
                <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                  <span className="material-symbols-outlined text-[20px]">map</span>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-3xl font-serif font-bold text-gray-900" style={{ fontFamily: "var(--font-playfair)" }}>
                  5 / 8
                </span>
                <span className="text-xs text-amber-600 font-semibold flex items-center gap-1 mt-1">
                  Active field dispatches
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-gray-500 tracking-wider">Gazette Subscribers</span>
                <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <span className="material-symbols-outlined text-[20px]">mark_email_read</span>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-3xl font-serif font-bold text-gray-900" style={{ fontFamily: "var(--font-playfair)" }}>
                  14,890
                </span>
                <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1 mt-1">
                  Fortnightly dispatch
                </span>
              </div>
            </div>
          </div>

          {/* Active Dispatches Table */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-serif font-bold text-gray-900" style={{ fontFamily: "var(--font-playfair)" }}>
                  Active Bangladesh Field Dispatches
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  Post Content Bank entries currently indexed in the publication and synced with MongoDB.
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
                {bangladeshPosts.length} Online
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 border-b border-gray-100 text-xs font-bold uppercase tracking-wider text-gray-500">
                  <tr>
                    <th className="py-3 px-6">Dossier Title &amp; Slug</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Division &amp; Location</th>
                    <th className="py-3 px-4">Cadence</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {bangladeshPosts.map((post) => (
                    <tr key={post.slug} className="hover:bg-gray-50/70 transition-colors">
                      <td className="py-4 px-6">
                        <Link href={`/blog/${post.slug}`} className="font-semibold text-gray-900 hover:text-[#005c55] block">
                          {post.title}
                        </Link>
                        <span className="text-xs text-gray-400 font-mono">/{post.slug}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#005c55]/10 text-[#005c55]">
                          {post.category.name}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-600 text-xs font-medium">
                        {post.location}
                      </td>
                      <td className="py-4 px-4 text-gray-600 text-xs font-mono">
                        {post.readingTime} min read
                      </td>
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Published
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-[#005c55] hover:bg-[#005c55] hover:text-white transition-all inline-flex items-center gap-1"
                        >
                          View <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
