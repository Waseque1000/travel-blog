import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Expedition Inquiries | SHONARTRAIL",
  description: "Get in touch with the expedition team, submit field dispatches, or inquire about travel partnerships across Bangladesh.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-[--surface] pt-20">
        {/* Header Hero */}
        <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-24 bg-[--inverse-surface] text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50 z-0" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBId_INVaDFA0n9xplmGUmZvmTX726opQZqHo1dY8O6oipc5lUcIHwSBfbg0OTfTushYP865EgBcGvF76c7_AQuYa7u50wDzPXwOQCYdwWVhtYNPeen52HWqxgcGvXLsxanSWuXQvuzMwdNX3t_PrM6lzTul6cKaW81goGobjtRzi7Ly-1ZRG11YE4lL792MKLoaEBTkeeUByxE2dMXUQPQ9XamYujP6LiU70S8Ja4_pyNNkojHgEU')`,
            }}
          />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#005c55]/60 backdrop-blur-sm border border-[#80d5cb]/30 mb-4">
              <span className="material-symbols-outlined text-[#80d5cb] text-sm">mail</span>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#9cf2e8]">
                Expedition Communications Desk
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight font-semibold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Get in Touch
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-xl font-light">
              Have a query about our travel routes, interested in contributing a field dispatch, or want to collaborate? Send us a message below.
            </p>
          </div>
        </section>

        {/* Contact Body */}
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-24 py-10 sm:py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white dark:bg-stone-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-200/80 dark:border-stone-800">
              <h2
                className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Send a Message
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                Fill out the form below and our editorial and route planning team will get back to you within 24–48 hours.
              </p>

              <form className="flex flex-col gap-4 sm:gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tanvir"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-stone-800 border border-gray-200 dark:border-stone-700 text-sm focus:outline-none focus:border-[#005c55] text-gray-900 dark:text-white transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ahmed"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-stone-800 border border-gray-200 dark:border-stone-700 text-sm focus:outline-none focus:border-[#005c55] text-gray-900 dark:text-white transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tanvir@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-stone-800 border border-gray-200 dark:border-stone-700 text-sm focus:outline-none focus:border-[#005c55] text-gray-900 dark:text-white transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Subject / Topic *
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-stone-800 border border-gray-200 dark:border-stone-700 text-sm focus:outline-none focus:border-[#005c55] text-gray-900 dark:text-white transition-colors cursor-pointer"
                  >
                    <option value="route">Route &amp; Expedition Guidance</option>
                    <option value="story">Submit Field Story / Photo Essay</option>
                    <option value="press">Press &amp; Media Inquiries</option>
                    <option value="other">General Inquiries</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Write your dispatch, questions, or collaboration details..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-stone-800 border border-gray-200 dark:border-stone-700 text-sm focus:outline-none focus:border-[#005c55] text-gray-900 dark:text-white transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full sm:w-auto self-start px-8 py-3.5 rounded-xl bg-[#005c55] hover:bg-[#004842] text-white font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </form>
            </div>

            {/* Contact Details & Info Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-white dark:bg-stone-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-200/80 dark:border-stone-800">
                <h3
                  className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Expedition Headquarters
                </h3>
                <div className="flex flex-col gap-4 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#005c55] text-xl shrink-0 mt-0.5">location_on</span>
                    <div>
                      <strong className="block text-gray-900 dark:text-white font-semibold">Dhaka Bureau:</strong>
                      <span>Gulshan-2, Dhaka 1212, Bangladesh</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#005c55] text-xl shrink-0 mt-0.5">mail</span>
                    <div>
                      <strong className="block text-gray-900 dark:text-white font-semibold">Editorial Desk:</strong>
                      <span className="text-[#005c55] dark:text-[#80d5cb]">editor@shonartrail.com</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#005c55] text-xl shrink-0 mt-0.5">call</span>
                    <div>
                      <strong className="block text-gray-900 dark:text-white font-semibold">Field Line:</strong>
                      <span>+880 1700-000000 (Mon–Fri, 9AM–6PM BST)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#00201d] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/10 relative overflow-hidden">
                <div className="relative z-10">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#80d5cb] block mb-2">
                    FIELD COLLABORATION
                  </span>
                  <h4
                    className="text-xl font-serif font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Are You a Regional Guide or Photographer?
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                    We welcome local knowledge holders, indigenous storytellers, and wilderness guides across all 8 divisions to publish their verified route intelligence.
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#80d5cb]">
                    <span>Pitch a story to pitches@shonartrail.com</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
