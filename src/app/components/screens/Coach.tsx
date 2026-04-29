import { useState } from "react";
import { motion } from "motion/react";
import { Send, Sparkles, MessageCircle } from "lucide-react";

export function Coach() {
  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hey Builder! 👋 I'm your AI Discipline Coach. I'm here to help you stay on track, overcome obstacles, and level up. How are you feeling today?",
    },
  ]);
  const [input, setInput] = useState("");

  const quickActions = [
    "I'm feeling stuck",
    "Help me stay motivated",
    "What should I focus on?",
    "I broke my streak",
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { type: "user", text: input }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: "That's a great question! Let me help you with that. Remember, every small step forward is progress. What specific challenge are you facing right now?",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="w-full bg-[#0A0A0F] flex flex-col min-h-[calc(100vh-5rem)]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 border-b border-white/10"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00F0FF] to-[#FF00B8] flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.4)]">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl text-white">AI Coach</h1>
            <p className="text-white/50 text-sm">Your 24/7 accountability partner</p>
          </div>
        </div>
      </motion.div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4 hide-scrollbar pb-32">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex ${
              message.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-2xl ${
                message.type === "user"
                  ? "bg-gradient-to-r from-[#00F0FF] to-[#FF00B8] text-white shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                  : "bg-white/5 backdrop-blur-xl border border-white/10 text-white"
              }`}
            >
              {message.text}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-6 border-t border-white/10 pb-24">
        <div className="flex gap-2 mb-3 overflow-x-auto hide-scrollbar">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => {
                setMessages([...messages, { type: "user", text: action }]);
                setTimeout(() => {
                  setMessages((prev) => [
                    ...prev,
                    {
                      type: "ai",
                      text: "I understand. Let's work through this together. Remember, discipline is built one day at a time.",
                    },
                  ]);
                }, 1000);
              }}
              className="flex-shrink-0 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white/60 text-sm hover:border-[#00F0FF]/50 transition-all active:scale-95"
            >
              {action}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#00F0FF]/50"
          />
          <button
            onClick={handleSend}
            className="bg-gradient-to-r from-[#00F0FF] to-[#FF00B8] text-white p-3 rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.4)] active:scale-95 transition-transform"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
