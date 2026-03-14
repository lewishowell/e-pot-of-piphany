export interface WouldYouRatherQuestion {
  type: "would-you-rather";
  optionA: string;
  optionB: string;
}

export interface DeepOrDumbQuestion {
  type: "deep-or-dumb";
  statement: string;
  answer: "deep" | "dumb";
  explanation: string;
}

export interface PuzzleQuestion {
  type: "puzzle";
  prompt: string;
  sequence: string[];
  options: string[];
  answer: string;
}

export type GameQuestion =
  | WouldYouRatherQuestion
  | DeepOrDumbQuestion
  | PuzzleQuestion;

export const wouldYouRatherQuestions: WouldYouRatherQuestion[] = [
  {
    type: "would-you-rather",
    optionA: "Have fingers that are actually tiny hot dogs",
    optionB: "Have toes that are actually gummy bears",
  },
  {
    type: "would-you-rather",
    optionA: "Only communicate through interpretive dance",
    optionB: "Only communicate through beat-boxing",
  },
  {
    type: "would-you-rather",
    optionA: "Sneeze glitter for the rest of your life",
    optionB: "Burp confetti for the rest of your life",
  },
  {
    type: "would-you-rather",
    optionA: "Have a talking pet rock that gives bad advice",
    optionB: "Have a silent pet parrot that judges you constantly",
  },
  {
    type: "would-you-rather",
    optionA: "Every pizza you eat is slightly too hot forever",
    optionB: "Every drink you have is slightly too warm forever",
  },
  {
    type: "would-you-rather",
    optionA: "Hear the Seinfeld bass riff every time you walk into a room",
    optionB: "Have dramatic anime wind blow your hair in every photo",
  },
  {
    type: "would-you-rather",
    optionA: "Have spaghetti for hair",
    optionB: "Sweat maple syrup",
  },
  {
    type: "would-you-rather",
    optionA: "Be able to talk to plants but they're all passive-aggressive",
    optionB: "Be able to talk to bugs but they all want favors",
  },
  {
    type: "would-you-rather",
    optionA: "Have your life narrated by Morgan Freeman",
    optionB: "Have your life narrated by a very confused Shaggy from Scooby-Doo",
  },
  {
    type: "would-you-rather",
    optionA: "Only be able to sit on beanbag chairs",
    optionB: "Only be able to sleep in a hammock",
  },
  {
    type: "would-you-rather",
    optionA: "Have taste buds on your fingertips",
    optionB: "Have a nose on the back of your head",
  },
  {
    type: "would-you-rather",
    optionA: "Fight one horse-sized duck",
    optionB: "Fight a hundred duck-sized horses",
  },
  {
    type: "would-you-rather",
    optionA: "Your pet could talk but only to roast you",
    optionB: "Your phone autocorrects everything to rizz speak",
  },
  {
    type: "would-you-rather",
    optionA: "Live in a house made entirely of trampolines",
    optionB: "Live in a house where every door is a revolving door",
  },
  {
    type: "would-you-rather",
    optionA: "Have a rewind button for life but it only goes back 10 seconds",
    optionB: "Have a pause button for life but you age while paused",
  },
];

export const deepOrDumbQuestions: DeepOrDumbQuestion[] = [
  {
    type: "deep-or-dumb",
    statement: "Every mirror you've ever looked into has a different version of you trapped inside it.",
    answer: "dumb",
    explanation: "Spooky vibes but that's not how mirrors work.",
  },
  {
    type: "deep-or-dumb",
    statement: "You've never actually seen your own face, only reflections and photos of it.",
    answer: "deep",
    explanation: "This is technically true and kind of wild to think about.",
  },
  {
    type: "deep-or-dumb",
    statement: "If you dig a hole through the Earth, the second half is actually digging up.",
    answer: "deep",
    explanation: "Gravity flips at the center, so you'd technically be climbing out.",
  },
  {
    type: "deep-or-dumb",
    statement: "If you're waiting for the waiter, aren't you the waiter?",
    answer: "deep",
    explanation: "Linguistically? Absolutely. You are literally waiting.",
  },
  {
    type: "deep-or-dumb",
    statement: "Nothing is on fire. Fire is on things.",
    answer: "deep",
    explanation: "Fire is a process, not a substance. Things don't go ON fire, fire happens TO them.",
  },
  {
    type: "deep-or-dumb",
    statement: "If you punch yourself and it hurts, you are both strong and weak.",
    answer: "deep",
    explanation: "A genuine paradox of self-assessment.",
  },
  {
    type: "deep-or-dumb",
    statement: "Water is just boneless ice.",
    answer: "dumb",
    explanation: "Ice doesn't have bones either, but we respect the energy.",
  },
  {
    type: "deep-or-dumb",
    statement: "Your future self is watching you through memories.",
    answer: "deep",
    explanation: "This is genuinely profound. Every moment becomes a memory your future self looks back on.",
  },
  {
    type: "deep-or-dumb",
    statement: "If you clean a vacuum cleaner, you become a vacuum cleaner.",
    answer: "dumb",
    explanation: "You're a vacuum cleaner cleaner, not a vacuum cleaner. But we feel you.",
  },
  {
    type: "deep-or-dumb",
    statement: "Lasagna is just spaghetti-flavored cake.",
    answer: "dumb",
    explanation: "It's layered, sure, but cake? That's a stretch even for a high mind.",
  },
  {
    type: "deep-or-dumb",
    statement: "Every book is just a remix of the alphabet.",
    answer: "deep",
    explanation: "26 letters, infinite ideas. That's actually beautiful.",
  },
  {
    type: "deep-or-dumb",
    statement: "The brain named itself.",
    answer: "deep",
    explanation: "Yep. The brain literally came up with its own name. Self-aware flex.",
  },
  {
    type: "deep-or-dumb",
    statement: "Your stomach thinks all potatoes are mashed.",
    answer: "dumb",
    explanation: "Technically digestion breaks everything down, but your stomach doesn't 'think'.",
  },
  {
    type: "deep-or-dumb",
    statement: "We're all just houseplants with more complicated emotions.",
    answer: "dumb",
    explanation: "We move, we eat pizza. Houseplants could never.",
  },
  {
    type: "deep-or-dumb",
    statement: "If you replace every part of a ship one piece at a time, is it still the same ship?",
    answer: "deep",
    explanation: "That's the Ship of Theseus — a legit philosophy problem since ancient Greece.",
  },
];

export const puzzleQuestions: PuzzleQuestion[] = [
  {
    type: "puzzle",
    prompt: "What comes next in the pattern?",
    sequence: ["🌑", "🌒", "🌓", "🌔"],
    options: ["🌕", "🌑", "🌘", "☀️"],
    answer: "🌕",
  },
  {
    type: "puzzle",
    prompt: "What comes next in the pattern?",
    sequence: ["🟢", "🟡", "🟢", "🟡"],
    options: ["🔴", "🟢", "🟣", "🔵"],
    answer: "🟢",
  },
  {
    type: "puzzle",
    prompt: "What comes next in the pattern?",
    sequence: ["1", "1", "2", "3", "5"],
    options: ["7", "8", "6", "10"],
    answer: "8",
  },
  {
    type: "puzzle",
    prompt: "Which one doesn't belong?",
    sequence: ["🍕", "🌮", "🍔", "🎸"],
    options: ["🍕", "🌮", "🍔", "🎸"],
    answer: "🎸",
  },
  {
    type: "puzzle",
    prompt: "What comes next in the pattern?",
    sequence: ["👁️", "👁️👁️", "👁️👁️👁️"],
    options: ["👁️👁️👁️👁️", "👁️👁️", "👁️", "🙈"],
    answer: "👁️👁️👁️👁️",
  },
  {
    type: "puzzle",
    prompt: "What comes next in the pattern?",
    sequence: ["🔺", "🔺🔺", "🔺🔺🔺"],
    options: ["🔺🔺🔺🔺", "🔺🔺", "🔻", "🔺"],
    answer: "🔺🔺🔺🔺",
  },
  {
    type: "puzzle",
    prompt: "What comes next in the pattern?",
    sequence: ["2", "4", "8", "16"],
    options: ["24", "32", "20", "64"],
    answer: "32",
  },
  {
    type: "puzzle",
    prompt: "Which one doesn't belong?",
    sequence: ["🐱", "🐶", "🐠", "🪑"],
    options: ["🐱", "🐶", "🐠", "🪑"],
    answer: "🪑",
  },
  {
    type: "puzzle",
    prompt: "What comes next in the pattern?",
    sequence: ["🌈", "🌧️", "🌈", "🌧️"],
    options: ["🌈", "⛈️", "☀️", "🌧️"],
    answer: "🌈",
  },
  {
    type: "puzzle",
    prompt: "What comes next?",
    sequence: ["Z", "Y", "X", "W"],
    options: ["V", "U", "A", "X"],
    answer: "V",
  },
  {
    type: "puzzle",
    prompt: "What comes next in the pattern?",
    sequence: ["🍃", "🍂", "🍃", "🍂"],
    options: ["🍁", "🍃", "🌿", "🍂"],
    answer: "🍃",
  },
  {
    type: "puzzle",
    prompt: "Which one doesn't belong?",
    sequence: ["🌍", "🌙", "⭐", "🍩"],
    options: ["🌍", "🌙", "⭐", "🍩"],
    answer: "🍩",
  },
];

export function getShuffledQuestions(count: number = 10): GameQuestion[] {
  const all: GameQuestion[] = [
    ...wouldYouRatherQuestions,
    ...deepOrDumbQuestions,
    ...puzzleQuestions,
  ];

  // Fisher-Yates shuffle
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }

  return all.slice(0, count);
}
