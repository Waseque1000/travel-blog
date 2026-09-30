"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const bangladeshDivisions = [
  { name: "Dhaka", count: "12 Guides", slug: "dhaka" },
  { name: "Chattogram", count: "42 Guides", slug: "chattogram" },
  { name: "Sylhet", count: "31 Guides", slug: "sylhet" },
  { name: "Khulna", count: "27 Guides", slug: "khulna" },
  { name: "Barishal", count: "22 Guides", slug: "barishal" },
  { name: "Rajshahi", count: "18 Guides", slug: "rajshahi" },
  { name: "Rangpur", count: "14 Guides", slug: "rangpur" },
  { name: "Mymensingh", count: "11 Guides", slug: "mymensingh" },
];

const worldRegions = [
  "South Asia", "Southeast Asia", "Europe", "Middle East", "Africa", "Americas",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [banglaMode, setBanglaMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-stone-950/95 backdrop-blur-xl border-b border-gray-200/80 dark:border-stone-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]"
          : "bg-white/90 dark:bg-stone-950/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-stone-800/50 shadow-sm"
      }`}
    >
      <div className="h-20 w-full px-6 md:px-10 lg:px-20 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3.5 shrink-0 group">
          <div className="w-9 h-9 rounded-lg bg-[#005c55] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-white text-[20px]">travel_explore</span>
          </div>
          <div className="flex flex-col">
            <span
              className="text-[1.5rem] leading-none tracking-tight text-gray-900 dark:text-white font-serif font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              SHONARTRAIL
            </span>
            <span className="text-[0.65rem] tracking-[0.16em] font-bold text-gray-500 dark:text-gray-400 mt-1 uppercase" style={{ fontFamily: "var(--font-inter)" }}>
              Expeditions &amp; Journal
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          <Link href="/" className="text-[#005c55] font-bold text-sm hover:opacity-80 transition-opacity">
            Home
          </Link>

          {/* Explore Bangladesh Mega Dropdown */}
          <div className="relative group py-2">
            <Link
              href="/blog?region=bangladesh"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#005c55] dark:hover:text-[#80d5cb] transition-colors flex items-center gap-1.5"
            >
              <span>Explore Bangladesh</span>
              <span className="text-[0.7rem] tracking-wider font-bold px-2 py-0.5 rounded-full bg-[#005c55]/10 text-[#005c55] dark:bg-[#005c55]/30 dark:text-[#9cf2e8]">
                8 Divisions
              </span>
              <span className="material-symbols-outlined text-[16px] text-gray-400 group-hover:rotate-180 transition-transform">
                expand_more
              </span>
            </Link>

            {/* Solid, High-Contrast Popup Card */}
            <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
              <div className="w-80 p-4 rounded-2xl bg-white dark:bg-stone-900 border border-gray-200 dark:border-stone-800 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] flex flex-col gap-3">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-stone-800">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    <span className="material-symbols-outlined text-[15px] text-[#005c55]">map</span>
                    Geographic Atlas
                  </div>
                  <span className="text-[11px] font-semibold text-[#005c55] dark:text-[#9cf2e8] bg-[#005c55]/10 dark:bg-[#005c55]/20 px-2 py-0.5 rounded-full">
                    8 Divisions
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-1.5">
                  {bangladeshDivisions.map((div) => (
                    <Link
                      key={div.name}
                      href={`/blog?region=bangladesh&division=${div.slug}`}
                      className="px-2.5 py-2 rounded-xl text-xs font-medium text-gray-800 dark:text-gray-200 hover:text-[#005c55] hover:bg-[#005c55]/10 dark:hover:bg-[#005c55]/20 transition-all flex flex-col justify-center"
                    >
                      <span className="font-semibold">{div.name}</span>
                      <span className="text-[10px] text-gray-400 dark:text-gray-500 font-mono">{div.count}</span>
                    </Link>
                  ))}
                </div>

                <div className="pt-2 border-t border-gray-100 dark:border-stone-800 flex items-center justify-between">
                  <Link
                    href="/blog?region=bangladesh"
                    className="text-xs font-semibold text-[#005c55] dark:text-[#9cf2e8] hover:underline flex items-center gap-1 w-full justify-center py-1 rounded-lg hover:bg-gray-50 dark:hover:bg-stone-800"
                  >
                    View All 9 Field Guides
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* World Journeys Mega Dropdown */}
          <div className="relative group py-2">
            <Link
              href="/blog?region=international"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#005c55] dark:hover:text-[#80d5cb] transition-colors flex items-center gap-1"
            >
              <span>World Journeys</span>
              <span className="material-symbols-outlined text-[16px] text-gray-400 group-hover:rotate-180 transition-transform">
                expand_more
              </span>
            </Link>

            <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
              <div className="w-64 p-4 rounded-2xl bg-white dark:bg-stone-900 border border-gray-200 dark:border-stone-800 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] flex flex-col gap-2">
                <div className="flex items-center gap-1.5 pb-2 border-b border-gray-100 dark:border-stone-800 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  <span className="material-symbols-outlined text-[15px] text-[#005c55]">public</span>
                  World Horizons
                </div>
                <div className="flex flex-col gap-1">
                  {worldRegions.map((region) => (
                    <Link
                      key={region}
                      href={`/blog?region=international&area=${region.toLowerCase().replace(/ /g, "-")}`}
                      className="px-3 py-2 rounded-xl text-xs font-medium text-gray-800 dark:text-gray-200 hover:text-[#005c55] hover:bg-[#005c55]/10 dark:hover:bg-[#005c55]/20 transition-all flex items-center justify-between"
                    >
                      <span>{region}</span>
                      <span className="material-symbols-outlined text-[14px] text-gray-400">arrow_right</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link href="/destinations" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#005c55] dark:hover:text-[#80d5cb] transition-colors">
            Destinations &amp; Map
          </Link>
          <Link href="/blog" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#005c55] dark:hover:text-[#80d5cb] transition-colors">
            Travel Journal &amp; Stories
          </Link>
          <Link href="/category" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#005c55] dark:hover:text-[#80d5cb] transition-colors">
            Categories
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setBanglaMode(!banglaMode)}
            className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-stone-800 text-xs font-bold text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-stone-700 transition-colors"
          >
            {banglaMode ? "বাংলা | EN" : "EN | বাংলা"}
          </button>

          <Link
            href="/blog"
            className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-stone-800 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-[#005c55] hover:bg-gray-200 dark:hover:bg-stone-700 flex items-center gap-1.5 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">search</span>
            <span className="hidden sm:inline">Search</span>
          </Link>

          <Link
            href="/admin"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-xl bg-[#005c55] text-white text-xs font-bold hover:bg-[#0f766e] transition-all shadow-md"
          >
            Write / Admin
          </Link>

          <button
            className="w-9 h-9 rounded-xl bg-[#005c55] flex items-center justify-center xl:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-white dark:bg-stone-900 border-t border-gray-200 dark:border-stone-800 px-6 py-6 flex flex-col gap-4 shadow-2xl">
          <Link href="/" className="text-[#005c55] font-bold text-base" onClick={() => setMobileOpen(false)}>
            Home
          </Link>
          <div>
            <p className="text-[0.7rem] tracking-wider font-bold text-gray-400 dark:text-gray-500 uppercase mb-2">
              Explore Bangladesh (8 Divisions)
            </p>
            <div className="grid grid-cols-2 gap-2">
              {bangladeshDivisions.map((div) => (
                <Link
                  key={div.name}
                  href={`/blog?region=bangladesh&division=${div.slug}`}
                  className="px-3 py-2 rounded-lg text-xs font-medium text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-stone-800 hover:bg-[#005c55]/10 hover:text-[#005c55] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {div.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/blog?region=international" className="text-sm font-medium text-gray-700 dark:text-gray-300" onClick={() => setMobileOpen(false)}>
            World Journeys
          </Link>
          <Link href="/destinations" className="text-sm font-medium text-gray-700 dark:text-gray-300" onClick={() => setMobileOpen(false)}>
            Destinations &amp; Map
          </Link>
          <Link href="/blog" className="text-sm font-medium text-gray-700 dark:text-gray-300" onClick={() => setMobileOpen(false)}>
            Travel Journal &amp; Stories
          </Link>
          <Link href="/admin" className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#005c55] text-white text-xs font-bold w-full" onClick={() => setMobileOpen(false)}>
            Write / Admin
          </Link>
        </div>
      )}
    </header>
  );
}
