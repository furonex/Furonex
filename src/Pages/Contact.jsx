import { motion } from "motion/react";
import { useState } from "react";
import robot from "../assets/robot.png"; // add your robot image

const Contact = () => {

  const stars = Array.from({ length: 20 });

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const phone = "919911228912";

    const text = `Hello Furonex,%0A
Name: ${form.name}%0A
Email: ${form.email}%0A
Message: ${form.message}`;

    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

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
          className="bg-[#111827] p-8 rounded-2xl border border-gray-800 shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
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
          <motion.img
            src={robot}
            alt="robot"
            className="w-52 md:w-72"
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

          {/* Speech Bubble */}
          <motion.div
            className="mt-6 bg-[#111827] px-5 py-3 rounded-xl border border-gray-700 text-sm text-gray-300"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            👋 Hi! Let’s build something amazing together
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;