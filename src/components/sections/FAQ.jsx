import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [active, setActive] = useState(null);
  const stars = Array.from({ length: 15 });

  const faqs = [
    {
      q: "How long does it take to see results from our SEO services?",
      a: "SEO is a long-term strategy. Typically, noticeable improvements in search rankings and website traffic occur between three to six months. However, timelines can vary based on the competitiveness of your industry, target keywords, and the overall condition of your website.",
    },
    {
      q: "What digital marketing services do we offer in India?",
      a: "Furonex offers a wide range of services, including SEO, PPC, social media marketing, content creation, email marketing, conversion rate optimization (CRO), and web development.",
    },
    {
      q: "Do Furonex offer web development services alongside digital marketing?",
      a: "Yes, we provide full web development services including responsive websites and e-commerce platforms optimized for performance and SEO.",
    },
    {
      q: "How do we customize our services for businesses?",
      a: "We analyze your goals, audience, and competitors to create a personalized digital strategy for maximum impact.",
    },
    {
      q: "Can we help improve your social media presence?",
      a: "Yes, we create content strategies, manage campaigns, and analyze engagement to grow your brand.",
    },
    {
      q: "What industries do we have experience working with?",
      a: "We’ve worked across e-commerce, healthcare, education, finance, retail, and more.",
    },
    {
      q: "What certifications do our marketing experts hold?",
      a: "Our team is certified in Google Ads, Meta Blueprint, HubSpot, and more.",
    },
    {
      q: "Do we work with startups or only larger companies?",
      a: "We work with startups to enterprises with scalable solutions.",
    },
    {
      q: "How do Furonex measure the success of campaigns?",
      a: "We track KPIs like traffic, conversions, ROI, and engagement.",
    },
    {
      q: "What makes our company different?",
      a: "We provide personalized strategies and focus on measurable results.",
    },
  ];

  return (
    <section className="relative bg-[#0A0F1C] py-28 px-6 text-white overflow-hidden">

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
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          FAQs
        </h2>
        <p className="text-gray-400">
          Everything you need to know before getting started 🚀
        </p>
      </div>

      {/* FAQ Zig-Zag */}
      <div className="max-w-5xl mx-auto space-y-6 relative z-10">

        {faqs.map((item, i) => {
          const isOpen = active === i;
          const isLeft = i % 2 === 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className={`flex ${isLeft ? "justify-start" : "justify-end"}`}
            >
              <div
                onClick={() => setActive(isOpen ? null : i)}
                className={`
                  w-full md:w-[48%] px-5 py-4 rounded-xl cursor-pointer transition-all duration-300
                  ${isOpen 
                    ? "bg-[#111827] border border-[#2F80ED]/40 shadow-[0_0_25px_rgba(47,128,237,0.25)]" 
                    : "bg-transparent border border-gray-800 hover:bg-[#111827]/40"
                  }
                `}
              >

                {/* Question */}
                <div className="flex justify-between items-center">
                  <h3 className="text-sm md:text-base font-medium">
                    {item.q}
                  </h3>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </div>

                {/* Answer */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                    {item.a}
                  </p>
                </motion.div>

              </div>
            </motion.div>
          );
        })}

      </div>

      {/* CTA */}
      <div className="text-center mt-16 relative z-10">
        <p className="text-gray-400 mb-4">
          Still have questions?
        </p>
        <a
          href="https://wa.me/919911228912"
          target="_blank"
          rel="noreferrer"
          className="bg-[#2F80ED] px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition"
        >
          Chat with Us
        </a>
      </div>

    </section>
  );
};

export default FAQ;