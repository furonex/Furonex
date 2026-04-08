import React, { useMemo } from "react";
import { motion } from "motion/react";
import { Code, Search, Share2, BarChart } from "lucide-react";
import { Helmet } from "react-helmet";
import heroImg from "../../assets/services.png"; // ✅ PNG added

const Services = () => {

  const services = [
    {
      title: "Website Development",
      description:
        "Modern, responsive and scalable websites tailored for your business growth.",
      icon: Code,
      border: "border-green-400"
    },
    {
      title: "SEO Optimization",
      description:
        "Improve search rankings and organic traffic with strategic SEO solutions.",
      icon: Search,
      border: "border-yellow-500"
    },
    {
      title: "SMO",
      description:
        "Boost your brand presence across social media platforms and increase engagement.",
      icon: Share2,
      border: "border-pink-500"
    },
    {
      title: "Digital Marketing",
      description:
        "Data-driven marketing campaigns to grow your online visibility and conversions.",
      icon: BarChart,
      border: "border-violet-500"
    },
  ];

  // ⭐ Stable Stars
  const stars = useMemo(() => {
    return Array.from({ length: 25 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 2 + Math.random() * 2,
    }));
  }, []);

  return (
    <>
      <Helmet>
        <title>Website Development & SEO Services | Furonex</title>
        <meta name="description" content="Explore our website development, SEO, and digital marketing services." />
      </Helmet>

      <section className="relative bg-[#0A0F1C] py-20 px-6 text-white overflow-hidden">

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

        {/* ================= HERO / INTRO ================= */}
        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* LEFT TEXT */}
          <div>
            <span className="inline-block px-4 py-1 text-sm bg-cyan-500/20 text-cyan-400 rounded-full mb-4">
              Our Mission
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Building Modern Digital Solutions for Growing Businesses
            </h2>

            <p className="text-gray-400 leading-relaxed mb-4">
              At Furonex, we help businesses establish and grow their digital presence 
              through smart websites, performance marketing, and scalable strategies.
            </p>

            <p className="text-gray-500 text-sm">
              Currently working with startups and growing brands 🚀
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap gap-5 mt-6 text-sm">
              {["Social Media", "Google Ads", "SEO", "WEBSITE"].map((item, i) => (
                <span
                  key={i}
                  className="text-gray-400 hover:text-cyan-400 cursor-pointer transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src={heroImg}
              alt="services"
              className="w-72 md:w-96 drop-shadow-[0_0_40px_rgba(34,211,238,0.3)]"
            />
          </motion.div>
        </div>

       

        {/* ================= SERVICES GRID ================= */}
        <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Practical, scalable and modern solutions designed to help your business grow.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.03 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-[#111827] p-8 rounded-2xl border-[3px] ${service.border}
                hover:border-[#2F80ED]
                hover:shadow-[0_0_35px_rgba(47,128,237,0.4)]
                transition-all duration-300`}
              >

                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-xl bg-[#1F2937] text-[#2F80ED]">
                    <Icon size={28} />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-center">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm text-center">
                  {service.description}
                </p>

              </motion.div>
            );
          })}
        </div>

      </section>
    </>
  );
};

export default Services;