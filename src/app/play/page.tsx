"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { GameQuestion, getShuffledQuestions } from "../data/questions";
import WouldYouRather from "../components/WouldYouRather";
import DeepOrDumb from "../components/DeepOrDumb";
import Puzzle from "../components/Puzzle";

const TOTAL_ROUNDS = 10;

export default function PlayPage() {
  const [questions, setQuestions] = useState<GameQuestion[]>(() => getShuffledQuestions(TOTAL_ROUNDS));
  const [currentRound, setCurrentRound] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const advanceRound = useCallback(() => {
    setTransitioning(true);
    setTimeout(() => {
      if (currentRound + 1 >= TOTAL_ROUNDS) {
        setGameOver(true);
      } else {
        setCurrentRound((r) => r + 1);
      }
      setTransitioning(false);
    }, 300);
  }, [currentRound]);

  const handleWouldYouRather = useCallback(() => {
    setScore((s) => s + 1); // Always get a point for choosing
    advanceRound();
  }, [advanceRound]);

  const handleScored = useCallback(
    (correct: boolean) => {
      if (correct) setScore((s) => s + 1);
      advanceRound();
    },
    [advanceRound]
  );

  const restartGame = () => {
    setQuestions(getShuffledQuestions(TOTAL_ROUNDS));
    setCurrentRound(0);
    setScore(0);
    setGameOver(false);
    setTransitioning(false);
  };

  if (questions.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-pulse text-4xl">🍃</div>
      </div>
    );
  }

  if (gameOver) {
    const percentage = Math.round((score / TOTAL_ROUNDS) * 100);
    const getMessage = () => {
      if (percentage >= 90) return { emoji: "🧠✨", text: "Enlightened!" };
      if (percentage >= 70) return { emoji: "🍃", text: "Elevated thinker!" };
      if (percentage >= 50) return { emoji: "💨", text: "Getting there..." };
      return { emoji: "🛋️", text: "Couch philosopher" };
    };
    const msg = getMessage();

    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6">
        <div className="text-center">
          <div className="mb-4 text-7xl">{msg.emoji}</div>
          <h1 className="animate-gradient mb-2 bg-gradient-to-r from-green-400 via-purple-500 to-green-400 bg-clip-text text-4xl font-bold text-transparent">
            Game Over
          </h1>
          <p className="mb-2 text-2xl text-zinc-300">{msg.text}</p>
          <p className="mb-8 text-lg text-zinc-500">
            You scored{" "}
            <span className="font-bold text-green-400">{score}</span> /{" "}
            {TOTAL_ROUNDS}
          </p>
          <div className="flex gap-4">
            <button
              onClick={restartGame}
              className="cursor-pointer rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 active:scale-95"
            >
              Play Again
            </button>
            <Link
              href="/"
              className="rounded-2xl border-2 border-zinc-700 px-8 py-4 text-lg font-bold text-zinc-400 transition-all hover:scale-105 hover:border-zinc-500 hover:text-white active:scale-95"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentRound];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-8">
      {/* Progress bar */}
      <div className="mb-8 w-full max-w-lg">
        <div className="mb-2 flex items-center justify-between text-sm text-zinc-500">
          <span>
            Round {currentRound + 1} / {TOTAL_ROUNDS}
          </span>
          <span className="text-green-400">
            Score: {score}
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-green-500 to-purple-500 transition-all duration-500"
            style={{
              width: `${((currentRound + 1) / TOTAL_ROUNDS) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Question area */}
      <div
        className={`transition-all duration-300 ${
          transitioning
            ? "translate-y-4 scale-95 opacity-0"
            : "translate-y-0 scale-100 opacity-100"
        }`}
      >
        {question.type === "would-you-rather" && (
          <WouldYouRather
            key={currentRound}
            question={question}
            onAnswer={handleWouldYouRather}
          />
        )}
        {question.type === "deep-or-dumb" && (
          <DeepOrDumb
            key={currentRound}
            question={question}
            onAnswer={handleScored}
          />
        )}
        {question.type === "puzzle" && (
          <Puzzle
            key={currentRound}
            question={question}
            onAnswer={handleScored}
          />
        )}
      </div>
    </div>
  );
}
