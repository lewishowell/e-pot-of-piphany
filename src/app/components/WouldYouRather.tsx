"use client";

import { WouldYouRatherQuestion } from "../data/questions";

interface Props {
  question: WouldYouRatherQuestion;
  onAnswer: () => void;
}

export default function WouldYouRather({ question, onAnswer }: Props) {
  return (
    <div className="flex w-full max-w-lg flex-col items-center gap-6">
      <div className="mb-2 text-center">
        <span className="mb-2 inline-block rounded-full bg-pink-900/40 px-4 py-1 text-sm text-pink-300">
          Would You Rather
        </span>
        <h2 className="mt-3 text-2xl font-bold text-white">
          Choose your fate...
        </h2>
      </div>

      <button
        onClick={onAnswer}
        className="w-full cursor-pointer rounded-2xl border-2 border-pink-500/30 bg-gradient-to-br from-pink-900/30 to-purple-900/30 p-6 text-left text-lg font-medium text-white transition-all hover:scale-105 hover:border-pink-400/60 hover:shadow-lg hover:shadow-pink-500/20 active:scale-95"
      >
        <span className="mb-2 block text-sm text-pink-400">Option A</span>
        {question.optionA}
      </button>

      <div className="text-2xl font-bold text-zinc-600">OR</div>

      <button
        onClick={onAnswer}
        className="w-full cursor-pointer rounded-2xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-6 text-left text-lg font-medium text-white transition-all hover:scale-105 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95"
      >
        <span className="mb-2 block text-sm text-purple-400">Option B</span>
        {question.optionB}
      </button>
    </div>
  );
}
