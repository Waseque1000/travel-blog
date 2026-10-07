"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


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
      <div className="h-18 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
          {/* Official Wasee On The Go Airplane Emblem */}
          <img
            src="/logo-icon.png"
            alt="Wasee On The Go"
            className="h-8 sm:h-9 w-auto object-contain group-hover:scale-105 transition-transform shrink-0"
          />
          <div className="flex flex-col">
            <span
              className="text-lg sm:text-xl tracking-tight text-gray-900 dark:text-white font-serif font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              WASEE ON THE GO
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.14em] font-semibold text-[#005c55] dark:text-[#80d5cb] uppercase">
              Expedition Journal
            </span>
          </div>
        </Link>

        {/* Clean Center Navigation — Home, Blog, Contact only */}
        <nav className="hidden lg:flex items-center gap-8">
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

          <Link
            href="/blog"
            className={`text-sm font-medium transition-colors ${
              pathname.startsWith("/blog")
                ? "text-[#005c55] font-semibold"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            }`}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors ${
              pathname === "/contact"
                ? "text-[#005c55] font-semibold"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            }`}
          >
            Contact
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

          {/* Clean Explore Guides CTA */}
          <Link
            href="/destinations"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#005c55] hover:bg-[#004842] text-white text-xs font-semibold tracking-wide shadow-sm transition-all"
          >
            <span>Explore Guides</span>
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

      {/* Clean Mobile Menu — Home, Blog, Contact, Explore Guides only */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-stone-900/98 backdrop-blur-xl border-t border-gray-200 dark:border-stone-800 px-4 sm:px-6 py-5 flex flex-col gap-3 shadow-2xl max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          <Link
            href="/"
            className={`text-sm font-semibold py-2.5 px-3.5 rounded-xl transition-colors ${
              pathname === "/"
                ? "bg-[#005c55]/10 text-[#005c55] dark:text-[#80d5cb]"
                : "text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-stone-800"
            }`}
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className={`text-sm font-semibold py-2.5 px-3.5 rounded-xl transition-colors ${
              pathname.startsWith("/blog")
                ? "bg-[#005c55]/10 text-[#005c55] dark:text-[#80d5cb]"
                : "text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-stone-800"
            }`}
            onClick={() => setMobileOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-semibold py-2.5 px-3.5 rounded-xl transition-colors ${
              pathname === "/contact"
                ? "bg-[#005c55]/10 text-[#005c55] dark:text-[#80d5cb]"
                : "text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-stone-800"
            }`}
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/destinations"
            className="text-sm font-semibold py-2.5 px-3.5 rounded-xl bg-[#005c55] text-white flex items-center justify-center gap-2 mt-2"
            onClick={() => setMobileOpen(false)}
          >
            <span>Explore Guides</span>
          </Link>
        </div>
      )}
    </header>
  );
}
