import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#f9fafb] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
        
        {/* HERO TEXT */}
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1]">
          White Label MSP, Cloud Hosting
          <br />
          <span className="text-blue-600">
            & 24/7 Server Support
          </span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-xl mx-auto">
          Can't afford 6 more techs? Server crashed? Migration failed? We
          answer in 15 minutes.
        </p>

        <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-md font-semibold shadow-md transition">
          Chat with us
        </button>

        <p className="text-sm text-gray-500 mt-3">
          Usually responds in under 2 minutes
        </p>

        {/* 🔥 3 CARDS */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="rounded-xl overflow-hidden bg-white border shadow-sm 
            transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            
            <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-5 text-sm">
              
              <div className="flex justify-between items-center mb-4">
                <p className="font-semibold">RMM and PSA Dashboard</p>
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="flex justify-between">
                  <span>Endpoints Health</span>
                  <span className="text-green-400">847/850</span>
                </p>
                <p className="flex justify-between">
                  <span>Patch Compliance</span>
                  <span className="text-blue-400">98.2%</span>
                </p>
                <p className="flex justify-between">
                  <span>Open Tickets</span>
                  <span className="text-yellow-400">23 active</span>
                </p>
              </div>

              <div className="mt-4 text-gray-400 text-xs">
                Logged in: ourengineer@yourbrand.com
                <span className="text-green-400 ml-2">24/7 Active</span>
              </div>
            </div>

            <div className="p-5 text-left">
              <h3 className="font-semibold text-gray-900">
                White Label MSP
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                You can't afford 6 more techs. We’ll be your 24/7 team.
                Your clients never know.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-xl overflow-hidden bg-white border shadow-sm 
            transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            
            <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-5 text-sm">
              
              <div className="flex justify-between mb-4">
                <p className="font-semibold">Migration Dashboard</p>
                <span className="text-green-400 text-xs">Live</span>
              </div>

              <p className="text-xs text-gray-400 mb-1">Exchange → M365</p>

              <div className="w-full bg-gray-700 rounded-full h-1.5 mb-3">
                <div className="bg-green-400 h-1.5 rounded-full w-[94%]"></div>
              </div>

              <div className="space-y-2">
                <p>1,247 mailboxes migrated</p>
                <p>847 GB transferred</p>
              </div>

              <div className="flex justify-between mt-4 text-xs text-gray-400">
                <span>Zero downtime</span>
                <span className="text-green-400">0 errors</span>
              </div>
            </div>

            <div className="p-5 text-left">
              <h3 className="font-semibold text-gray-900">
                Cloud
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Need Microsoft 365 set up today? Done. HIPAA compliant.
                We handle the paperwork.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="rounded-xl overflow-hidden bg-white border shadow-sm 
            transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            
            <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-5 text-sm">
              
              <div className="flex justify-between mb-4">
                <p className="font-semibold">Live Support Queue</p>
                <span className="text-green-400 text-xs">
                  15m avg response
                </span>
              </div>

              <div className="border border-gray-600 rounded-md p-3 mb-3">
                <p className="text-red-400 text-xs font-semibold">
                  CRITICAL
                </p>
                <p className="text-sm">
                  <span className="text-red-400 font-semibold">
                    SQL Server
                  </span>{" "}
                  down – 150 users affected
                </p>
                <p className="text-green-400 text-xs mt-1">
                  ✔ Engineer assigned
                </p>
              </div>

              <p className="mb-2">
                847 tickets resolved this month
              </p>

              <div className="text-green-400 text-sm">
                99.8% SLA compliance
              </div>
            </div>

            <div className="p-5 text-left">
              <h3 className="font-semibold text-gray-900">
                Professional Services
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Windows crashed? Exchange won't start? SQL is down.
                We fix it in 15 minutes.
              </p>
            </div>
          </div>

        </div>

        {/* 🔥 STATS SECTION */}
        <div className="mt-20 text-center">
          
          <p className="text-gray-500 text-sm mb-8">
            9 years in business fixing IT problems for MSPs, hospitals, banks, manufacturers and many industries
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            
            <div>
              <p className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition">9+</p>
              <p className="text-gray-500 text-sm mt-1">Years in business</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition">1.2K+</p>
              <p className="text-gray-500 text-sm mt-1">Businesses served</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition">5K+</p>
              <p className="text-gray-500 text-sm mt-1">Servers managed</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition">1+ PB</p>
              <p className="text-gray-500 text-sm mt-1">Data migrated</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition">99.99%</p>
              <p className="text-gray-500 text-sm mt-1">Uptime SLA</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;