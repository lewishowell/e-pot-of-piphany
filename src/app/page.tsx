import Link from "next/link";

export default function Home() {
  const gamemodes = [
    {
      emoji: "🤔",
      title: "Would You Rather?",
      desc: "Absurd choices. No wrong answers. Only vibes.",
    },
    {
      emoji: "🧠",
      title: "Deep or Dumb?",
      desc: "Is that thought profound... or just the munchies talking?",
    },
    {
      emoji: "🌀",
      title: "Trippy Puzzles",
      desc: "Patterns, sequences, and odd ones out. Feed your brain.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      {/* Hero */}
      <div className="mb-12 text-center">
        <div className="animate-float mb-6 text-7xl">🍃</div>
        <h1 className="animate-gradient mb-4 bg-gradient-to-r from-green-400 via-purple-500 to-green-400 bg-clip-text text-5xl font-bold text-transparent sm:text-7xl">
          e pot of piphany
        </h1>
        <p className="animate-pulse-glow text-xl text-zinc-400">
          a game for elevated minds
        </p>
      </div>

      {/* Game Modes */}
      <div className="mb-10 grid w-full max-w-2xl gap-4 sm:grid-cols-3">
        {gamemodes.map((mode) => (
          <div
            key={mode.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 text-center"
          >
            <div className="mb-2 text-3xl">{mode.emoji}</div>
            <h3 className="mb-1 text-sm font-semibold text-white">
              {mode.title}
            </h3>
            <p className="text-xs text-zinc-500">{mode.desc}</p>
          </div>
        ))}
      </div>

      {/* Play Button */}
      <Link
        href="/play"
        className="group relative mb-16 inline-block rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 px-12 py-5 text-xl font-bold text-white transition-all hover:scale-110 hover:shadow-2xl hover:shadow-green-500/30 active:scale-95"
      >
        <span className="relative z-10">Play Now</span>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 blur-xl transition-opacity group-hover:opacity-50" />
      </Link>

      {/* Footer */}
      <p className="text-sm text-zinc-600">
        10 rounds &middot; 3 game modes &middot; 1 elevated experience
      </p>
    </div>
  );
}
