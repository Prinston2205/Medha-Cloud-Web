import React from "react";
import {
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Shield,
  AlertCircle,
  Mail,
  Database,
  Server,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-[#f9fafb] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">

        {/* HERO TEXT */}
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1]">
          White Label MSP, Cloud Hosting
          <br />
          <span className="text-blue-600">
            & 24/7 Server Support
          </span>
        </h1>

        <p className="mt-6 text-gray-600 text-base max-w-xl mx-auto">
          Can't afford 6 more techs? Server crashed? Migration failed? We
          answer in 15 minutes.
        </p>

        {/* CTA BUTTON */}
        <button className="mt-8 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-md font-semibold shadow-sm transition group">
          <MessageSquare size={18} />
          Chat with us
          <ArrowRight size={18} className="transition group-hover:translate-x-1" />
        </button>

        <p className="text-sm text-gray-500 mt-3">
          Usually responds in under 2 minutes
        </p>

        {/* 🔥 3 CARDS */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="group rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm 
            transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-5 text-[13px]">

              <div className="flex justify-between items-center mb-4">
                <p className="font-semibold">RMM and PSA Dashboard</p>
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-400" />
                    Endpoints Health
                  </span>
                  <span className="text-green-400">847/850</span>
                </p>

                <p className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <Shield size={14} className="text-blue-400" />
                    Patch Compliance
                  </span>
                  <span className="text-blue-400">98.2%</span>
                </p>

                <p className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <AlertCircle size={14} className="text-yellow-400" />
                    Open Tickets
                  </span>
                  <span className="text-yellow-400">23 active</span>
                </p>
              </div>

              <div className="mt-4 text-gray-400 text-xs border-t border-gray-700 pt-3">
                Logged in: ourengineer@yourbrand.com
                <span className="text-green-400 ml-2">24/7 Active</span>
              </div>
            </div>

            <div className="p-5 text-left flex justify-between items-center">
              <div>
                <h3 className="flex items-center gap-2 font-semibold text-gray-900">
                  <Server size={18} className="text-blue-600" />
                  White Label MSP
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  You can't afford 6 more techs. We’ll be your 24/7 team.
                  Your clients never know.
                </p>
              </div>

              <ArrowRight
                size={18}
                className="text-blue-600 opacity-0 group-hover:opacity-100 transition group-hover:translate-x-1"
              />
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm 
            transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-5 text-[13px]">

              <div className="flex justify-between mb-4">
                <p className="font-semibold">Migration Dashboard</p>
                <span className="text-green-400 text-xs">Live</span>
              </div>

              <p className="text-xs text-gray-400 mb-1">Exchange → M365</p>

              <div className="w-full bg-gray-700 rounded-full h-1.5 mb-3">
                <div className="bg-green-400 h-1.5 rounded-full w-[94%]"></div>
              </div>

              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Mail size={14} className="text-blue-400" />
                  1,247 mailboxes migrated
                </p>

                <p className="flex items-center gap-2">
                  <Database size={14} className="text-orange-400" />
                  847 GB transferred
                </p>
              </div>

              <div className="flex justify-between mt-4 text-xs text-gray-400 border-t border-gray-700 pt-3">
                <span>Zero downtime</span>
                <span className="text-green-400">0 errors</span>
              </div>
            </div>

            <div className="p-5 text-left flex justify-between items-center">
              <div>
                <h3 className="flex items-center gap-2 font-semibold text-gray-900">
                  <Server size={18} className="text-orange-500" />
                  Cloud
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Need Microsoft 365 set up today? Done. HIPAA compliant.
                  We handle the paperwork.
                </p>
              </div>

              <ArrowRight
                size={18}
                className="text-orange-500 opacity-0 group-hover:opacity-100 transition group-hover:translate-x-1"
              />
            </div>
          </div>

          {/* CARD 3 */}
          <div className="group rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm 
            transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-5 text-[13px]">

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

              <p className="mb-2">847 tickets resolved this month</p>

              <div className="text-green-400 text-sm border-t border-gray-700 pt-3">
                99.8% SLA compliance
              </div>
            </div>

            <div className="p-5 text-left flex justify-between items-center">
              <div>
                <h3 className="flex items-center gap-2 font-semibold text-gray-900">
                  <Server size={18} className="text-green-500" />
                  Professional Services
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Windows crashed? Exchange won't start? SQL is down.
                  We fix it in 15 minutes.
                </p>
              </div>

              <ArrowRight
                size={18}
                className="text-green-500 opacity-0 group-hover:opacity-100 transition group-hover:translate-x-1"
              />
            </div>
          </div>

        </div>

        {/* 🔥 STATS (NOT REMOVED — FIXED SPACING) */}
        <div className="mt-16 text-center">

          <p className="text-gray-500 text-sm mb-6">
            9 years in business fixing IT problems for MSPs, hospitals, banks, manufacturers and many industries
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

            <div>
              <p className="text-2xl font-bold text-gray-900">9+</p>
              <p className="text-gray-500 text-sm mt-1">Years in business</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-gray-900">1.2K+</p>
              <p className="text-gray-500 text-sm mt-1">Businesses served</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-gray-900">5K+</p>
              <p className="text-gray-500 text-sm mt-1">Servers managed</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-gray-900">1+ PB</p>
              <p className="text-gray-500 text-sm mt-1">Data migrated</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-gray-900">99.99%</p>
              <p className="text-gray-500 text-sm mt-1">Uptime SLA</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;