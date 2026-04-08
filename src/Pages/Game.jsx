import { motion } from "motion/react";
import { useEffect, useState, useMemo } from "react";

const Game = () => {
  const [sequence, setSequence] = useState([]);
  const [user, setUser] = useState([]);
  const [active, setActive] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [level, setLevel] = useState(1);

  const [showLose, setShowLose] = useState(false);
  const [showNext, setShowNext] = useState(false);

  // ⭐ Stable Stars (IMPORTANT FIX)
  const stars = useMemo(() => {
    return Array.from({ length: 25 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 2 + Math.random() * 2,
    }));
  }, []);

  const generateStep = () => Math.floor(Math.random() * 9);

  const startGame = () => {
    const first = generateStep();
    setSequence([first]);
    setUser([]);
    setLevel(1);
    setPlaying(true);
    setShowLose(false);
    setShowNext(false);
  };

  useEffect(() => {
    if (!playing) return;

    let i = 0;
    const interval = setInterval(() => {
      setActive(sequence[i]);
      setTimeout(() => setActive(null), 300);
      i++;
      if (i >= sequence.length) clearInterval(interval);
    }, 600);

    return () => clearInterval(interval);
  }, [sequence, playing]);

  const handleClick = (index) => {
    if (!playing) return;

    const newUser = [...user, index];
    setUser(newUser);

    // ❌ Lose
    if (sequence[newUser.length - 1] !== index) {
      setPlaying(false);
      setShowLose(true);
      return;
    }

    // ✅ Next Level
    if (newUser.length === sequence.length) {
      setShowNext(true);

      setTimeout(() => {
        setSequence((prev) => [...prev, generateStep()]);
        setUser([]);
        setLevel((prev) => prev + 1);
        setShowNext(false);
      }, 1200);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0F1C] text-white flex flex-col items-center justify-center overflow-hidden">

      {/* ⭐ Stars (same as About page but fixed) */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: "2px",
            height: "2px",
          }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
          }}
        />
      ))}

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center">

        <h1 className="text-2xl mb-4 text-cyan-400">Memory Grid 🧠</h1>
        <p className="mb-4">Level: {level}</p>

        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              onClick={() => handleClick(i)}
              className={`w-20 h-20 rounded-lg cursor-pointer transition 
              ${active === i 
                ? "bg-cyan-400 shadow-lg scale-105" 
                : "bg-slate-700 hover:bg-slate-600"}`}
            />
          ))}
        </div>

        {!playing && !showLose && (
          <button
            onClick={startGame}
            className="mt-6 px-6 py-2 bg-cyan-500 rounded-lg"
          >
            Start
          </button>
        )}
      </div>

      {/* ❌ Lose Popup */}
      {showLose && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-20">
          <div className="bg-slate-800 p-6 rounded-xl text-center border border-red-500">
            <h2 className="text-xl text-red-400 mb-2">Game Over ❌</h2>
            <p className="mb-4">You reached Level {level}</p>

            <button
              onClick={startGame}
              className="px-6 py-2 bg-red-500 rounded-lg"
            >
              Restart
            </button>
          </div>
        </div>
      )}

      {/* ✅ Next Level Popup */}
      {showNext && (
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="bg-cyan-500 text-black px-6 py-3 rounded-lg text-lg font-semibold animate-pulse">
            Level {level + 1}
          </div>
        </div>
      )}

    </div>
  );
};

export default Game;