import React from "react";
import { Building, Target, Eye, Users } from "lucide-react";

const CompanyPage = () => {
  return (
    <div className="font-sans">

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
          About Medha Cloud
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto">
          We empower MSPs and businesses with scalable cloud, IT,
          and white-label solutions worldwide.
        </p>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Who We Are
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto">
          Medha Cloud is a global IT services provider specializing in
          managed services, cloud solutions, and professional services.
          We help MSPs scale efficiently with 24/7 support and expert engineers.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="text-center">
            <Target className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm">
              To empower MSPs with reliable, scalable, and cost-effective
              IT solutions.
            </p>
          </div>

          <div className="text-center">
            <Eye className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600 text-sm">
              To become a global leader in white-label managed services
              and cloud innovation.
            </p>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div className="p-6">
            <Users className="mx-auto text-blue-600 mb-3" />
            <h3 className="font-semibold mb-2">Customer First</h3>
            <p className="text-gray-500 text-sm">
              We prioritize customer success in everything we do.
            </p>
          </div>

          <div className="p-6">
            <Building className="mx-auto text-blue-600 mb-3" />
            <h3 className="font-semibold mb-2">Integrity</h3>
            <p className="text-gray-500 text-sm">
              Transparency and trust drive our relationships.
            </p>
          </div>

          <div className="p-6">
            <Target className="mx-auto text-blue-600 mb-3" />
            <h3 className="font-semibold mb-2">Innovation</h3>
            <p className="text-gray-500 text-sm">
              We continuously improve and innovate our solutions.
            </p>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">

          <div>
            <h3 className="text-2xl font-bold text-[#1e3a8a]">32+</h3>
            <p className="text-gray-500 text-sm">MSP Partners</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#1e3a8a]">99.99%</h3>
            <p className="text-gray-500 text-sm">Uptime SLA</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#1e3a8a]">24/7</h3>
            <p className="text-gray-500 text-sm">Support</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#1e3a8a]">4.9/5</h3>
            <p className="text-gray-500 text-sm">Customer Rating</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Work Together
        </h2>

        <button className="bg-[#1e3a8a] text-white px-6 py-3 rounded-lg hover:scale-105 transition">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default CompanyPage;