import React, { useState } from "react";
import { motion } from "motion/react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const stars = Array.from({ length: 10 });

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className=" bg-[#111827] text-white sticky top-0 z-50 overflow-hidden"
    >

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
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
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-10">

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-[#2F80ED]"
        >
          Furonex
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1, color: "#2F80ED" }}
              className="cursor-pointer"
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-[#2F80ED] hover:bg-blue-600 px-5 py-2 rounded-lg font-semibold transition"
        >
          Get Quote
        </motion.button>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-[#111827] border-t border-gray-700 relative z-10"
        >
          <ul className="flex flex-col items-center py-4 space-y-4">
            {["Home", "Services", "Portfolio", "About", "Contact"].map(
              (item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.1, color: "#2F80ED" }}
                  className="cursor-pointer"
                >
                  {item}
                </motion.li>
              )
            )}
            <button className="bg-[#2F80ED] px-5 py-2 rounded-lg">
              Get Quote
            </button>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavBar;