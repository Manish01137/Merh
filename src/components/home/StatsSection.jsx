import CircularStat from "../effects/CircularStat";
import MonogramPattern from "../effects/MonogramPattern";

const stats = [
  { n: "350+", l: "Projects Completed", fill: 92, color: "#60a5fa" },
  { n: "130+", l: "Expert Engineers", fill: 85, color: "#38bdf8" },
  { n: "350+", l: "Happy Clients", fill: 88, color: "#fbbf24" },
  { n: "15+", l: "Years of Expertise", fill: 80, color: "#a78bfa" },
  { n: "98%", l: "Client Satisfaction", fill: 98, color: "#34d399" },
  { n: "24/7", l: "Support Coverage", fill: 100, color: "#22d3ee" },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-800 relative overflow-hidden">
      <MonogramPattern opacity={0.05} size={110} />
      {/* Ambient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-400/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <span className="inline-block text-blue-200 text-xs font-bold uppercase tracking-widest bg-white/10 border border-white/15 px-4 py-2 rounded-full mb-5">
            By the Numbers
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Measurable Outcomes, Proven Scale
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <CircularStat
              key={i}
              value={s.n}
              label={s.l}
              fillPercent={s.fill}
              color={s.color}
              size={130}
              stroke={5}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { StatsSection };
