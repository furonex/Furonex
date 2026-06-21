
import React, { useEffect, useMemo, useState } from "react";

const LEVELS = [
  {
    title: "Website",
    color: "bg-blue-500",
    strategy: ["Responsive Design", "Landing Page", "Lead Form", "Fast Loading"],
    result: "A high-converting website generates leads 24/7."
  },
  {
    title: "SEO",
    color: "bg-green-500",
    strategy: ["Keyword Research", "On Page SEO", "Technical SEO", "Backlinks"],
    result: "SEO helps customers find you on Google."
  },
  {
    title: "Google Business",
    color: "bg-yellow-500",
    strategy: ["Profile Setup", "Google Reviews", "Local Ranking", "Maps Optimization"],
    result: "GMB improves local visibility and trust."
  },
  {
    title: "Branding",
    color: "bg-purple-500",
    strategy: ["Logo Design", "Brand Identity", "Brand Voice", "Visual Consistency"],
    result: "Strong branding improves recognition."
  },
  {
    title: "Ads",
    color: "bg-red-500",
    strategy: ["Google Ads", "Meta Ads", "Retargeting", "Lead Campaign"],
    result: "Ads accelerate lead generation."
  },
  {
    title: "Social Media",
    color: "bg-orange-500",
    strategy: ["Instagram Reels", "Content Calendar", "Post Design", "Community Building"],
    result: "Social media builds audience and trust."
  }
];

export default function FuronexGrowthPuzzle() {
  const [started, setStarted] = useState(false);
  const [level, setLevel] = useState(0);
  const [cards, setCards] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [dragged, setDragged] = useState("");
  const [showUnlock, setShowUnlock] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = LEVELS[level];

  useEffect(() => {
    if (!started || finished) return;

    const shuffled = [...current.strategy].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCompleted([]);
  }, [started, level, finished]);

  useEffect(() => {
    if (
      started &&
      completed.length === current.strategy.length &&
      current.strategy.length > 0
    ) {
      setShowUnlock(true);
    }
  }, [completed]);

  const progress = useMemo(() => {
    return Math.round(((level + (showUnlock ? 1 : 0)) / LEVELS.length) * 100);
  }, [level, showUnlock]);

  const dropCard = () => {
    if (!dragged) return;

    if (current.strategy.includes(dragged)) {
      setCompleted((p) => [...p, dragged]);
      setCards((p) => p.filter((c) => c !== dragged));
      setScore((p) => p + 10);
    }

    setDragged("");
  };

  const nextLevel = () => {
    setShowUnlock(false);

    if (level === LEVELS.length - 1) {
      setFinished(true);
      return;
    }

    setLevel((p) => p + 1);
  };

  if (!started) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white/10 border border-white/10 rounded-3xl p-8">
          <h1 className="text-4xl font-bold mb-6 text-center">🚀 Furonex Growth Puzzle</h1>
          <h2 className="text-xl font-semibold mb-4">How To Play</h2>
          <ol className="space-y-3 list-decimal ml-6 text-gray-300">
            <li>Drag strategy cards.</li>
            <li>Drop them into the category zone.</li>
            <li>Complete all cards in the level.</li>
            <li>Unlock the business growth blueprint.</li>
            <li>Finish all 6 levels to become a Growth Master.</li>
          </ol>

          <button
            onClick={() => setStarted(true)}
            className="mt-8 w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-bold"
          >
            Start Game
          </button>
        </div>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white/10 rounded-3xl p-8 text-center">
          <h1 className="text-5xl font-bold mb-6">🏆 Growth Master</h1>
          <p className="mb-4">You unlocked all Furonex growth systems.</p>
          <p className="text-3xl font-bold text-cyan-400">Score: {score}</p>

          <div className="grid grid-cols-2 gap-3 mt-8">
            {LEVELS.map((l) => (
              <div key={l.title} className="bg-green-600 rounded-xl p-3">
                ✅ {l.title}
              </div>
            ))}
          </div>

          <a
            href="/contact"
            className="inline-block mt-8 bg-cyan-500 px-6 py-3 rounded-xl font-bold"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white p-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-6">
          Furonex Growth Puzzle
        </h1>

        <div className="w-full h-4 bg-slate-700 rounded-full mb-6 overflow-hidden">
          <div
            className="h-full bg-cyan-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between mb-6">
          <span>Level {level + 1} / {LEVELS.length}</span>
          <span>XP: {score}</span>
        </div>

        <div className={`${current.color} rounded-2xl p-5 text-center mb-8`}>
          <h2 className="text-3xl font-bold">{current.title}</h2>
          <p>Complete all strategy cards</p>
        </div>

        {!showUnlock ? (
          <>
            <div className="grid md:grid-cols-2 gap-8">

              <div>
                <h3 className="font-bold mb-4">Strategy Cards</h3>

                <div className="space-y-3">
                  {cards.map((card) => (
                    <div
                      key={card}
                      draggable
                      onDragStart={() => setDragged(card)}
                      className="bg-white text-slate-900 p-4 rounded-xl cursor-grab shadow"
                    >
                      {card}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-4">Drop Zone</h3>

                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={dropCard}
                  className="border-2 border-dashed border-cyan-400 rounded-3xl min-h-[250px] flex items-center justify-center text-center p-6"
                >
                  Drop cards here for {current.title}
                </div>

                <div className="mt-4 space-y-2">
                  {completed.map((item) => (
                    <div key={item} className="bg-green-600 rounded-xl p-3">
                      ✅ {item}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </>
        ) : (
          <div className="bg-white/10 rounded-3xl p-8 text-center">
            <h2 className="text-4xl font-bold text-green-400 mb-4">
              ✅ {current.title} Strategy Unlocked
            </h2>

            <div className="grid md:grid-cols-2 gap-3 my-6">
              {current.strategy.map((item) => (
                <div key={item} className="bg-white/10 rounded-xl p-3">
                  {item}
                </div>
              ))}
            </div>

            <p className="mb-6 text-gray-300">{current.result}</p>

            <button
              onClick={nextLevel}
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl font-bold"
            >
              {level === LEVELS.length - 1 ? "Finish Game" : "Next Level"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
