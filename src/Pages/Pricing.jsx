import { motion } from "motion/react";
import { Check } from "lucide-react";

const Pricing = () => {

  const plans = [
    {
      name: "Basic",
      price: "₹4,999",
      features: [
        "1 Page Website",
        "Responsive Design",
        "Basic SEO",
        "1 Revision",
      ],
      border: "border-blue-500",
      glow: "hover:shadow-[0_0_35px_rgba(47,128,237,0.4)]"
    },
    {
      name: "Starter",
      price: "₹9,999",
      features: [
        "Up to 5 Pages",
        "SEO Optimization",
        "Fast Performance",
        "3 Revisions",
      ],
      border: "border-purple-500",
      glow: "hover:shadow-[0_0_35px_rgba(140,120,255,0.4)]",
      highlight: true
    },
    {
      name: "GrowthX",
      price: "₹19,999",
      features: [
        "Full Website",
        "Advanced SEO",
        "Marketing Setup",
        "Unlimited Revisions",
      ],
      border: "border-pink-500",
      glow: "hover:shadow-[0_0_35px_rgba(255,120,180,0.35)]"
    },
  ];

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
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Pricing Plans
        </h2>
        <p className="text-gray-400">
          Choose the perfect plan for your business growth 🚀
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">

        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className={`
              bg-[#111827] p-8 rounded-2xl border-2 ${plan.border}
              ${plan.glow}
              transition-all duration-300
              ${plan.highlight ? "scale-105 shadow-[0_0_40px_rgba(140,120,255,0.3)]" : ""}
            `}
          >

            {/* Plan Name */}
            <h3 className="text-2xl font-bold mb-4 text-center">
              {plan.name}
            </h3>

            {/* Price */}
            <div className="text-center text-3xl font-bold mb-6 text-[#2F80ED]">
              {plan.price}
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <Check size={16} className="text-green-400" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="w-full bg-[#2F80ED] hover:bg-blue-600 py-2 rounded-lg font-semibold">
              Get Started
            </button>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Pricing;