import { motion } from "framer-motion";
import {
  Server,
  Cloud,
  Briefcase,
  Building,
  Download,
  Users,
  ShieldCheck,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ================= THEME SYSTEM ================= */
const themes = {
  whiteLabel: {
    bg: "bg-blue-600",
    light: "bg-blue-50",
    text: "text-blue-600",
  },
  cloud: {
    bg: "bg-orange-500",
    light: "bg-orange-50",
    text: "text-orange-500",
  },
  professional: {
    bg: "bg-green-600",
    light: "bg-green-50",
    text: "text-green-600",
  },
  company: {
    bg: "bg-blue-600",
    light: "bg-blue-50",
    text: "text-blue-600",
  },
};

/* ================= CONTENT ================= */
const menuConfig = {
  whiteLabel: {
    links: [
      {
        title: "Getting Started",
        desc: "Kickstart your MSP journey",
        icon: Server,
      },
      {
        title: "Why Partner With Us",
        desc: "Grow your MSP business",
        icon: Users,
      },
      {
        title: "Managed Services",
        desc: "End-to-end IT support",
        icon: Settings,
      },
      {
        title: "Staff Augmentation",
        desc: "Scale your team",
        icon: Briefcase,
      },
    ],
    card: {
      icon: Server,
      title: "MSP Services Guide",
      desc: "Scale your MSP business efficiently",
      button: "Download Guide",
    },
  },

  cloud: {
    links: [
      {
        title: "Hosting Solutions",
        desc: "Reliable cloud hosting",
        icon: Cloud,
      },
      {
        title: "Microsoft Solutions",
        desc: "Azure & M365 services",
        icon: Server,
      },
      {
        title: "Specialty Hosting",
        desc: "Custom hosting infra",
        icon: Settings,
      },
      {
        title: "Security & Compliance",
        desc: "Secure cloud operations",
        icon: ShieldCheck,
      },
    ],
    card: {
      icon: Cloud,
      title: "Cloud Solutions",
      desc: "Innovative cloud strategies",
      button: "Get Guide",
    },
  },

  professional: {
    links: [
      {
        title: "Server Support",
        desc: "Reliable server maintenance",
        icon: Server,
      },
      {
        title: "IT Services",
        desc: "Complete IT solutions",
        icon: Settings,
      },
      {
        title: "IT Consulting",
        desc: "Expert guidance",
        icon: Briefcase,
      },
      {
        title: "Cloud Migrations",
        desc: "Smooth transitions",
        icon: Cloud,
      },
    ],
    card: {
      icon: Briefcase,
      title: "IT Services Roadmap",
      desc: "Plan your IT growth",
      button: "Download",
    },
  },

  company: {
    links: [
      {
        title: "About Us",
        desc: "Learn about our company",
        icon: Building,
      },
      {
        title: "Careers",
        desc: "Join our team",
        icon: Users,
      },
      {
        title: "Support",
        desc: "Get help anytime",
        icon: ShieldCheck,
      },
      {
        title: "Resources",
        desc: "Explore materials",
        icon: Settings,
      },
    ],
    card: {
      icon: Building,
      title: "Company Overview",
      desc: "Know more about us",
      button: "Learn More",
    },
  },
};

/* ================= COMPONENT ================= */
const MegaMenu = ({ type }) => {
  const data = menuConfig[type];
  const theme = themes[type];

  if (!data) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-200 z-50"
    >
      <div className="max-w-7xl mx-auto px-10 py-8">

        {/* GRID */}
        <div className="grid grid-cols-12 gap-6">

          {/* LEFT SIDE (LINKS) */}
          <div className="col-span-8 grid grid-cols-2 gap-4">

            {data.links.map((item, i) => {
              const Icon = item.icon;

              return (
                <Link
                  key={i}
                  to={`/${type}`}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition"
                >
                  {/* ICON */}
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-lg ${theme.light}`}
                  >
                    <Icon className={`w-5 h-5 ${theme.text}`} />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-800">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              );
            })}

          </div>

          {/* RIGHT SIDE CARD */}
          <div className="col-span-4">
            <div
              className={`${theme.bg} h-full rounded-2xl p-6 flex flex-col justify-between`}
            >
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <data.card.icon className="text-white w-6 h-6" />
                </div>

                <h3 className="text-white text-lg font-bold mb-2">
                  {data.card.title}
                </h3>

                <p className="text-white/80 text-sm">
                  {data.card.desc}
                </p>
              </div>

              <button className="mt-6 bg-white text-black text-sm font-medium px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition w-fit">
                <Download size={16} />
                {data.card.button}
              </button>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default MegaMenu;