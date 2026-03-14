"use client";

import { useState } from "react";
import { PuzzleQuestion } from "../data/questions";

interface Props {
  question: PuzzleQuestion;
  onAnswer: (correct: boolean) => void;
}

export default function Puzzle({ question, onAnswer }: Props) {
  const [revealed, setRevealed] = useState(false);
  const [picked, setPicked] = useState<string | null>(null);

  const handlePick = (choice: string) => {
    if (revealed) return;
    setPicked(choice);
    setRevealed(true);
    const correct = choice === question.answer;
    setTimeout(() => onAnswer(correct), 1500);
  };

  const isCorrect = picked === question.answer;

  return (
    <div className="flex w-full max-w-lg flex-col items-center gap-6">
      <div className="mb-2 text-center">
        <span className="mb-2 inline-block rounded-full bg-purple-900/40 px-4 py-1 text-sm text-purple-300">
          Trippy Puzzle
        </span>
        <h2 className="mt-3 text-xl font-bold text-white">
          {question.prompt}
        </h2>
      </div>

      <div className="flex w-full items-center justify-center gap-3 rounded-2xl border border-zinc-700 bg-zinc-900/80 p-6">
        {question.sequence.map((item, i) => (
          <span
            key={i}
            className="rounded-xl bg-zinc-800 px-4 py-3 text-2xl"
          >
            {item}
          </span>
        ))}
        <span className="rounded-xl border-2 border-dashed border-purple-500/50 px-4 py-3 text-2xl text-purple-400">
          ?
        </span>
      </div>

      {!revealed ? (
        <div className="grid w-full grid-cols-2 gap-3">
          {question.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handlePick(option)}
              className="cursor-pointer rounded-2xl border-2 border-zinc-700 bg-zinc-800/50 px-4 py-4 text-xl font-medium text-white transition-all hover:scale-105 hover:border-purple-400/60 hover:bg-zinc-700/50 hover:shadow-lg hover:shadow-purple-500/10 active:scale-95"
            >
              {option}
            </button>
          ))}
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
          <p className="text-lg font-bold text-white">
            {isCorrect ? "Big brain!" : `The answer was ${question.answer}`}
          </p>
        </div>
      )}
    </div>
  );
}
