import { motion } from "motion/react";
import robot from "../assets/robot.png"; // reuse or use different graphic
import { Helmet } from "react-helmet";

const About = () => {

  const stars = Array.from({ length: 20 });

  return (
    <>
    <Helmet>
  <title>About Furonex Technologies</title>
  <meta name="description" content="Learn about Furonex and how we help businesses grow with technology." />
</Helmet>
    <section className="relative bg-[#0A0F1C] text-white py-28 px-6 overflow-hidden">

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
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          About Furonex
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We are a technology-driven team focused on building modern digital solutions 
          that help businesses grow and stand out in a competitive world.
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT - TEXT */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#2F80ED]">
            Who We Are
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Furonex Technologies is built with a vision to connect ideas with technology.
            We specialize in creating websites, digital experiences, and marketing solutions 
            that are not only visually appealing but also performance-driven.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-[#2F80ED]">
            Our Approach
          </h3>
          <p className="text-gray-400 leading-relaxed">
            We focus on understanding your business first, then delivering solutions 
            that align with your goals. Our approach is simple — build fast, scalable, 
            and meaningful digital products.
          </p>
        </motion.div>

        {/* RIGHT - GRAPHIC */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.img
            src={robot}
            alt="tech graphic"
            className="w-60 md:w-80 drop-shadow-[0_0_50px_rgba(47,128,237,0.4)]"
            animate={{
              y: [-15, 15, -15],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

      </div>

      {/* VALUES SECTION */}
      <div className="max-w-6xl mx-auto mt-24 grid md:grid-cols-3 gap-8 relative z-10">

        {[
          {
            title: "Innovation",
            desc: "We embrace modern technologies to create forward-thinking solutions."
          },
          {
            title: "Quality",
            desc: "We ensure every project meets high standards of performance and design."
          },
          {
            title: "Trust",
            desc: "We build long-term relationships through transparency and reliability."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#111827] p-6 rounded-2xl border-[3px] border-blue-800
            hover:border-[#2F80ED] hover:shadow-[0_0_25px_rgba(47,128,237,0.3)] transition"
          >
            <h3 className="text-lg font-semibold mb-2 text-[#2F80ED]">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
    </>
  );
};

export default About;