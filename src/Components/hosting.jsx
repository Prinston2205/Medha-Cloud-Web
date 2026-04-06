import React from "react";

const Hosting = () => {
  const services = [
    { name: "VPS Hosting", color: "orange" },
    { name: "Dedicated Servers", color: "orange" },
    { name: "Cloud Servers", color: "orange" },
    { name: "Managed Hosting", color: "orange" },
    { name: "cPanel Hosting", color: "orange" },
    { name: "Windows Hosting", color: "orange" },
    { name: "Linux Hosting", color: "orange" },
    { name: "Microsoft 365", color: "orange" },
    { name: "Exchange Hosting", color: "orange" },
    { name: "Backup Solutions", color: "orange" },
    { name: "Disaster Recovery", color: "orange" },
    { name: "SSL Certificates", color: "orange" },
    { name: "Domain Services", color: "orange" },
    { name: "Email Hosting", color: "orange" },
    { name: "Hybrid Cloud", color: "orange" },
    { name: "Private Cloud", color: "orange" },
    { name: "Public Cloud", color: "orange" },
    { name: "Compliance Hosting", color: "orange" },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* LABEL */}
        <p className="text-orange-600 text-sm font-medium text-center mb-2">
          • Hosting Services
        </p>

        {/* HEADING */}
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Popular Cloud Hosting Services
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 mt-4 text-center max-w-2xl mx-auto">
          Choose from a wide range of cloud and hosting services designed to scale your business and meet compliance needs.
        </p>

        {/* 🔥 TAGS */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          
          {services.map((item, index) => (
            <span
              key={index}
              className={`px-4 py-2 text-sm rounded-full cursor-pointer transition-all duration-200
              
              ${
                item.color === "blue"
                  ? "bg-blue-50 text-blue-600 hover:bg-blue-100"
                  : "bg-white-50 text-black-500 hover:bg-orange-100"
              }
              
              `}
            >
              {item.name}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Hosting;