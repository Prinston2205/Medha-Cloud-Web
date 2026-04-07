import React from "react";
import {
  Server,
  Shield,
  Cloud as CloudIcon,
  Lock,
  ArrowRight,
} from "lucide-react";

const Cloud = () => {
  const cloudServices = [
    {
      title: "Hosting Solutions",
      icon: <Server size={20} className="text-[#f97316]" />,
      desc: (
        <>
          <strong>VPS starts at $15/month.</strong> Need more power?
          Upgrade without migrating.
        </>
      ),
      tags: ["VPS Hosting", "Dedicated Servers", "cPanel Hosting"],
    },
    {
      title: "Specialty Hosting",
      icon: <Shield size={20} className="text-[#f97316]" />,
      desc: (
        <>
          Running a hospital? Need <strong>PCI compliance?</strong> We
          know the paperwork.
        </>
      ),
      tags: ["HIPAA Hosting", "PCI Hosting", "Secure Environments"],
    },
    {
      title: "Microsoft Solutions",
      icon: <CloudIcon size={20} className="text-[#f97316]" />,
      desc: (
        <>
          <strong>Microsoft 365 licenses</strong> delivered in 24 hours.
          Local invoicing, local support.
        </>
      ),
      tags: ["M365 Setup", "Exchange Online", "Teams Integration"],
    },
    {
      title: "Security & Compliance",
      icon: <Lock size={20} className="text-[#f97316]" />,
      desc: (
        <>
          <strong>SSL certs installed same day.</strong> Compliance
          audits handled.
        </>
      ),
      tags: ["SSL Certificates", "Firewall Setup", "Security Audits"],
    },
  ];

  return (
    <section className="bg-[#f9fafb] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* LABEL */}
        <p className="text-orange-500 text-sm font-medium text-center mb-2">
          • Cloud & Hosting
        </p>

        {/* HEADING */}
        <h2 className="text-[38px] font-bold text-center text-gray-900">
          Cloud Solutions
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 mt-4 text-center max-w-2xl mx-auto text-[15px] leading-relaxed">
          Need hosting today? We set it up. HIPAA? We sign the BAA.
          Questions? Call an admin, not a chatbot.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          
          {cloudServices.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-8 
              transition-all duration-300 
              hover:-translate-y-2 hover:shadow-xl hover:bg-orange-50"
            >
              
              {/* TITLE + ICON */}
              <div className="flex items-center gap-2 mb-3">
                {item.icon}
                <h3 className="text-[18px] font-semibold text-[#f97316]">
                  {item.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-[14px] leading-relaxed">
                {item.desc}
              </p>

              {/* TAG BOXES */}
              <div className="flex flex-wrap gap-2 mt-5">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[12px] px-3 py-1 rounded-md bg-gray-100 text-gray-700 
                    border border-gray-200 transition group-hover:bg-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 text-orange-500 font-semibold group">
            View all cloud services
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Cloud;