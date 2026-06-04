import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Home, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

export function ScenarioResult() {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  // Mock results data - Safe/Risky/Bad system
  const result = {
    rating: "Safe", // "Safe", "Risky", or "Bad"
    consequence: "Good work! You used your emergency fund for what it's for. Your money stability increased.",
    survivalScoreChange: 5,
  };

  useEffect(() => {
    setShowContent(true);
  }, []);

  const getRatingStyle = (rating: string) => {
    switch (rating) {
      case "Safe":
        return {
          gradient: "from-green-500 to-emerald-500",
          emoji: "✅",
          border: "border-green-500",
        };
      case "Risky":
        return {
          gradient: "from-yellow-500 to-orange-500",
          emoji: "⚠️",
          border: "border-yellow-500",
        };
      case "Bad":
        return {
          gradient: "from-red-500 to-pink-500",
          emoji: "❌",
          border: "border-red-500",
        };
      default:
        return {
          gradient: "from-slate-500 to-slate-600",
          emoji: "•",
          border: "border-slate-500",
        };
    }
  };

  const ratingStyle = getRatingStyle(result.rating);

  return (
    <div className="min-h-full p-4 pb-6 flex flex-col justify-center">
      {/* Rating Badge */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: showContent ? 1 : 0, opacity: showContent ? 1 : 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
        className="flex flex-col items-center mb-8"
      >
        <div className={`w-40 h-40 rounded-full bg-gradient-to-br ${ratingStyle.gradient} flex items-center justify-center mb-6 shadow-2xl border-4 ${ratingStyle.border}`}>
          <span className="text-8xl">{ratingStyle.emoji}</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">{result.rating} Choice</h1>
        <p className="text-purple-300">Paycheck Split</p>
      </motion.div>

      {/* Consequence */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: showContent ? 0 : 30, opacity: showContent ? 1 : 0 }}
        transition={{ delay: 0.4 }}
        className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 mb-6"
      >
        <p className="text-slate-400 text-sm mb-2">What happened:</p>
        <p className="text-white text-lg leading-relaxed">{result.consequence}</p>
      </motion.div>

      {/* Score Change */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: showContent ? 0 : 30, opacity: showContent ? 1 : 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-2xl p-5 mb-8 text-center"
      >
        <p className="text-purple-300 text-sm mb-1">Survival Score</p>
        <p className={`text-5xl font-bold ${result.survivalScoreChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
          {result.survivalScoreChange >= 0 ? '+' : ''}{result.survivalScoreChange}
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: showContent ? 0 : 30, opacity: showContent ? 1 : 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-2 gap-3"
      >
        <button
          onClick={() => navigate("/challenge")}
          className="bg-slate-800 text-purple-300 font-semibold py-4 rounded-xl flex items-center justify-center gap-2 border border-slate-700 hover:bg-slate-700 transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
          Try Again
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
        >
          <Home className="w-5 h-5" />
          Home
        </button>
      </motion.div>
    </div>
  );
}
