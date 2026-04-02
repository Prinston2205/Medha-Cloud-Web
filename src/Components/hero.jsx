import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-16 py-24 bg-gradient-to-r from-white to-white">
      
      {/* Center */}
      <div className="lg:w-1/2">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          White Label MSP,Cloud Hosting <br />
          <span className="text-blue-600">& 24/7 Server Support</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-lg">
          Can't afford 6 more techs? Server crashed? Migration failed? We answer in 15 minutes.
        </p>
       

        <div className="mt-8 flex gap-4">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700">
            Chat With us
          </button>

        </div>
      </div>

      {/* RIGHT */}
      {/* <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
        <div className="w-[450px] h-[300px] bg-blue-100/50 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-blue-200 shadow-xl">
          <p className="text-blue-500 font-semibold">Cloud Illustration</p>
        </div>
      </div> */}

    </section>
  );
};

export default Hero;