import { motion } from "motion/react";
import { useMemo } from "react";

const WhyChooseUs = () => {

  // ⭐ STATIC STARS (no jumping issue)
  const stars = useMemo(() => {
    return Array.from({ length: 15 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 2 + Math.random() * 2,
    }));
  }, []);

  const painPoints = [
    "Confusing marketing strategies with no clear direction",
    "Spending money but not getting results",
    "Low website traffic and poor conversions",
    "Outdated or slow websites affecting growth",
    "Managing multiple tools without clarity",
    "No proper digital presence or brand identity",
  ];

  const hexItems = [
    "SEO",
    "UI/UX",
    "Performance",
    "Marketing",
    "Branding",
    "Analytics",
    "Growth",
    "Automation",
  ];

  return (
    <section className="relative bg-[#0A0F1C] py-28 px-6 text-white overflow-hidden">

      {/* ⭐ Stars */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
          style={{ top: star.top, left: star.left }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: star.duration, repeat: Infinity }}
        />
      ))}

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* 🔥 LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Why Businesses <span className="text-[#2F80ED]">Trust Furonex?</span>
          </h2>

          <p className="text-gray-400 mb-6">
            We don’t follow trends — we build strategies that actually work.
            Our solutions are designed based on real business growth, not guesswork.
          </p>

          <h3 className="text-lg mb-4 text-gray-300">
            Facing these challenges?
          </h3>

          {/* ✅ Bullet Points */}
          <ul className="space-y-3 mb-8">
            {painPoints.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-400 text-sm">
                <span className="text-[#2F80ED] mt-1">✔</span>
                {item}
              </li>
            ))}
          </ul>

          <p className="text-gray-500 text-sm mb-6">
            We turn confusion into clarity and ideas into scalable digital solutions.
          </p>

          {/* CTA */}
          <button className="bg-[#2F80ED] hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition">
            Start Your Project →
          </button>
        </motion.div>

        {/* 🚀 RIGHT SIDE (HEX GRID) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center"
        >

          <div className="grid grid-cols-3 gap-4">

            {hexItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="
                  w-24 h-24 md:w-28 md:h-28
                  bg-[#111827]
                  border border-[#2F80ED]/30
                  flex items-center justify-center
                  text-center text-xs md:text-sm
                  font-semibold
                  text-white
                  clip-hex
                  shadow-[0_0_25px_rgba(47,128,237,0.3)]
                  transition
                "
              >
                {item}
              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;