import { Sparkles } from "lucide-react";

/**
 * AI-themed badge with animated gradient border + pulse dot.
 * Use on sections that showcase AI capabilities.
 */
export default function AIBadge({ label = "AI-Powered", dark = false, className = "" }) {
  return (
    <>
      <style>{`
        @keyframes ai-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .ai-badge-gradient {
          background: linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6);
          background-size: 300% 100%;
          animation: ai-gradient 5s ease infinite;
        }
        @keyframes ai-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }
          50% { box-shadow: 0 0 0 6px rgba(59, 130, 246, 0); }
        }
        .ai-pulse-dot { animation: ai-pulse 1.8s ease-in-out infinite; }
      `}</style>
      <div className={`relative inline-flex rounded-full p-[1.5px] ai-badge-gradient ${className}`}>
        <div
          className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold ${
            dark ? "bg-slate-900 text-blue-200" : "bg-white text-blue-700"
          }`}
        >
          <Sparkles size={12} className="text-cyan-500" />
          <span className="ai-pulse-dot w-1.5 h-1.5 rounded-full bg-blue-500" />
          {label}
        </div>
      </div>
    </>
  );
}
