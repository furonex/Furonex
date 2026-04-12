import React, { useState } from "react";
import { motion } from "motion/react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/WL-F.png";

const NavBar = ({ setShowPopup }) => {
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
        <Link to="/">
  <motion.img
    src={logo}
    alt="Furonex Logo"
    whileHover={{ scale: 1.05 }}
    className="h-3 sm:h-4 md:h-5 w-auto object-contain"
  />
</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-[#2F80ED]" : ""}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? "text-[#2F80ED]" : ""}>
              Services
            </NavLink>
          </li>

          <li>
             <NavLink to="/portfolio" className={({ isActive }) => isActive ? "text-[#2F80ED]" : ""}>
             Portfolio
             </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#2F80ED]" : ""}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing" className={({ isActive }) => isActive ? "text-[#2F80ED]" : ""}>
              Pricing
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#2F80ED]" : ""}>
              Contact
            </NavLink>
          </li>

         
        </ul>

        <div className="flex gap-2">
                <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  
  className="hidden md:block bg-[rgb(237,47,88)] hover:bg-red-600 px-5 py-2 rounded-lg font-semibold transition"
>
  <NavLink to="/game" className={({ isActive }) => isActive ? "text-[#061a1f]" : ""}>
              Game
            </NavLink>
</motion.button>

        {/* CTA Button */}
        <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => setShowPopup(true)}
  className="hidden md:block bg-[rgb(47,128,237)] hover:bg-blue-600 px-5 py-2 rounded-lg font-semibold transition"
>
  Get Quote
</motion.button>
</div>
       

        {/* Mobile Menu Button */}
        <div
  className="md:hidden cursor-pointer text-2xl select-none"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? "✕" : "☰"}
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
           
            
                    <button className="bg-[#ed2f2f] px-5 py-2 rounded-lg"
              >
  <Link to="/game">Game</Link>
</button>
             <button className="bg-[#2F80ED] px-5 py-2 rounded-lg"
              onClick={() => setShowPopup(true)}>
  Get Quote
</button>
           
          </ul>



        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavBar;