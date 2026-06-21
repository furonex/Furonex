import { useState } from "react";

const services = {
  1: "Website",
  2: "SEO",
  3: "Google Business",
  4: "Google Ads",
  5: "Meta Ads",
  6: "Content",
  7: "Branding",
  8: "Reviews",
  9: "Automation",
};

export default function FuronexGrowthChallenge() {
  const [closed, setClosed] = useState([]);
  const [selected, setSelected] = useState([]);
  const [dice1, setDice1] = useState(null);
  const [dice2, setDice2] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  const total = (dice1 || 0) + (dice2 || 0);

  const availableTiles = Array.from(
    { length: 9 },
    (_, i) => i + 1
  ).filter((n) => !closed.includes(n));

  const score = Math.round(
    (closed.length / 9) * 100
  );

  function hasValidCombination(nums, target) {
    function helper(start, sum) {
      if (sum === target) return true;
      if (sum > target) return false;

      for (let i = start; i < nums.length; i++) {
        if (helper(i + 1, sum + nums[i])) {
          return true;
        }
      }

      return false;
    }

    return helper(0, 0);
  }

  function rollDice() {
    if (gameOver) return;

    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;

    setDice1(d1);
    setDice2(d2);
    setSelected([]);
    setGameStarted(true);

    const sum = d1 + d2;

    setTimeout(() => {
      const valid = hasValidCombination(
        availableTiles,
        sum
      );

      if (!valid) {
        setGameOver(true);
      }
    }, 100);
  }

  function toggleTile(num) {
    if (closed.includes(num)) return;

    if (selected.includes(num)) {
      setSelected(
        selected.filter((n) => n !== num)
      );
    } else {
      setSelected([...selected, num]);
    }
  }

  function closeTiles() {
    const sum = selected.reduce(
      (acc, curr) => acc + curr,
      0
    );

    if (sum !== total) {
      alert(
        `Selected tiles must equal ${total}`
      );
      return;
    }

    const updated = [...closed, ...selected];

    setClosed(updated);
    setSelected([]);

    if (updated.length === 9) {
      setWon(true);
      setGameOver(true);
    }
  }

  function restartGame() {
    setClosed([]);
    setSelected([]);
    setDice1(null);
    setDice2(null);
    setGameStarted(false);
    setGameOver(false);
    setWon(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

          <h1 className="text-4xl font-bold text-center mb-4">
            🚀 Furonex Growth Challenge
          </h1>

          {!gameStarted && (
            <div className="mb-8">

              <h2 className="text-xl font-semibold mb-4">
                How To Play
              </h2>

              <ul className="space-y-2 text-gray-300">
                <li>
                  🎲 Roll the dice
                </li>

                <li>
                  Select services whose numbers
                  equal the dice total
                </li>

                <li>
                  Close all 9 services to fully
                  optimize the business
                </li>

                <li>
                  If no valid combination exists,
                  the game ends
                </li>
              </ul>
            </div>
          )}

          <div className="flex justify-center gap-8 my-8">

            <div className="w-20 h-20 bg-white text-black rounded-2xl flex items-center justify-center text-4xl font-bold">
              {dice1 ?? "🎲"}
            </div>

            <div className="w-20 h-20 bg-white text-black rounded-2xl flex items-center justify-center text-4xl font-bold">
              {dice2 ?? "🎲"}
            </div>

          </div>

          {total > 0 && (
            <p className="text-center text-2xl mb-8">
              Total:{" "}
              <span className="text-cyan-400 font-bold">
                {total}
              </span>
            </p>
          )}

          <div className="grid grid-cols-3 gap-4 mb-8">

            {Object.entries(services).map(
              ([num, label]) => {
                const n = Number(num);

                const isClosed =
                  closed.includes(n);

                const isSelected =
                  selected.includes(n);

                return (
                  <button
                    key={n}
                    onClick={() =>
                      toggleTile(n)
                    }
                    disabled={isClosed}
                    className={`
                      p-5 rounded-2xl transition-all
                      ${
                        isClosed
                          ? "bg-green-600 opacity-60"
                          : isSelected
                          ? "bg-cyan-500"
                          : "bg-white/10 hover:bg-white/20"
                      }
                    `}
                  >
                    <div className="text-2xl font-bold">
                      {n}
                    </div>

                    <div className="text-sm mt-2">
                      {label}
                    </div>
                  </button>
                );
              }
            )}

          </div>

          <div className="flex flex-wrap justify-center gap-4">

            <button
              onClick={rollDice}
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold"
            >
              Roll Dice
            </button>

            <button
              onClick={closeTiles}
              className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold"
            >
              Close Selected
            </button>

            <button
              onClick={restartGame}
              className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-semibold"
            >
              Restart
            </button>

          </div>

          <div className="mt-8">

            <div className="flex justify-between mb-2">
              <span>
                Business Growth Score
              </span>

              <span>
                {score}%
              </span>
            </div>

            <div className="h-4 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-500"
                style={{
                  width: `${score}%`,
                }}
              />
            </div>

          </div>

          {gameOver && (
            <div className="mt-8 text-center">

              {won ? (
                <>
                  <h2 className="text-4xl font-bold text-green-400">
                    🚀 Business Fully Optimized
                  </h2>

                  <p className="mt-4">
                    Growth Score: 100%
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-4xl font-bold text-red-400">
                    Game Over
                  </h2>

                  <p className="mt-4">
                    Final Growth Score:
                    {" "}
                    {score}%
                  </p>
                </>
              )}

              <div className="mt-6">
                <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold">
                  Book Free Consultation
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}