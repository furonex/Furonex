import { motion } from "motion/react";
import {
  ArrowRight,
  Star,
  Globe,
  Briefcase,
  Users,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "50+",
    title: "Projects Delivered",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Users,
    value: "30+",
    title: "Happy Clients",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: TrendingUp,
    value: "98%",
    title: "Client Satisfaction",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Globe,
    value: "6+",
    title: "Countries Served",
    color: "from-purple-500 to-indigo-500",
  },
];

const testimonials = [
  {
    name: "Shavide",
    text: "Professional work, fast delivery and amazing support. Highly recommended.",
  },
  {
    name: "Braventa Infra",
    text: "Our landing pages started generating quality leads within days.",
  },
  {
    name: "MS99 Realty",
    text: "Beautiful design, smooth experience and excellent communication.",
  },
];

const PortfolioFooter = () => {
  return (
    <section className="relative bg-[#070B17] py-28 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] -top-40 left-1/2 -translate-x-1/2"/>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Stats */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {stats.map((item,index)=>{

            const Icon=item.icon;

            return(

              <motion.div

              key={index}

              whileHover={{y:-8}}

              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center hover:border-purple-500 transition"

              >

                <div className={`

                w-16

                h-16

                mx-auto

                rounded-2xl

                flex

                items-center

                justify-center

                bg-gradient-to-r

                ${item.color}

                `}>

                  <Icon size={28}/>

                </div>

                <h2 className="text-5xl font-bold mt-6">

                  {item.value}

                </h2>

                <p className="text-gray-400 mt-3">

                  {item.title}

                </p>

              </motion.div>

            )

          })}

        </div>

        {/* Trusted */}

        <div className="mt-28">

          <h3 className="text-center uppercase tracking-[4px] text-purple-400">

            Trusted By

          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">

            {[
              "Shavide",
              "Godrej",
              "ACE",
              "MS99",
              "Braventa",
              "Gaur",
              "Yuvi",
              "Ankit",
            ].map((brand,index)=>(

              <motion.div

              key={index}

              whileHover={{scale:1.05}}

              className="rounded-2xl border border-white/10 bg-white/5 py-8 text-center text-gray-300 hover:border-purple-500 transition"

              >

                {brand}

              </motion.div>

            ))}

          </div>

        </div>

        {/* Testimonials */}

        <div className="mt-28">

          <div className="text-center">

            <p className="uppercase tracking-[5px] text-purple-400">

              Testimonials

            </p>

            <h2 className="text-5xl font-bold mt-4 text-red-500">

              What Clients Say

            </h2>

          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            {testimonials.map((item,index)=>(

              <motion.div

              key={index}

              whileHover={{y:-8}}

              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-purple-500 transition"

              >

                <div className="flex gap-1 text-yellow-400">

                  <Star fill="currentColor" size={18}/>
                  <Star fill="currentColor" size={18}/>
                  <Star fill="currentColor" size={18}/>
                  <Star fill="currentColor" size={18}/>
                  <Star fill="currentColor" size={18}/>

                </div>

                <p className="text-gray-300 mt-6 leading-8">

                  "{item.text}"

                </p>

                <h4 className="mt-8 text-xl font-semibold text-white">

                  {item.name}

                </h4>

              </motion.div>

            ))}

          </div>

        </div>

        {/* CTA */}

        <motion.div

        whileHover={{scale:1.01}}

        className="relative overflow-hidden rounded-[40px] mt-32 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 p-[2px]"

        >

          <div className="rounded-[38px] bg-[#0B1020] py-20 px-10 text-center">

            <motion.div

            animate={{

              scale:[1,1.05,1]

            }}

            transition={{

              repeat:Infinity,

              duration:4

            }}

            className="absolute w-60 h-60 rounded-full bg-purple-500/20 blur-[100px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"

            />

            <div className="relative z-10">

              <h2 className="text-5xl font-bold text-white">

                Let's Build Something Amazing

              </h2>

              <p className="text-gray-400 mt-6 max-w-2xl mx-auto">

                Need a website, landing page, SEO strategy or complete digital marketing solution?

                Let's discuss your project today.

              </p>

              <button

              className="mt-10 px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition flex items-center gap-3 mx-auto"

              >

                Start Your Project

                <ArrowRight size={20}/>

              </button>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default PortfolioFooter;