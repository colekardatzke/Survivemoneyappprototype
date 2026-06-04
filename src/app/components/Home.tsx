import { Link } from "react-router";
import { Zap, ChevronRight, BarChart3 } from "lucide-react";
import { motion } from "motion/react";

export function Home() {
  return (
    <div className="min-h-full p-4 pb-6 flex flex-col">
      {/* Header */}
      <div className="mb-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-2"
        >
          Survive Money
        </motion.h1>
        <p className="text-purple-300">Financial survival, gamified</p>
      </div>

      {/* Today's Survival Challenge - Hero CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="flex-1 flex flex-col justify-center mb-6"
      >
        <Link
          to="/challenge"
          className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl p-8 shadow-2xl hover:shadow-orange-500/25 transition-all block text-center"
        >
          <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <Zap className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-white font-bold text-2xl mb-2">Today's Challenge</h2>
          <p className="text-orange-50 text-lg mb-4">Paycheck Split Decision</p>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <span>Start Challenge</span>
            <ChevronRight className="w-5 h-5" />
          </div>
        </Link>
      </motion.div>

      {/* Quick Access */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 gap-3"
      >
        <Link
          to="/score"
          className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-5 flex flex-col items-center shadow-lg hover:shadow-purple-500/25 transition-all"
        >
          <BarChart3 className="w-8 h-8 text-white mb-2" />
          <span className="text-white font-bold">Survival Score</span>
          <span className="text-purple-100 text-sm">87/100</span>
        </Link>

        <Link
          to="/friends"
          className="bg-slate-800 border-2 border-slate-700 rounded-2xl p-5 flex flex-col items-center shadow-lg hover:bg-slate-700/50 transition-all"
        >
          <div className="text-3xl mb-2">👥</div>
          <span className="text-white font-bold">Friends</span>
          <span className="text-purple-300 text-sm">Rank #3</span>
        </Link>
      </motion.div>
    </div>
  );
}
