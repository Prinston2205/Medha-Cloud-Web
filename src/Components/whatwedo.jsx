import React from "react";

const WhatWeDo = () => {
  const data = [
    {
      title: "White Label",
      problem: "Clients need support. You don’t have engineers.",
      solution: "We act as your team. Under your brand.",
      bg: "bg-[#f9fafb]",
    },
    {
      title: "Migrations",
      problem: "Downtime. Data loss. Stress.",
      solution: "Zero downtime. Zero data loss.",
      bg: "bg-[#fff7ed]",
    },
    {
      title: "24/7 Support",
      problem: "Server fails at night. No response.",
      solution: "We respond in 15 minutes. Always.",
      bg: "bg-[#eff6ff]",
    },
    {
      title: "Cloud Hosting",
      problem: "Slow servers. Scaling issues.",
      solution: "Fast, reliable, scalable cloud.",
      bg: "bg-[#f0fdf4]",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* TOP */}
        <p className="text-blue-600 text-sm font-medium mb-2">
          What we do every day
        </p>

        <h2 className="text-4xl font-bold text-gray-900">
          What do we do every day?
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl">
          Real problems. Real fixes. Every single day.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {data.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} border border-gray-200 rounded-xl 
              transition-all duration-300 
              hover:-translate-y-1 hover:shadow-lg`}
            >
              
              {/* TITLE */}
              <div className="p-6 pb-0">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>

              {/* SPLIT SECTION */}
              <div className="grid grid-cols-2 mt-6">

                {/* PROBLEM */}
                <div className="p-6 border-r border-gray-200">
                  <p className="text-xs text-gray-400 uppercase mb-2">
                    Problem
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                {/* SOLUTION */}
                <div className="p-6">
                  <p className="text-xs text-gray-400 uppercase mb-2">
                    Solution
                  </p>
                  <p className="text-gray-900 text-sm font-medium leading-relaxed">
                    {item.solution}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;