import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  Shield,
  Zap,
  Trophy,
} from "lucide-react";

export function LockIn() {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [selectedDuration, setSelectedDuration] = useState(25);
  const [xpEarned, setXpEarned] = useState(0);

  const durations = [15, 25, 45, 60, 90];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => {
          if (time <= 1) {
            setIsActive(false);
            setXpEarned((selectedDuration / 15) * 50);
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, selectedDuration]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const totalSeconds = selectedDuration * 60;
  const progress = ((totalSeconds - timeLeft) / totalSeconds) * 100;

  const handleDurationChange = (duration: number) => {
    if (!isActive) {
      setSelectedDuration(duration);
      setTimeLeft(duration * 60);
    }
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(selectedDuration * 60);
    setXpEarned(0);
  };

  const getProgressColor = () => {
    if (progress < 33) return "#00F0FF";
    if (progress < 66) return "#FF00B8";
    return "#00FF9D";
  };

  return (
    <div className="w-full bg-[#0A0A0F] relative overflow-hidden min-h-[calc(100vh-5rem)]">
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${getProgressColor()}15, transparent 70%)`,
        }}
      />

      <div className="relative z-10 p-6 min-h-screen flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl text-white mb-2">LOCK IN MODE</h1>
          <p className="text-white/50 text-sm">
            {isActive
              ? "Deep work in progress..."
              : "Choose your session & start"}
          </p>
        </motion.div>

        {!isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-2 mb-8 overflow-x-auto hide-scrollbar pb-2"
          >
            {durations.map((duration) => (
              <button
                key={duration}
                onClick={() => handleDurationChange(duration)}
                className={`flex-shrink-0 px-6 py-3 rounded-xl transition-all ${
                  selectedDuration === duration
                    ? "bg-gradient-to-r from-[#00F0FF] to-[#FF00B8] text-white shadow-[0_0_20px_rgba(0,240,255,0.5)]"
                    : "bg-white/5 text-white/50 border border-white/10"
                }`}
              >
                {duration}m
              </button>
            ))}
          </motion.div>
        )}

        <div className="flex-1 flex items-center justify-center">
          <motion.div
            animate={{
              scale: isActive ? [1, 1.02, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: isActive ? Infinity : 0,
            }}
            className="relative"
          >
            <svg className="w-80 h-80 -rotate-90">
              <circle
                cx="160"
                cy="160"
                r="140"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="16"
                fill="none"
              />
              <motion.circle
                cx="160"
                cy="160"
                r="140"
                stroke={getProgressColor()}
                strokeWidth="16"
                fill="none"
                strokeDasharray="880"
                strokeDashoffset={880 - (880 * progress) / 100}
                strokeLinecap="round"
                className="transition-all duration-300"
                style={{
                  filter: `drop-shadow(0 0 20px ${getProgressColor()})`,
                }}
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  key={`${minutes}:${seconds}`}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-7xl text-white mb-2"
                  style={{
                    textShadow: `0 0 30px ${getProgressColor()}80`,
                  }}
                >
                  {String(minutes).padStart(2, "0")}:
                  {String(seconds).padStart(2, "0")}
                </motion.div>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-white/50"
                  >
                    +{Math.floor((progress / 100) * (selectedDuration / 15) * 50)} XP earned
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-4 mb-24">
          <div className="flex gap-3">
            <button
              onClick={toggleTimer}
              className="flex-1 bg-gradient-to-r from-[#00F0FF] to-[#FF00B8] text-white py-5 rounded-2xl shadow-[0_0_40px_rgba(0,240,255,0.6)] active:scale-95 transition-transform flex items-center justify-center gap-2"
            >
              {isActive ? (
                <>
                  <Pause className="w-6 h-6" />
                  <span className="text-lg">Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-6 h-6" />
                  <span className="text-lg">
                    {timeLeft === selectedDuration * 60 ? "Start" : "Resume"}
                  </span>
                </>
              )}
            </button>

            <button
              onClick={resetTimer}
              className="bg-white/5 backdrop-blur-xl border border-white/10 text-white px-6 rounded-2xl active:scale-95 transition-transform"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <button className="bg-white/5 backdrop-blur-xl border border-[#00F0FF]/30 rounded-xl p-4 active:scale-95 transition-all">
              <Volume2 className="w-6 h-6 text-[#00F0FF] mb-2 mx-auto" />
              <div className="text-white/60 text-xs">Sounds</div>
            </button>
            <button className="bg-white/5 backdrop-blur-xl border border-[#FF00B8]/30 rounded-xl p-4 active:scale-95 transition-all">
              <Shield className="w-6 h-6 text-[#FF00B8] mb-2 mx-auto" />
              <div className="text-white/60 text-xs">Focus Lock</div>
            </button>
            <button className="bg-white/5 backdrop-blur-xl border border-[#00FF9D]/30 rounded-xl p-4 active:scale-95 transition-all">
              <Zap className="w-6 h-6 text-[#00FF9D] mb-2 mx-auto" />
              <div className="text-white/60 text-xs">Challenges</div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {xpEarned > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.8 }}
              className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
            >
              <div className="bg-gradient-to-br from-[#00F0FF]/20 to-[#FF00B8]/20 backdrop-blur-2xl border-2 border-[#00F0FF] rounded-3xl p-8 shadow-[0_0_60px_rgba(0,240,255,0.8)]">
                <Trophy className="w-16 h-16 text-[#00F0FF] mx-auto mb-4" />
                <div className="text-4xl text-white text-center mb-2">
                  +{xpEarned} XP
                </div>
                <div className="text-white/60 text-center">Session Complete!</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
