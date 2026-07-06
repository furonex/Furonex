export default function Piece({
  piece,
  startDrag,
  disabled = false,
}) {
  if (!piece) return null;

  const { shape, color } = piece;

  function handlePointerDown(e) {
    if (disabled) return;

    startDrag(piece, e);
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      className={`
        inline-block
        p-3
        rounded-2xl
        transition-all
        duration-200
        select-none

        ${
          disabled
            ? "opacity-40"
            : "cursor-grab hover:scale-105 active:scale-95"
        }
      `}
    >
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: `repeat(${shape[0].length}, 32px)`,
        }}
      >
        {shape.map((row, r) =>
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
                "
                style={{
                  background: color,
                  borderColor: color,
                  boxShadow: `
                    0 0 15px ${color},
                    inset 0 0 10px rgba(255,255,255,.3)
                  `,
                }}
              >
                <div className="w-full h-1/2 bg-white/20 rounded-t-xl" />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}