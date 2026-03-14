"use client";

import { useState } from "react";
import { DeepOrDumbQuestion } from "../data/questions";

interface Props {
  question: DeepOrDumbQuestion;
  onAnswer: (correct: boolean) => void;
}

export default function DeepOrDumb({ question, onAnswer }: Props) {
  const [revealed, setRevealed] = useState(false);
  const [picked, setPicked] = useState<"deep" | "dumb" | null>(null);

  const handlePick = (choice: "deep" | "dumb") => {
    if (revealed) return;
    setPicked(choice);
    setRevealed(true);
    const correct = choice === question.answer;
    setTimeout(() => onAnswer(correct), 2000);
  };

  const isCorrect = picked === question.answer;

  return (
    <div className="flex w-full max-w-lg flex-col items-center gap-6">
      <div className="mb-2 text-center">
        <span className="mb-2 inline-block rounded-full bg-green-900/40 px-4 py-1 text-sm text-green-300">
          Deep or Dumb?
        </span>
      </div>

      <div className="w-full rounded-2xl border border-zinc-700 bg-zinc-900/80 p-8 text-center">
        <p className="text-xl font-medium leading-relaxed text-white">
          &ldquo;{question.statement}&rdquo;
        </p>
      </div>

      {!revealed ? (
        <div className="flex w-full gap-4">
          <button
            onClick={() => handlePick("deep")}
            className="flex-1 cursor-pointer rounded-2xl border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 px-6 py-4 text-lg font-bold text-cyan-300 transition-all hover:scale-105 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95"
          >
            🧠 Deep
          </button>
          <button
            onClick={() => handlePick("dumb")}
            className="flex-1 cursor-pointer rounded-2xl border-2 border-orange-500/30 bg-gradient-to-br from-orange-900/30 to-red-900/30 px-6 py-4 text-lg font-bold text-orange-300 transition-all hover:scale-105 hover:border-orange-400/60 hover:shadow-lg hover:shadow-orange-500/20 active:scale-95"
          >
            🤪 Dumb
          </button>
        </div>
      ) : (
        <div
          className={`w-full rounded-2xl border-2 p-6 text-center ${
            isCorrect
              ? "border-green-500/50 bg-green-900/20"
              : "border-red-500/50 bg-red-900/20"
          }`}
        >
          <div className="mb-2 text-3xl">{isCorrect ? "✅" : "❌"}</div>
          <p className="mb-1 text-lg font-bold text-white">
            {isCorrect ? "Nailed it!" : "Not quite!"}
          </p>
          <p className="text-sm text-zinc-400">
            It&apos;s <span className="font-bold text-white">{question.answer}</span>.{" "}
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
