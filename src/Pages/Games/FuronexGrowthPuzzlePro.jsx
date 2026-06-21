
import React, { useEffect, useState } from "react";

const LEVELS = [
  {
    title: "Website",
    correct: ["Responsive Design", "Landing Page", "Lead Form", "Fast Loading"],
    wrong: ["Backlinks", "Instagram Reels", "Google Reviews", "Meta Ads"],
    result: "A great website converts visitors into customers."
  },
  {
    title: "SEO",
    correct: ["Keyword Research", "On Page SEO", "Technical SEO", "Backlinks"],
    wrong: ["Logo Design", "Instagram Reels", "Google Reviews", "Meta Ads"],
    result: "SEO helps your business rank higher on Google."
  },
  {
    title: "Google Business",
    correct: ["Profile Setup", "Google Reviews", "Local Ranking", "Maps Optimization"],
    wrong: ["Meta Ads", "Backlinks", "Logo Design", "Instagram Reels"],
    result: "GMB drives local leads and trust."
  },
  {
    title: "Branding",
    correct: ["Logo Design", "Brand Identity", "Brand Voice", "Visual Consistency"],
    wrong: ["Technical SEO", "Meta Ads", "Maps Optimization", "Backlinks"],
    result: "Branding makes your business memorable."
  },
  {
    title: "Ads",
    correct: ["Google Ads", "Meta Ads", "Retargeting", "Lead Campaign"],
    wrong: ["Logo Design", "Keyword Research", "Maps Optimization", "Instagram Reels"],
    result: "Ads generate leads quickly."
  },
  {
    title: "Social Media",
    correct: ["Instagram Reels", "Content Calendar", "Post Design", "Community Building"],
    wrong: ["Backlinks", "Technical SEO", "Google Ads", "Maps Optimization"],
    result: "Social media builds audience and trust."
  }
];

export default function FuronexGrowthPuzzlePro() {
  const [started, setStarted] = useState(false);
  const [level, setLevel] = useState(0);
  const [cards, setCards] = useState([]);
  const [dragged, setDragged] = useState("");
  const [correctFound, setCorrectFound] = useState([]);
  const [showUnlock, setShowUnlock] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [timer, setTimer] = useState(60);

  const current = LEVELS[level];

  useEffect(() => {
    if (!started || gameOver || win) return;

    const shuffled = [...current.correct, ...current.wrong].sort(
      () => Math.random() - 0.5
    );

    setCards(shuffled);
    setCorrectFound([]);
    setTimer(60);
  }, [started, level]);

  useEffect(() => {
    if (!started || showUnlock || gameOver) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [started, level, showUnlock, gameOver]);

  useEffect(() => {
    if (correctFound.length === current.correct.length) {
      setShowUnlock(true);
    }
  }, [correctFound]);

  const dropCard = () => {
    if (!dragged) return;

    if (current.correct.includes(dragged)) {
      setCorrectFound((p) => [...p, dragged]);
      setCards((p) => p.filter((c) => c !== dragged));
      setScore((p) => p + 10);
      setMessage("✅ Correct! +10 XP");
    } else {
      setScore((p) => Math.max(0, p - 5));
      setLives((p) => p - 1);
      setCards((p) => p.filter((c) => c !== dragged));
      setMessage("❌ Wrong! -5 XP");

      if (lives <= 1) {
        setGameOver(true);
      }
    }

    setDragged("");
  };

  const nextLevel = () => {
    setShowUnlock(false);

    if (level === LEVELS.length - 1) {
      setWin(true);
      return;
    }

    setLevel((p) => p + 1);
  };

  const progress = Math.round(((level + 1) / LEVELS.length) * 100);

  if (!started) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
        <div className="max-w-3xl w-full bg-white/10 rounded-3xl p-8 border border-white/10">
          <h1 className="text-5xl font-bold text-center mb-8">
            🚀 Furonex Growth Puzzle Pro
          </h1>

          <h2 className="text-2xl font-semibold mb-4">How To Play</h2>

          <ol className="space-y-3 text-gray-300 list-decimal ml-6">
            <li>Each level focuses on one business category.</li>
            <li>8 cards appear (4 correct + 4 wrong).</li>
            <li>Drag cards into the drop zone.</li>
            <li>Correct cards earn +10 XP.</li>
            <li>Wrong cards lose 1 life and -5 XP.</li>
            <li>You have 3 lives.</li>
            <li>You have 60 seconds per level.</li>
            <li>Complete all levels to become Growth Master.</li>
          </ol>

          <button
            onClick={() => setStarted(true)}
            className="mt-8 w-full py-4 rounded-xl bg-cyan-500 font-bold"
          >
            Start Game
          </button>
        </div>
      </div>
    );
  }

  if (gameOver) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-red-500 mb-4">
            Game Over
          </h1>
          <p className="text-2xl">Final XP: {score}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 bg-cyan-500 px-6 py-3 rounded-xl"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  if (win) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
        <div className="max-w-3xl text-center">
          <h1 className="text-6xl font-bold text-green-400 mb-6">
            🏆 Growth Master
          </h1>

          <p className="text-3xl mb-6">Final XP: {score}</p>

          <div className="grid md:grid-cols-3 gap-4">
            {LEVELS.map((l) => (
              <div key={l.title} className="bg-green-600 rounded-xl p-3">
                ✅ {l.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white p-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-6">
          {current.title} Challenge
        </h1>

        <div className="w-full h-4 bg-slate-700 rounded-full mb-6">
          <div
            className="h-full bg-cyan-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between mb-6">
          <div>XP: {score}</div>
          <div>❤️ {lives}</div>
          <div>⏳ {timer}s</div>
        </div>

        {message && (
          <div className="mb-4 text-center font-bold">
            {message}
          </div>
        )}

        {!showUnlock ? (
          <div className="grid md:grid-cols-2 gap-8">

            <div>
              <h2 className="text-xl mb-4">Strategy Cards</h2>

              <div className="grid gap-3">
                {cards.map((card) => (
                  <div
                    key={card}
                    draggable
                    onDragStart={() => setDragged(card)}
                    className="bg-white text-black p-4 rounded-xl cursor-grab"
                  >
                    {card}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl mb-4">
                Drop Zone
              </h2>

              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={dropCard}
                className="border-2 border-dashed border-cyan-500 rounded-3xl min-h-[300px] flex items-center justify-center"
              >
                Drop cards related to {current.title}
              </div>

              <div className="mt-4 space-y-2">
                {correctFound.map((item) => (
                  <div
                    key={item}
                    className="bg-green-600 p-3 rounded-xl"
                  >
                    ✅ {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        ) : (
          <div className="bg-white/10 rounded-3xl p-8 text-center">

            <h2 className="text-4xl font-bold text-green-400 mb-6">
              Strategy Unlocked
            </h2>

            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {current.correct.map((item) => (
                <div
                  key={item}
                  className="bg-white/10 p-3 rounded-xl"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mb-6">{current.result}</p>

            <button
              onClick={nextLevel}
              className="bg-cyan-500 px-8 py-3 rounded-xl"
            >
              {level === LEVELS.length - 1
                ? "Finish Game"
                : "Next Level"}
            </button>

          </div>
        )}
      </div>
    </div>
  );
}
