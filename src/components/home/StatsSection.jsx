import CountUp from "../effects/CountUp";

const stats = [
  { n: "1100+", l: "Projects Delivered" },
  { n: "130+", l: "Expert Engineers" },
  { n: "70+", l: "Countries Served" },
  { n: "15+", l: "Years of Expertise" },
  { n: "98%", l: "Client Satisfaction" },
  { n: "500+", l: "Happy Clients" },
];

export function StatsSection() {
  return (
    <section className="py-14 bg-blue-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <CountUp value={s.n} className="text-3xl md:text-4xl font-bold text-white mb-1 block tabular-nums" />
              <p className="text-blue-200 text-xs font-medium">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
