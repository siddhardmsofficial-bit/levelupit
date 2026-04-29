import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Trophy, Sparkles } from "lucide-react";

export function ArchetypeReveal() {
  const navigate = useNavigate();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-full max-w-[430px] mx-auto bg-[#0A0A0F] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF]/10 via-[#FF00B8]/10 to-[#9D00FF]/10" />

      {!revealed ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <div className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-[#00F0FF] border-t-transparent animate-spin" />
          <p className="text-white/60">Analyzing your profile...</p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative z-10 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-32 h-32 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-[#00F0FF] via-[#FF00B8] to-[#9D00FF] flex items-center justify-center shadow-[0_0_60px_rgba(0,240,255,0.6)]"
          >
            <Trophy className="w-16 h-16 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl text-white mb-2"
          >
            The Builder
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-[#00F0FF] mb-8"
          >
            Your Discipline Archetype
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-[#00F0FF]/30 rounded-2xl p-6 mb-8 shadow-[0_0_30px_rgba(0,240,255,0.15)]"
          >
            <p className="text-white/80 leading-relaxed">
              You're driven by creation and growth. Your journey is about
              turning ideas into reality through consistent daily action.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-3 gap-4 mb-8"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-[#00F0FF]/20 rounded-xl p-4">
              <div className="text-2xl text-[#00F0FF] mb-1">Level 1</div>
              <div className="text-white/50 text-xs">Explorer</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-[#FF00B8]/20 rounded-xl p-4">
              <div className="text-2xl text-[#FF00B8] mb-1">0 XP</div>
              <div className="text-white/50 text-xs">Starting Fresh</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-[#9D00FF]/20 rounded-xl p-4">
              <div className="text-2xl text-[#9D00FF] mb-1">0</div>
              <div className="text-white/50 text-xs">Day Streak</div>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            onClick={() => navigate("/app")}
            className="w-full bg-gradient-to-r from-[#00F0FF] to-[#FF00B8] text-white py-4 rounded-xl shadow-[0_0_30px_rgba(0,240,255,0.5)] active:scale-95 transition-transform flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Start Your Journey
          </motion.button>
        </motion.div>
      )}

      <div className="absolute inset-0 pointer-events-none">
        {revealed &&
          [...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: ["#00F0FF", "#FF00B8", "#9D00FF"][
                  Math.floor(Math.random() * 3)
                ],
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                y: [0, -100],
              }}
              transition={{
                duration: 2,
                delay: Math.random() * 0.5,
              }}
            />
          ))}
      </div>
    </div>
  );
}
