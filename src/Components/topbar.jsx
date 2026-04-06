import React from "react";

const TopBar = () => {
  return (
    <div className="bg-[#0f172a] text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex justify-between items-center py-2">
        
        {/* LEFT SIDE - Phone Numbers */}
        <div className="flex gap-6 items-center">
          <span className="flex items-center gap-2">
            📞 +1 646 776 2855 (US)
          </span>
          <span className="flex items-center gap-2">
            📞 +91 89358 44486 (India)
          </span>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">
          
          <span className="cursor-pointer hover:text-gray-300">
            Client Login
          </span>

          <button className="bg-orange-500 hover:bg-orange-600 px-4 py-1 rounded-md text-white font-medium">
            Live Chat
          </button>

        </div>

      </div>
    </div>
  );
};

export default TopBar;