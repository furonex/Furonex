import { useLocation } from "react-router-dom";

const ServiceDetails = () => {

  const location = useLocation();

  const serviceData = {
    "/services/web-development": {
      title: "Website Development",
      description: "We build fast, scalable and modern websites for businesses.",
    },
    "/services/seo": {
      title: "SEO Optimization",
      description: "Rank higher on Google and get organic traffic.",
    },
    "/services/smo": {
      title: "Social Media Optimization",
      description: "Grow your brand across social platforms.",
    },
    "/services/digital-marketing": {
      title: "Digital Marketing",
      description: "Performance-driven marketing campaigns.",
    },
  };

  const current = serviceData[location.pathname];

  return (
    <section className="min-h-screen bg-[#0A0F1C] text-white px-6 py-20">

      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">{current?.title}</h1>
        <p className="text-gray-400">{current?.description}</p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Basic */}
        <div className="bg-[#111827] p-6 rounded-xl border border-gray-700">
          <h3 className="text-xl font-semibold mb-2">Basic</h3>
          <p className="text-3xl font-bold mb-4">₹5,000</p>
          <ul className="text-gray-400 text-sm space-y-2 mb-4">
            <li>✔ 1-3 Pages</li>
            <li>✔ Basic Design</li>
            <li>✔ Mobile Responsive</li>
          </ul>
          <button className="w-full bg-[#2F80ED] py-2 rounded-lg">
            Get Started
          </button>
        </div>

        {/* Standard */}
        <div className="bg-[#111827] p-6 rounded-xl border-2 border-[#2F80ED]">
          <h3 className="text-xl font-semibold mb-2">Standard</h3>
          <p className="text-3xl font-bold mb-4">₹10,000</p>
          <ul className="text-gray-400 text-sm space-y-2 mb-4">
            <li>✔ 5-7 Pages</li>
            <li>✔ Advanced UI</li>
            <li>✔ SEO Ready</li>
          </ul>
          <button className="w-full bg-[#2F80ED] py-2 rounded-lg">
            Get Started
          </button>
        </div>

        {/* Premium */}
        <div className="bg-[#111827] p-6 rounded-xl border border-gray-700">
          <h3 className="text-xl font-semibold mb-2">Premium</h3>
          <p className="text-3xl font-bold mb-4">₹20,000</p>
          <ul className="text-gray-400 text-sm space-y-2 mb-4">
            <li>✔ Full Website</li>
            <li>✔ Custom Features</li>
            <li>✔ Performance Optimization</li>
          </ul>
          <button className="w-full bg-[#2F80ED] py-2 rounded-lg">
            Get Started
          </button>
        </div>

      </div>

    </section>
  );
};

export default ServiceDetails;