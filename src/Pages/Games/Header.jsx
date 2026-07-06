import React from "react";
import {
  Trophy,
  Flame,
  Star,
  RotateCcw,
} from "lucide-react";

export default function Header({
  score,
  bestScore,
  combo,
  restartGame,
}) {
  return (
    <div className="w-full mb-8">

      {/* Top */}

      <div
        className="
          relative
          rounded-[28px]
          overflow-hidden
          border
          border-cyan-500/20
          bg-[#0A1222]/90
          backdrop-blur-xl
          shadow-[0_0_40px_rgba(0,255,255,.08)]
        "
      >

        {/* Background */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-cyan-500/5
            via-transparent
            to-purple-500/5
          "
        />

        <div className="relative flex justify-between items-center px-8 py-6">

          {/* Left */}

          <div>

            <p className="text-sm uppercase tracking-[4px] text-cyan-300/70">
              Block Blast
            </p>

            <h1 className="text-3xl font-black text-white mt-2">
              Neon Edition
            </h1>

          </div>

          {/* Right */}

          <button
            onClick={restartGame}
            className="
              w-14
              h-14
              rounded-2xl
              bg-cyan-500/10
              border
              border-cyan-500/30
              flex
              items-center
              justify-center
              hover:bg-cyan-500/20
              transition-all
              duration-300
            "
          >
            <RotateCcw
              className="text-cyan-300"
              size={22}
            />
          </button>

        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-1
sm:grid-cols-3 gap-5 mt-5">

        {/* Score */}

        <div
          className="
            rounded-3xl
            bg-[#111827]
            border
            border-cyan-500/20
            p-5
            shadow-[0_0_25px_rgba(0,255,255,.06)]
          "
        >

          <div className="flex items-center gap-3">

            <Star
              className="text-yellow-400"
              size={22}
            />

            <span className="text-gray-400">
              Score
            </span>

          </div>

          <h2 className="text-2xl
sm:text-3xl font-black mt-3 text-white">
            {score.toLocaleString()}
          </h2>

        </div>

        {/* Best */}

        <div
          className="
            rounded-3xl
            bg-[#111827]
            border
            border-cyan-500/20
            p-5
            shadow-[0_0_25px_rgba(0,255,255,.06)]
          "
        >

          <div className="flex items-center gap-3">

            <Trophy
              className="text-yellow-500"
              size={22}
            />

            <span className="text-gray-400">
              Best
            </span>

          </div>

          <h2 className="text-3xl font-black mt-3 text-white">
            {bestScore.toLocaleString()}
          </h2>

        </div>

        {/* Combo */}

        <div
          className="
            rounded-3xl
            bg-[#111827]
            border
            border-cyan-500/20
            p-5
            shadow-[0_0_25px_rgba(0,255,255,.06)]
          "
        >

          <div className="flex items-center gap-3">

            <Flame
              className="text-orange-500"
              size={22}
            />

            <span className="text-gray-400">
              Combo
            </span>

          </div>

          <h2 className="text-3xl font-black mt-3 text-white">
            x{combo}
          </h2>

        </div>

      </div>

    </div>
  );
}