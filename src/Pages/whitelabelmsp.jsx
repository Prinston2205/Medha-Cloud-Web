import React, { useState } from "react";
import {
  Check,
  Server,
  ShieldCheck,
  Cloud,
  Users,
  Briefcase,
  Star,
} from "lucide-react";

const data = {
  stats: [
    "32 Active MSP Partners",
    "99.99% SLA Uptime",
    "24/7 Support Coverage",
    "4.9/5 Partner Satisfaction",
  ],

  services: [
    { icon: Server, title: "Managed IT", desc: "End-to-end IT support" },
    { icon: Server, title: "NOC Services", desc: "24/7 monitoring" },
    { icon: ShieldCheck, title: "SOC Services", desc: "Security operations" },
    { icon: Cloud, title: "Cloud Services", desc: "Cloud management" },
    { icon: Users, title: "Staff Augmentation", desc: "Scale your team" },
    { icon: Briefcase, title: "Partner Program", desc: "Grow your MSP" },
  ],

  pricing: [
    {
      name: "L1 Engineer",
      price: "$1,600",
      features: ["Basic Support", "Monitoring", "Ticket Handling"],
    },
    {
      name: "L2 Engineer",
      price: "$2,500",
      features: ["Advanced Support", "Escalations", "Server Mgmt"],
      recommended: true,
    },
    {
      name: "L3 Engineer",
      price: "$2,700",
      features: ["Expert Support", "Architecture", "Critical Issues"],
    },
  ],
};

const WhiteLabelMSP = () => {
  const [pricingType, setPricingType] = useState("engineer");

  return (
    <div className="font-sans">

      {/* HERO */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-24 px-6 text-center">
        <p className="text-sm text-slate-500 mb-3">
          Home &gt; White Label MSP Services
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-[#1e3a8a] mb-6">
          White Label Managed Services for MSPs
        </h1>

        <p className="text-slate-500 max-w-2xl mx-auto mb-8">
          Scale your MSP business with 24/7 support, expert engineers, and
          white-label solutions.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-[#1e3a8a] text-white px-6 py-3 rounded-lg hover:bg-[#152a61] transition">
            Start Free Trial
          </button>
          <button className="border border-[#1e3a8a] text-[#1e3a8a] px-6 py-3 rounded-lg hover:bg-slate-100 transition">
            View Pricing
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 text-center shadow-sm"
            >
              <p className="text-lg font-bold text-slate-900">{stat}</p>
              <p className="text-sm text-slate-500 mt-1">Key Highlight</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          White Label Managed IT Services for MSPs
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {data.services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group border border-gray-100 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <Icon className="text-blue-600" />
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-500">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="bg-slate-50 py-24 px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Tool Integrations
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-6">
          {["PSA & RMM", "Cloud", "Security", "Backup", "Networking"].map(
            (item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-md transition"
              >
                <p className="font-semibold text-slate-900">{item}</p>
                <p className="text-sm text-slate-500 mt-2">
                  Microsoft, AWS, Google
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Why MSPs Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <Star className="text-blue-600" />
              </div>
              <p className="text-sm text-slate-500">
                Cost-effective, scalable, and 24/7 coverage
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-slate-50 py-24 px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">
          Certifications
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-xl p-6"
            >
              Badge {i + 1}
            </div>
          ))}
        </div>

        <p className="mt-6 text-slate-500">
          Every engineer on your account holds active certifications.
        </p>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Real MSPs, Real Results
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition"
            >
              <p className="text-xs text-slate-500">Challenge</p>
              <p className="mb-2 text-slate-900">Scaling support</p>

              <p className="text-xs text-slate-500">Solution</p>
              <p className="mb-2 text-slate-900">White label NOC</p>

              <div className="text-blue-600 font-semibold">
                +$50K MRR
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-slate-50 py-24 px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          White Label IT Support Pricing
        </h2>

        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setPricingType("engineer")}
            className="px-4 py-2 border rounded-lg hover:bg-slate-100"
          >
            Per Engineer
          </button>
          <button
            onClick={() => setPricingType("device")}
            className="px-4 py-2 border rounded-lg hover:bg-slate-100"
          >
            Per Device
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data.pricing.map((plan, i) => (
            <div
              key={i}
              className={`bg-white border rounded-xl p-6 transition-all ${
                plan.recommended
                  ? "border-2 border-blue-600 shadow-lg scale-105"
                  : "border-gray-100 hover:shadow-xl"
              }`}
            >
              {plan.recommended && (
                <div className="text-blue-600 text-sm mb-2 font-medium">
                  Recommended
                </div>
              )}

              <h3 className="font-semibold text-slate-900 mb-2">
                {plan.name}
              </h3>

              <p className="text-3xl font-bold text-slate-900 mb-4">
                {plan.price}
              </p>

              <ul className="space-y-2 text-sm text-left">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    {f}
                  </li>
                ))}
              </ul>

              <button className="mt-6 bg-[#1e3a8a] text-white px-4 py-2 rounded-lg hover:bg-[#152a61] transition">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default WhiteLabelMSP;