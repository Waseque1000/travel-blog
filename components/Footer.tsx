"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0c1815] text-white font-sans border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-24 py-10 sm:py-12">
        {/* Top Tier: Brand & Minimal Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-7 border-b border-white/10">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 group">
              <img
                src="/logo-icon.png"
                alt="Wasee On The Go"
                className="h-8 sm:h-9 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform"
              />
              <span
                className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                WASEE ON THE GO
              </span>
              <span className="bg-[#005c55]/40 border border-[#80d5cb]/30 text-[#80d5cb] text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full uppercase">
                EXPEDITIONS
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-white/60 mt-2 font-light leading-relaxed">
              Ground-verified route dossiers &amp; unvarnished field dispatches across global horizons.
            </p>
          </div>

          {/* Minimal Nav Links */}
          <nav className="flex items-center gap-5 sm:gap-6 flex-wrap text-xs sm:text-sm font-medium">
            <Link href="/" className="text-white/75 hover:text-[#80d5cb] transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-white/75 hover:text-[#80d5cb] transition-colors">
              Blog
            </Link>
            <Link href="/blog/10-day-japan-itinerary" className="text-white/75 hover:text-[#80d5cb] transition-colors">
              Japan Itinerary
            </Link>
            <Link href="/blog/swiss-alps-hiking-trails" className="text-white/75 hover:text-[#80d5cb] transition-colors">
              Swiss Alps
            </Link>
            <Link href="/destinations" className="text-white/75 hover:text-[#80d5cb] transition-colors">
              Destinations
            </Link>
            <Link href="/contact" className="text-white/75 hover:text-[#80d5cb] transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Bottom Tier: Copyright, Waypoint, Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 text-xs text-white/50">
          <div>
            © 2026 Wasee On The Go · All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-white/40 tracking-wider">23°42&apos;N 90°22&apos;E</span>
            <span className="text-white/20">|</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
