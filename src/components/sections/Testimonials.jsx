import React, { useMemo } from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";

const Testimonials = () => {

  const testimonials = [
    {
      name: "Chetan Vinayak",
      time: "2 months ago",
      text: "Furonex truly the best digital agency. Professional team with effective strategies and great results.",
    },
    {
      name: "Arpit Kumar",
      time: "2 months ago",
      text: "Looking for digital marketing? Furonex is the best choice. Expert team and amazing results.",
    },
    {
      name: "Nitigya Batra",
      time: "3 months ago",
      text: "The team is very talented and provides great guidance. Highly recommended for businesses.",
    },
    {
      name: "Ravi Pratap",
      time: "1 months ago",
      text: "Hands down the best digital agency. Their strategies helped us grow fast.",
    },
  ];

  const starsBg = useMemo(() => {
    return Array.from({ length: 15 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 2 + Math.random() * 2,
    }));
  }, []);

  return (
    <section className="relative bg-[#0A0F1C] py-24 px-4 text-white overflow-hidden">

      {/* ⭐ Background */}
      {starsBg.map((star, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
          style={{ top: star.top, left: star.left }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: star.duration, repeat: Infinity }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TOP TEXT */}
        <div className="text-center mb-16">
          <p className="text-[#2F80ED] text-sm mb-3">Feedback</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What People Think About Us?
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-sm leading-relaxed">
            Businesses trust Furonex for building high-performing websites and delivering 
            result-driven marketing strategies. We focus on growth, performance, and long-term success.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid md:grid-cols-[250px_1fr] gap-8 items-start">

          {/* LEFT - RATING */}
          <div className="flex flex-col md:ml-10 items-center md:items-start text-center md:text-left">

            <h3 className="text-lg font-semibold mb-2">EXCELLENT</h3>

            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <p className="text-gray-400 text-sm mb-2">
              Based on <span className="text-white font-semibold">20 reviews</span>
            </p>

            <p className="text-[#2F80ED] font-semibold text-lg">Google</p>

          </div>

          {/* RIGHT - REVIEWS */}
          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">

            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[260px] max-w-[260px]
                bg-[#111827]/80 backdrop-blur-md
                border border-gray-700 rounded-xl p-5
                hover:border-[#2F80ED]
                hover:shadow-[0_0_20px_rgba(47,128,237,0.3)]
                transition-all duration-300"
              >

                {/* USER */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#2F80ED]/20 flex items-center justify-center font-semibold text-[#2F80ED]">
                    {t.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold">{t.name}</h4>
                    <p className="text-xs text-gray-500">{t.time}</p>
                  </div>
                </div>

                {/* STARS */}
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* TEXT */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t.text}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;