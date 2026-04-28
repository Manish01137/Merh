import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Search, Tag } from "lucide-react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import MonogramPattern from "../components/effects/MonogramPattern";
import { blogPosts as posts, blogCategories as categories } from "../data/blogPosts";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Blog() {
  const [activeCat, setActiveCat] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const catOk = activeCat === "All" || p.category === activeCat;
      const qOk = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [activeCat, query]);

  const featured = posts.find((p) => p.featured);
  const others = filtered.filter((p) => !p.featured);

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <MonogramPattern opacity={0.04} size={110} />
        <div className="max-w-5xl mx-auto px-6 relative text-center">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-block bg-blue-800/60 border border-blue-700/50 text-blue-200 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
          >
            MershilTech Insights
          </motion.span>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="text-4xl md:text-6xl font-bold leading-tight mb-5"
          >
            Engineering Notes from <span className="text-blue-300">Sydney & Beyond</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-blue-100/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8"
          >
            Hard-earned lessons from shipping 350+ projects — startup MVPs, enterprise platforms,
            AI deployments, and security audits. No fluff, just what worked.
          </motion.p>

          {/* Search */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="max-w-xl mx-auto relative"
          >
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200/60 outline-none focus:border-white/50 focus:bg-white/15 transition backdrop-blur-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* Category pills */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-[68px] z-30 backdrop-blur-lg bg-white/85">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((c) => {
            const active = activeCat === c;
            return (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition ${
                  active
                    ? "bg-blue-700 text-white shadow-md shadow-blue-700/20"
                    : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </section>

      {/* Featured post */}
      {featured && activeCat === "All" && !query && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <Link
              to={`/blog/${featured.slug}`}
              className="group grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl overflow-hidden border border-blue-100 hover:shadow-xl transition"
            >
              <div className="relative h-72 lg:h-full overflow-hidden">
                <img
                  src={featured.cover}
                  alt={featured.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute top-4 left-4 bg-blue-700 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                  Featured
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 uppercase tracking-wider mb-3">
                  <Tag size={11} /> {featured.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition leading-tight">
                  {featured.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} /> {featured.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} /> {featured.readTime} read
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-blue-700 font-bold text-sm group-hover:gap-3 transition-all">
                  Read full article <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Posts grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {others.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                {filtered.length === 0
                  ? "No articles match your search. Try a different keyword or category."
                  : "More articles coming soon — check back next month."}
              </p>
            </div>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {others.map((p, i) => (
                <motion.article
                  key={p.slug}
                  variants={fadeUp}
                  custom={i}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <Link to={`/blog/${p.slug}`} className="block">
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img
                        src={p.cover}
                        alt={p.title}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                      />
                      <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-blue-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                        {p.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition leading-snug line-clamp-2">
                        {p.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{p.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={11} /> {p.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={11} /> {p.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-blue-700 relative overflow-hidden">
        <MonogramPattern opacity={0.06} size={120} />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Get Engineering Notes in Your Inbox
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            One email a month with the most useful article we shipped, plus a behind-the-scenes
            note from the team. No spam, unsubscribe anytime.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks — we'll be in touch.");
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 px-4 py-3 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/40"
            />
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-950 transition shadow-lg flex items-center justify-center gap-2"
            >
              Subscribe <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
