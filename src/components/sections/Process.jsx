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
      hover:"hover:border-pink-400",
      hoverShadow:"hover:shadow-[0_0_35px_rgba(255,105,180,0.4)]"
    },
    {
      title: "Design",
      description:
        "Creating modern UI/UX designs that align with your brand and user experience.",
      icon: PencilRuler,
      hover:"hover:border-yellow-600",
       hoverShadow:"hover:shadow-[0_0_35px_rgba(255,223,100,0.4)]"
    },
    {
      title: "Development",
      description:
        "Building scalable and high performance web solutions with modern technology.",
      icon: Code,
      hover:"hover:border-green-400",
       hoverShadow:"hover:shadow-[0_0_35px_rgba(144,238,144,0.4)]"
    },
    {
      title: "Launch & Growth",
      description:
        "Deploying your product and optimizing it for marketing, SEO and growth.",
      icon: Rocket,
      hover:"hover:border-violet-400",
       hoverShadow:"hover:shadow-[0_0_35px_rgba(186,104,200,0.4)]"
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
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 z-10">

  {steps.map((step, index) => {
    const Icon = step.icon;
    const isDown = index % 2 !== 0;

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
        className={`
          flex-1
          bg-[#111827] p-6 rounded-2xl border-[3px] border-blue-800
          ${step.hover}
          ${step.hoverShadow}
          transition-all duration-300 text-center
          ${isDown ? "md:mt-16" : ""}
        `}
      >

        {/* Step Number */}
        <div className="text-[#2F80ED] font-bold text-lg mb-4">
          0{index + 1}
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-[#1F2937] rounded-xl text-[#2F80ED]">
            <Icon size={24} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-2">
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