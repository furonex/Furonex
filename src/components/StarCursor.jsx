import { useEffect, useState } from "react";
import { motion } from "motion/react";

const StarCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const moveTouch = (e) => {
      setPosition({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("touchmove", moveTouch);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("touchmove", moveTouch);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 10,
        y: position.y - 10,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
    >
      {/* Star */}
      <div className="relative">

        {/* Glow */}
        <div className="absolute inset-0 blur-md bg-[#fffc34] opacity-70 rounded-full" />

        {/* Star Shape */}
        <div className="text-[#fffc34] text-xl">
          ✦
        </div>

      </div>
    </motion.div>
  );
};

export default StarCursor;