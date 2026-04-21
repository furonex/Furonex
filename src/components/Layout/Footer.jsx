import { motion } from "motion/react";
import { Instagram, Linkedin, Youtube, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

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
        <h1 className="text-outline text-[60px] md:text-[160px] font-extrabold tracking-wider
          bg-gradient-to-b from-transparent via-[#2F80ED]/20 to-[#2F80ED]
          bg-clip-text text-transparent opacity-40
          drop-shadow-[0_0_40px_rgba(47,128,237,0.4)]">
          FURONEX
        </h1>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-10 mt-6 md:mt-[105px]">

        {/* 1️⃣ Brand */}
        <div className="ml-7">
          <h2 className="text-2xl font-bold text-[#2F80ED] mb-4">
            Furonex
          </h2>

          <p className="text-gray-400 text-sm mb-6 leading-relaxed text-justify max-w-[320px]">
  Furonex is a results-driven digital agency helping startups and businesses 
  build high-performance websites, scalable web applications, and strong 
  online presence. From UI/UX design to full-stack development and digital 
  growth, we deliver solutions that are fast, modern, and conversion-focused.
</p>

          {/* Social Icons */}
          <div className="flex gap-4">

  {/* Instagram */}
  <a href="https://www.instagram.com/furonex_?igsh=bGliOWI0Yzk0MTZq" target="_blank">
    <motion.div
      whileHover={{ scale: 1.2 }}
      className="p-2 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 
                 shadow-md hover:shadow-[0_0_15px_rgba(255,80,120,0.8)] transition-all"
    >
      <Instagram className="text-white" size={18} />
    </motion.div>
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/company/furonex/" target="_blank">
    <motion.div
      whileHover={{ scale: 1.2 }}
      className="p-2 rounded-full bg-[#0077B5] 
                 shadow-md hover:shadow-[0_0_15px_rgba(0,119,181,0.8)] transition-all"
    >
      <Linkedin className="text-white" size={18} />
    </motion.div>
  </a>

  {/* YouTube */}
  <a href="https://youtube.com/@furonex?si=N44oUj6OfAEMZ3E-" target="_blank">
    <motion.div
      whileHover={{ scale: 1.2 }}
      className="p-2 rounded-full bg-[#FF0000] 
                 shadow-md hover:shadow-[0_0_15px_rgba(255,0,0,0.8)] transition-all"
    >
      <Youtube className="text-white" size={18} />
    </motion.div>
  </a>

  {/* Facebook */}
  <motion.div
    whileHover={{ scale: 1.2 }}
    className="p-2 rounded-full bg-[#1877F2] 
               shadow-md hover:shadow-[0_0_15px_rgba(24,119,242,0.8)] transition-all cursor-pointer"
  >
    <Facebook className="text-white" size={18} />
  </motion.div>

</div>
        </div>

        {/* 2️⃣ Navigation */}
        <div className="ml-[140px]">
          <h3 className="font-semibold mb-4">Pages</h3>

          <ul className="space-y-2 text-gray-400 text-sm">

            <li>
              <Link to="/" className="hover:text-white transition">Home</Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-white transition">Services</Link>
            </li>

            <li>
              <Link to="/portfolio" className="hover:text-white transition">Portfolio</Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-white transition">About</Link>
            </li>

            <li>
              <Link to="/pricing" className="hover:text-white transition">Pricing</Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-white transition">Contact</Link>
            </li>

            <li>
              <Link to="/game" className="hover:text-white transition">Game</Link>
            </li>

          </ul>
        </div>

        {/* 3️⃣ Location Map */}
        <div>
          <h3 className="font-semibold mb-4">Our Location</h3>

          <a
            href="https://www.google.com/maps?q=Ghaziabad+India"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-[#111827] rounded-xl border border-gray-800 overflow-hidden cursor-pointer"
            >
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.0217569799673!2d77.40548456953432!3d28.68704317496805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf05f58940151%3A0xf4a99c8a8af4c54d!2sExcel%20School!5e0!3m2!1sen!2sus!4v1773942591684!5m2!1sen!2sus"
                className="w-full h-40 border-0"
                loading="lazy"
              />

              <div className="p-3 text-sm text-gray-400">
                📍 Ghaziabad, India
                <span className="text-[#2F80ED] block text-xs mt-1">
                  Open in Google Maps →
                </span>
              </div>
            </motion.div>
          </a>
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