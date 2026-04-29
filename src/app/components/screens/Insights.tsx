import { motion } from "motion/react";
import { TrendingUp, Clock, Target, Zap } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export function Insights() {
  const weekData = [
    { day: "Mon", hours: 3.5, xp: 150 },
    { day: "Tue", hours: 4.2, xp: 200 },
    { day: "Wed", hours: 2.8, xp: 120 },
    { day: "Thu", hours: 5.1, xp: 250 },
    { day: "Fri", hours: 4.5, xp: 220 },
    { day: "Sat", hours: 6.2, xp: 300 },
    { day: "Sun", hours: 3.9, xp: 180 },
  ];

  const stats = [
    {
      label: "Total Focus Time",
      value: "30.2h",
      change: "+12%",
      icon: Clock,
      color: "#00F0FF",
    },
    {
      label: "Sessions Completed",
      value: "42",
      change: "+8%",
      icon: Target,
      color: "#FF00B8",
    },
    {
      label: "XP This Week",
      value: "1,420",
      change: "+15%",
      icon: Zap,
      color: "#00FF9D",
    },
  ];

  return (
    <div className="w-full bg-[#0A0A0F] p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl text-white mb-2">Reality Mirror</h1>
        <p className="text-white/50">Your discipline analytics</p>
      </motion.div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-3"
            >
              <Icon
                className="w-5 h-5 mb-2"
                style={{ color: stat.color }}
              />
              <div className="text-xl text-white mb-1">{stat.value}</div>
              <div className="text-white/40 text-xs mb-1">{stat.label}</div>
              <div className="text-[#00FF9D] text-xs">{stat.change}</div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 mb-6"
      >
        <h3 className="text-white mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-[#00F0FF]" />
          Focus Time This Week
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={weekData}>
            <XAxis
              dataKey="day"
              stroke="rgba(255,255,255,0.3)"
              tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
            />
            <YAxis
              stroke="rgba(255,255,255,0.3)"
              tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(15,15,18,0.9)",
                border: "1px solid rgba(0,240,255,0.3)",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Bar dataKey="hours" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00F0FF" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#FF00B8" stopOpacity={0.8} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 mb-24"
      >
        <h3 className="text-white mb-4">XP Growth</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={weekData}>
            <XAxis
              dataKey="day"
              stroke="rgba(255,255,255,0.3)"
              tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
            />
            <YAxis
              stroke="rgba(255,255,255,0.3)"
              tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(15,15,18,0.9)",
                border: "1px solid rgba(255,0,184,0.3)",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Line
              type="monotone"
              dataKey="xp"
              stroke="#FF00B8"
              strokeWidth={3}
              dot={{ fill: "#FF00B8", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}
