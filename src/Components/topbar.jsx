import React from "react";
import { Phone, MessageCircle, User } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-[#0b1c2c] text-gray-300 text-[12px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex justify-between items-center py-1.5">
        
        {/* LEFT SIDE */}
        <div className="flex items-center gap-6">
          
          <span className="flex items-center gap-2 hover:text-white transition duration-200 cursor-pointer">
            <Phone size={14} strokeWidth={2} />
            +1 646 776 2855 (US)
          </span>

          <span className="flex items-center gap-2 hover:text-white transition duration-200 cursor-pointer">
            <Phone size={14} strokeWidth={2} />
            +91 89358 44486 (India)
          </span>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5">

          <span className="flex items-center gap-2 cursor-pointer hover:text-white transition duration-200">
            <User size={14} strokeWidth={2} />
            Client Login
          </span>

          <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-[12px] px-3.5 py-1 rounded transition duration-200">
            <MessageCircle size={14} strokeWidth={2} />
            Live Chat
          </button>

        </div>

      </div>
    </div>
  );
};

export default TopBar;