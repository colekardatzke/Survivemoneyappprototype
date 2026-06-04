import { motion } from "motion/react";
import { Medal, Crown, TrendingUp } from "lucide-react";

export function Leaderboard() {
  const friendsData = [
    { rank: 1, name: "Sarah Chen", score: 94, isYou: false, avatar: "👩" },
    { rank: 2, name: "Marcus J.", score: 91, isYou: false, avatar: "👨" },
    { rank: 3, name: "You", score: 87, isYou: true, avatar: "😎" },
    { rank: 4, name: "Alex Kim", score: 85, isYou: false, avatar: "👤" },
    { rank: 5, name: "Jordan P.", score: 82, isYou: false, avatar: "👨" },
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-6 h-6 text-yellow-400" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-slate-300" />;
    if (rank === 3) return <Medal className="w-6 h-6 text-orange-400" />;
    return <span className="text-slate-400 font-bold text-lg">#{rank}</span>;
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
          Friends
        </motion.h1>
        <p className="text-purple-300 text-sm">Your challenge group</p>
      </div>

      {/* Top 3 Podium */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-6 flex items-end justify-center gap-2"
      >
        {/* 2nd Place */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center text-3xl mb-2 border-4 border-slate-700">
            {friendsData[1].avatar}
          </div>
          <div className="bg-slate-700/50 rounded-t-xl px-4 py-3 text-center w-24">
            <Medal className="w-5 h-5 text-slate-300 mx-auto mb-1" />
            <p className="text-white font-bold text-sm">{friendsData[1].name.split(" ")[0]}</p>
            <p className="text-purple-300 text-xs">{friendsData[1].score}</p>
          </div>
        </div>

        {/* 1st Place */}
        <div className="flex flex-col items-center -mt-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-4xl mb-2 border-4 border-yellow-600 shadow-xl">
            {friendsData[0].avatar}
          </div>
          <div className="bg-gradient-to-br from-yellow-600/30 to-orange-600/30 border border-yellow-500/50 rounded-t-xl px-4 py-4 text-center w-24">
            <Crown className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
            <p className="text-white font-bold text-sm">{friendsData[0].name.split(" ")[0]}</p>
            <p className="text-yellow-300 text-xs font-bold">{friendsData[0].score}</p>
          </div>
        </div>

        {/* 3rd Place */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-3xl mb-2 border-4 border-orange-700">
            {friendsData[2].avatar}
          </div>
          <div className="bg-orange-900/30 border border-orange-700/50 rounded-t-xl px-4 py-3 text-center w-24">
            <Medal className="w-5 h-5 text-orange-400 mx-auto mb-1" />
            <p className="text-white font-bold text-sm">{friendsData[2].name}</p>
            <p className="text-orange-300 text-xs">{friendsData[2].score}</p>
          </div>
        </div>
      </motion.div>

      {/* Full List */}
      <div className="space-y-2">
        {friendsData.map((player, index) => (
          <motion.div
            key={player.rank}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`rounded-xl p-4 flex items-center gap-4 ${
              player.isYou
                ? "bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-2 border-purple-500"
                : "bg-slate-800/50 border border-slate-700/50"
            }`}
          >
            {/* Rank */}
            <div className="w-10 flex items-center justify-center">
              {getRankIcon(player.rank)}
            </div>

            {/* Avatar */}
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
              player.isYou
                ? "bg-gradient-to-br from-purple-600 to-pink-600"
                : "bg-slate-700"
            }`}>
              {player.avatar}
            </div>

            {/* Info & Score */}
            <div className="flex-1 flex items-center justify-between">
              <p className={`font-bold ${player.isYou ? "text-purple-200" : "text-white"}`}>
                {player.name}
              </p>
              <p className={`text-2xl font-bold ${player.isYou ? "text-purple-200" : "text-white"}`}>
                {player.score}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Your Rank Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-5 text-center"
      >
        <p className="text-purple-300 text-sm mb-1">Your Rank</p>
        <div className="flex items-center justify-center gap-2">
          <p className="text-white text-4xl font-bold">#3</p>
          <div className="flex items-center gap-1 text-green-400">
            <TrendingUp className="w-5 h-5" />
            <span className="font-bold">+1</span>
          </div>
        </div>
        <p className="text-purple-300 text-sm mt-1">in your group</p>
      </motion.div>
    </div>
  );
}
