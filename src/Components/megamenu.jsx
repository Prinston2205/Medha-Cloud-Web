import { motion } from "framer-motion";
import { Server, Cloud, Briefcase, Building, Download } from "lucide-react";
import { Link } from "react-router-dom";

const menuConfig = {
  whiteLabel: {
    icon: Server,
    title: "White Label Guide",
    desc: "Scale your MSP business",
  },
  cloud: {
    icon: Cloud,
    title: "Cloud Guide",
    desc: "Explore cloud solutions",
  },
  professional: {
    icon: Briefcase,
    title: "Professional Services",
    desc: "Grow your business",
  },
  company: {
    icon: Building,
    title: "Company Overview",
    desc: "Know about us",
  },
};

const MegaMenu = ({ type }) => {
  const data = menuConfig[type];
  if (!data) return null;

  const Icon = data.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute top-full left-0 w-screen bg-white shadow-2xl z-50"
    >
      <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-3 gap-10">

        {/* COLUMN 1 */}
        <div>
          <h3 className="font-semibold mb-4 text-sm">{type.toUpperCase()}</h3>

          <ul className="space-y-3">
            <Link to={`/${type}`} className="block text-sm hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md">
              Service 1
            </Link>
            <Link to={`/${type}`} className="block text-sm hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md">
              Service 2
            </Link>
          </ul>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h3 className="font-semibold mb-4 text-sm">Solutions</h3>

          <ul className="space-y-3">
            <Link to={`/${type}`} className="block text-sm hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md">
              Solution 1
            </Link>
            <Link to={`/${type}`} className="block text-sm hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md">
              Solution 2
            </Link>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-900 text-white rounded-2xl p-8 flex flex-col items-center justify-center text-center">
          <Icon size={36} className="mb-4" />
          <h3 className="text-lg font-semibold mb-2">{data.title}</h3>
          <p className="text-sm mb-4">{data.desc}</p>

          <button className="bg-white text-blue-700 px-4 py-2 text-sm rounded-md flex items-center gap-2 hover:bg-gray-100">
            <Download size={16} />
            Download
          </button>
        </div>

      </div>
    </motion.div>
  );
};

export default MegaMenu;