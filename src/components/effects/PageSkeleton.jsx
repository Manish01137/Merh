/**
 * Premium branded loading skeleton — mimics page layout while content lazy-loads.
 * Uses a subtle shimmer animation instead of generic spinners.
 */
export default function PageSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes skel-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .skel {
          background: linear-gradient(90deg, #f1f5f9 0%, #e2e8f0 50%, #f1f5f9 100%);
          background-size: 200% 100%;
          animation: skel-shimmer 1.4s ease-in-out infinite;
          border-radius: 8px;
        }
        .skel-dark {
          background: linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 100%);
          background-size: 200% 100%;
          animation: skel-shimmer 1.4s ease-in-out infinite;
          border-radius: 8px;
        }
      `}</style>

      {/* Navbar skeleton */}
      <div className="h-[68px] border-b border-gray-100 flex items-center px-6">
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="skel w-10 h-10 rounded-xl" />
            <div className="skel w-28 h-5" />
          </div>
          <div className="hidden md:flex items-center gap-7">
            <div className="skel w-16 h-4" />
            <div className="skel w-20 h-4" />
            <div className="skel w-16 h-4" />
            <div className="skel w-14 h-4" />
          </div>
          <div className="flex items-center gap-3">
            <div className="skel w-10 h-10 rounded-lg" />
            <div className="skel w-24 h-10 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Hero skeleton (dark) */}
      <div className="min-h-[80vh] bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-6 py-24 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="space-y-5">
            <div className="skel-dark w-36 h-8 rounded-full" />
            <div className="space-y-3">
              <div className="skel-dark w-full h-10 rounded-lg" />
              <div className="skel-dark w-4/5 h-10 rounded-lg" />
              <div className="skel-dark w-3/5 h-10 rounded-lg" />
            </div>
            <div className="space-y-2 pt-2">
              <div className="skel-dark w-full h-4 rounded" />
              <div className="skel-dark w-5/6 h-4 rounded" />
              <div className="skel-dark w-4/6 h-4 rounded" />
            </div>
            <div className="flex gap-3 pt-4">
              <div className="skel-dark w-44 h-12 rounded-xl" />
              <div className="skel-dark w-36 h-12 rounded-xl" />
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="skel-dark w-full h-[400px] rounded-3xl" />
          </div>
        </div>
      </div>

      {/* Content blocks skeleton */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        {/* Section 1 */}
        <div>
          <div className="text-center mb-10 space-y-3">
            <div className="skel w-28 h-6 rounded-full mx-auto" />
            <div className="skel w-80 h-9 rounded mx-auto" />
            <div className="skel w-96 h-5 rounded mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="p-6 border border-gray-100 rounded-2xl space-y-4">
                <div className="skel w-12 h-12 rounded-xl" />
                <div className="skel w-3/4 h-5 rounded" />
                <div className="space-y-2">
                  <div className="skel w-full h-3 rounded" />
                  <div className="skel w-5/6 h-3 rounded" />
                  <div className="skel w-4/5 h-3 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div className="skel w-32 h-6 rounded-full" />
            <div className="space-y-2">
              <div className="skel w-full h-8 rounded" />
              <div className="skel w-4/5 h-8 rounded" />
            </div>
            <div className="space-y-2 pt-2">
              <div className="skel w-full h-4 rounded" />
              <div className="skel w-5/6 h-4 rounded" />
            </div>
          </div>
          <div className="skel w-full h-64 rounded-2xl" />
        </div>
      </div>

      {/* Subtle branded pulse indicator */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-lg">
        <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
        <span className="text-xs font-semibold text-gray-600">Loading...</span>
      </div>
    </div>
  );
}
