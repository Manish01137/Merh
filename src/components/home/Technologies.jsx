import { useEffect, useRef } from "react";
import gsap from "gsap";
const techStack = ["React.js","Next.js","Node.js","Python","TensorFlow","Flutter","React Native","Swift","Kotlin","AWS","Docker","Kubernetes","MongoDB","PostgreSQL","GraphQL","Solidity","Firebase","TypeScript"];
export default function Technologies() {
  const t1 = useRef(null), t2 = useRef(null);
  useEffect(() => {
    gsap.to(t1.current, { xPercent:-50, duration:28, ease:"linear", repeat:-1 });
    gsap.to(t2.current, { xPercent:50, duration:32, ease:"linear", repeat:-1 });
  }, []);
  return (
    <section className="py-20 bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="inline-block text-blue-700 text-sm font-semibold uppercase tracking-wider mb-3 bg-blue-50 px-4 py-1.5 rounded-full">Tech Stack</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Technologies We Master</h2>
        <p className="text-gray-500 max-w-xl mx-auto">Modern, battle-tested technologies that power scalable digital products.</p>
      </div>
      <div className="overflow-hidden mb-4">
        <div ref={t1} className="flex gap-4 w-max">
          {[...techStack,...techStack].map((t,i)=>(
            <div key={i} className="min-w-[160px] px-5 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-700 font-semibold text-sm hover:-translate-y-1 hover:border-blue-300 hover:text-blue-700 hover:shadow-md transition cursor-default text-center">{t}</div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden">
        <div ref={t2} className="flex gap-4 w-max" style={{transform:"translateX(-50%)"}}>
          {[...techStack.slice().reverse(),...techStack.slice().reverse()].map((t,i)=>(
            <div key={i} className="min-w-[160px] px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 font-semibold text-sm hover:-translate-y-1 hover:border-blue-300 hover:text-blue-700 hover:shadow-md transition cursor-default text-center">{t}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
