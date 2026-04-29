import { useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

export function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen w-full max-w-[430px] mx-auto bg-[#0A0A0F] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF]/10 via-transparent to-[#FF00B8]/10" />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <motion.div
          animate={{
            textShadow: [
              "0 0 20px rgba(0,240,255,0.5), 0 0 40px rgba(0,240,255,0.3)",
              "0 0 30px rgba(255,0,184,0.5), 0 0 50px rgba(255,0,184,0.3)",
              "0 0 20px rgba(0,240,255,0.5), 0 0 40px rgba(0,240,255,0.3)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl tracking-wider mb-4"
          style={{
            fontWeight: 800,
            background: "linear-gradient(135deg, #00F0FF, #FF00B8, #9D00FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          LEVEL UP
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[#00F0FF] text-sm tracking-widest"
        >
          Make Discipline Addictive
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00F0FF] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
