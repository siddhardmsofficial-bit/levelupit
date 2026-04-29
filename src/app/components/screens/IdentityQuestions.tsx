import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export function IdentityQuestions() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    role: "",
    year: "",
    motivation: "",
  });

  const questions = [
    {
      id: "role",
      question: "I am a...",
      options: [
        "College Student",
        "Working Professional",
        "Entrepreneur/Founder",
        "Freelancer",
        "Job Seeker",
      ],
    },
    {
      id: "year",
      question: "Currently in...",
      options: ["1st Year", "2nd Year", "3rd Year", "4th Year", "Graduated"],
    },
    {
      id: "motivation",
      question: "My biggest motivation is...",
      options: [
        "Crack competitive exams",
        "Build my startup",
        "Get placed in top company",
        "Master new skills",
        "Build in public",
      ],
    },
  ];

  const currentQuestion = questions[currentStep];

  const handleSelect = (option: string) => {
    const key = currentQuestion.id as keyof typeof answers;
    setAnswers({ ...answers, [key]: option });

    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        navigate("/onboarding/goals");
      }
    }, 300);
  };

  return (
    <div className="h-screen w-full max-w-[430px] mx-auto bg-[#0A0A0F] flex flex-col p-6">
      <div className="mb-8">
        <div className="flex gap-2 mb-6">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-1 rounded-full ${
                i <= currentStep
                  ? "bg-gradient-to-r from-[#00F0FF] to-[#FF00B8]"
                  : "bg-white/10"
              }`}
            />
          ))}
        </div>
        <p className="text-white/40 text-sm">Step {currentStep + 1} of {questions.length}</p>
      </div>

      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-1"
      >
        <h2 className="text-3xl text-white mb-8">{currentQuestion.question}</h2>

        <div className="space-y-3">
          {currentQuestion.options.map((option) => {
            const key = currentQuestion.id as keyof typeof answers;
            const isSelected = answers[key] === option;
            return (
              <motion.button
                key={option}
                onClick={() => handleSelect(option)}
                whileTap={{ scale: 0.98 }}
                className={`w-full p-5 rounded-xl border backdrop-blur-xl transition-all flex items-center justify-between ${
                  isSelected
                    ? "bg-white/10 border-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                    : "bg-white/5 border-white/10 hover:border-[#00F0FF]/50"
                }`}
              >
                <span className="text-white">{option}</span>
                {isSelected && <ChevronRight className="w-5 h-5 text-[#00F0FF]" />}
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
