import React from "react";

const IndustryAndCTA = () => {
  const topCards = [
    {
      title: "Healthcare",
      color: "orange",
      desc: "Run a clinic? We sign the BAA. Your EHR runs safely.",
      points: [
        "Practice management & EHR hosting",
        "Encrypted backups with audit logging",
        "24/7 monitoring for patient data security",
      ],
      link: "View Healthcare Solutions →",
    },
    {
      title: "Finance & Banking",
      color: "green",
      desc: "Processing payments? We handle PCI-DSS compliance audits.",
      points: [
        "Secure payment gateway hosting",
        "Firewall & intrusion detection systems",
        "Quarterly compliance audits & reporting",
      ],
      link: "View Finance Solutions →",
    },
    {
      title: "MSP Partners",
      color: "blue",
      desc: "Can’t hire 6 more techs? We’ll be your NOC.",
      points: [
        "No hiring, no training, no payroll",
        "24/7 helpdesk, NOC, SOC under your logo",
        "Your clients never know we exist",
      ],
      link: "View Partner Program →",
    },
  ];

  // 🔥 UPDATED MINI BOXES (title + desc)
  const miniCards = [
    {
      title: "Manufacturing",
      desc: "ERP, servers & compliance",
      hover: "hover:border-orange-400",
    },
    {
      title: "Technology & SaaS",
      desc: "Cloud, DevOps & scaling",
      hover: "hover:border-green-400",
    },
    {
      title: "Legal Services",
      desc: "Secure hosting & backup",
      hover: "hover:border-purple-400",
    },
    {
      title: "Education",
      desc: "Microsoft 365 & teamwork",
      hover: "hover:border-blue-400",
    },
    {
      title: "E-commerce",
      desc: "PCI hosting & 24/7 support",
      hover: "hover:border-indigo-400",
    },
  ];

  const colors = {
    orange: "text-orange-600",
    green: "text-green-600",
    blue: "text-blue-600",
  };

  return (
    <section className="bg-white py-28">

      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* HEADER */}
        <h2 className="text-[26px] font-semibold text-center text-gray-900">
          Built for Your Industry's Rules
        </h2>

        <p className="text-center text-gray-500 text-[13px] mt-2 max-w-2xl mx-auto">
          HIPAA for healthcare. PCI-DSS for finance. White-label for MSPs.
          We know the compliance paperwork you're drowning in.
        </p>

        {/* TOP CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {topCards.map((card, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-6 bg-white
              transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >

              <h3 className={`text-[14px] font-semibold ${colors[card.color]}`}>
                {card.title}
              </h3>

              <p className="text-[12px] text-gray-500 mt-2 leading-relaxed">
                {card.desc}
              </p>

              <ul className="mt-4 space-y-2">
                {card.points.map((point, idx) => (
                  <li key={idx} className="flex gap-2 text-[12px] text-gray-600">
                    <span className="text-green-500">✔</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-4 text-[12px] text-blue-600 cursor-pointer hover:underline">
                {card.link}
              </div>

            </div>
          ))}

        </div>

        {/* 🔥 MINI CARDS FIXED */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10">

          {miniCards.map((item, i) => (
            <div
              key={i}
              className={`border border-gray-200 rounded-lg p-4 text-center bg-white
              transition-all duration-300 hover:-translate-y-1 hover:shadow-sm ${item.hover}`}
            >
              <p className="text-[12px] font-medium text-gray-800">
                {item.title}
              </p>
              <p className="text-[11px] text-gray-500 mt-1">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

      {/* CTA */}
      <div className="mt-24 bg-gray-50 py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <p className="text-[11px] text-gray-400">
            Trusted by 1,200+ businesses worldwide
          </p>

          <h2 className="text-[28px] font-semibold text-gray-900 mt-3 leading-tight">
            Talk to Engineers Who <br /> Fix Your IT Problems
          </h2>

          <p className="text-[13px] text-gray-500 mt-4 max-w-xl mx-auto">
            No sales scripts. Just certified engineers who fix server crashes,
            failed migrations, and compliance issues every day.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-[13px] px-6 py-3 rounded-md font-medium transition">
              Talk to Our Team
            </button>

            <button className="border border-gray-300 text-gray-700 text-[13px] px-6 py-3 rounded-md hover:bg-gray-100 transition">
              Start Live Chat
            </button>
          </div>

          {/* STATS */}
          <div className="flex justify-center gap-16 mt-10 text-center">
            <div>
              <h3 className="text-[16px] font-semibold text-gray-900">24hrs</h3>
              <p className="text-[11px] text-gray-500">Setup Time</p>
            </div>

            <div>
              <h3 className="text-[16px] font-semibold text-gray-900">99.99%</h3>
              <p className="text-[11px] text-gray-500">Uptime SLA</p>
            </div>

            <div>
              <h3 className="text-[16px] font-semibold text-gray-900">15min</h3>
              <p className="text-[11px] text-gray-500">Response Time</p>
            </div>
          </div>

          {/* 🔥 CONTACT LINE FIXED */}
          <div className="mt-10 pt-6 border-t border-gray-200 text-[12px] text-gray-500 flex flex-col md:flex-row justify-center gap-4 md:gap-10">
            <span>+1 646 755 2855 (US)</span>
            <span>+91 93538 46486 (India)</span>
            <span>sales@medhacloud.com</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default IndustryAndCTA;