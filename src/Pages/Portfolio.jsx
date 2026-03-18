import { motion } from "motion/react";

const Portfolio = () => {

  const stars = Array.from({ length: 20 });

  return (
    <section className="relative min-h-screen bg-[#0A0F1C] flex flex-col items-center justify-center text-white px-6 overflow-hidden">

      {/* Stars */}
      {stars.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Portfolio
        </h1>

        {/* Coming Soon */}
        <p className="text-gray-400 text-lg mb-6">
          Our work is on the way 🚀
        </p>

        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[#2F80ED] text-2xl font-semibold"
        >
          Coming Soon...
        </motion.div>

      </motion.div>

    </section>
  );
};

export default Portfolio;