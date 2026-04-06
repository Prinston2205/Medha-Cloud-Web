import React from "react";

const Cloud = () => {
  const cloudServices = [
    {
      title: "Hosting Solutions",
      desc: "VPS starts at $15/month. Need more power? Upgrade without migrating.",
    },
    {
      title: "Specialty Hosting",
      desc: "Running a hospital? Need PCI compliance? We know the paperwork.",
    },
    {
      title: "Microsoft Solutions",
      desc: "Microsoft 365 licenses delivered in 24 hours. Local invoicing, local support.",
    },
    {
      title: "Security & Compliance",
      desc: "SSL certs installed same day. Compliance audits handled.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* LABEL */}
        <p className="text-blue-600 text-sm font-medium text-center mb-2">
          • Cloud & Hosting
        </p>

        {/* HEADING */}
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Cloud Solutions
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 mt-4 text-center max-w-2xl mx-auto">
          Need hosting today? We set it up. HIPAA? We sign the BAA. Questions? Call an admin, not a chatbot.
        </p>

        {/* 🔥 GRID (2x2) */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          
          {cloudServices.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 
              transition-all duration-300 
              hover:-translate-y-1 hover:shadow-lg"
            >
              
              {/* ORANGE TITLE */}
              <h3 className="text-lg font-semibold text-orange-500">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Cloud;