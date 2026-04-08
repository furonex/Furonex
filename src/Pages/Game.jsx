import { useEffect, useState } from "react";

const Game = () => {
  const [position, setPosition] = useState({ top: 50, left: 50 });
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [playing, setPlaying] = useState(false);

  // Move orb randomly
  const moveOrb = () => {
    const top = Math.random() * 80;
    const left = Math.random() * 80;
    setPosition({ top, left });
  };

  // Start game
  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setPlaying(true);
    moveOrb();
  };

  // Timer logic
  useEffect(() => {
    if (!playing) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setPlaying(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [playing]);

  // Increase difficulty (orb moves faster)
  useEffect(() => {
    if (!playing) return;

    const interval = setInterval(() => {
      moveOrb();
    }, Math.max(800 - score * 20, 200));

    return () => clearInterval(interval);
  }, [playing, score]);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center relative overflow-hidden">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-cyan-400">
        Catch the Orb ⚡
      </h1>

      {/* Score + Timer */}
      <div className="flex gap-10 mb-6 text-lg">
        <p>Score: {score}</p>
        <p>Time: {timeLeft}s</p>
      </div>

      {/* Game Area */}
      <div className="relative w-[90vw] max-w-[600px] h-[400px] border border-cyan-500 rounded-xl overflow-hidden">

        {playing && (
          <div
            onClick={() => {
              setScore(score + 1);
              moveOrb();
            }}
            className="absolute w-12 h-12 rounded-full cursor-pointer transition-all duration-200"
            style={{
              top: `${position.top}%`,
              left: `${position.left}%`,
              background: "radial-gradient(circle, #22d3ee, #0ea5e9)",
              boxShadow: "0 0 20px #22d3ee, 0 0 40px #0ea5e9",
            }}
          />
        )}

        {!playing && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="mb-4 text-lg">
              {timeLeft === 0 ? `Final Score: ${score}` : "Ready?"}
            </p>

            <button
              onClick={startGame}
              className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition"
            >
              Start Game
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;