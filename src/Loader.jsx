import { motion } from "motion/react";
import logo from "./assets/logo.png";

const Loader = () => {

  const stars = Array.from({ length: 28 });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#141f3b] z-[999] overflow-hidden">

      {/* Stars */}
      {stars.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Orbit Container */}
      <div className="relative flex items-center justify-center">

        {/* Orbit Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          }}
          className="absolute w-40 h-40 border border-[#2F80ED]/40 rounded-full"
        >

          {/* Orbit Dot 1 */}
          <div className="absolute -top-2 left-1/2 w-3 h-3 bg-[#2F80ED] rounded-full shadow-[0_0_10px_#2F80ED]" />

          {/* Orbit Dot 2 */}
          <div className="absolute top-1/2 -left-2 w-2 h-2 bg-[#2F80ED] rounded-full shadow-[0_0_8px_#2F80ED]" />

          {/* Orbit Dot 3 */}
          <div className="absolute bottom-0 right-4 w-2 h-2 bg-[#2F80ED] rounded-full shadow-[0_0_8px_#2F80ED]" />

        </motion.div>

        {/* Logo */}
        <motion.img
          src={logo}
          alt="Furonex Logo"
          className="w-20 md:w-28 z-10 drop-shadow-[0_0_25px_rgba(47,128,237,0.8)]"
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      </div>

      {/* Loading Text */}
      <motion.p
        className="absolute bottom-24 text-gray-300 tracking-widest text-lg"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      >
        Initializing Furonex...
      </motion.p>

    </div>
  );
};

export default Loader;