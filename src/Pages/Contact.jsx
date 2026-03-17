import { motion } from "motion/react";
import { useState } from "react";

const Contact = () => {

  const stars = Array.from({ length: 15 });

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const phone = "919911228912"; // ← your WhatsApp number

    const text = `Hello Furonex,%0A
Name: ${form.name}%0A
Email: ${form.email}%0A
Message: ${form.message}`;

    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, "_blank");
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
          Contact Us
        </h2>
        <p className="text-gray-400">
          Let’s build something amazing together 🚀
        </p>
      </div>

      {/* Form */}
      <div className="max-w-xl mx-auto bg-[#111827] p-8 rounded-2xl border border-gray-800 relative z-10">

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

      </div>
    </section>
  );
};

export default Contact;