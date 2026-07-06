import React from "react";
import {
  Trophy,
  RotateCcw,
  Sparkles,
} from "lucide-react";

export default function GameOverModal({
  open,
  score,
  bestScore,
  restartGame,
}) {
  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/70
        backdrop-blur-md
        p-6
      "
    >
      <div
        className="
          relative
          w-full
          max-w-md
          overflow-hidden
          rounded-[36px]
          border
          border-cyan-400/20
          bg-[#091321]
          shadow-[0_0_80px_rgba(0,255,255,.18)]
        "
      >
        {/* Background Glow */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-cyan-500/10
            via-transparent
            to-purple-500/10
          "
        />

        <div className="relative p-8">

          {/* Icon */}

          <div className="flex justify-center">

            <div
              className="
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-400/20
              "
            >
              <Sparkles
                size={42}
                className="text-cyan-300"
              />
            </div>

          </div>

          {/* Title */}

          <h2 className="mt-6 text-center text-4xl font-black text-white">
            Game Over
          </h2>

          <p className="mt-2 text-center text-gray-400">
            Great run! Try to beat your best score.
          </p>

          {/* Score Cards */}

          <div className="mt-8 grid grid-cols-2 gap-4">

            <div
              className="
                rounded-3xl
                border
                border-cyan-500/20
                bg-[#101827]
                p-5
              "
            >
              <p className="text-sm text-gray-400">
                Score
              </p>

              <h3 className="mt-2 text-3xl font-black text-white">
                {score.toLocaleString()}
              </h3>
            </div>

            <div
              className="
                rounded-3xl
                border
                border-cyan-500/20
                bg-[#101827]
                p-5"
              >
              <div className="flex items-center gap-2">
                <Trophy
                  size={18}
                  className="text-yellow-400"
                />
                <span className="text-sm text-gray-400">
                  Best
                </span>
              </div>

              <h3 className="mt-2 text-3xl font-black text-white">
                {bestScore.toLocaleString()}
              </h3>
            </div>

          </div>

          {/* Restart */}

          <button
            onClick={restartGame}
            className="
              mt-8
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-cyan-500
              py-4
              text-lg
              font-bold
              text-slate-900
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:bg-cyan-400
              active:scale-95
            "
          >
            <RotateCcw size={20} />
            Play Again
          </button>

        </div>
      </div>
    </div>
  );
}