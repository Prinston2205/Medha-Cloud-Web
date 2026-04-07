import React from "react";

const ClientStories = () => {
  const stories = [
    {
      initials: "JD",
      name: "James Davis",
      role: "CEO, TechVision MSP",
      color: "blue",

      stats: [
        { value: "45%", label: "Client Satisfaction ↑" },
        { value: "4 wks", label: "To 24/7 Coverage" },
      ],

      desc: `"We were losing clients to bigger MSPs. Medhacloud gave us 24/7 NOC coverage in 4 weeks. Client satisfaction jumped 45%. Now we compete with the big players."`,

      tag: "White Label MSP",
    },
    {
      initials: "SL",
      name: "Sarah Lopez",
      role: "IT Director, CloudFirst Partners",
      color: "orange",

      stats: [
        { value: "500+", label: "Users Migrated" },
        { value: "0", label: "Downtime Hours" },
      ],

      desc: `"Moving 500+ users from Google Workspace to Microsoft 365 felt impossible. Medhacloud handled the entire migration with zero downtime. Every mailbox, file, and calendar entry transferred perfectly."`,

      tag: "Microsoft 365 Migration",
    },
    {
      initials: "RG",
      name: "Robert Garcia",
      role: "CIO, Sterling Manufacturing",
      color: "green",

      stats: [
        { value: "60 min", label: "Crisis Resolved" },
        { value: "150", label: "Employees Saved" },
      ],

      desc: `"3 AM Saturday — Active Directory crashed, Exchange wouldn’t start. 150 employees couldn’t work Monday. Medhacloud responded in 15 minutes and restored everything within an hour. Saved our business."`,

      tag: "24/7 Server Support",
    },
  ];

  const colorStyles = {
    blue: {
      avatar: "bg-blue-100 text-blue-700",
      tag: "bg-blue-50 text-blue-600",
    },
    orange: {
      avatar: "bg-orange-100 text-orange-700",
      tag: "bg-orange-50 text-orange-600",
    },
    green: {
      avatar: "bg-green-100 text-green-700",
      tag: "bg-green-50 text-green-600",
    },
  };

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* HEADER */}
        <h2 className="text-[30px] font-semibold text-gray-900 text-center">
          Client Stories
        </h2>

        <p className="text-gray-500 text-[14px] text-center mt-3 max-w-2xl mx-auto">
          2-person MSPs competing with enterprise providers. 500+ user migrations
          with zero downtime. Saturday crisis resolved in 60 minutes.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {stories.map((item, i) => {
            const style = colorStyles[item.color];

            return (
              <div
                key={i}
                className="p-7 border border-gray-200 rounded-2xl bg-white
                transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >

                {/* USER */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full text-sm font-semibold ${style.avatar}`}
                  >
                    {item.initials}
                  </div>

                  <div>
                    <h4 className="text-[14px] font-semibold text-gray-900">
                      {item.name}
                    </h4>
                    <p className="text-[12px] text-gray-500">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* STATS */}
                <div className="flex justify-between mt-6">
                  {item.stats.map((s, idx) => (
                    <div key={idx}>
                      <p className="text-[20px] font-semibold text-gray-900">
                        {s.value}
                      </p>
                      <p className="text-[11px] text-gray-500 mt-1">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* DESC */}
                <p className="text-[13px] text-gray-600 mt-6 leading-relaxed">
                  {item.desc}
                </p>

                {/* TAG */}
                <div className="mt-6">
                  <span
                    className={`text-[11px] px-3 py-1 rounded-md font-medium ${style.tag}`}
                  >
                    {item.tag}
                  </span>
                </div>

              </div>
            );
          })}

        </div>

        {/* BOTTOM STATS */}
        <div className="border-t border-gray-200 mt-16 pt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-[22px] font-semibold text-gray-900">4.9/5</h3>
            <p className="text-[12px] text-gray-500 mt-1">Average Rating</p>
          </div>

          <div>
            <h3 className="text-[22px] font-semibold text-gray-900">1.2K+</h3>
            <p className="text-[12px] text-gray-500 mt-1">Happy Clients</p>
          </div>

          <div>
            <h3 className="text-[22px] font-semibold text-gray-900">99.9%</h3>
            <p className="text-[12px] text-gray-500 mt-1">Client Retention</p>
          </div>

          <div>
            <h3 className="text-[22px] font-semibold text-gray-900">24/7</h3>
            <p className="text-[12px] text-gray-500 mt-1">Support Available</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ClientStories;