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
      <section className="text-center py-20 px-6">
        <p className="text-sm text-gray-500 mb-2">
          Home &gt; White Label MSP Services
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
          White Label Managed Services for MSPs
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Scale your MSP business with 24/7 support, expert engineers, and
          white-label solutions.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-[#1e3a8a] text-white px-6 py-3 rounded-lg hover:scale-105 transition">
            Start Free Trial
          </button>
          <button className="border border-[#1e3a8a] text-[#1e3a8a] px-6 py-3 rounded-lg hover:scale-105 transition">
            View Pricing
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gray-50 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {data.stats.map((stat, i) => (
            <div key={i} className="font-semibold text-gray-700">
              {stat}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          White Label Managed IT Services for MSPs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {data.services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="border rounded-xl p-6 hover:shadow-md transition"
              >
                <Icon className="text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Tool Integrations
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-6 text-center">
          {["PSA & RMM", "Cloud", "Security", "Backup", "Networking"].map(
            (item, i) => (
              <div key={i} className="border p-6 rounded-xl bg-white">
                <p className="font-semibold">{item}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Microsoft, AWS, Google
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why MSPs Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="p-4">
              <Star className="text-blue-600 mb-2" />
              <p className="text-gray-600 text-sm">
                Cost-effective, scalable, and 24/7 coverage
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Certifications</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="border p-6 rounded-xl bg-white">
              Badge {i + 1}
            </div>
          ))}
        </div>

        <p className="mt-6 text-gray-500">
          Every engineer on your account holds active certifications.
        </p>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Real MSPs, Real Results
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="border p-6 rounded-xl">
              <p className="text-sm text-gray-500">Challenge</p>
              <p className="mb-2">Scaling support</p>

              <p className="text-sm text-gray-500">Solution</p>
              <p className="mb-2">White label NOC</p>

              <div className="text-blue-600 font-semibold">
                +$50K MRR
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          White Label IT Support Pricing
        </h2>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setPricingType("engineer")}
            className="px-4 py-2 border rounded"
          >
            Per Engineer
          </button>
          <button
            onClick={() => setPricingType("device")}
            className="px-4 py-2 border rounded"
          >
            Per Device
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {data.pricing.map((plan, i) => (
            <div
              key={i}
              className={`border p-6 rounded-xl ${
                plan.recommended ? "border-blue-600 scale-105" : ""
              }`}
            >
              {plan.recommended && (
                <div className="text-blue-600 text-sm mb-2">
                  Recommended
                </div>
              )}

              <h3 className="font-semibold mb-2">{plan.name}</h3>
              <p className="text-2xl font-bold mb-4">{plan.price}</p>

              <ul className="space-y-2 text-sm">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    {f}
                  </li>
                ))}
              </ul>

              <button className="mt-6 bg-[#1e3a8a] text-white px-4 py-2 rounded hover:scale-105 transition">
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