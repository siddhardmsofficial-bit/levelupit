import { motion } from "motion/react";
import { Zap, Target, Flame } from "lucide-react";

export function MomentumMode() {
  return (
    <div className="w-full bg-[#0A0A0F] p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl text-white mb-2">Momentum Mode</h1>
        <p className="text-white/50">Ride the wave of productivity</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-[#FF9500]/20 to-[#FF00B8]/20 backdrop-blur-xl border border-[#FF9500]/50 rounded-3xl p-8 mb-6 shadow-[0_0_50px_rgba(255,149,0,0.3)] text-center"
      >
        <Flame className="w-16 h-16 text-[#FF9500] mx-auto mb-4" />
        <h2 className="text-4xl text-white mb-2">Coming Soon</h2>
        <p className="text-white/60">
          Unlock special productivity modes and challenges
        </p>
      </motion.div>
    </div>
  );
}
