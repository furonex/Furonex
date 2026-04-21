import { motion } from "motion/react";
import { useState } from "react";

const QuotePopup = ({ isOpen, setIsOpen }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    services: [],
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
Message: ${form.message}`;

    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center p-3 overflow-y-auto">

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-5xl bg-white rounded-xl shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-hidden"
      >

        {/* LEFT SECTION (Hidden on Mobile) */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-[#0A0F1C] to-[#1a2a4a] text-white p-6 flex-col justify-between">

          <div>
            <h2 className="text-3xl font-bold leading-tight">
              Grow Your Business
            </h2>
            <p className="mt-3 text-gray-300 text-sm">
              Get expert SEO, Website & Marketing solutions tailored for you.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur p-4 rounded-lg mt-6">
            <p className="text-sm text-gray-300">Starting From</p>
            <h3 className="text-2xl font-bold text-[#2F80ED]">
              ₹4,999
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Affordable plans for startups & businesses
            </p>
          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="w-full md:w-1/2 flex flex-col max-h-[90vh]">

          {/* HEADER */}
          <div className="flex justify-between items-center p-4 border-b bg-white sticky top-0 z-10">
            <h3 className="text-lg font-semibold">Enquire Now</h3>

            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 text-xl hover:text-black"
            >
              ✕
            </button>
          </div>

          {/* SCROLLABLE FORM */}
          <div className="p-4 overflow-y-auto flex-1 space-y-3">

            <input
              name="name"
              placeholder="Name"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#2F80ED]"
            />

            <input
              name="phone"
              placeholder="Mobile Number"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#2F80ED]"
            />

            <input
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#2F80ED]"
            />

            {/* SERVICES */}
            <div className="border rounded-lg p-3">
              <p className="text-sm font-semibold mb-2 text-gray-700">
                Select Services
              </p>

              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  "SEO",
                  "SMO",
                  "PPC",
                  "Website Development",
                  "Digital Marketing",
                  "E-commerce SEO",
                ].map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-2 cursor-pointer bg-gray-50 px-2 py-1.5 rounded-md hover:bg-gray-100"
                  >
                    <input
                      type="checkbox"
                      className="accent-[#2F80ED]"
                      onChange={() => handleCheckbox(service)}
                    />
                    <span className="text-gray-700">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows="3"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#2F80ED]"
            />

          </div>

          {/* STICKY CTA */}
          <div className="p-4 border-t bg-white">
            <button
              onClick={sendToWhatsApp}
              className="w-full bg-[#2F80ED] text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Submit Enquiry
            </button>

            <p className="text-xs text-gray-500 mt-2 text-center">
              By submitting, you agree to receive calls, WhatsApp & emails.
            </p>
          </div>

        </div>

      </motion.div>
    </div>
  );
};

export default QuotePopup;