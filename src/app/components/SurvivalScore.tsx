import { motion } from "motion/react";
import { TrendingUp, DollarSign, Home as HomeIcon, ShoppingCart, ChevronRight } from "lucide-react";

export function SurvivalScore() {
  const scores = {
    moneyStability: 82,
    rentReadiness: 75,
    spendingControl: 91,
  };

  const overall = Math.round((scores.moneyStability + scores.rentReadiness + scores.spendingControl) / 3);

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  const getScoreGradient = (score: number) => {
    if (score >= 80) return "from-green-500 to-emerald-500";
    if (score >= 60) return "from-yellow-500 to-orange-500";
    return "from-red-500 to-pink-500";
  };

  return (
    <div className="min-h-full p-4 pb-6">
      {/* Header */}
      <div className="mb-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-white mb-1"
        >
          Survival Score
        </motion.h1>
        <p className="text-purple-300 text-sm">Your financial health breakdown</p>
      </div>

      {/* Overall Score */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className={`bg-gradient-to-br ${getScoreGradient(overall)} rounded-2xl p-6 mb-6 shadow-xl`}
      >
        <p className="text-white/80 text-sm mb-2">Overall Score</p>
        <div className="flex items-end gap-2 mb-4">
          <span className="text-6xl font-bold text-white">{overall}</span>
          <span className="text-white/80 text-2xl mb-2">/100</span>
        </div>
        <div className="flex items-center gap-2 text-white/90">
          <TrendingUp className="w-5 h-5" />
          <span>+8 points this week</span>
        </div>
      </motion.div>

      {/* Score Breakdown */}
      <div className="space-y-4">
        {/* Money Stability */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800/50 border border-slate-700 rounded-xl p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-purple-600/20 rounded-full p-3">
                <DollarSign className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Money Stability</h3>
                <p className="text-slate-400 text-sm">Emergency fund & savings</p>
              </div>
            </div>
            <span className={`text-3xl font-bold ${getScoreColor(scores.moneyStability)}`}>
              {scores.moneyStability}
            </span>
          </div>
          <div className="bg-slate-900 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${scores.moneyStability}%` }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className={`bg-gradient-to-r ${getScoreGradient(scores.moneyStability)} h-full rounded-full`}
            />
          </div>
        </motion.div>

        {/* Rent Readiness */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-800/50 border border-slate-700 rounded-xl p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600/20 rounded-full p-3">
                <HomeIcon className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Rent Readiness</h3>
                <p className="text-slate-400 text-sm">Housing payment security</p>
              </div>
            </div>
            <span className={`text-3xl font-bold ${getScoreColor(scores.rentReadiness)}`}>
              {scores.rentReadiness}
            </span>
          </div>
          <div className="bg-slate-900 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${scores.rentReadiness}%` }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className={`bg-gradient-to-r ${getScoreGradient(scores.rentReadiness)} h-full rounded-full`}
            />
          </div>
        </motion.div>

        {/* Spending Control */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-800/50 border border-slate-700 rounded-xl p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-pink-600/20 rounded-full p-3">
                <ShoppingCart className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Spending Control</h3>
                <p className="text-slate-400 text-sm">Budget discipline</p>
              </div>
            </div>
            <span className={`text-3xl font-bold ${getScoreColor(scores.spendingControl)}`}>
              {scores.spendingControl}
            </span>
          </div>
          <div className="bg-slate-900 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${scores.spendingControl}%` }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className={`bg-gradient-to-r ${getScoreGradient(scores.spendingControl)} h-full rounded-full`}
            />
          </div>
        </motion.div>
      </div>

      {/* Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 bg-purple-900/20 border border-purple-500/30 rounded-xl p-4"
      >
        <div className="flex items-start gap-3">
          <div className="text-2xl">💡</div>
          <div>
            <p className="text-white font-semibold mb-1">Boost your Rent Readiness</p>
            <p className="text-purple-300 text-sm">Complete housing-focused challenges to improve this score</p>
          </div>
          <ChevronRight className="w-5 h-5 text-purple-400 ml-auto" />
        </div>
      </motion.div>
    </div>
  );
}
