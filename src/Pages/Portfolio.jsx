import { motion } from "motion/react";

const Portfolio = () => {
  const stars = Array.from({ length: 20 });

  const projects = [
    {
      name: "MS99 Realty",
      url: "https://www.ms99realty.com/",
      border: "border-blue-500",
      glow: "hover:shadow-[0_0_35px_rgba(47,128,237,0.4)]",
    },
    {
      name: "Instant Doc Solution",
      url: "https://instantdocsolution.in/",
      border: "border-purple-500",
      glow: "hover:shadow-[0_0_35px_rgba(140,120,255,0.4)]",
    },
    {
      name: "Braventa Infra",
      url: "https://www.braventainfra.com/",
      border: "border-pink-500",
      glow: "hover:shadow-[0_0_35px_rgba(255,120,180,0.35)]",
    },
    {
      name: "Ankit Electrical",
      url: "https://ankitelectrical.com/",
      border: "border-green-500",
      glow: "hover:shadow-[0_0_35px_rgba(34,197,94,0.35)]",
    },
    {
      name: "Yuvi Driving School",
      url: "https://yuvidrivingschool.in/",
      border: "border-yellow-500",
      glow: "hover:shadow-[0_0_35px_rgba(234,179,8,0.35)]",
    },
    {
      name: "Shavide",
      url: "https://www.shavide.com/",
      border: "border-cyan-500",
      glow: "hover:shadow-[0_0_35px_rgba(6,182,212,0.35)]",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#0A0F1C] py-24 px-6 text-white overflow-hidden">

      {/* ⭐ Stars */}
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
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Our Portfolio
        </h1>
        <p className="text-gray-400 text-lg">
          Real projects. Real results 🚀
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">

        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className={`
              bg-[#111827] p-6 rounded-2xl border-2 ${project.border}
              ${project.glow}
              transition-all duration-300
            `}
          >

            {/* Project Name */}
            <h3 className="text-xl font-semibold mb-3">
              {project.name}
            </h3>

            {/* Visit Text */}
            <p className="text-gray-400 text-sm mb-4">
              Visit Website →
            </p>

            {/* URL */}
            <div className="text-[#2F80ED] text-sm break-all">
              {project.url.replace("https://", "")}
            </div>

          </motion.a>
        ))}

      </div>

    </section>
  );
};

export default Portfolio;