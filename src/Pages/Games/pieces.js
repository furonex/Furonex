// src/components/Game/pieces.js

// Every block shape is represented as
// 1 = filled
// 0 = empty

export const PIECES = [
  // Single
  [[1]],

  // Two
  [[1, 1]],
  [[1], [1]],

  // Three
  [[1, 1, 1]],
  [[1], [1], [1]],

  // Four
  [[1, 1, 1, 1]],
  [[1], [1], [1], [1]],

  // Five
  [[1, 1, 1, 1, 1]],
  [[1], [1], [1], [1], [1]],

  // Square
  [
    [1, 1],
    [1, 1],
  ],

  // Rectangle
  [
    [1, 1, 1],
    [1, 1, 1],
  ],

  [
    [1, 1],
    [1, 1],
    [1, 1],
  ],

  // L
  [
    [1, 0],
    [1, 0],
    [1, 1],
  ],

  [
    [0, 1],
    [0, 1],
    [1, 1],
  ],

  [
    [1, 1],
    [1, 0],
    [1, 0],
  ],

  [
    [1, 1],
    [0, 1],
    [0, 1],
  ],

  // Large L
  [
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 1],
  ],

  [
    [0, 0, 1],
    [0, 0, 1],
    [1, 1, 1],
  ],

  // T
  [
    [1, 1, 1],
    [0, 1, 0],
  ],

  [
    [0, 1, 0],
    [1, 1, 1],
  ],

  [
    [1, 0],
    [1, 1],
    [1, 0],
  ],

  [
    [0, 1],
    [1, 1],
    [0, 1],
  ],

  // Z
  [
    [1, 1, 0],
    [0, 1, 1],
  ],

  [
    [0, 1, 1],
    [1, 1, 0],
  ],

  // Corners
  [
    [1, 1],
    [1, 0],
  ],

  [
    [1, 1],
    [0, 1],
  ],

  [
    [1, 0],
    [1, 1],
  ],

  [
    [0, 1],
    [1, 1],
  ],

  // Plus
  [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0],
  ],
];

// Premium neon colors

export const COLORS = [
  "#00E5FF",
  "#00FFA3",
  "#7C4DFF",
  "#FF4081",
  "#FFD740",
  "#FF6E40",
  "#40C4FF",
  "#64FFDA",
];

export function getRandomColor() {
  return COLORS[
    Math.floor(Math.random() * COLORS.length)
  ];
}

export function getRandomPiece() {
  const randomShape =
    PIECES[
      Math.floor(
        Math.random() * PIECES.length
      )
    ];

  return {
    id:
      typeof crypto !== "undefined" &&
      crypto.randomUUID
        ? crypto.randomUUID()
        : Date.now() +
          "-" +
          Math.random(),

    shape: randomShape,

    color: getRandomColor(),
  };
}

export function generatePieces(
  count = 3
) {
  return Array.from(
    { length: count },
    () => getRandomPiece()
  );
}