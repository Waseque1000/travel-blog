"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const bangladeshDivisions = [
  { name: "Chattogram", count: "42 Guides", slug: "chattogram" },
  { name: "Sylhet", count: "31 Guides", slug: "sylhet" },
  { name: "Khulna", count: "27 Guides", slug: "khulna" },
  { name: "Barishal", count: "22 Guides", slug: "barishal" },
  { name: "Rajshahi", count: "18 Guides", slug: "rajshahi" },
  { name: "Rangpur", count: "14 Guides", slug: "rangpur" },
  { name: "Dhaka", count: "12 Guides", slug: "dhaka" },
  { name: "Mymensingh", count: "11 Guides", slug: "mymensingh" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/destinations" },
    { label: "Journal", href: "/blog" },
    { label: "Categories", href: "/category" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-stone-950/95 backdrop-blur-md border-b border-gray-200/80 dark:border-stone-800 shadow-sm"
          : "bg-white/90 dark:bg-stone-950/90 backdrop-blur-md border-b border-gray-200/40 dark:border-stone-800/40"
      }`}
    >
      <div className="h-18 w-full px-4 sm:px-6 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
          <div className="w-8 h-8 rounded-lg bg-[#005c55] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform shrink-0">
            <span className="material-symbols-outlined text-[19px]">travel_explore</span>
          </div>
          <div className="flex flex-col">
            <span
              className="text-lg sm:text-xl tracking-tight text-gray-900 dark:text-white font-serif font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              SHONARTRAIL
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.14em] font-medium text-gray-500 uppercase">
              Expedition Journal
            </span>
          </div>
        </Link>

        {/* Clean Center Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              pathname === "/"
                ? "text-[#005c55] font-semibold"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            }`}
          >
            Home
          </Link>

          {/* Explore Bangladesh Mega Dropdown */}
          <div className="relative group py-2">
            <Link
              href="/blog?region=bangladesh"
              className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                pathname.includes("bangladesh")
                  ? "text-[#005c55] font-semibold"
                  : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              }`}
            >
              <span>Bangladesh</span>
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-[#005c55]/10 text-[#005c55]">
                8 Divisions
              </span>
              <span className="material-symbols-outlined text-[16px] text-gray-400 group-hover:rotate-180 transition-transform">
                expand_more
              </span>
            </Link>

            {/* Clean Dropdown Card */}
            <div className="absolute top-full -left-4 pt-2 hidden group-hover:block z-50">
              <div className="w-72 p-3.5 rounded-2xl bg-white dark:bg-stone-900 border border-gray-200 dark:border-stone-800 shadow-xl flex flex-col gap-2">
                <div className="flex items-center justify-between px-2 pb-2 border-b border-gray-100 dark:border-stone-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Geographic Divisions
                  </span>
                  <span className="text-[10px] text-[#005c55] font-semibold">Atlas</span>
                </div>

                <div className="grid grid-cols-2 gap-1">
                  {bangladeshDivisions.map((div) => (
                    <Link
                      key={div.name}
                      href={`/blog?region=bangladesh&division=${div.slug}`}
                      className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-200 hover:text-[#005c55] hover:bg-[#005c55]/10 transition-colors flex flex-col"
                    >
                      <span className="font-semibold">{div.name}</span>
                      <span className="text-[10px] text-gray-400">{div.count}</span>
                    </Link>
                  ))}
                </div>

                <div className="pt-2 border-t border-gray-100 dark:border-stone-800">
                  <Link
                    href="/blog?region=bangladesh"
                    className="text-xs font-semibold text-[#005c55] hover:underline flex items-center justify-center gap-1 py-1"
                  >
                    View All 9 Field Guides
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/destinations"
            className={`text-sm font-medium transition-colors ${
              pathname === "/destinations"
                ? "text-[#005c55] font-semibold"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            }`}
          >
            Destinations
          </Link>

          <Link
            href="/blog"
            className={`text-sm font-medium transition-colors ${
              pathname === "/blog"
                ? "text-[#005c55] font-semibold"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            }`}
          >
            Journal
          </Link>

          <Link
            href="/category"
            className={`text-sm font-medium transition-colors ${
              pathname === "/category"
                ? "text-[#005c55] font-semibold"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            }`}
          >
            Categories
          </Link>
        </nav>

        {/* Right Clean Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Minimalist Search Icon Button */}
          <Link
            href="/search"
            aria-label="Search dispatches"
            className="w-9 h-9 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-stone-800 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">search</span>
          </Link>

          {/* Clean Write / Admin Button */}
          <Link
            href="/admin"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#005c55] hover:bg-[#004842] text-white text-xs font-semibold tracking-wide shadow-sm transition-all"
          >
            <span className="material-symbols-outlined text-[15px]">edit</span>
            <span>Admin</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Clean Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-stone-900/98 backdrop-blur-xl border-t border-gray-200 dark:border-stone-800 px-4 sm:px-6 py-5 flex flex-col gap-3 shadow-2xl max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          <Link
            href="/"
            className={`text-sm font-semibold py-2 px-3 rounded-xl transition-colors ${
              pathname === "/"
                ? "bg-[#005c55]/10 text-[#005c55] dark:text-[#80d5cb]"
                : "text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-stone-800"
            }`}
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <div className="py-2 px-3 rounded-xl bg-gray-50/70 dark:bg-stone-800/50">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
              Bangladesh Divisions
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {bangladeshDivisions.map((div) => (
                <Link
                  key={div.name}
                  href={`/blog?region=bangladesh&division=${div.slug}`}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-stone-800/80 hover:text-[#005c55] border border-gray-100 dark:border-stone-700/60 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {div.name}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/destinations"
            className={`text-sm font-semibold py-2 px-3 rounded-xl transition-colors ${
              pathname === "/destinations"
                ? "bg-[#005c55]/10 text-[#005c55] dark:text-[#80d5cb]"
                : "text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-stone-800"
            }`}
            onClick={() => setMobileOpen(false)}
          >
            Destinations
          </Link>
          <Link
            href="/blog"
            className={`text-sm font-semibold py-2 px-3 rounded-xl transition-colors ${
              pathname === "/blog"
                ? "bg-[#005c55]/10 text-[#005c55] dark:text-[#80d5cb]"
                : "text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-stone-800"
            }`}
            onClick={() => setMobileOpen(false)}
          >
            Journal
          </Link>
          <Link
            href="/category"
            className={`text-sm font-semibold py-2 px-3 rounded-xl transition-colors ${
              pathname === "/category"
                ? "bg-[#005c55]/10 text-[#005c55] dark:text-[#80d5cb]"
                : "text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-stone-800"
            }`}
            onClick={() => setMobileOpen(false)}
          >
            Categories
          </Link>
          <Link
            href="/admin"
            className="mt-2 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-[#005c55] text-white text-xs font-bold shadow-md hover:bg-[#004842] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            <span className="material-symbols-outlined text-[16px]">edit</span>
            Curator Admin
          </Link>
        </div>
      )}
    </header>
  );
}
