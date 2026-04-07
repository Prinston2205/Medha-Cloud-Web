import React from "react";
import { Zap, Wrench, ShieldCheck, User } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Getting Started",
      desc: "Pricing takes 5 minutes. Onboarding takes two weeks. No contracts.",
      icon: <Zap size={28} className="text-blue-600" />,
    },
    {
      title: "Managed IT Services",
      desc: "Helpdesk, monitoring, and patching under your logo. Billed to you.",
      icon: <Wrench size={28} className="text-blue-600" />,
    },
    {
      title: "NOC & SOC Services",
      desc: "We watch networks 24/7. Threats get stopped. You get the credit.",
      icon: <ShieldCheck size={28} className="text-blue-600" />,
    },
    {
      title: "Staff Augmentation",
      desc: "Need a Windows admin? Hire ours. Invoice clients. We handle payroll.",
      icon: <User size={28} className="text-blue-600" />,
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* TOP LABEL */}
        <p className="text-blue-600 text-sm font-medium  mb-2">
          • For MSP Partners
        </p>

        {/* HEADING */}
        <h2 className="text-[38px] font-bold text-gray-900">
          White Label MSP Services
        </h2>

        {/* DESCRIPTION */}
        <p>
          Stop losing clients to bigger MSPs. Add 24/7 NOC/SOC coverage in 4 weeks — your logo,
        </p>
        <p>your pricing, our certified team.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-7 border border-gray-200 rounded-xl bg-white 
              transition-all duration-300 
              hover:-translate-y-1 hover:shadow-lg hover:bg-blue-50"
            >
              
              {/* ICON */}
              <div className="mb-5">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-[17px] font-semibold text-gray-900">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 mt-3 text-[14px] leading-relaxed">
                {service.desc}
              </p>

              {/* 🔵 CENTER LINE */}
              <div className="absolute left-1/2 bottom-5 h-[2px] w-0 bg-blue-600 
                transition-all duration-300 
                group-hover:w-12 group-hover:left-[calc(50%-24px)]">
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;