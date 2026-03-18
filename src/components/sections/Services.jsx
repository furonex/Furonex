import React from 'react'
import { motion } from "motion/react";
import { Code, Search, Share2, BarChart } from "lucide-react";
import { Helmet } from 'react-helmet';

const Services = () => {

  const services = [
    {
      title: "Website Development",
      description:
        "Modern, responsive and scalable websites tailored for your business growth.",
      icon: Code,
      border:"border-green-400"
    },
    {
      title: "SEO Optimization",
      description:
        "Improve search rankings and organic traffic with strategic SEO solutions.",
      icon: Search,
      border:"border-yellow-500"
    },
    {
      title: "SMO",
      description:
        "Boost your brand presence across social media platforms and increase engagement.",
      icon: Share2,
      border:"border-pink-500"
    },
    {
      title: "Digital Marketing",
      description:
        "Data-driven marketing campaigns to grow your online visibility and conversions.",
      icon: BarChart,
      border:"border-violet-500"
    },
  ];

  const stars = Array.from({ length: 18 });

  return (
    <>
    <Helmet>
  <title>Website Development & SEO Services | Furonex</title>
  <meta name="description" content="Explore our website development, SEO, and digital marketing services." />
</Helmet>
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
      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our Services
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          Innovative digital solutions designed to help businesses grow,
          connect and succeed in the modern technological landscape.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl  mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">

        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-[#111827] p-8 rounded-2xl border-[3px] ${service.border}
              hover:border-[#2F80ED]
              hover:shadow-[0_0_35px_rgba(47,128,237,0.4)]
              transition-all duration-300`}
            >

              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-xl bg-[#1F2937] text-[#2F80ED]">
                  <Icon size={28} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-center">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm text-center">
                {service.description}
              </p>

            </motion.div>
          );
        })}

      </div>
    </section>

    </>
  );
}

export default Services