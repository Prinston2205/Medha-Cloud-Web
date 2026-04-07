import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0b1c2c] to-black text-gray-300 pt-16 pb-8 px-6 lg:px-16">
      
      {/* TOP 3 CARDS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
        
        {/* CARD 1 */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 
          hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] 
          transition duration-300 cursor-pointer">

          <h3 className="text-white font-semibold text-lg mb-3">
            MEDHA CLOUD
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            White-label MSP services for partners. Scale your business without hiring.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 
          hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] 
          transition duration-300 cursor-pointer">

          <h3 className="text-white font-semibold text-lg mb-3">
            US — United States
          </h3>
          <p className="text-sm text-gray-400">
            30 N Gould St Ste R <br />
            Sheridan, WY 82801
          </p>
          <p className="text-orange-400 mt-2 text-sm">
            +1 646 775 2855
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 
          hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] 
          transition duration-300 cursor-pointer">

          <h3 className="text-white font-semibold text-lg mb-3">
            IN — India
          </h3>
          <p className="text-sm text-gray-400">
            #74, 7th Cross, Krishna Garden <br />
            Bangalore 560083
          </p>
          <p className="text-orange-400 mt-2 text-sm">
            +91 93536 44646
          </p>
          <p className="text-orange-400 text-sm">
            sales@medhahosting.com
          </p>
        </div>
      </div>

      {/* LINKS SECTION */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-6 gap-8 border-t border-white/10 pt-10">
        
        {/* COLUMN */}
        {[
          {
            title: "Services",
            links: [
              "White Label MSP Services",
              "Cloud Hosting",
              "Professional Services",
              "Server Support",
            ],
          },
          {
            title: "Migration Services",
            links: [
              "Microsoft 365 Migration",
              "Exchange to M365",
              "Google Workspace Migration",
              "IMAP Email Migration",
              "Tenant-to-Tenant Migration",
              "GoDaddy to M365",
              "Migration Cost Calculator",
            ],
          },
          {
            title: "Cloud Hosting",
            links: [
              "VPS Hosting",
              "Dedicated Servers",
              "Microsoft 365",
              "Microsoft Azure",
              "HIPAA Cloud Hosting",
              "Private Cloud",
              "Security & Compliance",
              "PCI DSS Hosting",
            ],
          },
          {
            title: "Company",
            links: ["About Us", "Careers", "Blog", "Contact"],
          },
          {
            title: "Legal",
            links: ["Privacy Policy", "Terms of Service", "AUP", "SLA"],
          },
          {
            title: "Free Tools",
            links: [
              "Tools Hub",
              "M365 License Comparison",
              "Azure Pricing Calculator",
              "MSP Pricing Calculator",
              "Email Security Analyzer",
            ],
          },
        ].map((section, i) => (
          <div key={i}>
            <h4 className="text-white font-semibold mb-4">
              {section.title}
            </h4>

            <ul className="space-y-2">
              {section.links.map((link, idx) => (
                <li
                  key={idx}
                  className="text-sm text-gray-400 
                    hover:text-white hover:translate-x-1 hover:scale-[1.02]
                    transition duration-200 cursor-pointer"
                >
                  • {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* CERTIFICATIONS */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Certifications
          </h4>

          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white hover:scale-[1.02] transition">
              • ISO 27001:2022
            </li>
            <li className="hover:text-white hover:scale-[1.02] transition">
              • SOC 2 Type II
            </li>
            <li className="hover:text-white hover:scale-[1.02] transition">
              • Microsoft Partner
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        
        <p>© 2026 Medhacloud. All rights reserved.</p>

        <div className="flex gap-4 mt-4 md:mt-0">
          <div className="w-8 h-8 flex items-center justify-center border border-white/20 rounded hover:bg-white/10 cursor-pointer">
            X
          </div>
          <div className="w-8 h-8 flex items-center justify-center border border-white/20 rounded hover:bg-white/10 cursor-pointer">
            in
          </div>
          <div className="w-8 h-8 flex items-center justify-center border border-white/20 rounded hover:bg-white/10 cursor-pointer">
            f
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;