import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";

const featuredProjects = [
  {
    title: "ACE Sector 150",
    subtitle: "Luxury Living Redefined",
    category: "Real Estate",
    image: "/portfolio/ace.png",
    tags: ["Website", "Landing Page", "Ads"],
    stat1: "350+",
    statLabel1: "Leads Generated",
    stat2: "₹120",
    statLabel2: "Cost Per Lead",
    color:
      "hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.4)]",
  },

  {
    title: "Godrej Properties",
    subtitle: "Luxury Living Elevated",
    category: "Real Estate",
    image: "/portfolio/gordrejarden.png",
    tags: ["Website", "SEO"],
    stat1: "520+",
    statLabel1: "Leads Generated",
    stat2: "280%",
    statLabel2: "ROI Increase",
    color:
      "hover:border-purple-400 hover:shadow-[0_0_35px_rgba(168,85,247,.4)]",
  },

  {
    title: "Gaur City Center",
    subtitle: "Retail Excellence",
    category: "Commercial",
    image: "/portfolio/gaurbento.png",
    tags: ["Website", "Landing Page"],
    stat1: "200+",
    statLabel1: "Leads Generated",
    stat2: "8.7%",
    statLabel2: "Conversion Rate",
    color:
      "hover:border-orange-400 hover:shadow-[0_0_35px_rgba(251,146,60,.4)]",
  },

  {
    title: "Serene Medicare",
    subtitle: "Healthcare Website",
    category: "Healthcare",
    image: "/portfolio/instantdoc.png",
    tags: ["Website", "SEO"],
    stat1: "450%",
    statLabel1: "Organic Traffic",
    stat2: "Top 10",
    statLabel2: "Keywords Ranked",
    color:
      "hover:border-pink-400 hover:shadow-[0_0_35px_rgba(255,105,180,.4)]",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="bg-[#070B17] py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="flex justify-between items-center mb-14">

          <div>

            <p className="uppercase tracking-[4px] text-purple-400 text-sm">

              Featured Work

            </p>

            <h2 className="text-5xl font-bold text-white mt-3">

              Results That{" "}

              <span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">

                Speak

              </span>

            </h2>

          </div>

          <div className="flex gap-3">

            <button className="px-6 py-3 text-white rounded-xl border border-white/10 hover:border-purple-500 transition">

              View All

            </button>

            <button className="w-12 h-12 text-white rounded-full border border-white/10 hover:border-purple-500">

              <ArrowLeft size={18} />

            </button>

            <button className="w-12 h-12 text-white rounded-full border border-white/10 hover:border-purple-500">

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-4 gap-7">

          {featuredProjects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className={`
              group
              rounded-3xl
              overflow-hidden
              bg-[#111827]
              border
              border-white/10
              transition
              duration-500
              ${project.color}
              `}
            >

              {/* Image */}

              <div className="relative h-72 overflow-hidden">

                <img
                  src={project.image}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#070B17] via-[#070B1780] to-transparent"/>

                {/* Shine */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">

                  <div className="absolute -left-40 top-0 h-full w-24 bg-white/20 rotate-12 blur-xl group-hover:left-[140%] transition-all duration-1000"/>

                </div>

                {/* Title */}

                <div className="absolute bottom-6 left-6">

                  <h3 className="text-2xl font-bold text-white">

                    {project.title}

                  </h3>

                  <p className="text-gray-300 mt-2">

                    {project.subtitle}

                  </p>

                </div>

                {/* Live */}

                <div className="absolute top-5 right-5">

                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">

                    ● Live

                  </div>

                </div>

              </div>

              {/* Tags */}

              <div className="flex flex-wrap gap-2 px-6 pt-5">

                {project.tags.map((tag) => (

                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10"
                  >

                    {tag}

                  </span>

                ))}

              </div>

              {/* Bottom */}

              <div className="p-6">

                <p className="text-gray-400">

                  {project.category}

                </p>

                <div className="grid grid-cols-2 gap-5 mt-6">

                  <div>

                    <p className="text-gray-500 text-sm">

                      {project.statLabel1}

                    </p>

                    <h4 className="text-2xl font-bold mt-1">

                      {project.stat1}

                    </h4>

                  </div>

                  <div>

                    <p className="text-gray-500 text-sm">

                      {project.statLabel2}

                    </p>

                    <h4 className="text-2xl font-bold mt-1">

                      {project.stat2}

                    </h4>

                  </div>

                </div>

                <button className="mt-8 flex items-center gap-3 text-purple-400 font-medium">

                  Visit Project

                  <ExternalLink size={18}/>

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturedProjects;