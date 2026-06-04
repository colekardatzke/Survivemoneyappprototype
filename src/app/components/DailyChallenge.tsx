import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Zap, Clock, TrendingUp } from "lucide-react";

type Choice = {
  text: string;
  impact: string;
  isCorrect: boolean;
  points: number;
};

type Step = {
  situation: string;
  question: string;
  choices: Choice[];
};

export function DailyChallenge() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [userChoices, setUserChoices] = useState<number[]>([]);

  const scenario: {
    id: string;
    title: string;
    description: string;
    icon: string;
    difficulty: string;
    potentialPoints: number;
    steps: Step[];
  } = {
    id: "paycheck",
    title: "Paycheck Split Decision",
    description: "You just got paid $2,000. Time to decide where it goes.",
    icon: "💰",
    difficulty: "Medium",
    potentialPoints: 10,
    steps: [
      {
        situation: "You just got paid $2,000. Your rent is $800 due in 3 days, you have $150 in bills, and your friend invited you to a concert this weekend for $120.",
        question: "What do you pay first?",
        choices: [
          {
            text: "Pay rent immediately ($800)",
            impact: "Safe choice! Always prioritize housing first.",
            isCorrect: true,
            points: 5,
          },
          {
            text: "Buy concert tickets first ($120)",
            impact: "Risky move. Entertainment before rent is dangerous.",
            isCorrect: false,
            points: -3,
          },
          {
            text: "Split it evenly across everything",
            impact: "Bad idea. You won't have enough for rent on time.",
            isCorrect: false,
            points: -5,
          },
        ],
      },
      {
        situation: "Good! Rent is paid. You have $1,200 left. You still owe $150 in bills and want to save something.",
        question: "How do you split the remaining $1,200?",
        choices: [
          {
            text: "Bills $150, Savings $500, Spending $550",
            impact: "Excellent! You covered essentials and built your emergency fund.",
            isCorrect: true,
            points: 5,
          },
          {
            text: "Bills $150, Savings $50, Spending $1,000",
            impact: "Risky. You're not building financial stability.",
            isCorrect: false,
            points: -3,
          },
          {
            text: "All to savings ($1,200)",
            impact: "Bad move. You still have bills due!",
            isCorrect: false,
            points: -5,
          },
        ],
      },
    ],
  };

  const currentStepData = scenario.steps[currentStep];
  const isLastStep = currentStep === scenario.steps.length - 1;

  const handleChoiceSelect = (index: number) => {
    setSelectedChoice(index);
  };

  const handleConfirm = () => {
    if (selectedChoice === null) return;

    const newChoices = [...userChoices, selectedChoice];
    setUserChoices(newChoices);

    if (isLastStep) {
      // Navigate to results
      setTimeout(() => {
        navigate(`/result/${scenario.id}`);
      }, 1500);
    } else {
      setTimeout(() => {
        setCurrentStep((step) => step + 1);
        setSelectedChoice(null);
      }, 1500);
    }
  };

  const confirmed = userChoices.length > currentStep;

  return (
    <div className="min-h-full p-4 pb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate("/")}
          className="p-2 rounded-lg bg-slate-800/50 text-purple-300 hover:bg-slate-700/50 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-3 py-1">
          <Zap className="w-4 h-4 text-yellow-400" />
          <span className="text-yellow-300 text-sm font-semibold">Daily Challenge</span>
        </div>
        <div className="flex items-center gap-2 text-purple-300 text-sm">
          <Clock className="w-4 h-4" />
          <span>4:32</span>
        </div>
      </div>

      {/* Challenge Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-5xl">{scenario.icon}</span>
          <div>
            <h1 className="text-2xl font-bold text-white">{scenario.title}</h1>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-xs px-2 py-1 bg-red-500/20 text-red-300 rounded-full border border-red-500/30">
                {scenario.difficulty}
              </span>
              <div className="flex items-center gap-1 text-green-400 text-sm">
                <TrendingUp className="w-3 h-3" />
                <span>+{scenario.potentialPoints} pts</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-purple-300 text-sm">Progress</span>
          <span className="text-white text-sm font-semibold">
            Step {currentStep + 1} of {scenario.steps.length}
          </span>
        </div>
        <div className="bg-slate-800 rounded-full h-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / scenario.steps.length) * 100}%` }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full"
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Situation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-slate-800/50 border border-purple-500/30 rounded-2xl p-5 mb-6"
        >
          <p className="text-purple-200 text-sm mb-3">The Situation:</p>
          <p className="text-white text-base leading-relaxed">{currentStepData.situation}</p>
          <p className="text-purple-300 font-semibold mt-4 text-base">{currentStepData.question}</p>
        </motion.div>
      </AnimatePresence>

      {/* Choices */}
      <div className="space-y-3 mb-6">
        <AnimatePresence mode="wait">
          {currentStepData.choices.map((choice, index) => {
            const isSelected = selectedChoice === index;
            const isConfirmed = confirmed && userChoices[currentStep] === index;
            const showFeedback = confirmed && isConfirmed;

            return (
              <motion.button
                key={`${currentStep}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => !confirmed && handleChoiceSelect(index)}
                disabled={confirmed}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  showFeedback
                    ? choice.isCorrect
                      ? "bg-green-500/20 border-green-500 text-white"
                      : "bg-red-500/20 border-red-500 text-white"
                    : isSelected
                    ? "bg-purple-500/20 border-purple-500 text-white"
                    : "bg-slate-800/30 border-slate-700 text-slate-300 hover:border-purple-500/50 hover:bg-slate-800/50"
                } ${confirmed ? "cursor-not-allowed" : "cursor-pointer"}`}
              >
                <p className="font-medium">{choice.text}</p>
                {showFeedback && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-3 pt-3 border-t border-white/20"
                  >
                    <p className="text-sm opacity-90">{choice.impact}</p>
                    <p className="text-xs mt-1 font-semibold">
                      {choice.points >= 0 ? "+" : ""}
                      {choice.points} points
                    </p>
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Confirm Button */}
      {!confirmed && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: selectedChoice !== null ? 1 : 0.5 }}
          onClick={handleConfirm}
          disabled={selectedChoice === null}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-shadow"
        >
          {isLastStep ? "Finish Challenge" : "Confirm Choice"}
        </motion.button>
      )}
    </div>
  );
}
