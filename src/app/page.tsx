export default function Home() {
  const gameIdeas = [
    {
      emoji: "🧠",
      title: "Deep or Dumb?",
      desc: "Rate epiphanies as profound or nonsense. Trivia, weird facts, philosophy.",
      tag: "trivia",
    },
    {
      emoji: "🔤",
      title: "Word Alchemy",
      desc: "Connect unrelated words to form an epiphany. Mad Libs meets big brain energy.",
      tag: "word game",
    },
    {
      emoji: "📱",
      title: "Pass the Piphany",
      desc: "Party game — pass the phone, debate absurd topics, draw trippy prompts.",
      tag: "party",
    },
    {
      emoji: "🌱",
      title: "Third Eye Idle",
      desc: "Grow a virtual garden. Collect epiphanies. Level up your third eye.",
      tag: "idle / clicker",
    },
    {
      emoji: "🌀",
      title: "Trippy Puzzles",
      desc: "Visual puzzles that shift and morph. Solve them before the munchies hit.",
      tag: "puzzle",
    },
    {
      emoji: "🗺️",
      title: "Epiphany Quest",
      desc: "Choose-your-own-adventure through bizarre philosophical scenarios.",
      tag: "adventure",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      {/* Hero */}
      <div className="mb-16 text-center">
        <div className="animate-float mb-6 text-7xl">🍃</div>
        <h1 className="animate-gradient mb-4 bg-gradient-to-r from-green-400 via-purple-500 to-green-400 bg-clip-text text-5xl font-bold text-transparent sm:text-7xl">
          e pot of piphany
        </h1>
        <p className="animate-pulse-glow text-xl text-zinc-400">
          a game for elevated minds
        </p>
      </div>

      {/* Game Ideas Grid */}
      <div className="mb-12 w-full max-w-4xl">
        <h2 className="mb-8 text-center text-2xl font-semibold text-zinc-300">
          Pick a game direction
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gameIdeas.map((idea) => (
            <div
              key={idea.tag}
              className="group cursor-pointer rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:scale-105 hover:border-green-500/50 hover:bg-zinc-800/80 hover:shadow-lg hover:shadow-green-500/10"
            >
              <div className="mb-3 text-4xl">{idea.emoji}</div>
              <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-green-400">
                {idea.title}
              </h3>
              <p className="mb-3 text-sm text-zinc-400">{idea.desc}</p>
              <span className="inline-block rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-500 group-hover:bg-green-900/30 group-hover:text-green-400">
                {idea.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <p className="text-sm text-zinc-600">
        built with Next.js &middot; deployed on Vercel
      </p>
    </div>
  );
}
