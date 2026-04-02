import React from "react";

const Services = () => {
  const services = [
    {
      title: "Cloud Management",
      desc: "End-to-end cloud monitoring and optimization services.",
    },
    {
      title: "Cybersecurity",
      desc: "Protect your infrastructure with advanced security solutions.",
    },
    {
      title: "DevOps",
      desc: "Automate and streamline your deployment pipelines.",
    },
    {
      title: "24/7 Support",
      desc: "Round-the-clock support for all your cloud operations.",
    },
  ];

  return (
    <section className="px-16 py-20 bg-white">
      
      <h2 className="text-4xl font-bold text-center text-gray-900">
        Our Services
      </h2>

      <p className="text-center text-gray-600 mt-4 max-w-xl mx-auto">
        We provide comprehensive cloud solutions tailored for modern businesses.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl hover:shadow-xl transition bg-white"
          >
            <h3 className="text-xl font-semibold text-blue-600">
              {service.title}
            </h3>
            <p className="text-gray-600 mt-3">{service.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Services;