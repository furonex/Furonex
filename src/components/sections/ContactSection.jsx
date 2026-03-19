import React from 'react'
import { motion } from "motion/react";
import { useState } from "react";
import robot from "../../assets/robot.png";


const ContactSection = () => {
  const stars = Array.from({ length: 20 });

  const [form, setForm] = useState({
    name: "",
    MobileNumber: "",
    Location: "",
    email: "",
    businessName: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const phone = "919911228912";

    const text = `Hello Furonex,%0A
Name: ${form.name}%0A
MobileNumber:${form.MobileNumber}%0A
Location:${form.Location}%0A
Email: ${form.email}%0A
BusinessName: ${form.businessName}%0A
Message: ${form.message}`;

    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  const Bubble = ({ text, className, delay = 0 }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: [0.6, 1, 0.6], y: [0, -10, 0] }}
        transition={{
          duration: 3,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute bg-[#111827] border border-[#2F80ED]/40 
      text-white text-xs md:text-sm px-4 py-2 rounded-xl 
      shadow-[0_0_15px_rgba(47,128,237,0.3)] backdrop-blur-md ${className}`}
      >
        {text}
      </motion.div>
    );
  };

  return (
    <>

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
            Let’s Talk 🚀
          </h2>
          <p className="text-gray-400">
            Have a project in mind? Let’s discuss how we can help.😄
          </p>
        </div>

        {/* Main Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">

          {/* LEFT - FORM */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-[#111827] p-4 rounded-2xl border-[3px] border-blue-800 shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              className="w-full mb-4 p-3 rounded-lg bg-[#1F2937] text-white outline-none"
            />
            <input
              type="number"
              name="MobileNumber"
              placeholder="Your Mobile Number"
              onChange={handleChange}
              className="w-full mb-4 p-3 rounded-lg bg-[#1F2937] text-white outline-none"
            />
            <input
              type="text"
              name="Location"
              placeholder="Business Location: Delhi, Noida, Greater Noida"
              onChange={handleChange}
              className="w-full mb-4 p-3 rounded-lg bg-[#1F2937] text-white outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              className="w-full mb-4 p-3 rounded-lg bg-[#1F2937] text-white outline-none"
            />
            <input
              type="text"
              name="businessName"
              placeholder="Your Business Name"
              onChange={handleChange}
              className="w-full mb-4 p-3 rounded-lg bg-[#1F2937] text-white outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              onChange={handleChange}
              className="w-full mb-6 p-3 rounded-lg bg-[#1F2937] text-white outline-none"
            />

            <button
              onClick={sendToWhatsApp}
              className="w-full bg-[#2F80ED] hover:bg-blue-600 py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </motion.div>

          {/* RIGHT - ROBOT */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center text-center"
          >

            {/* Robot Image */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex flex-col items-center justify-center text-center"
            >

              {/* Robot */}
              <motion.img
                src={robot}
                alt="robot"
                className="w-52 md:w-72 relative z-10"
                animate={{
                  y: [-10, 10, -10],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* 💬 Question Bubbles */}

              {/* Head */}
              <Bubble
                text="Need a website 💡?"
                className="-top-5 left-1/2 -translate-x-1/2 -translate-y-6"
              />

              {/* Left hand */}
              <Bubble
                text="Need SEO 🎯?"
                className="top-1/2 -left-10 md:-left-16"
                delay={0.5}
              />

              {/* Right hand */}
              <Bubble
                text="Want growth 📊?"
                className="top-1/2 -right-14 md:-right-16"
                delay={1}
              />

              {/* Bottom */}
              <Bubble
                text="Let’s build your brand 🚀"
                className="-bottom-10 translate-y-10"
                delay={1.5}
              />

            </motion.div>

            {/* Speech Bubble */}
            <motion.div
              className="mt-[80px] bg-[#111827] px-5 py-3 rounded-xl border border-gray-700 text-sm text-gray-300"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              👋 Hi! Let’s build something amazing together
            </motion.div>

          </motion.div>

        </div>
      </section>
    </>
  );
}

export default ContactSection