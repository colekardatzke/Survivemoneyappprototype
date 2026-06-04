import { motion } from "motion/react";
import { Settings, Share2, Award, Lock, CheckCircle, Circle } from "lucide-react";
import { useState } from "react";

export function Profile() {
  const [selectedCategory, setSelectedCategory] = useState<string>("budgeting");

  const userStats = {
    name: "Alex",
    survivalScore: 87,
    level: 12,
    xp: 3400,
    xpToNext: 4000,
    totalChallenges: 23,
    winRate: 84,
    streak: 7,
    badges: 8,
  };

  const skillTree = {
    budgeting: {
      name: "Budgeting",
      icon: "💰",
      color: "from-green-500 to-emerald-600",
      skills: [
        { name: "Grocery Guru", unlocked: true, level: 3, maxLevel: 5 },
        { name: "Bill Tracker", unlocked: true, level: 2, maxLevel: 5 },
        { name: "Expense Hunter", unlocked: true, level: 4, maxLevel: 5 },
        { name: "Budget Master", unlocked: false, level: 0, maxLevel: 5 },
      ],
    },
    saving: {
      name: "Saving",
      icon: "🏦",
      color: "from-blue-500 to-cyan-600",
      skills: [
        { name: "Emergency Fund", unlocked: true, level: 5, maxLevel: 5 },
        { name: "Goal Setter", unlocked: true, level: 3, maxLevel: 5 },
        { name: "Compound Interest", unlocked: true, level: 2, maxLevel: 5 },
        { name: "Investment Basics", unlocked: false, level: 0, maxLevel: 5 },
      ],
    },
    debt: {
      name: "Debt Management",
      icon: "💳",
      color: "from-red-500 to-pink-600",
      skills: [
        { name: "Credit Card Savvy", unlocked: true, level: 4, maxLevel: 5 },
        { name: "Loan Navigator", unlocked: true, level: 2, maxLevel: 5 },
        { name: "Interest Calculator", unlocked: true, level: 3, maxLevel: 5 },
        { name: "Debt Destroyer", unlocked: false, level: 0, maxLevel: 5 },
      ],
    },
    income: {
      name: "Income",
      icon: "📈",
      color: "from-purple-500 to-violet-600",
      skills: [
        { name: "Side Hustle", unlocked: true, level: 2, maxLevel: 5 },
        { name: "Salary Negotiator", unlocked: true, level: 1, maxLevel: 5 },
        { name: "Tax Optimizer", unlocked: false, level: 0, maxLevel: 5 },
        { name: "Passive Income", unlocked: false, level: 0, maxLevel: 5 },
      ],
    },
  };

  const selectedSkillData = skillTree[selectedCategory as keyof typeof skillTree];

  return (
    <div className="min-h-full p-4 pb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white mb-1"
          >
            Profile
          </motion.h1>
          <p className="text-purple-300 text-sm">Track your progress</p>
        </div>
        <button className="p-2 rounded-lg bg-slate-800/50 text-purple-300 hover:bg-slate-700/50 transition-colors">
          <Settings className="w-5 h-5" />
        </button>
      </div>

      {/* User Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 mb-6 shadow-xl"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-4xl">
              😎
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{userStats.name}</h2>
              <p className="text-purple-100 text-sm">Level {userStats.level} Survivor</p>
            </div>
          </div>
          <button className="p-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        {/* XP Progress */}
        <div className="mb-3">
          <div className="flex justify-between text-sm text-purple-100 mb-2">
            <span>Level {userStats.level}</span>
            <span>{userStats.xp} / {userStats.xpToNext} XP</span>
          </div>
          <div className="bg-white/20 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(userStats.xp / userStats.xpToNext) * 100}%` }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-white h-full rounded-full"
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-3 mt-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{userStats.totalChallenges}</p>
            <p className="text-purple-100 text-xs">Challenges</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{userStats.winRate}%</p>
            <p className="text-purple-100 text-xs">Win Rate</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{userStats.streak}</p>
            <p className="text-purple-100 text-xs">Streak</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{userStats.badges}</p>
            <p className="text-purple-100 text-xs">Badges</p>
          </div>
        </div>
      </motion.div>

      {/* Skill Tree Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-6 h-6 text-purple-400" />
          <h2 className="text-xl font-bold text-white">Skill Tree</h2>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {Object.entries(skillTree).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                selectedCategory === key
                  ? "bg-gradient-to-r " + category.color + " text-white shadow-lg"
                  : "bg-slate-800/50 text-slate-400 hover:bg-slate-700/50"
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span className="text-sm">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Skills List */}
        <div className="space-y-3">
          {selectedSkillData.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-xl p-4 border ${
                skill.unlocked
                  ? "bg-slate-800/50 border-slate-700/50"
                  : "bg-slate-900/30 border-slate-800/50 opacity-60"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  {skill.unlocked ? (
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  ) : (
                    <Lock className="w-6 h-6 text-slate-600" />
                  )}
                  <div>
                    <p className={`font-bold ${skill.unlocked ? "text-white" : "text-slate-500"}`}>
                      {skill.name}
                    </p>
                    <p className="text-xs text-slate-400">
                      {skill.unlocked 
                        ? `Level ${skill.level} / ${skill.maxLevel}`
                        : "Locked - Complete more challenges"
                      }
                    </p>
                  </div>
                </div>
                {skill.unlocked && skill.level === skill.maxLevel && (
                  <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-full px-3 py-1">
                    <span className="text-yellow-400 text-xs font-bold">MAX</span>
                  </div>
                )}
              </div>

              {/* Skill Level Progress */}
              {skill.unlocked && (
                <div className="flex gap-1">
                  {Array.from({ length: skill.maxLevel }).map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-2 rounded-full ${
                        i < skill.level
                          ? `bg-gradient-to-r ${selectedSkillData.color}`
                          : "bg-slate-700"
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Achievement Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 bg-purple-900/20 border border-purple-500/30 rounded-xl p-4"
      >
        <p className="text-purple-300 text-sm text-center">
          💡 Complete daily challenges to unlock new skills and level up!
        </p>
      </motion.div>
    </div>
  );
}
