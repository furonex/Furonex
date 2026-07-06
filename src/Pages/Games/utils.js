// src/components/Game/utils.js

import {
  BOARD_SIZE,
  BLOCK_SCORE,
  CLEAR_SCORE,
  COMBO_BONUS,
} from "./constants";

// ================================
// CREATE EMPTY BOARD
// ================================

export function createBoard() {
  return Array.from({ length: BOARD_SIZE }, () =>
    Array(BOARD_SIZE).fill(null)
  );
}

// ================================
// CHECK IF PIECE CAN BE PLACED
// ================================

export function canPlacePiece(board, piece, row, col) {
  const { shape } = piece;

  for (let r = 0; r < shape.length; r++) {
    for (let c = 0; c < shape[r].length; c++) {

      if (!shape[r][c]) continue;

      const boardRow = row + r;
      const boardCol = col + c;

      if (
        boardRow < 0 ||
        boardCol < 0 ||
        boardRow >= BOARD_SIZE ||
        boardCol >= BOARD_SIZE
      ) {
        return false;
      }

      if (board[boardRow][boardCol] !== null) {
        return false;
      }
    }
  }

  return true;
}

// ================================
// PLACE PIECE
// ================================

export function placePiece(board, piece, row, col) {

  const newBoard = board.map(r => [...r]);

  piece.shape.forEach((line, r) => {

    line.forEach((cell, c) => {

      if (!cell) return;

      newBoard[row + r][col + c] = {
        color: piece.color,
        id: piece.id
      };

    });

  });

  return newBoard;
}

// ================================
// FIND COMPLETED ROWS
// ================================

export function getCompletedRows(board) {

  const rows = [];

  for (let r = 0; r < BOARD_SIZE; r++) {

    let full = true;

    for (let c = 0; c < BOARD_SIZE; c++) {

      if (!board[r][c]) {

        full = false;
        break;

      }

    }

    if (full) rows.push(r);

  }

  return rows;
}

// ================================
// FIND COMPLETED COLUMNS
// ================================

export function getCompletedCols(board) {

  const cols = [];

  for (let c = 0; c < BOARD_SIZE; c++) {

    let full = true;

    for (let r = 0; r < BOARD_SIZE; r++) {

      if (!board[r][c]) {

        full = false;
        break;

      }

    }

    if (full) cols.push(c);

  }

  return cols;
}

// ================================
// CLEAR COMPLETED LINES
// ================================

export function clearCompleted(board) {

  const rows = getCompletedRows(board);

  const cols = getCompletedCols(board);

  const newBoard = board.map(r => [...r]);

  rows.forEach(row => {

    for (let c = 0; c < BOARD_SIZE; c++) {

      newBoard[row][c] = null;

    }

  });

  cols.forEach(col => {

    for (let r = 0; r < BOARD_SIZE; r++) {

      newBoard[r][col] = null;

    }

  });

  return {

    board: newBoard,

    rows,

    cols,

    clearedBlocks:
      rows.length * BOARD_SIZE +
      cols.length * BOARD_SIZE

  };

}

// ================================
// SCORE
// ================================

export function calculateScore(
  piece,
  clearedBlocks,
  combo
) {

  const pieceBlocks =
    piece.shape.flat().filter(Boolean).length;

 let score = pieceBlocks * BLOCK_SCORE;

score += clearedBlocks * CLEAR_SCORE;

if (combo > 0) {
  score += combo * COMBO_BONUS;
}

  return score;

}

// ================================
// GHOST PREVIEW
// ================================

export function getGhostCells(piece, row, col) {

  const cells = [];

  piece.shape.forEach((line, r) => {

    line.forEach((cell, c) => {

      if (!cell) return;

      cells.push({

        row: row + r,

        col: col + c

      });

    });

  });

  return cells;

}

// ================================
// CHECK GAME OVER
// ================================

export function hasValidMove(board, pieces) {

  for (const piece of pieces) {

    for (let r = 0; r < BOARD_SIZE; r++) {

      for (let c = 0; c < BOARD_SIZE; c++) {

        if (canPlacePiece(board, piece, r, c)) {

          return true;

        }

      }

    }

  }

  return false;

}

// ================================
// COUNT BLOCKS INSIDE PIECE
// ================================

export function countPieceBlocks(piece) {

  return piece.shape
    .flat()
    .filter(Boolean).length;

}