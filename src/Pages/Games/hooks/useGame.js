import { useEffect, useState } from "react";

import {
  createBoard,
  canPlacePiece,
  placePiece,
  clearCompleted,
  calculateScore,
  hasValidMove,
} from "../utils";

import { generatePieces } from "../pieces";

export default function useGame() {
  // ============================
  // Board
  // ============================

  const [board, setBoard] = useState(createBoard);

  // ============================
  // Pieces
  // ============================

  const [pieces, setPieces] = useState(() =>
    generatePieces(3)
  );

  // ============================
  // Score
  // ============================

  const [score, setScore] = useState(0);

  const [combo, setCombo] = useState(0);

  const [gameOver, setGameOver] =
    useState(false);

  // ============================
  // High Score
  // ============================

  const [bestScore, setBestScore] =
    useState(() => {
      return Number(
        localStorage.getItem("blast-best") || 0
      );
    });

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);

      localStorage.setItem(
        "blast-best",
        score
      );
    }
  }, [score, bestScore]);

  // ============================
  // Restart
  // ============================

  function restartGame() {
    setBoard(createBoard());

    setPieces(generatePieces(3));

    setScore(0);

    setCombo(0);

    setGameOver(false);
  }

  // ============================
  // Place Piece
  // ============================

  function place(piece, row, col) {
    if (!canPlacePiece(board, piece, row, col)) {
      return false;
    }

    let nextBoard = placePiece(
      board,
      piece,
      row,
      col
    );

    const cleared =
      clearCompleted(nextBoard);

    nextBoard = cleared.board;

    setBoard(nextBoard);

    const gained = calculateScore(
      piece,
      cleared.clearedBlocks,
      combo
    );

    setScore((prev) => prev + gained);

    if (cleared.clearedBlocks > 0) {
      setCombo((prev) => prev + 1);
    } else {
      setCombo(0);
    }

    let remaining = pieces.filter(
      (p) => p.id !== piece.id
    );

    if (remaining.length === 0) {
      remaining = generatePieces(3);
    }

    setPieces(remaining);

    setTimeout(() => {
      if (!hasValidMove(nextBoard, remaining)) {
        setGameOver(true);
      }
    }, 10);

    return true;
  }

  // ============================
  // Helpers
  // ============================

  function canPlace(piece, row, col) {
    return canPlacePiece(
      board,
      piece,
      row,
      col
    );
  }

  return {
    board,

    pieces,

    score,

    combo,

    bestScore,

    gameOver,

    place,

    canPlace,

    restartGame,
  };
}