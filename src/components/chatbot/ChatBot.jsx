import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, Bot, User, RefreshCw, ArrowRight } from "lucide-react";
import { respond, quickActions } from "./chatbotKnowledge";
import logoWhite from "../../assets/logo.png";

const INITIAL_MESSAGE = {
  from: "bot",
  text: "Hi there! 👋 I'm **Merlin**, the MershilTech AI assistant. Ask me about our services, pricing, timelines, or hiring top developers — I've got instant answers.",
  actions: [],
  showQuickActions: true,
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll on new message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  // Focus input on open
  useEffect(() => {
    if (open) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [open]);

  // Show unread pulse after first interaction (simulated attention-grab)
  useEffect(() => {
    const t = setTimeout(() => {
      if (!open) setHasUnread(true);
    }, 15000);
    return () => clearTimeout(t);
  }, [open]);

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    // Add user message
    setMessages((prev) => [...prev, { from: "user", text: trimmed }]);
    setInput("");
    setTyping(true);

    // Simulate thinking delay
    const delay = 600 + Math.random() * 500;
    setTimeout(() => {
      const reply = respond(trimmed);
      setTyping(false);
      if (reply) {
        setMessages((prev) => [...prev, { from: "bot", ...reply }]);
      }
    }, delay);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickAction = (query) => sendMessage(query);

  const resetChat = () => {
    setMessages([INITIAL_MESSAGE]);
  };

  // Format bot text with **bold** support and line breaks
  const formatText = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i} className="font-bold">{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <>
      {/* Floating toggle button */}
      <motion.button
        onClick={() => setOpen(!open)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-5 z-[9996] group"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        <style>{`
          @keyframes cb-pulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.6); }
            50% { box-shadow: 0 0 0 12px rgba(59, 130, 246, 0); }
          }
          @keyframes cb-ring {
            0% { transform: scale(1); opacity: 0.8; }
            100% { transform: scale(1.6); opacity: 0; }
          }
          .cb-pulse-btn { animation: cb-pulse 2.2s ease-out infinite; }
          .cb-ring { animation: cb-ring 2.2s ease-out infinite; }
        `}</style>

        {/* Pulsing ring */}
        {!open && (
          <span className="cb-ring absolute inset-0 rounded-full bg-blue-500/40 pointer-events-none" />
        )}

        <div
          className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
            open
              ? "bg-gray-900 text-white"
              : "bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white cb-pulse-btn"
          }`}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <Bot size={26} strokeWidth={2} />
                {/* Mini sparkle accent */}
                <motion.span
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 12, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-0.5 -right-0.5 text-yellow-300"
                >
                  <Sparkles size={10} fill="currentColor" />
                </motion.span>
                {hasUnread && (
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-red-500 border-2 border-white" />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Label on hover (desktop) */}
        {!open && (
          <span className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Ask Merlin AI
          </span>
        )}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-5 z-[9996] w-[92vw] sm:w-[400px] max-h-[calc(100vh-120px)] flex flex-col bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
            style={{ boxShadow: "0 25px 60px -15px rgba(15, 23, 42, 0.4)" }}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 text-white p-4 flex-shrink-0">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage: `url(${logoWhite})`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "80px 80px",
                    filter: "invert(1) brightness(2)",
                    mixBlendMode: "screen",
                  }}
                />
              </div>
              <div className="relative flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden">
                    <Bot size={20} className="text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-blue-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-base leading-tight">Merlin</h3>
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-blue-400 text-blue-950 px-1.5 py-0.5 rounded-full">
                      <Sparkles size={8} /> AI
                    </span>
                  </div>
                  <p className="text-blue-200 text-[11px] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Online · Avg reply in &lt; 1s
                  </p>
                </div>
                <button
                  onClick={resetChat}
                  title="Start over"
                  className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition"
                >
                  <RefreshCw size={14} />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  title="Close"
                  className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 bg-gray-50/50 space-y-4"
              style={{ minHeight: "240px" }}
            >
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2.5 ${msg.from === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    {msg.from === "bot" ? (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                        <Bot size={15} className="text-white" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <User size={14} className="text-gray-600" />
                      </div>
                    )}
                  </div>

                  {/* Bubble */}
                  <div className={`max-w-[80%] ${msg.from === "user" ? "items-end" : "items-start"} flex flex-col gap-2`}>
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                        msg.from === "user"
                          ? "bg-blue-600 text-white rounded-br-sm"
                          : "bg-white text-gray-800 border border-gray-100 rounded-bl-sm shadow-sm"
                      }`}
                    >
                      {formatText(msg.text)}
                    </motion.div>

                    {/* Action buttons (bot only) */}
                    {msg.actions && msg.actions.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.3 }}
                        className="flex flex-wrap gap-1.5"
                      >
                        {msg.actions.map((action, j) => (
                          <Link
                            key={j}
                            to={action.to}
                            onClick={() => setOpen(false)}
                            className="inline-flex items-center gap-1 bg-white border border-blue-200 text-blue-700 text-[12px] font-semibold px-3 py-1.5 rounded-full hover:bg-blue-50 hover:border-blue-300 transition shadow-sm"
                          >
                            {action.label}
                            <ArrowRight size={11} />
                          </Link>
                        ))}
                      </motion.div>
                    )}

                    {/* Quick actions shown on greeting */}
                    {msg.showQuickActions && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                        className="flex flex-wrap gap-1.5 mt-1"
                      >
                        {quickActions.map((qa, j) => (
                          <button
                            key={j}
                            onClick={() => handleQuickAction(qa.query)}
                            className="text-[11.5px] font-semibold text-gray-700 bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:border-blue-400 hover:text-blue-700 hover:bg-blue-50 transition"
                          >
                            {qa.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2.5"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center flex-shrink-0">
                    <Bot size={15} className="text-white" />
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex-shrink-0 bg-white border-t border-gray-100 p-3">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white transition"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center flex-shrink-0 disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-300/50 transition-all"
                  aria-label="Send"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="text-[10px] text-gray-400 text-center mt-2">
                For instant human support,{" "}
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  book a call
                </Link>
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
