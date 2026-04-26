import { motion } from "motion/react";
import {
  Laptop,
  Car,
  ShoppingCart,
  Landmark,
  Heart,
  Truck,
  GraduationCap,
  Plane,
  Activity,
  Film,
  Utensils,
  Briefcase
} from "lucide-react";

const Industries = () => {

  const stars = Array.from({ length: 12 });

  const industries = [
    { name: "IT & SaaS", icon: Laptop },
    { name: "Automobile", icon: Car },
    { name: "E-commerce", icon: ShoppingCart },
    { name: "Finance & Fintech", icon: Landmark },
    { name: "Healthcare", icon: Heart },
    { name: "Logistics", icon: Truck },
    { name: "Education", icon: GraduationCap },
    { name: "Travel", icon: Plane },
    { name: "Wellness", icon: Activity },
    { name: "Entertainment", icon: Film },
    { name: "Food & Beverage", icon: Utensils },
    { name: "Consulting", icon: Briefcase },
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
        />
      ))}
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-[100px] items-center relative z-10">

  {/* LEFT = INDUSTRY CARDS */}
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 order-2 md:order-1">

    {industries.map((item, index) => {
      const Icon = item.icon;

      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          whileHover={{ scale: 1.05 }}
          className="
            bg-[#111827]/80 
            backdrop-blur-md
            p-5 
            rounded-2xl 
            border border-blue-800
            hover:border-[#2F80ED]
            hover:shadow-[0_0_25px_rgba(47,128,237,0.5)]
            transition-all duration-300
            flex flex-col items-center text-center
          "
        >

          <div className="mb-3 p-3 bg-[#1F2937] rounded-xl text-[#2F80ED]">
            <Icon size={24} />
          </div>

          <p className="text-sm font-medium text-gray-300">
            {item.name}
          </p>

        </motion.div>
      );
    })}

  </div>

  {/* RIGHT = TEXT */}
  <div className="order-1 md:order-2">
    <p className="text-sm text-[#2F80ED] mb-3 tracking-wide uppercase">
      Industries We Work For
    </p>

    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
      Helping Businesses <br />
      in All Domains
    </h2>

    <p className="text-gray-400 max-w-md leading-relaxed">
  We partner with businesses across industries to create impactful digital experiences 
  that drive real results. From conversion-focused websites to performance marketing, 
  our approach is built on strategy, data, and execution — helping you attract the right 
  audience, generate quality leads, and scale confidently.
</p>
  </div>

</div>
    </section>
  );
};

export default Industries;