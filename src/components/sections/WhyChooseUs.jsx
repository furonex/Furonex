import { motion } from "motion/react";

const WhyChooseUs = () => {

  const stars = Array.from({ length: 15 });

  const features = [
    {
      title: "Modern & Scalable Solutions",
      desc: "We build fast, responsive, and scalable websites designed for long-term growth."
    },
    {
      title: "Client-Focused Approach",
      desc: "We understand your business needs and deliver solutions tailored to your goals."
    },
    {
      title: "End-to-End Services",
      desc: "From design to development and marketing, we handle everything in one place."
    },
    {
      title: "Reliable & Transparent",
      desc: "Clear communication, timely delivery, and no hidden surprises."
    },
    {
      title: "Performance Driven",
      desc: "Our focus is not just design, but results — speed, SEO, and user experience."
    },
    {
      title: "Affordable for Startups",
      desc: "High-quality solutions at pricing that works for growing businesses."
    }
  ];

  return (
    <section className="relative bg-[#0A0F1C] py-28 px-6 text-white overflow-hidden">

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

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-400">
          We don’t just build websites — we build solutions that grow your business.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">

        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-[#111827] p-6 rounded-2xl border-[3px] border-blue-800
            hover:border-[#2F80ED] hover:shadow-[0_0_25px_rgba(47,128,237,0.4)] 
            transition"
          >
            <h3 className="text-lg font-semibold mb-3 text-[#2F80ED]">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default WhyChooseUs;