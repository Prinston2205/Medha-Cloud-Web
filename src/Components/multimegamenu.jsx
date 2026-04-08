import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MultiMegaMenu = ({ type }) => {
  const config = {
    cloud: {
      color: "from-orange-500 to-red-700",
      title: "Cloud Solutions",
    },
    professional: {
      color: "from-green-500 to-emerald-800",
      title: "IT Services Roadmap",
    },
    company: {
      color: "from-blue-500 to-blue-900",
      title: "Company Overview",
    },
  };

  const data = config[type];
  if (!data) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute left-0 top-full w-screen bg-white shadow-2xl z-50"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-10 p-10">

        {/* LEFT SIDE */}
        <div className="col-span-2 grid grid-cols-2 gap-6">
          <Link to={`/${type}`} className="hover:bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-sm">{data.title}</h3>
            <p className="text-xs text-gray-500">Explore services</p>
          </Link>
        </div>

        {/* RIGHT CTA */}
        <div className={`bg-gradient-to-br ${data.color} text-white rounded-2xl p-6 text-center`}>
          <h3 className="text-lg font-semibold mb-2">{data.title}</h3>
          <button className="bg-white text-black px-4 py-2 rounded-lg text-sm">
            Learn More
          </button>
        </div>

      </div>
    </motion.div>
  );
};

export default MultiMegaMenu;