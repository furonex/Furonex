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
      a: "Furonex offers a wide range of services, including SEO, PPC, social media marketing, content creation, email marketing, conversion rate optimization (CRO), and web development. Our goal is to provide customized strategies that help businesses improve their online visibility and drive measurable results.",
    },
    {
      q: "Do Furonex offer web development services alongside digital marketing?",
      a: "Yes, we at Furonex provide full web development services. From designing responsive websites to developing e-commerce platforms, we ensure that your site is not only visually appealing but also optimized for performance, user experience, and SEO.",
    },
    {
      q: "How do we customize our services for businesses?",
      a: "We understand that every business is unique. Our process begins with an in-depth analysis of your goals, target audience, and competition. Based on that, we create a personalized digital strategy that aligns with your objectives and ensures maximum impact.",
    },
    {
      q: "Can we help improve your social media presence?",
      a: "Yes, we offer comprehensive social media marketing services. We create customized content strategies, manage campaigns, and provide engagement analysis to grow your brand presence and drive meaningful interactions.",
    },
    {
      q: "What industries do we have experience working with?",
      a: "Furonex has experience working across multiple industries including e-commerce, healthcare, education, finance, retail, and more. We adapt our strategies based on industry-specific needs to deliver effective results.",
    },
    {
      q: "What certifications do our marketing experts hold?",
      a: "Our team members hold certifications from leading platforms like Google Ads, Meta (Facebook) Blueprint, HubSpot, and more. This ensures we stay updated with the latest trends and deliver effective solutions.",
    },
    {
      q: "Do we work with startups or only larger companies?",
      a: "We work with businesses of all sizes, from startups to large enterprises. Our flexible and scalable solutions are designed to fit your business stage and growth needs.",
    },
    {
      q: "How do Furonex measure the success of campaigns?",
      a: "Furonex measures success using KPIs such as website traffic, conversion rates, ROI, and engagement metrics. We provide transparent reports so you can clearly see your growth and performance.",
    },
    {
      q: "What makes our company different from other digital marketing agencies?",
      a: "What sets Furonex apart is our personalized approach and commitment to delivering measurable results. We don’t use cookie-cutter solutions — instead, we tailor strategies for each client and continuously optimize for growth.",
    },
  ];

  return (
    <section className="relative bg-[#0A0F1C] py-28 px-6 text-white overflow-hidden">

      {/* ⭐ Stars Background */}
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

      {/* FAQ Grid */}
      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">

        {faqs.map((item, i) => {
          const isOpen = active === i;

          return (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              
              className={`
                px-5 py-4 rounded-xl cursor-pointer transition-all duration-300
                ${isOpen 
                  ? "bg-[#111827] border border-[#2F80ED]/40 shadow-[0_0_25px_rgba(47,128,237,0.25)]" 
                  : "bg-transparent border-b border-gray-800 hover:bg-[#111827]/40"
                }

                ${i % 2 === 0 
                  ? "md:col-start-1" 
                  : "md:col-start-2 md:mt-10"
                }
              `}
              
              onClick={() => setActive(isOpen ? null : i)}
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