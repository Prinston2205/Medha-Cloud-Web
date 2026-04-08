import React from "react";
import { Cloud, Server, ShieldCheck, Database } from "lucide-react";

const CloudPage = () => {
  return (
    <div className="font-sans">

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
          Cloud Services & Solutions
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Scalable, secure, and high-performance cloud infrastructure
          tailored for modern businesses.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-[#1e3a8a] text-white px-6 py-3 rounded-lg hover:scale-105 transition">
            Get Started
          </button>
          <button className="border border-[#1e3a8a] text-[#1e3a8a] px-6 py-3 rounded-lg hover:scale-105 transition">
            Contact Sales
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Cloud Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border rounded-xl p-6 hover:shadow-md transition">
            <Cloud className="text-blue-600 mb-4" />
            <h3 className="font-semibold mb-2">Cloud Migration</h3>
            <p className="text-gray-500 text-sm">
              Seamlessly migrate your infrastructure with zero downtime.
            </p>
          </div>

          <div className="border rounded-xl p-6 hover:shadow-md transition">
            <Server className="text-blue-600 mb-4" />
            <h3 className="font-semibold mb-2">Cloud Hosting</h3>
            <p className="text-gray-500 text-sm">
              Reliable and scalable hosting tailored to your needs.
            </p>
          </div>

          <div className="border rounded-xl p-6 hover:shadow-md transition">
            <ShieldCheck className="text-blue-600 mb-4" />
            <h3 className="font-semibold mb-2">Cloud Security</h3>
            <p className="text-gray-500 text-sm">
              Enterprise-grade protection for your cloud assets.
            </p>
          </div>

          <div className="border rounded-xl p-6 hover:shadow-md transition">
            <Database className="text-blue-600 mb-4" />
            <h3 className="font-semibold mb-2">Backup & Recovery</h3>
            <p className="text-gray-500 text-sm">
              Ensure business continuity with automated backups.
            </p>
          </div>

          <div className="border rounded-xl p-6 hover:shadow-md transition">
            <Cloud className="text-blue-600 mb-4" />
            <h3 className="font-semibold mb-2">Multi-Cloud Strategy</h3>
            <p className="text-gray-500 text-sm">
              Optimize across AWS, Azure, and Google Cloud.
            </p>
          </div>

          <div className="border rounded-xl p-6 hover:shadow-md transition">
            <Server className="text-blue-600 mb-4" />
            <h3 className="font-semibold mb-2">DevOps & Automation</h3>
            <p className="text-gray-500 text-sm">
              CI/CD pipelines and infrastructure automation.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default CloudPage;