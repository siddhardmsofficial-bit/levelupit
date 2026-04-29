import { motion } from "motion/react";
import { Trophy, Star, Zap, TrendingUp, Award, Crown } from "lucide-react";

export function Progress() {
  const levels = [
    { name: "Explorer", level: 1, xp: 500, color: "#00F0FF", unlocked: true },
    { name: "Builder", level: 2, xp: 1500, color: "#FF00B8", unlocked: true },
    { name: "Warrior", level: 3, xp: 3000, color: "#9D00FF", unlocked: true },
    { name: "Master", level: 4, xp: 5000, color: "#00FF9D", unlocked: false },
    { name: "Sovereign", level: 5, xp: 10000, color: "#FF9500", unlocked: false },
  ];

  const achievements = [
    {
      name: "First Session",
      description: "Complete your first Lock In",
      icon: Zap,
      color: "#00F0FF",
      unlocked: true,
    },
    {
      name: "Week Warrior",
      description: "7 day streak",
      icon: Trophy,
      color: "#FF00B8",
      unlocked: true,
    },
    {
      name: "Early Bird",
      description: "Lock In before 6 AM",
      icon: Star,
      color: "#00FF9D",
      unlocked: false,
    },
    {
      name: "Deep Work Master",
      description: "Complete 50 sessions",
      icon: Award,
      color: "#9D00FF",
      unlocked: false,
    },
  ];

  const currentXP = 1245;
  const currentLevel = 3;
  const nextLevelXP = 3000;
  const progressPercent = (currentXP / nextLevelXP) * 100;

  return (
    <div className="w-full bg-[#0A0A0F] p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl text-white mb-2">Your Progress</h1>
        <p className="text-white/50">Keep building, keep growing</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-[#00F0FF]/30 rounded-3xl p-6 mb-6 shadow-[0_0_40px_rgba(0,240,255,0.2)]"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00F0FF] via-[#FF00B8] to-[#9D00FF] flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.5)]">
            <Crown className="w-10 h-10 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-2xl text-white mb-1">Level {currentLevel}</div>
            <div className="text-[#9D00FF]">Warrior</div>
          </div>
        </div>

        <div className="mb-2">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-white/60">
              {currentXP.toLocaleString()} XP
            </span>
            <span className="text-white/60">
              {nextLevelXP.toLocaleString()} XP
            </span>
          </div>
          <div className="h-3 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full bg-gradient-to-r from-[#00F0FF] via-[#FF00B8] to-[#9D00FF] rounded-full shadow-[0_0_10px_rgba(0,240,255,0.6)]"
            />
          </div>
        </div>
        <p className="text-white/50 text-sm">
          {(nextLevelXP - currentXP).toLocaleString()} XP to next level
        </p>
      </motion.div>

      <div className="mb-6">
        <h3 className="text-white mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-[#00F0FF]" />
          Level Journey
        </h3>
        <div className="space-y-3">
          {levels.map((level, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`bg-white/5 backdrop-blur-xl border rounded-2xl p-4 ${
                level.unlocked
                  ? "border-white/20"
                  : "border-white/5 opacity-50"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                  style={{
                    background: level.unlocked
                      ? `${level.color}20`
                      : "rgba(255,255,255,0.05)",
                    boxShadow: level.unlocked
                      ? `0 0 20px ${level.color}30`
                      : "none",
                  }}
                >
                  {level.level}
                </div>
                <div className="flex-1">
                  <div className="text-white mb-1">{level.name}</div>
                  <div className="text-white/50 text-sm">
                    {level.xp.toLocaleString()} XP required
                  </div>
                </div>
                {level.unlocked && (
                  <Star
                    className="w-5 h-5"
                    style={{ color: level.color }}
                    fill={level.color}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-24">
        <h3 className="text-white mb-4 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-[#FF00B8]" />
          Achievements
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`bg-white/5 backdrop-blur-xl border rounded-2xl p-4 ${
                  achievement.unlocked
                    ? "border-white/20"
                    : "border-white/5 opacity-40"
                }`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                  style={{
                    background: achievement.unlocked
                      ? `${achievement.color}20`
                      : "rgba(255,255,255,0.05)",
                    boxShadow: achievement.unlocked
                      ? `0 0 20px ${achievement.color}30`
                      : "none",
                  }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{
                      color: achievement.unlocked
                        ? achievement.color
                        : "rgba(255,255,255,0.2)",
                    }}
                  />
                </div>
                <div className="text-white text-sm mb-1">
                  {achievement.name}
                </div>
                <div className="text-white/40 text-xs">
                  {achievement.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
