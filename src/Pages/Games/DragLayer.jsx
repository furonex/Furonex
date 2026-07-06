import React from "react";

export default function DragLayer({
  draggingPiece,
  dragPosition,
}) {
  if (!draggingPiece) return null;

  const { shape, color } = draggingPiece;

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: dragPosition.x,
        top: dragPosition.y,
        transform: "translate(-50%, -50%) scale(1.08)",
      }}
    >
      <div
        className="grid gap-[6px]"
        style={{
          gridTemplateColumns: `repeat(${shape[0].length}, 42px)`,
        }}
      >
        {shape.flatMap((row, r) =>
          row.map((cell, c) => {
            if (!cell) {
              return (
                <div
                  key={`${r}-${c}`}
                  className="w-[42px] h-[42px]"
                />
              );
            }

            return (
              <div
                key={`${r}-${c}`}
                className="
                  w-[42px]
                  h-[42px]
                  rounded-xl
                  border
                  transition-all
                  duration-75
                "
                style={{
                  background: color,
                  borderColor: color,
                  boxShadow: `
                    0 0 18px ${color},
                    inset 0 0 10px rgba(255,255,255,.28)
                  `,
                }}
              >
                <div
                  className="w-full h-1/2 rounded-t-xl bg-white/20"
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}