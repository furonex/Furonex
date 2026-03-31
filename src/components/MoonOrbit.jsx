import { motion } from "motion/react";
import moon from "../assets/moon.png";
import satellite from "../assets/satellite.png";
import { memo } from "react";

const MoonOrbit = () => {
  return (
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ repeat: Infinity, duration: 6 }}
      className="relative w-72 h-72 flex items-center justify-center"
    >
      {/* Moon */}
      <img
        src={moon}
        alt="moon"
        className="w-full h-full object-contain 
        drop-shadow-[0_0_80px_rgba(47,128,237,0.6)]"
      />

      {/* Orbit */}
      <motion.div
        className="
          absolute 
          w-[115%] h-[115%]
          md:w-[120%] md:h-[120%]
          sm:w-[110%] sm:h-[110%]
          border border-white/10 rounded-full
        "
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
      >
        {/* Satellite */}
        <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2">
          <motion.img
            src={satellite}
            alt="satellite"
            className="w-8 md:w-10"
            animate={{ rotate: -360 }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "linear",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default memo(MoonOrbit);