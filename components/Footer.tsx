import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[--inverse-surface] text-[--inverse-on-surface]">
      {/* Newsletter */}
      <div className="w-full px-6 md:px-10 lg:px-20 py-16 border-b border-white/10">
        <div className="max-w-2xl">
          <span className="text-[0.75rem] tracking-[0.12em] font-semibold text-[--primary-fixed-dim] uppercase" style={{ fontFamily: "var(--font-inter)" }}>
            Field Dispatch Newsletter
          </span>
          <h2
            className="text-3xl md:text-4xl text-white mt-2 mb-4"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 600 }}
          >
            Join the Expedition Circle
          </h2>
          <p className="text-[--surface-container-high]/80 mb-8">
            Curated dispatches from the field, route intelligence, hidden waypoints, and season-sensitive expedition reports — every fortnight.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 outline-none focus:border-[--primary-fixed-dim] transition-colors"
              required
            />
            <button className="px-6 py-3.5 rounded-xl bg-[--tertiary-container] hover:bg-[--tertiary] text-white font-semibold transition-all duration-300 shadow-lg whitespace-nowrap">
              Join the Circle
            </button>
          </form>
        </div>
      </div>

      {/* Footer Links */}
      <div className="w-full px-6 md:px-10 lg:px-20 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex flex-col mb-6">
              <span
                className="text-xl text-white tracking-tight"
                style={{ fontFamily: "var(--font-playfair)", fontWeight: 600 }}
              >
                SHONARTRAIL
              </span>
              <span className="text-[0.75rem] tracking-[0.12em] font-semibold text-[--outline] mt-1 uppercase" style={{ fontFamily: "var(--font-inter)" }}>
                Expeditions &amp; Journal
              </span>
            </div>
            <p className="text-sm text-[--inverse-on-surface]/60">
              Award-winning travel journalism across Bangladesh and the world.
            </p>
          </div>
          <div>
            <h4 className="text-[0.75rem] tracking-[0.12em] font-semibold text-[--outline] uppercase mb-4">Bangladesh</h4>
            <ul className="flex flex-col gap-2">
              {["Chattogram", "Sylhet", "Khulna", "Barishal", "Dhaka"].map((d) => (
                <li key={d}>
                  <Link href={`/blog?region=bangladesh&division=${d.toLowerCase()}`} className="text-sm text-[--inverse-on-surface]/70 hover:text-white transition-colors">
                    {d}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[0.75rem] tracking-[0.12em] font-semibold text-[--outline] uppercase mb-4">Explore</h4>
            <ul className="flex flex-col gap-2">
              {[["Destinations", "/destinations"], ["Blog", "/blog"], ["Categories", "/category"], ["Search", "/search"], ["About", "/about"]].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-[--inverse-on-surface]/70 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[0.75rem] tracking-[0.12em] font-semibold text-[--outline] uppercase mb-4">Connect</h4>
            <ul className="flex flex-col gap-2">
              {[["Contact", "/contact"], ["Newsletter", "#newsletter"], ["Write for Us", "/contact"]].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-[--inverse-on-surface]/70 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
          <p className="text-sm text-[--inverse-on-surface]/50">
            © 2026 ShonarTrail. All expedition rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-[--inverse-on-surface]/50 hover:text-white transition-colors">Privacy</Link>
            <Link href="/sitemap.xml" className="text-sm text-[--inverse-on-surface]/50 hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
