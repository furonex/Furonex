import { motion } from 'motion/react'
import React, { useEffect, useMemo, useState } from 'react'
import astronaut from "../../assets/astronaut.png"
import cloud from "../../assets/cloud.png"
import moon from "../../assets/moon.png"
import satellite from "../../assets/satellite.png";
import MoonOrbit from '../MoonOrbit'

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

 
  const texts = [
    "Connecting Ideas with Technology",
    "Building Digital Experiences",
    "Growing Businesses Online 🚀"
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + texts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
    }
  }, [charIndex, textIndex]);

   const stars = useMemo(() => {
  return Array.from({ length: 20 }).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: 2 + Math.random() * 3,
  }));
}, []);


  return (
    <section className="relative h-screen bg-[#0A0F1C] overflow-hidden flex items-center justify-center">

      {/* Stars */}
     {stars.map((star, i) => (
  <motion.div
    key={i}
    className="absolute w-[2px] h-[2px] bg-white rounded-full"
    style={{
      top: star.top,
      left: star.left,
    }}
    animate={{ opacity: [0.3, 1, 0.3] }}
    transition={{
      duration: star.duration,
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
          className="text-white text-3xl md:text-5xl font-bold text-center mb-[100px]"
        >
          {displayText}
          <span className="animate-pulse">|</span>
        </motion.h1>

        {/* Moon */}
        <MoonOrbit/>

      </div>

    </section>
  );
}

export default Hero