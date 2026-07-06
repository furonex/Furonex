import { useEffect } from "react";

import "./game.css";

import Header from "./Header";
import Board from "./Board";
import PieceTray from "./PieceTray";
import DragLayer from "./DragLayer";
import GameOverModal from "./GameOverModal";

import useGame from "./hooks/useGame";
import useDrag from "./hooks/useDrag";

export default function BlockBlast() {

  // ==========================================
  // GAME
  // ==========================================

  const {
    board,
    pieces,
    score,
    combo,
    bestScore,
    gameOver,
    place,
    canPlace,
    restartGame,
  } = useGame();

  // ==========================================
  // DRAG
  // ==========================================

  const {
    boardRef,
    draggingPiece,
    dragPosition,
    hoverCell,
    startDrag,
  } = useDrag(handleDrop);

  // ==========================================
  // DROP
  // ==========================================

  function handleDrop(piece, row, col) {
    if (!piece) return;

    place(piece, row, col);
  }

  // ==========================================
  // ESC = Restart
  // ==========================================

  useEffect(() => {

    function key(e) {

      if (e.key === "Escape") {

        restartGame();

      }

    }

    window.addEventListener(
      "keydown",
      key
    );

    return () =>
      window.removeEventListener(
        "keydown",
        key
      );

  }, [restartGame]);

  // ==========================================
  // Disable Page Scroll
  // ==========================================

  useEffect(() => {

    const previous =
      document.body.style.overflow;

    document.body.style.overflow =
      "auto";

    return () => {

      document.body.style.overflow =
        previous;

    };

  }, []);

  // ==========================================
  // Ghost Validation
  // ==========================================

  const ghostValid =
    draggingPiece &&
    hoverCell &&
    canPlace(
      draggingPiece,
      hoverCell.row,
      hoverCell.col
    );

  // ==========================================
  // UI
  // ==========================================

  return (

    <div
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#050816]
      text-white
    "
    >

      {/* ================================= */}
      {/* Animated Background */}
      {/* ================================= */}

      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
          absolute
          w-[700px]
          h-[700px]
          rounded-full
          bg-cyan-500/10
          blur-[180px]
          -left-52
          -top-52
        "
        />

        <div
          className="
          absolute
          w-[700px]
          h-[700px]
          rounded-full
          bg-purple-500/10
          blur-[180px]
          -right-52
          bottom-[-250px]
        "
        />

        <div
          className="
          absolute
          inset-0
          opacity-40
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,.05)_1px,transparent_1px)]
          bg-[length:28px_28px]
        "
        />

      </div>

      {/* ================================= */}
      {/* Main */}
      {/* ================================= */}

      <div
        className="
        relative
        z-10
        mx-auto
        max-w-7xl
        px-6
        py-10
      "
      >

        {/* Header */}

        <Header
          score={score}
          combo={combo}
          bestScore={bestScore}
          restartGame={restartGame}
        />

        {/* ============================= */}
        {/* Content */}
        {/* ============================= */}

        <div
  className="
    mt-8
    grid
    grid-cols-1
    lg:grid-cols-[minmax(0,1fr)_340px]
    gap-8
    items-start
  "
>

          {/* ================================= */}
          {/* LEFT */}
          {/* ================================= */}

         <div
  className="
    flex
    justify-center
    w-full
  "
>

            <Board

              boardRef={boardRef}

              board={board}

              draggingPiece={draggingPiece}

              hoverCell={hoverCell}

              ghostValid={ghostValid}

              canPlace={canPlace}

            />

          </div>

          {/* ================================= */}
          {/* RIGHT */}
          {/* ================================= */}

          <div
            className="
            flex
            flex-col
            gap-8
          "
          >
                      {/* ================================= */}
            {/* Next Pieces */}
            {/* ================================= */}

            <PieceTray
              pieces={pieces}
              draggingPiece={draggingPiece}
              startDrag={startDrag}
            />

            {/* ================================= */}
            {/* Help Card */}
            {/* ================================= */}

            <div
              className="
                rounded-[28px]
                border
                border-cyan-500/20
                bg-[#0A1222]/90
                backdrop-blur-xl
                p-6
                shadow-[0_0_40px_rgba(0,255,255,.08)]
              "
            >
              <h2
                className="
                  text-xl
                  font-bold
                  text-cyan-300
                "
              >
                How To Play
              </h2>

              <div
                className="
                  mt-5
                  space-y-4
                  text-gray-300
                  leading-7
                "
              >
                <p>
                  🎯 Drag one of the blocks onto the board.
                </p>

                <p>
                  ✨ Fill complete rows or columns to clear them.
                </p>

                <p>
                  🔥 Keep clearing lines to build your combo.
                </p>

                <p>
                  🏆 Survive as long as possible and beat your best score.
                </p>
              </div>
            </div>

            {/* ================================= */}
            {/* Live Stats */}
            {/* ================================= */}

            <div
              className="
                rounded-[28px]
                border
                border-cyan-500/20
                bg-[#0A1222]/90
                backdrop-blur-xl
                p-6
                shadow-[0_0_40px_rgba(0,255,255,.08)]
              "
            >
              <h2
                className="
                  text-xl
                  font-bold
                  text-cyan-300
                "
              >
                Live Statistics
              </h2>

              <div className="mt-6 space-y-5">

                <div className="flex justify-between">

                  <span className="text-gray-400">
                    Available Pieces
                  </span>

                  <span className="font-bold">
                    {pieces.length}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-400">
                    Combo
                  </span>

                  <span className="font-bold text-orange-400">
                    x{combo}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-400">
                    Current Score
                  </span>

                  <span className="font-bold text-cyan-300">
                    {score}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-400">
                    Best Score
                  </span>

                  <span className="font-bold text-yellow-400">
                    {bestScore}
                  </span>

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ================================= */}
      {/* Floating Drag Piece */}
      {/* ================================= */}

      <DragLayer
        draggingPiece={draggingPiece}
        dragPosition={dragPosition}
      />

      {/* ================================= */}
      {/* Game Over */}
      {/* ================================= */}

      <GameOverModal
        open={gameOver}
        score={score}
        bestScore={bestScore}
        restartGame={restartGame}
      />

    </div>

  );

}