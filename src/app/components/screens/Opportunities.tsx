import { motion } from "motion/react";
import { Briefcase, Rocket, Award, ExternalLink } from "lucide-react";

export function Opportunities() {
  const opportunities = [
    {
      type: "Internship",
      company: "Razorpay",
      role: "Product Intern",
      match: 92,
      color: "#00F0FF",
      icon: Briefcase,
    },
    {
      type: "Fellowship",
      company: "On Deck",
      role: "Founder Fellowship",
      match: 88,
      color: "#FF00B8",
      icon: Rocket,
    },
    {
      type: "Competition",
      company: "Google",
      role: "Code Jam 2026",
      match: 85,
      color: "#00FF9D",
      icon: Award,
    },
    {
      type: "Internship",
      company: "Zerodha",
      role: "Engineering Intern",
      match: 82,
      color: "#9D00FF",
      icon: Briefcase,
    },
  ];

  return (
    <div className="w-full bg-[#0A0A0F] p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl text-white mb-2">Opportunities</h1>
        <p className="text-white/50">Curated for your growth journey</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-[#00F0FF]/10 to-[#FF00B8]/10 backdrop-blur-xl border border-[#00F0FF]/30 rounded-3xl p-6 mb-6 shadow-[0_0_30px_rgba(0,240,255,0.15)]"
      >
        <h3 className="text-white mb-2">AI-Powered Matching</h3>
        <p className="text-white/60 text-sm">
          Based on your goals, skills, and progress, we recommend opportunities
          that align with your growth path.
        </p>
      </motion.div>

      <div className="space-y-4 mb-24">
        {opportunities.map((opp, index) => {
          const Icon = opp.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-white/30 transition-all active:scale-98"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${opp.color}20`,
                    boxShadow: `0 0 20px ${opp.color}30`,
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: opp.color }} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="text-white mb-1">{opp.role}</div>
                      <div className="text-white/50 text-sm">{opp.company}</div>
                    </div>
                    <div
                      className="px-3 py-1 rounded-lg text-sm flex-shrink-0 ml-2"
                      style={{
                        background: `${opp.color}20`,
                        color: opp.color,
                      }}
                    >
                      {opp.match}% match
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="px-2 py-1 rounded text-xs"
                      style={{
                        background: `${opp.color}15`,
                        color: opp.color,
                      }}
                    >
                      {opp.type}
                    </span>
                  </div>

                  <button className="w-full bg-gradient-to-r from-[#00F0FF] to-[#FF00B8] text-white py-3 rounded-xl active:scale-95 transition-transform flex items-center justify-center gap-2">
                    <span>View Details</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
