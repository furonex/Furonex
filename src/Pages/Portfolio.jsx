import { motion } from "motion/react";

const Portfolio = () => {

  const stars = Array.from({ length: 20 });

  const projects = [
    {
      title: "Hotel Booking Platform",
      description: "A full-stack hotel booking web application with modern UI.",
      image: "/projects/hotel.png",
    },
    {
      title: "Corporate Landing Page",
      description: "Modern business landing page designed for conversions.",
      image: "/projects/corporate.png",
    },
    {
      title: "E-commerce Website",
      description: "Scalable e-commerce platform with product management.",
      image: "/projects/ecommerce.png",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built using React and Tailwind.",
      image: "/projects/portfolio.png",
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

      {/* Section Heading */}
      <div className="max-w-6xl mx-auto text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our Work
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          Explore some of the projects we’ve built to help businesses grow
          through technology.
        </p>
      </div>

      {/* Project Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -12, scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-[#111827] rounded-2xl border border-gray-800 overflow-hidden
            hover:border-[#2F80ED]
            hover:shadow-[0_0_40px_rgba(47,128,237,0.4)]
            transition-all duration-300"
          >

            {/* Image */}
            <div className="h-44 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">

              <h3 className="text-lg font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {project.description}
              </p>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Portfolio;