import { useCallback, useEffect, useRef, useState } from "react";

const BOARD_SIZE = 8;

export default function useDrag(onDrop) {
  const boardRef = useRef(null);

  const [draggingPiece, setDraggingPiece] = useState(null);

  const [dragPosition, setDragPosition] = useState({
    x: 0,
    y: 0,
  });

  const [hoverCell, setHoverCell] = useState(null);

  const draggingRef = useRef(null);

  // ------------------------------------
  // Get Pointer Position
  // ------------------------------------

  const getPoint = (e) => {
    return {
      x: e.clientX,
      y: e.clientY,
    };
  };

  // ------------------------------------
  // Start Drag
  // ------------------------------------

  const startDrag = useCallback((piece, e) => {
    e.preventDefault();

    draggingRef.current = piece;

    setDraggingPiece(piece);

    const point = getPoint(e);

    setDragPosition({
      x: point.x,
      y: point.y,
    });
  }, []);

  // ------------------------------------
  // Pointer Move
  // ------------------------------------

  const handlePointerMove = useCallback(
    (e) => {
      if (!draggingRef.current) return;

      const point = getPoint(e);

      setDragPosition({
        x: point.x,
        y: point.y,
      });

      if (!boardRef.current) return;

      const rect =
        boardRef.current.getBoundingClientRect();

      if (
        point.x < rect.left ||
        point.x > rect.right ||
        point.y < rect.top ||
        point.y > rect.bottom
      ) {
        setHoverCell(null);
        return;
      }

      const cellWidth = rect.width / BOARD_SIZE;
      const cellHeight = rect.height / BOARD_SIZE;

      const col = Math.floor(
        (point.x - rect.left) / cellWidth
      );

      const row = Math.floor(
        (point.y - rect.top) / cellHeight
      );

      setHoverCell({
        row,
        col,
      });
    },
    []
  );

  // ------------------------------------
  // Pointer Up
  // ------------------------------------

  const handlePointerUp = useCallback(() => {
    if (
      draggingRef.current &&
      hoverCell
    ) {
      onDrop(
        draggingRef.current,
        hoverCell.row,
        hoverCell.col
      );
    }

    draggingRef.current = null;

    setDraggingPiece(null);

    setHoverCell(null);
  }, [hoverCell, onDrop]);

  // ------------------------------------
  // Events
  // ------------------------------------

  useEffect(() => {
    window.addEventListener(
      "pointermove",
      handlePointerMove
    );

    window.addEventListener(
      "pointerup",
      handlePointerUp
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "pointerup",
        handlePointerUp
      );
    };
  }, [
    handlePointerMove,
    handlePointerUp,
  ]);

  return {
    boardRef,

    draggingPiece,

    dragPosition,

    hoverCell,

    startDrag,
  };
}