import { useState } from "react";
import { motion } from "motion/react";

import braventa from "/portfolio/braventa.png";
import instantdoc from "/portfolio/instantdoc.png";
import Gordrejarden from "/portfolio/gordrejarden.png";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const stats = [
    { value: "40+", label: "Projects Delivered" },
    { value: "20+", label: "Happy Clients" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "4+", label: "Years Experience" },
  ];

  

  const projects = [
    {
      name: "Shavide",
      url: "https://www.shavide.com/",
      category: "Website",
      image: "/portfolio/shavide.jpg",
      featured: true,
      tags: ["React", "SEO", "Responsive"],
      hover:"hover:border-pink-400",
      hoverShadow:"hover:shadow-[0_0_35px_rgba(255,105,180,0.4)]"
    },
    {
      name: "Braventa Infra",
      url: "https://www.braventainfra.com/",
      category: "Website",
      image: "/portfolio/braventa.png",
      featured: true,
      tags: ["Real Estate", "Lead Generation"],
       hover: "hover:border-cyan-400",
    hoverShadow: "hover:shadow-[0_0_35px_rgba(34,211,238,0.4)]"
    },
    {
      name: "Instant Doc Solution",
      url: "https://instantdocsolution.in/",
      category: "Website",
      image: "/portfolio/instantdoc.png",
      featured: true,
      tags: ["Healthcare", "SEO"],
       hover: "hover:border-purple-400",
    hoverShadow: "hover:shadow-[0_0_35px_rgba(168,85,247,0.4)]",
    },
    {
      name: "Ankit Electrical",
      url: "https://ankitelectrical.com/",
      category: "Website",
      image: "/portfolio/ankit.png",
      tags: ["Business Website"],
      hover: "hover:border-emerald-400",
    hoverShadow: "hover:shadow-[0_0_35px_rgba(52,211,153,0.4)]",
    },
    {
      name: "Yuvi Driving School",
      url: "https://yuvidrivingschool.in/",
      category: "Website",
      image: "/portfolio/yuvi.png",
      tags: ["Landing Page"],
      hover: "hover:border-orange-400",
    hoverShadow: "hover:shadow-[0_0_35px_rgba(251,146,60,0.4)]",
    },
    {
      name: "MS99 Realty",
      url: "https://www.ms99realty.com/",
      category: "Website",
      image: "/portfolio/ms99.png",
      tags: ["Real Estate"],
      hover: "hover:border-yellow-400",
    hoverShadow: "hover:shadow-[0_0_35px_rgba(250,204,21,0.4)]",
    },
    {
      name: "Gaur Bento",
      url: "https://gaursproperty.com/Gaur_Bento/",
      category: "Website",
      image: "/portfolio/gaurbento.png",
      tags: ["Real Estate"],
      hover: "hover:border-red-400",
    hoverShadow: "hover:shadow-[0_0_35px_rgba(248,113,113,0.4)]",
    },
    {
      name: "Godrej Arden",
      url: "https://godrejlaunches.com/godrej-arden/",
      category: "Website",
      image: "/portfolio/gordrejarden.png",
      tags: ["Property"],
      hover: "hover:border-indigo-400",
    hoverShadow: "hover:shadow-[0_0_35px_rgba(129,140,248,0.4)]",
    },
    {
      name: "SEO Growth Campaign",
      url: "#",
      category: "SEO",
      image: "/portfolio/seo1.jpg",
      tags: ["Ranking", "Traffic"],
      hover: "hover:border-sky-400",
  hoverShadow: "hover:shadow-[0_0_35px_rgba(56,189,248,0.4)]",
    },
    {
      name: "Local SEO Project",
      url: "#",
      category: "SEO",
      image: "/portfolio/seo2.jpg",
      tags: ["Google Maps"],
      hover: "hover:border-violet-400",
  hoverShadow: "hover:shadow-[0_0_35px_rgba(167,139,250,0.4)]",
    },
    {
      name: "Instagram Campaign",
      url: "#",
      category: "Marketing",
      image: "/portfolio/marketing1.jpg",
      tags: ["Social Media"],
      hover: "hover:border-rose-400",
  hoverShadow: "hover:shadow-[0_0_35px_rgba(251,113,133,0.4)]",
    },
  ];

  const filters = ["All", "Website", "SEO", "Marketing"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      id="portfolio"
      className="bg-[#0A0F1C] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <span className="text-[#2F80ED] font-medium">
            OUR WORK
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-3">
            Projects That Drive Growth
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            We build high-converting websites, SEO campaigns,
            and digital experiences that help businesses grow.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-24">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-[#111827] border border-[#1f2937]
              rounded-2xl p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-[#2F80ED]">
                {item.value}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold mb-10 text-center">
            Featured Projects
          </h3>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <motion.a
                key={i}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -8 }}
                className={`group bg-[#111827]
                rounded-3xl overflow-hidden
                border border-gray-800
                ${project.hover}
                ${project.hoverShadow}
                `}
              >
                <div className="relative h-56 overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover
                    transition duration-500
                    group-hover:scale-110"
                  />

                  <div className="absolute top-4 right-4">
                    <span
                      className="
                      bg-green-500/20
                      text-green-400
                      px-3 py-1
                      rounded-full
                      text-xs
                    "
                    >
                      Live Project
                    </span>
                  </div>
                </div>

                <div className="p-6">

                  <h4 className="text-2xl font-semibold">
                    {project.name}
                  </h4>

                  <p className="text-gray-400 mt-2">
                    {project.category}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="
                        px-3 py-1
                        rounded-full
                        text-xs
                        bg-[#1F2937]
                        text-gray-300
                      "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 text-[#2F80ED]">
                    Visit Website →
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full transition
              ${
                activeFilter === filter
                  ? "bg-[#2F80ED] text-white"
                  : "bg-[#111827] text-gray-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProjects.map((project, i) => (
            <motion.a
              key={i}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -8 }}
              className={`
              bg-[#111827]
              border border-gray-800
              rounded-3xl
              overflow-hidden
              group 
               ${project.hover}
                ${project.hoverShadow}
            `}
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="
                  w-full h-full object-cover
                  transition duration-500
                  group-hover:scale-110
                "
                />
              </div>

              <div className="p-6">

                <h4 className="text-xl font-semibold">
                  {project.name}
                </h4>

                <p className="text-gray-400 mt-2">
                  {project.category}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="
                      text-xs
                      px-2 py-1
                      rounded-full
                      bg-[#1F2937]
                    "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 text-[#2F80ED]">
                  View Project →
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div
          className="
          mt-28
          text-center
          bg-gradient-to-r
          from-[#111827]
          to-[#0f172a]
          rounded-3xl
          p-12
        "
        >
          <h3 className="text-4xl font-bold">
            Ready To Grow Your Business?
          </h3>

          <p className="text-gray-400 mt-4">
            Let's build a website, SEO strategy, or marketing
            campaign that generates results.
          </p>

          <button
            className="
            mt-8
            bg-[#2F80ED]
            px-8
            py-4
            rounded-full
            font-medium
            hover:scale-105
            transition
          "
          >
            Book Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;