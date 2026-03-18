import { motion } from "motion/react";
import { Instagram, Linkedin, Youtube, Facebook } from "lucide-react";

const Footer = () => {

  const stars = Array.from({ length: 15 });

  return (
    <footer className="relative bg-[#0A0F1C] text-white px-6 pt-32 pb-10 overflow-hidden">

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

      {/* BIG BACKGROUND TEXT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none select-none">

        <h1 className=" text-outline
    text-[60px] md:text-[160px] font-extrabold tracking-wider
    bg-gradient-to-b 
    from-transparent 
    via-[#2F80ED]/20 
    to-[#2F80ED]
    bg-clip-text 
    text-transparent  opacity-40
    drop-shadow-[0_0_40px_rgba(47,128,237,0.4)]
  ">
          FURONEX
        </h1>

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-10 mt-6 md:mt-[75px]">

        {/* 1️⃣ Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[#2F80ED] mb-4">
            Furonex
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            Connecting ideas with technology. Building modern digital solutions for growing businesses.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <Instagram className="cursor-pointer hover:text-[#2F80ED]" />
            <Linkedin className="cursor-pointer hover:text-[#2F80ED]" />
            <Youtube className="cursor-pointer hover:text-[#2F80ED]" />
            <Facebook className="cursor-pointer hover:text-[#2F80ED]" />
          </div>
        </div>

        {/* 2️⃣ Navigation */}
        <div>
          <h3 className="font-semibold mb-4">Pages</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Portfolio</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* 3️⃣ Instagram Feed */}
        <div>
          <h3 className="font-semibold mb-4">Latest Update</h3>

          <div className="bg-[#111827] p-4 rounded-xl border border-gray-800 text-sm text-gray-400">
            🚀 New project launched!
            <br />
            <a
              href="#"
              className="text-[#2F80ED] text-xs underline"
              target="_blank"
            >
              View on Instagram
            </a>
          </div>
        </div>

        {/* 4️⃣ Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Newsletter</h3>

          <p className="text-gray-400 text-sm mb-4">
            Get updates about our latest work and offers.
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-[#1F2937] text-white outline-none mb-3"
          />

          <button className="w-full bg-[#2F80ED] hover:bg-blue-600 py-2 rounded-lg">
            Subscribe
          </button>

          <p className="text-gray-500 text-xs mt-2">
            No spam. Only valuable updates.
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Furonex Technologies. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;