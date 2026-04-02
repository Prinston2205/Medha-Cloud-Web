import React, { useEffect, useState } from "react";
import logo from "../assets/medhalogo.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex items-center justify-between px-16 py-5 bg-white sticky top-0 z-50 transition-all duration-300
      ${scrolled ? "shadow-[0_4px_10px_rgba(0,0,0,0.08)]" : "border-b border-gray-200"}`}
    >
      {/* Logo */}
      <img src={logo} alt="logo" className="h-10" />

      {/* Menu */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium text-sm">
        <li className="hover:text-blue-600 cursor-pointer">White Label MSP Services</li>
        <li className="hover:text-blue-600 cursor-pointer">Cloud</li>
        <li className="hover:text-blue-600 cursor-pointer">Professional Services</li>
        <li className="hover:text-blue-600 cursor-pointer">Company</li>
      </ul>

      {/* Empty div to balance layout */}
      <div className="w-[120px]" />
    </nav>
  );
};

export default Navbar;