import React from "react";

const WhatWeDo = () => {
  const cards = [
    {
      badge: "WHITE LABEL",
      color: "blue",
      problemTitle: "MSP Growth Limited",
      problemDesc:
        `"Our 2-person MSP can't offer 24/7 support. We're losing clients to larger competitors."`,
      solutionTitle: "White Label MSP Services",
      solutionDesc:
        "Our engineers work under your brand. Your clients see your logo. You deliver enterprise-grade support without hiring a single person.",
      features: [
        {
          title: "Dedicated Engineers",
          desc: "Our team becomes your team, working under your brand",
        },
        {
          title: "Your Brand, Our Expertise",
          desc: "All tickets, emails, and support branded as you",
        },
        {
          title: "24/7 Coverage",
          desc: "Round-the-clock NOC & SOC manpower outsourcing",
        },
        {
          title: "No Hiring, No Training",
          desc: "Expand capabilities instantly without overhead",
        },
      ],
      button: "Become a Partner",
    },
    {
      badge: "MIGRATIONS",
      color: "green",
      problemTitle: "Email Migration Crisis",
      problemDesc:
        `"Moving 50 users to Microsoft 365. Scared of losing emails or downtime."`,
      solutionTitle: "Zero Downtime Migration",
      solutionDesc:
        "Zero-downtime migration—users work normally during the move. Business Email, Office apps, Teams—all included & configured. 1+ PB of data moved successfully..",
      features: [
        {
          title: "Zero Downtime",
          desc: "Users work normally during migration",
        },
        {
          title: "Full M365 Suite",
          desc: "Email, Office apps, Teams configured",
        },
        {
          title: "Local Invoicing",
          desc: "INR/SGD pricing, no international fees",
        },
        {
          title: "24-Hour Turnaround",
          desc: "Purchase to fully migrated",
        },
      ],
      button: "View Migration Services",
    },
    {
      badge: "SUPPORT",
      color: "blue",
      problemTitle: "3 AM Server Crash",
      problemDesc:
        `"Active Directory down, 150 employees can't work Monday. Admin on vacation."`,
      solutionTitle: "15-Minute Response Time",
      solutionDesc:
        "We answer in 15 minutes. Domain controller? Exchange? VMware? Fixed. 24/7/365 coverage means your business never stops.",
      features: [
        {
          title: "15-Min Response",
          desc: "Emergency support anytime anyday",
        },
        {
          title: "Active Directory",
          desc: "Domain controller & Exchange expertise",
        },
        {
          title: "VMware Support",
          desc: "Virtual infrastructure troubleshooting",
        },
        {
          title: "24/7 Coverage",
          desc: "Weekends,Holidays, Always available",
        },
      ],
      button: "View Support Plans",
    },
    {
      badge: "HOSTING",
      color: "green",
      problemTitle: "Compliance Risk",
      problemDesc:
        `"Practice management system handles patient data. Not HIPAA-compliant."`,
      solutionTitle: "We Sign the BAA",
      solutionDesc:
        "HIPAA-compliant hosting. Encrypted backups. Audit logs. Your practice runs safely with full compliance protection.",
      features: [
        {
          title: "HIPAA BAA",
          desc: "We sign Buisness Associate Agreement",
        },
        {
          title: "Encrypted Backups",
          desc: "All patient data fully encrypted",
        },
        {
          title: "Audit Logs",
          desc: "Complete compilance tracking & monitoring",
        },
        {
          title: "Safe Practice",
          desc: "Focus on patients, not compliance fears",
        },
      ],
      button: "View Compliance Hosting",
    },
  ];

  const styles = {
    blue: {
      badge: "bg-blue-100 text-blue-700",
      dot: "bg-blue-500",
      hover: "hover:bg-blue-50",
      cta: "bg-blue-600 hover:bg-blue-700",
    },
    green: {
      badge: "bg-green-100 text-green-700",
      dot: "bg-green-500",
      hover: "hover:bg-green-50",
      cta: "bg-green-600 hover:bg-green-700",
    },
  };

  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* HEADER */}
        <h2 className="text-[28px] font-semibold text-gray-900">
          What We Do Every Day
        </h2>

        <p className="text-gray-500 mt-3 text-[13px]">
          Real problems we solve. Day in, day out. See if it sounds familiar to yours.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">

          {cards.map((card, i) => {
            const style = styles[card.color];

            return (
              <div
                key={i}
                className="relative border border-gray-200 rounded-2xl bg-white 
                transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >

                {/* CENTER ARROW */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                w-9 h-9 bg-white border border-gray-300 rounded-full flex items-center justify-center text-gray-400 text-sm z-10">
                  →
                </div>

                <div className="grid grid-cols-2 min-h-[520px]">

                  {/* PROBLEM */}
                  <div className="p-7 bg-gray-50 border-r border-gray-300">
                    <span className={`text-[10px] px-2 py-1 rounded font-semibold ${style.badge}`}>
                      {card.badge}
                    </span>

                    <p className="mt-5 text-[10px] text-red-500 font-semibold uppercase">
                      ● Problem
                    </p>

                    <h4 className="mt-2 text-[13px] font-semibold text-gray-900">
                      {card.problemTitle}
                    </h4>

                    <p className="text-gray-500 text-[12px] mt-2 leading-relaxed">
                      {card.problemDesc}
                    </p>
                  </div>

                  {/* SOLUTION */}
                  <div className="p-7 flex flex-col justify-between">
                    
                    <div>
                      <p className="text-[10px] text-green-600 font-semibold uppercase">
                        ● Solution
                      </p>

                      <h4 className="mt-2 text-[13px] font-semibold text-gray-900">
                        {card.solutionTitle}
                      </h4>

                      <p className="text-gray-500 text-[12px] mt-2 leading-relaxed">
                        {card.solutionDesc}
                      </p>

                      {/* FEATURES */}
                      <div className="mt-5 grid grid-cols-1 gap-3">
                        {card.features.map((f, idx) => (
                          <div
                            key={idx}
                            className={`p-4 rounded-xl border border-gray-200 bg-white 
                            transition-all duration-200 ${style.hover}`}
                          >
                            <div className="flex items-start gap-3">
                              <span className={`w-2 h-2 mt-1 rounded-full ${style.dot} transition-all duration-200 hover:scale-125`} />
                              <div>
                                <p className="text-[12px] font-medium text-gray-800">
                                  {f.title}
                                </p>
                                <p className="text-[11px] text-gray-500 mt-1">
                                  {f.desc}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div
                      className={`mt-5 px-4 py-3 rounded-xl text-[12px] font-medium cursor-pointer
                      text-gray-700 border border-gray-200 bg-white
                      transition-all duration-300 hover:text-white ${style.cta}`}
                    >
                      {card.button} →
                    </div>

                  </div>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;