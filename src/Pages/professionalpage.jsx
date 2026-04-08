import React from "react";
import {
  Server,
  Cloud,
  ShieldCheck,
  Database,
  Users,
  Workflow,
} from "lucide-react";

const ProfessionalServicesPage = () => {
  return (
    <div className="font-sans">

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
          Professional IT Services
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Expert-led Microsoft 365, Azure, and cloud migration services
          designed for modern businesses.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-[#1e3a8a] text-white px-6 py-3 rounded-lg hover:scale-105 transition">
            Get Started
          </button>
          <button className="border border-[#1e3a8a] text-[#1e3a8a] px-6 py-3 rounded-lg hover:scale-105 transition">
            Talk to Expert
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Professional Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border p-6 rounded-xl hover:shadow-md">
            <Server className="text-blue-600 mb-4" />
            <h3 className="font-semibold mb-2">M365 Migration</h3>
            <p className="text-gray-500 text-sm">
              Seamless migration to Microsoft 365 with zero downtime.
            </p>
          </div>

          <div className="border p-6 rounded-xl hover:shadow-md">
            <Cloud className="text-blue-600 mb-4" />
            <h3 className="font-semibold mb-2">Azure Deployment</h3>
            <p className="text-gray-500 text-sm">
              Scalable Azure infrastructure setup and optimization.
            </p>
          </div>

          <div className="border p-6 rounded-xl hover:shadow-md">
            <Database className="text-blue-600 mb-4" />
            <h3 className="font-semibold mb-2">Exchange Migration</h3>
            <p className="text-gray-500 text-sm">
              Secure email migration to Exchange Online.
            </p>
          </div>

          <div className="border p-6 rounded-xl hover:shadow-md">
            <Users className="text-blue-600 mb-4" />
            <h3 className="font-semibold mb-2">Teams Deployment</h3>
            <p className="text-gray-500 text-sm">
              Full Microsoft Teams setup and configuration.
            </p>
          </div>

          <div className="border p-6 rounded-xl hover:shadow-md">
            <ShieldCheck className="text-blue-600 mb-4" />
            <h3 className="font-semibold mb-2">Security & Compliance</h3>
            <p className="text-gray-500 text-sm">
              Implement enterprise-grade security solutions.
            </p>
          </div>

          <div className="border p-6 rounded-xl hover:shadow-md">
            <Workflow className="text-blue-600 mb-4" />
            <h3 className="font-semibold mb-2">Hybrid Setup</h3>
            <p className="text-gray-500 text-sm">
              Integrate on-premise and cloud environments.
            </p>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Process
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">

          <div>
            <h3 className="font-semibold mb-2">Discover</h3>
            <p className="text-gray-500 text-sm">Understand your needs</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Plan</h3>
            <p className="text-gray-500 text-sm">Create strategy</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Migrate</h3>
            <p className="text-gray-500 text-sm">Execute smoothly</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Optimize</h3>
            <p className="text-gray-500 text-sm">Improve performance</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your IT?
        </h2>

        <button className="bg-[#1e3a8a] text-white px-6 py-3 rounded-lg hover:scale-105 transition">
          Start Your Migration
        </button>
      </section>

    </div>
  );
};

export default ProfessionalServicesPage;