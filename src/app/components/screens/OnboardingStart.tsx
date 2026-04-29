import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function OnboardingStart() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full max-w-[430px] mx-auto bg-[#0A0A0F] flex flex-col relative overflow-hidden p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF]/5 via-transparent to-[#9D00FF]/5" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 flex-1 flex flex-col justify-center"
      >
        <div className="mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-[#00F0FF] to-[#FF00B8] flex items-center justify-center shadow-[0_0_40px_rgba(0,240,255,0.4)]"
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>

          <h1 className="text-4xl text-center mb-4 bg-gradient-to-r from-[#00F0FF] via-[#FF00B8] to-[#9D00FF] bg-clip-text text-transparent">
            Welcome, Future Legend
          </h1>
          <p className="text-white/60 text-center px-4">
            We're about to build your personalized discipline system. This will only take 2 minutes.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-white/5 backdrop-blur-xl border border-[#00F0FF]/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(0,240,255,0.15)]">
            <h3 className="text-white mb-2">Personalized for YOU</h3>
            <p className="text-white/50 text-sm">
              Your goals, your style, your growth path
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-[#FF00B8]/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(255,0,184,0.15)]">
            <h3 className="text-white mb-2">Gameified Experience</h3>
            <p className="text-white/50 text-sm">
              Level up, earn XP, unlock rewards
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-[#9D00FF]/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(157,0,255,0.15)]">
            <h3 className="text-white mb-2">AI Discipline Coach</h3>
            <p className="text-white/50 text-sm">
              Your 24/7 accountability partner
            </p>
          </div>
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => navigate("/onboarding/identity")}
        className="relative z-10 w-full bg-gradient-to-r from-[#00F0FF] to-[#FF00B8] text-white py-4 rounded-xl shadow-[0_0_30px_rgba(0,240,255,0.5)] active:scale-95 transition-transform"
      >
        Let's Begin
      </motion.button>
    </div>
  );
}
