import React from "react";

const Services = () => {
  const services = [
    {
      title: "Getting Started",
      desc: "Pricing takes 5 minutes. Onboarding takes two weeks. No contracts.",
      icon: "⚡",
    },
    {
      title: "Managed IT Services",
      desc: "Helpdesk, monitoring, and patching under your logo. Billed to you.",
      icon: "🛠️",
    },
    {
      title: "NOC & SOC Services",
      desc: "We watch networks 24/7. Threats get stopped. You get the credit.",
      icon: "🛡️",
    },
    {
      title: "Staff Augmentation",
      desc: "Need a Windows admin? Hire ours. Invoice clients. We handle payroll.",
      icon: "👨‍💻",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* TOP LABEL */}
        <p className="text-blue-600 text-sm font-medium text-center mb-2">
          • For MSP Partners
        </p>

        {/* HEADING */}
        <h2 className="text-4xl font-bold text-center text-gray-900">
          White Label MSP Services
        </h2>

        {/* DESCRIPTION */}
        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Scale your MSP without hiring. We handle your backend operations while you focus on growing your business.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 border border-gray-200 rounded-xl bg-white 
              transition-all duration-300 
              hover:-translate-y-1 hover:shadow-lg hover:border-gray-300"
            >
              
              {/* ICON */}
              <div className="text-3xl mb-4">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* 🔵 BLUE LINE */}
              <div className="mt-5 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-8"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;