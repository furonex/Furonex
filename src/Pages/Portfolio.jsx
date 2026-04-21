import { motion } from "motion/react";

const Portfolio = () => {
  const stars = Array.from({ length: 20 });

  const services = [
    {
      title: "Website Development",
      projects: [
      {
         name: "Shavide", url: "https://www.shavide.com/", border: "border-cyan-500", glow: "hover:shadow-[0_0_35px_rgba(6,182,212,0.35)]", },
          { name: "Braventa Infra", url: "https://www.braventainfra.com/", border: "border-pink-500", glow: "hover:shadow-[0_0_35px_rgba(255,120,180,0.35)]", },
           { name: "Instant Doc Solution", url: "https://instantdocsolution.in/", border: "border-purple-500", glow: "hover:shadow-[0_0_35px_rgba(140,120,255,0.4)]", }, 
           { name: "Ankit Electrical", url: "https://ankitelectrical.com/", border: "border-green-500", glow: "hover:shadow-[0_0_35px_rgba(34,197,94,0.35)]", }, 
           { name: "Yuvi Driving School", url: "https://yuvidrivingschool.in/", border: "border-yellow-500", glow: "hover:shadow-[0_0_35px_rgba(234,179,8,0.35)]", }, 
           { name: "MS99 Realty", url: "https://www.ms99realty.com/", border: "border-blue-500", glow: "hover:shadow-[0_0_35px_rgba(47,128,237,0.4)]", },
      ],
    },
    {
      title: "SEO Services",
      projects: [
        {
          name: "SEO Case Study (Demo)",
          url: "#",
          border: "border-green-500",
          glow: "hover:shadow-[0_0_35px_rgba(34,197,94,0.35)]",
        },
        {
          name: "Local SEO Project (Coming Soon)",
          url: "#",
          border: "border-lime-500",
          glow: "hover:shadow-[0_0_35px_rgba(132,204,22,0.35)]",
        },
      ],
    },
    {
      title: "Digital Marketing",
      projects: [
        {
          name: "Instagram Growth Campaign (Demo)",
          url: "#",
          border: "border-yellow-500",
          glow: "hover:shadow-[0_0_35px_rgba(234,179,8,0.35)]",
        },
        {
          name: "Ad Campaign Sample (Coming Soon)",
          url: "#",
          border: "border-orange-500",
          glow: "hover:shadow-[0_0_35px_rgba(249,115,22,0.35)]",
        },
      ],
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#0A0F1C] py-24 px-6 text-white overflow-hidden">

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
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Our Portfolio
        </h1>
        <p className="text-gray-400 text-lg">
          Services & proven work 🚀
        </p>
      </div>

      {/* Services Sections */}
      <div className="max-w-6xl mx-auto space-y-20 relative z-10">

        {services.map((service, index) => (
          <div key={index}>

            {/* Service Title */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
              {service.title}
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

              {service.projects.map((project, i) => (
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
                  <h3 className="text-xl font-semibold mb-3">
                    {project.name}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {project.url === "#" ? "View Details →" : "Visit Website →"}
                  </p>

                  <div className="text-[#2F80ED] text-sm break-all">
                    {project.url !== "#" 
                      ? project.url.replace("https://", "") 
                      : "Case Study"}
                  </div>
                </motion.a>
              ))}

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Portfolio;