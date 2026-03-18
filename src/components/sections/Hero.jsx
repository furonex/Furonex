import { motion } from 'motion/react'
import React from 'react'
import astronaut from "../../assets/astronaut.png"
import cloud from "../../assets/cloud.png"

const Cloud = ({ text, top, duration }) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center"
      style={{ top }}
      animate={{ x: ["110vw", "-120vw"] }}
      transition={{ repeat: Infinity, duration, ease: "linear" }}
    >
      <div className="relative flex items-center justify-center blur-[1.5px]">

        {/* cloud image */}
        <img
          src={cloud}
          alt="cloud"
          className="w-52 md:w-44 opacity-70 object-contain"
        />

        {/* text */}
        <span className="absolute 
  text-white 
  font-semibold 
  tracking-wide 
  text-[10px] md:text-sm
  text-center
  px-3
  max-w-[80%]
  leading-tight
  break-words">
          {text}
        </span>

      </div>
    </motion.div>
  );
};

const Hero = () => {

  const stars = Array.from({ length: 20 });

  return (
    <section className="relative h-screen bg-[#0A0F1C] overflow-hidden flex items-center justify-center">

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
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Clouds */}
      <Cloud text="Website Development" top="90px" duration={30} />
      <Cloud text="SEO" top="200px" duration={40} />
      <Cloud text="SMO" top="40px" duration={45} />
      <Cloud text="Digital Marketing" top="360px" duration={55} />

      {/* Astronaut */}
      <motion.img
        src={astronaut}
        alt="astronaut"
        className="absolute right-10 md:right-20 bottom-10 md:bottom-20 w-20 md:w-28"
        animate={{
          y: [-10, 10, -10],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center content */}
      <div className="relative flex flex-col items-center">

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl md:text-5xl font-bold text-center mb-10"
        >
          Connecting Ideas with Technology
        </motion.h1>

        {/* Moon */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="relative w-72 h-72 rounded-full 
  bg-gradient-to-br from-gray-100 to-gray-300
  shadow-[0_0_120px_rgba(47,128,237,0.8)] overflow-hidden"
        >

          {/* Moon Craters */}
          <div className="absolute w-10 h-10 bg-gray-400/40 rounded-full top-10 left-16 blur-[1px]" />
          <div className="absolute w-8 h-8 bg-gray-500/30 rounded-full top-24 right-20 blur-[1px]" />
          <div className="absolute w-6 h-6 bg-gray-500/30 rounded-full bottom-20 left-20 blur-[1px]" />
          <div className="absolute w-12 h-12 bg-gray-400/30 rounded-full bottom-10 right-16 blur-[1px]" />
          <div className="absolute w-7 h-7 bg-gray-500/30 rounded-full top-36 left-32 blur-[1px]" />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero