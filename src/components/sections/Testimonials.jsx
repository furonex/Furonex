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

  const stars = useMemo(() => {
    return Array.from({ length: 20 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 2 + Math.random() * 2,
    }));
  }, []);

  return (
    <section className="relative bg-[#0A0F1C] py-20 px-4 md:px-6 text-white overflow-hidden">

      {/* ⭐ Background */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
          style={{ top: star.top, left: star.left }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: star.duration, repeat: Infinity }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Real feedback from businesses we’ve worked with. We focus on delivering results,
            not just promises.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#111827] to-[#0A0F1C]
              border border-gray-700 rounded-2xl p-6
              hover:border-[#2F80ED]
              hover:shadow-[0_0_25px_rgba(47,128,237,0.25)]
              transition-all duration-300 flex flex-col justify-between"
            >

              {/* ⭐ Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                “{t.text}”
              </p>

              {/* User */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-[#2F80ED]/20 flex items-center justify-center font-semibold text-[#2F80ED]">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{t.name}</h4>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;