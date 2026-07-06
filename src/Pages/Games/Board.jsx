import Cell from "./Cell";

export default function Board({
  board,
  boardRef,
  draggingPiece,
  hoverCell,
  ghostValid,
}) {
  function isGhost(row, col) {
    if (!draggingPiece) return false;
    if (!hoverCell) return false;

    const shape = draggingPiece.shape;

    for (let r = 0; r < shape.length; r++) {
      for (let c = 0; c < shape[r].length; c++) {
        if (!shape[r][c]) continue;

        if (
          hoverCell.row + r === row &&
          hoverCell.col + c === col
        ) {
          return true;
        }
      }
    }

    return false;
  }

  return (
    <div
      ref={boardRef}
      className="
        relative
        select-none
      "
    >
      {/* Outer Glow */}

      <div
        className="
          absolute
          -inset-8
          rounded-[40px]
          bg-cyan-500/10
          blur-[80px]
          pointer-events-none
        "
      />

      {/* Board */}

      <div
        className="
          relative
          grid
          grid-cols-8
          gap-1
          sm:gap-2
          p-3
          sm:p-5
          rounded-[32px]
          border
          border-cyan-500/20
          bg-[#0B1324]/90
          backdrop-blur-xl
          shadow-[0_0_50px_rgba(0,255,255,.10)]
        "
      >
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div className="aspect-square">
    <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              ghost={isGhost(
                rowIndex,
                colIndex
              )}
              valid={ghostValid}
            /> </div>
          ))
        )}
      </div>
    </div>
  );
}