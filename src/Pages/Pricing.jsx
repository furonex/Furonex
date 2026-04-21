import { motion } from "motion/react";
import { Check } from "lucide-react";

const Pricing = ({ setShowPopup }) => {

  // 🔹 Individual Services
  const services = [
    {
      name: "Website Development",
      price: "₹4,999",
      features: [
        "1–5 Page Website",
        "Responsive Design",
        "Basic SEO",
        "Fast Delivery",
      ],
      color: "border-blue-500",
      glow: "hover:shadow-[0_0_30px_rgba(47,128,237,0.4)]"
    },
    {
      name: "SEO Optimization",
      price: "₹5,999 / month",
      features: [
        "Keyword Research",
        "On-page SEO",
        "Technical Fixes",
        "Monthly Reports",
      ],
      color: "border-green-500",
      glow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]"
    },
    {
      name: "Social Media Marketing",
      price: "₹3,999 / month",
      features: [
        "Content Planning",
        "Post Design",
        "Account Handling",
        "Growth Strategy",
      ],
      color: "border-pink-500",
      glow: "hover:shadow-[0_0_30px_rgba(255,120,180,0.35)]"
    },
    {
      name: "Paid Ads (PPC)",
      price: "₹6,999 / month",
      features: [
        "Google/Facebook Ads",
        "Campaign Setup",
        "Targeting Strategy",
        "Performance Tracking",
      ],
      color: "border-yellow-500",
      glow: "hover:shadow-[0_0_30px_rgba(250,204,21,0.4)]"
    },
  ];

  // 🔥 Bundle Plan (High Conversion)
  const bundle = {
    name: "Growth Bundle 🚀",
    price: "₹14,999 / month",
    features: [
      "Website Development",
      "Complete SEO",
      "Social Media Management",
      "Paid Ads Setup",
      "Priority Support",
    ],
  };

  const stars = Array.from({ length: 20 });

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
          Our Pricing
        </h2>
        <p className="text-gray-400">
          Flexible plans for every stage of your business
        </p>
      </div>

      {/* 🔹 SERVICES GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 mb-20 relative z-10">

        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`bg-[#111827] p-6 rounded-xl border-2 ${service.color} ${service.glow}`}
          >
            <h3 className="text-lg font-bold mb-3">{service.name}</h3>

            <div className="text-xl font-bold mb-4 text-[#2F80ED]">
              {service.price}
            </div>

            <ul className="space-y-2 mb-6 text-sm">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <Check size={14} className="text-green-400" />
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={() => setShowPopup(true)}
              className="w-full bg-[#2F80ED] py-2 rounded-lg text-sm"
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>

      {/* 🔥 BUNDLE PLAN */}
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-[#1a2a4a] to-[#0A0F1C] p-10 rounded-2xl border border-[#2F80ED] shadow-[0_0_40px_rgba(47,128,237,0.3)] text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            {bundle.name}
          </h3>

          <div className="text-4xl font-bold text-[#2F80ED] mb-6">
            {bundle.price}
          </div>

          <ul className="space-y-3 mb-8">
            {bundle.features.map((f, i) => (
              <li key={i} className="flex justify-center items-center gap-2 text-gray-300">
                <Check size={16} className="text-green-400" />
                {f}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setShowPopup(true)}
            className="bg-[#2F80ED] px-8 py-3 rounded-lg font-semibold hover:bg-blue-600"
          >
            Get Full Package
          </button>

          <p className="text-sm text-gray-400 mt-4">
            Best value for growing businesses 🚀
          </p>
        </motion.div>
      </div>

    </section>
  );
};

export default Pricing;