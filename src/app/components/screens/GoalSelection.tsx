import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Check } from "lucide-react";

export function GoalSelection() {
  const navigate = useNavigate();
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const goals = [
    { id: "jee", label: "JEE/NEET/GATE", color: "#00F0FF" },
    { id: "coding", label: "Coding & DSA", color: "#FF00B8" },
    { id: "content", label: "Content Creation", color: "#9D00FF" },
    { id: "fitness", label: "Fitness & Health", color: "#00FF9D" },
    { id: "skills", label: "Skill Building", color: "#FF9500" },
    { id: "career", label: "Career Growth", color: "#00F0FF" },
    { id: "internship", label: "Internships", color: "#FF00B8" },
    { id: "startup", label: "Startup Building", color: "#9D00FF" },
    { id: "freelance", label: "Freelancing", color: "#00FF9D" },
    { id: "projects", label: "Side Projects", color: "#FF9500" },
  ];

  const toggleGoal = (id: string) => {
    setSelectedGoals((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    if (selectedGoals.length > 0) {
      navigate("/onboarding/reveal");
    }
  };

  return (
    <div className="h-screen w-full max-w-[430px] mx-auto bg-[#0A0A0F] flex flex-col p-6">
      <div className="mb-6">
        <h2 className="text-3xl text-white mb-2">Choose Your Goals</h2>
        <p className="text-white/50 text-sm">
          Select all that apply. You can always change these later.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar pb-24">
        <div className="grid grid-cols-2 gap-3">
          {goals.map((goal, index) => {
            const isSelected = selectedGoals.includes(goal.id);
            return (
              <motion.button
                key={goal.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => toggleGoal(goal.id)}
                className={`relative p-6 rounded-2xl backdrop-blur-xl border transition-all ${
                  isSelected
                    ? "bg-white/15 border-2 shadow-[0_0_30px_rgba(0,240,255,0.3)]"
                    : "bg-white/5 border-white/10"
                }`}
                style={{
                  borderColor: isSelected ? goal.color : undefined,
                  boxShadow: isSelected
                    ? `0 0 30px ${goal.color}40`
                    : undefined,
                }}
              >
                <div className="text-white mb-2">{goal.label}</div>
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: goal.color }}
                  >
                    <Check className="w-4 h-4 text-[#0A0A0F]" />
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="fixed bottom-6 left-6 right-6 max-w-[418px] mx-auto">
        <button
          onClick={handleContinue}
          disabled={selectedGoals.length === 0}
          className={`w-full py-4 rounded-xl shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all ${
            selectedGoals.length > 0
              ? "bg-gradient-to-r from-[#00F0FF] to-[#FF00B8] text-white active:scale-95"
              : "bg-white/5 text-white/30"
          }`}
        >
          Continue ({selectedGoals.length} selected)
        </button>
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
