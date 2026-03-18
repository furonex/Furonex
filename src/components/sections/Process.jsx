import { motion } from "motion/react";
import { Search, PencilRuler, Code, Rocket } from "lucide-react";

const Process = () => {

  const stars = Array.from({ length: 18 });

  const steps = [
    {
      title: "Discovery",
      description:
        "We analyze your business, goals and audience to build the right strategy.",
      icon: Search,
    },
    {
      title: "Design",
      description:
        "Creating modern UI/UX designs that align with your brand and user experience.",
      icon: PencilRuler,
    },
    {
      title: "Development",
      description:
        "Building scalable and high performance web solutions with modern technology.",
      icon: Code,
    },
    {
      title: "Launch & Growth",
      description:
        "Deploying your product and optimizing it for marketing, SEO and growth.",
      icon: Rocket,
    },
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
      <div className="max-w-6xl mx-auto text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our Process
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          A streamlined workflow that transforms ideas into powerful
          digital solutions.
        </p>
      </div>

      {/* Steps */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-4 gap-10 z-10">

        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-[#111827] p-8 rounded-2xl border-[5px] border-gray-800
              hover:border-[#2F80ED]
              hover:shadow-[0_0_35px_rgba(47,128,237,0.4)]
              transition-all duration-300 text-center"
            >

              {/* Step Number */}
              <div className="text-[#2F80ED] font-bold text-lg mb-4">
                0{index + 1}
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#1F2937] rounded-xl text-[#2F80ED]">
                  <Icon size={28} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm">
                {step.description}
              </p>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Process;