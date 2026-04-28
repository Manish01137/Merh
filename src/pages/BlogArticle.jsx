import { useMemo } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, User } from "lucide-react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import MonogramPattern from "../components/effects/MonogramPattern";
import { blogPosts, getPostBySlug } from "../data/blogPosts";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] },
  }),
};

function ModuleCard({ module }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-gradient-to-br from-white to-blue-50/40 rounded-3xl border border-blue-100/80 overflow-hidden hover:shadow-xl hover:shadow-blue-200/40 transition-all duration-500"
    >
      <div className="grid lg:grid-cols-5 gap-0">
        {module.image && (
          <div className="lg:col-span-2 relative h-64 lg:h-auto overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100">
            <img
              src={module.image}
              alt={module.title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover lg:object-contain p-6 group-hover:scale-105 transition duration-700"
            />
          </div>
        )}
        <div className={`p-8 lg:p-10 ${module.image ? "lg:col-span-3" : "lg:col-span-5"}`}>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-2xl">{module.icon}</span>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
              {module.title}
            </h3>
          </div>
          <div className="space-y-4">
            {module.blocks.map((b, i) => (
              <div key={i}>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-1.5 block">
                  {b.label}
                </span>
                <p className="text-gray-700 leading-relaxed text-[15px]">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function BenefitBlock({ benefit }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-2xl flex-shrink-0">
          {benefit.icon}
        </div>
        <h4 className="text-lg md:text-xl font-bold text-gray-900 leading-snug pt-1.5">
          {benefit.title}
        </h4>
      </div>
      <p className="text-gray-600 leading-relaxed">{benefit.text}</p>
      {benefit.image && (
        <figure className="mt-6">
          <div className="rounded-xl overflow-hidden border border-gray-100 bg-gray-50">
            <img
              src={benefit.image}
              alt={benefit.imageCaption || benefit.title}
              loading="lazy"
              decoding="async"
              className="w-full h-auto"
            />
          </div>
          {benefit.imageCaption && (
            <figcaption className="text-xs text-gray-500 italic mt-3 text-center px-4">
              {benefit.imageCaption}
            </figcaption>
          )}
        </figure>
      )}
    </motion.div>
  );
}

function CalloutBlock({ block }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-gradient-to-br from-blue-700 to-indigo-800 rounded-2xl p-7 md:p-8 my-8 overflow-hidden"
    >
      <MonogramPattern opacity={0.06} size={90} />
      <div className="relative">
        <span className="inline-flex items-center gap-1.5 text-blue-200 text-[10px] font-bold uppercase tracking-widest mb-3">
          ✓ {block.title}
        </span>
        <p className="text-white text-base md:text-lg leading-relaxed">{block.text}</p>
      </div>
    </motion.div>
  );
}

function SectionBlock({ block, index }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight tracking-tight border-l-4 border-blue-600 pl-4">
        {block.heading}
      </h2>
      <div className="space-y-4 text-[17px] text-gray-700 leading-relaxed">
        {block.paragraphs?.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      {block.image && (
        <figure className="mt-7">
          <div className="rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 shadow-sm">
            <img
              src={block.image}
              alt={block.imageCaption || block.heading}
              loading="lazy"
              decoding="async"
              className="w-full h-auto"
            />
          </div>
          {block.imageCaption && (
            <figcaption className="text-xs text-gray-500 italic mt-3 text-center px-4">
              {block.imageCaption}
            </figcaption>
          )}
        </figure>
      )}
    </motion.section>
  );
}

export default function BlogArticle() {
  const { slug } = useParams();
  const post = useMemo(() => getPostBySlug(slug), [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <MonogramPattern opacity={0.04} size={110} />
        <div className="max-w-4xl mx-auto px-6 relative">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white text-sm font-semibold mb-7 transition group"
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition" /> All articles
            </Link>
          </motion.div>
          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="inline-flex items-center gap-1.5 bg-blue-800/60 border border-blue-700/50 text-blue-200 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
          >
            <Tag size={11} /> {post.category}
          </motion.span>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-3xl md:text-5xl font-bold leading-[1.15] mb-5 tracking-tight"
          >
            {post.title}
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="text-blue-100/85 text-lg leading-relaxed mb-8 max-w-3xl"
          >
            {post.excerpt}
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={4}
            className="flex flex-wrap items-center gap-5 text-sm text-blue-200/90"
          >
            <span className="flex items-center gap-1.5">
              <User size={13} /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} /> {post.readTime} read
            </span>
          </motion.div>
        </div>
      </section>

      {/* Cover image */}
      {post.cover && (
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-6 -mt-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl overflow-hidden border border-gray-100 shadow-2xl shadow-blue-900/10 bg-gray-50"
            >
              <img
                src={post.cover}
                alt={post.title}
                loading="eager"
                decoding="async"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Body */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          {post.body.map((block, i) => {
            if (block.type === "section") return <SectionBlock key={i} block={block} index={i} />;
            if (block.type === "module")
              return (
                <div key={i} className="mb-8">
                  <ModuleCard module={block} />
                </div>
              );
            if (block.type === "benefit")
              return (
                <div key={i} className="mb-6">
                  <BenefitBlock benefit={block} />
                </div>
              );
            if (block.type === "callout") return <CalloutBlock key={i} block={block} />;
            return null;
          })}

          {/* Tags */}
          {post.tags && (
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mr-2">
                  Tagged
                </span>
                {post.tags.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                Keep reading
              </h3>
              <Link
                to="/blog"
                className="hidden sm:inline-flex items-center gap-2 text-blue-700 font-semibold text-sm hover:gap-3 transition-all"
              >
                All articles <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
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
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition leading-snug line-clamp-2">
                      {p.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                      {p.excerpt}
                    </p>
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
              ))}
            </div>
          </div>
        </section>
      )}

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
