import { motion } from "motion/react";
import { Users, Trophy, Flame, TrendingUp, Target } from "lucide-react";

export function Community() {
  const squads = [
    {
      name: "Code Warriors",
      members: 234,
      avgStreak: 12,
      color: "#00F0FF",
      type: "Coding & DSA",
    },
    {
      name: "Startup Hustlers",
      members: 156,
      avgStreak: 15,
      color: "#FF00B8",
      type: "Entrepreneurship",
    },
    {
      name: "Exam Crushers",
      members: 891,
      avgStreak: 8,
      color: "#9D00FF",
      type: "JEE/NEET/GATE",
    },
  ];

  const leaderboard = [
    {
      rank: 1,
      name: "Arjun K.",
      xp: 12450,
      streak: 45,
      avatar: "🏆",
      color: "#FFD700",
    },
    {
      rank: 2,
      name: "Priya S.",
      xp: 11200,
      streak: 38,
      avatar: "🥈",
      color: "#C0C0C0",
    },
    {
      rank: 3,
      name: "Rahul M.",
      xp: 10800,
      streak: 32,
      avatar: "🥉",
      color: "#CD7F32",
    },
    {
      rank: 4,
      name: "You",
      xp: 1245,
      streak: 7,
      avatar: "👤",
      color: "#00F0FF",
    },
  ];

  const challenges = [
    {
      name: "30-Day Discipline Sprint",
      participants: 1234,
      daysLeft: 12,
      reward: 500,
      color: "#00F0FF",
    },
    {
      name: "100 Hours Deep Work",
      participants: 567,
      daysLeft: 25,
      reward: 1000,
      color: "#FF00B8",
    },
  ];

  return (
    <div className="w-full bg-[#0A0A0F] p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl text-white mb-2">Community</h1>
        <p className="text-white/50">Build together, grow together</p>
      </motion.div>

      <div className="mb-6">
        <h3 className="text-white mb-4 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-[#FFD700]" />
          Leaderboard
        </h3>
        <div className="space-y-2">
          {leaderboard.map((user, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white/5 backdrop-blur-xl border rounded-2xl p-4 ${
                user.name === "You"
                  ? "border-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                  : "border-white/10"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{
                    background: `${user.color}20`,
                    boxShadow: `0 0 15px ${user.color}30`,
                  }}
                >
                  {user.avatar}
                </div>
                <div className="flex-1">
                  <div className="text-white mb-1">{user.name}</div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-[#00F0FF]">
                      {user.xp.toLocaleString()} XP
                    </span>
                    <span className="text-[#FF9500] flex items-center gap-1">
                      <Flame className="w-3 h-3" />
                      {user.streak}
                    </span>
                  </div>
                </div>
                <div className="text-2xl text-white/30">#{user.rank}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-white mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-[#FF00B8]" />
          Join a Squad
        </h3>
        <div className="space-y-3">
          {squads.map((squad, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:border-white/30 transition-all active:scale-98"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${squad.color}20`,
                    boxShadow: `0 0 20px ${squad.color}30`,
                  }}
                >
                  <Users className="w-6 h-6" style={{ color: squad.color }} />
                </div>
                <div className="flex-1">
                  <div className="text-white mb-1">{squad.name}</div>
                  <div className="text-white/50 text-sm mb-2">{squad.type}</div>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-white/40">
                      {squad.members} members
                    </span>
                    <span className="text-[#FF9500]">
                      {squad.avgStreak}d avg streak
                    </span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-[#00F0FF] to-[#FF00B8] text-white rounded-lg text-sm active:scale-95 transition-transform">
                  Join
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-24">
        <h3 className="text-white mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-[#00FF9D]" />
          Active Challenges
        </h3>
        <div className="space-y-3">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="text-white mb-2">{challenge.name}</div>
                  <div className="text-white/50 text-sm mb-3">
                    {challenge.participants.toLocaleString()} participants
                  </div>
                </div>
                <div
                  className="px-3 py-1 rounded-lg text-sm"
                  style={{
                    background: `${challenge.color}20`,
                    color: challenge.color,
                  }}
                >
                  +{challenge.reward} XP
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${((30 - challenge.daysLeft) / 30) * 100}%`,
                      background: `linear-gradient(to right, ${challenge.color}, ${challenge.color}80)`,
                      boxShadow: `0 0 10px ${challenge.color}60`,
                    }}
                  />
                </div>
                <span className="text-white/40">{challenge.daysLeft}d left</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
