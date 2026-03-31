import { motion } from "motion/react";
import { useState } from "react";

const QuotePopup = ({ isOpen, setIsOpen }) => {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    services: [],
    website: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (service) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const sendToWhatsApp = () => {
    const phone = "919911228912";

    const text = `Hello Furonex,%0A
Name: ${form.name}%0A
Phone: ${form.phone}%0A
Email: ${form.email}%0A
Services: ${form.services.join(", ")}%0A
Website: ${form.website}%0A
Message: ${form.message}`;

    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center">

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white text-black w-[95%] md:w-[700px] rounded-xl p-6 relative"
      >

        {/* Close */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-xl"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          To Request A Call Back,
          <span className="text-[#2F80ED] block">
            Enter Details Below
          </span>
        </h2>

        {/* Form */}
        <div className="space-y-3">

          <div className="grid md:grid-cols-2 gap-3">
            <input name="name" placeholder="Name" onChange={handleChange} className="input" />
            <input name="phone" placeholder="Phone Number" onChange={handleChange} className="input" />
          </div>

          <input name="email" placeholder="Email" onChange={handleChange} className="input" />

          {/* Services */}
          <div className="border p-3 rounded-lg">
            <p className="font-semibold mb-2">Select Required Services</p>

            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                "SEO",
                "SMO",
                "PPC",
                "Website Development",
                "Digital Marketing",
                "E-commerce SEO",
              ].map((service) => (
                <label key={service} className="flex gap-2">
                  <input
                    type="checkbox"
                    onChange={() => handleCheckbox(service)}
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          <input name="website" placeholder="Your website (optional)" onChange={handleChange} className="input" />
          <textarea name="message" placeholder="Message" onChange={handleChange} className="input" />

          <button
            onClick={sendToWhatsApp}
            className="bg-[#2F80ED] text-white px-5 py-3 rounded-lg w-full"
          >
            Submit Enquiry
          </button>

        </div>
      </motion.div>
    </div>
  );
};

export default QuotePopup;