import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  Zap,
  Flame,
  Trophy,
  BookOpen,
  Code,
  Dumbbell,
  Target,
  ChevronRight,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export function Home() {
  const navigate = useNavigate();

  const missions = [
    {
      title: "Morning Deep Work",
      subtitle: "2 hours focused coding",
      xp: 150,
      color: "#00F0FF",
      icon: Code,
    },
    {
      title: "Complete DSA Practice",
      subtitle: "Solve 3 medium problems",
      xp: 100,
      color: "#FF00B8",
      icon: Target,
    },
    {
      title: "Gym Session",
      subtitle: "45 min workout",
      xp: 75,
      color: "#00FF9D",
      icon: Dumbbell,
    },
    {
      title: "Read 30 Pages",
      subtitle: "Deep Work by Cal Newport",
      xp: 50,
      color: "#9D00FF",
      icon: BookOpen,
    },
  ];

  const moods = [
    { emoji: "🔥", label: "On Fire", color: "#FF9500" },
    { emoji: "💪", label: "Strong", color: "#00FF9D" },
    { emoji: "😊", label: "Good", color: "#00F0FF" },
    { emoji: "😐", label: "Meh", color: "#9D00FF" },
    { emoji: "😴", label: "Tired", color: "#FF00B8" },
  ];

  return (
    <div className="w-full bg-[#0A0A0F] p-6 pb-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl text-white mb-2">Hey Builder 👋</h1>
        <p className="text-white/50">Ready to level up today?</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-[#00F0FF]/30 rounded-3xl p-6 mb-6 shadow-[0_0_40px_rgba(0,240,255,0.2)]"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="text-white/60 text-sm">Daily Focus Score</div>
          <div className="text-[#00F0FF] text-sm">Today</div>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative">
            <svg className="w-32 h-32 -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="url(#gradient)"
                strokeWidth="8"
                fill="none"
                strokeDasharray="352"
                strokeDashoffset="88"
                strokeLinecap="round"
                className="drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F0FF" />
                  <stop offset="50%" stopColor="#FF00B8" />
                  <stop offset="100%" stopColor="#9D00FF" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl text-white">75</div>
                <div className="text-white/40 text-xs">/ 100</div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Flame className="w-5 h-5 text-[#FF9500]" />
              <span className="text-white">7 Day Streak</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="w-5 h-5 text-[#00F0FF]" />
              <span className="text-white">Level 3 Explorer</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FF00B8]" />
              <span className="text-white">1,245 XP</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white">How's your energy?</h3>
        </div>
        <div className="flex gap-2">
          {moods.map((mood) => (
            <button
              key={mood.label}
              className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-3 hover:border-white/30 transition-all active:scale-95"
            >
              <div className="text-2xl mb-1">{mood.emoji}</div>
              <div className="text-white/50 text-xs">{mood.label}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-white mb-4">Today's Missions</h3>
        <div className="space-y-3">
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:border-white/30 transition-all active:scale-98"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${mission.color}20`,
                      boxShadow: `0 0 20px ${mission.color}30`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: mission.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="text-white mb-1">{mission.title}</div>
                    <div className="text-white/50 text-sm">
                      {mission.subtitle}
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className="text-sm mb-1"
                      style={{ color: mission.color }}
                    >
                      +{mission.xp} XP
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/30" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        onClick={() => navigate("/app/lockin")}
        className="w-full bg-gradient-to-r from-[#00F0FF] to-[#FF00B8] text-white py-5 rounded-2xl shadow-[0_0_40px_rgba(0,240,255,0.6)] active:scale-98 transition-transform flex items-center justify-center gap-3 mb-6"
      >
        <Zap className="w-6 h-6" />
        <span className="text-lg">Lock In Now</span>
      </motion.button>

      <div className="grid grid-cols-2 gap-3 mb-24">
        <button
          onClick={() => navigate("/app/insights")}
          className="bg-white/5 backdrop-blur-xl border border-[#9D00FF]/30 rounded-2xl p-4 hover:border-[#9D00FF]/50 transition-all active:scale-95"
        >
          <TrendingUp className="w-6 h-6 text-[#9D00FF] mb-2" />
          <div className="text-white text-sm">Reality Mirror</div>
        </button>
        <button
          onClick={() => navigate("/app/opportunities")}
          className="bg-white/5 backdrop-blur-xl border border-[#00FF9D]/30 rounded-2xl p-4 hover:border-[#00FF9D]/50 transition-all active:scale-95"
        >
          <Target className="w-6 h-6 text-[#00FF9D] mb-2" />
          <div className="text-white text-sm">Opportunities</div>
        </button>
      </div>
    </div>
  );
}
