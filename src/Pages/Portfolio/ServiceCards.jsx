import { motion } from "motion/react";
import {
  Globe,
  Search,
  LayoutPanelTop,
  Instagram,
  Megaphone,
  Palette,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design",
    projects: "32+ Projects",
    color: "from-cyan-500 to-blue-500",
    glow: "hover:shadow-cyan-500/30",
  },
  {
    icon: Search,
    title: "SEO Case Studies",
    projects: "26+ Projects",
    color: "from-purple-500 to-fuchsia-500",
    glow: "hover:shadow-purple-500/30",
  },
  {
    icon: LayoutPanelTop,
    title: "Landing Pages",
    projects: "45+ Projects",
    color: "from-green-500 to-emerald-500",
    glow: "hover:shadow-green-500/30",
  },
  {
    icon: Instagram,
    title: "Social Media",
    projects: "120+ Projects",
    color: "from-pink-500 to-rose-500",
    glow: "hover:shadow-pink-500/30",
  },
  {
    icon: Megaphone,
    title: "Ads Campaigns",
    projects: "60+ Projects",
    color: "from-orange-500 to-yellow-500",
    glow: "hover:shadow-orange-500/30",
  },
  {
    icon: Palette,
    title: "Branding",
    projects: "25+ Projects",
    color: "from-indigo-500 to-violet-500",
    glow: "hover:shadow-indigo-500/30",
  },
];

const ServiceCards = () => {
  return (
    <section className="bg-[#070B17] px-6 py-10">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  duration: .25
                }}
                className={`
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
                cursor-pointer
                transition
                duration-300
                hover:border-white/20
                hover:shadow-2xl
                ${service.glow}
                `}
              >

                {/* Glow */}

                <div
                  className={`
                  absolute
                  inset-0
                  opacity-0
                  hover:opacity-20
                  transition
                  duration-500
                  bg-gradient-to-br
                  ${service.color}
                  `}
                />

                {/* Icon */}

                <div
                  className={`
                  w-14
                  h-14
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  bg-gradient-to-r
                  ${service.color}
                  shadow-lg
                  `}
                >
                  <Icon size={26} />
                </div>

                <h3 className="mt-5 font-semibold text-lg text-red-500">

                  {service.title}

                </h3>

                <p className="text-sm text-white mt-2">

                  {service.projects}

                </p>

                {/* Bottom Line */}

                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className={`
                  absolute
                  bottom-0
                  left-0
                  h-[3px]
                  bg-gradient-to-r
                  ${service.color}
                  `}
                />

              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
};

export default ServiceCards;