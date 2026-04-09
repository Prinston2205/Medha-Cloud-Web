import React, { useEffect, useState } from "react";
import logo from "../assets/medhalogo.svg";
import MegaMenu from "./megamenu";
import { ChevronDown } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "White Label MSP Services", type: "whiteLabel" },
    { name: "Cloud", type: "cloud" },
    { name: "Professional Services", type: "professional" },
    { name: "Company", type: "company" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled
          ? "shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
          : "border-b border-gray-200"
        }`}
    >
      <div
        className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-16 py-4 relative"
        onMouseLeave={() => setActiveMenu(null)}
      >
        {/* LOGO */}
        <Link to="/">
          <img src={logo} alt="logo" className="h-9 cursor-pointer" />
        </Link>

        {/* MENU */}
        <ul className="hidden md:flex items-center gap-6 text-[13px] font-medium text-gray-700">

          {menuItems.map((item, index) => (
            <li
              key={index}
              className="group relative px-3 py-2 rounded-md cursor-pointer transition duration-200 hover:bg-blue-50"
              onMouseEnter={() => setActiveMenu(item.type)}
              onClick={() => navigate(`/${item.type}`)}  // 🔥 FIX HERE
            >
              {/* KEEP ORIGINAL STRUCTURE */}
              <div className="flex items-center gap-1">
                <span className="group-hover:text-blue-600 transition duration-200">
                  {item.name}
                </span>

                <ChevronDown
                  size={14}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </div>

              {/* ORIGINAL UNDERLINE */}
              <span
                className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-blue-600 
                transition-all duration-300 group-hover:left-0 group-hover:w-full"
              ></span>
            </li>
          ))}

        </ul>

        {/* GLOBAL MEGA MENU */}
        {activeMenu && <MegaMenu type={activeMenu} />}
      </div>
    </nav>
  );
};

export default Navbar;