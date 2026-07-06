import Piece from "./Piece";

export default function PieceTray({
  pieces,
  draggingPiece,
  startDrag,
}) {
  return (
    <div
      className="
        rounded-[32px]
        bg-[#0B1324]
        border
        border-cyan-500/20
        p-6
      "
    >
      <h2
        className="
          text-xl
          font-bold
          text-cyan-300
          mb-6
        "
      >
        Pieces
      </h2>

      <div
        className="
          flex
          justify-center
          items-end
          gap-4
sm:gap-6
          flex-wrap
        "
      >
        {pieces.map((piece) => (
          <Piece
            key={piece.id}
            piece={piece}
            startDrag={startDrag}
            disabled={
              draggingPiece?.id === piece.id
            }
          />
        ))}
      </div>
    </div>
  );
}