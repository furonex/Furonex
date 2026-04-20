import React, { useMemo } from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";

const Testimonials = () => {

  const testimonials = [
    {
      name: "Amit Sharma",
      role: "Startup Founder",
      text: "Furonex built our website exactly how we imagined. Clean UI, fast performance, and great support.",
    },
    {
      name: "Priya Verma",
      role: "Business Owner",
      text: "Their SEO service helped us rank on Google within weeks. Highly recommend their team!",
    },
    {
      name: "Rahul Gupta",
      role: "E-commerce Brand",
      text: "Professional work, on-time delivery, and great communication. Will definitely work again.",
    },
  ];

  // ⭐ Stars background (stable)
  const stars = useMemo(() => {
    return Array.from({ length: 20 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 2 + Math.random() * 2,
    }));
  }, []);

  return (
    <section className="relative bg-[#0A0F1C] py-20 px-6 text-white overflow-hidden">

      {/* ⭐ Background Stars */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
          style={{ top: star.top, left: star.left }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: star.duration, repeat: Infinity }}
        />
      ))}

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Real feedback from businesses we’ve worked with.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">

        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10, scale: 1.03 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-[#111827]/80 backdrop-blur-md p-6 rounded-2xl border border-gray-700
            hover:border-[#2F80ED]
            hover:shadow-[0_0_30px_rgba(47,128,237,0.4)]
            transition-all duration-300 h-full flex flex-col justify-between"
          >

            {/* Stars Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              "{t.text}"
            </p>

            {/* Client Info */}
            <div>
              <h4 className="font-semibold">{t.name}</h4>
              <p className="text-gray-500 text-xs">{t.role}</p>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Testimonials;