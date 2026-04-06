import React from "react";

const Professional = () => {
    const serverTags = [
        "Windows Server",
        "Linux Server",
        "Exchange Server",
        "MS SQL Server",
        "MySQL Server",
        "VMware Server",
        "Virtualization",
        "IIS Server",
        "SharePoint Server",
        "Application Server",
    ];

    return (
        <section className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">

                {/* LABEL */}
                <p className="text-green-600 text-sm font-medium mb-2">
                    IT Services & Support
                </p>

                {/* HEADING */}
                <h2 className="text-4xl font-bold text-gray-900">
                    Professional IT Services
                </h2>

                {/* DESC */}
                <p className="text-gray-600 mt-4 max-w-2xl">
                    Server crashed on Saturday? Migration failed? We answer in 15 minutes. 24/7.
                </p>

                {/* BUTTON */}
                <button className="mt-6 text-green-600 font-medium hover:underline">
                    View all services →
                </button>

                {/* 🔥 MAIN CONTENT */}
                <div className="mt-16 space-y-8">

                    {/* 🔷 BIG CARD */}
                    <div
                        className="bg-white border border-gray-200 rounded-xl p-8 
            transition-all duration-300 
            hover:-translate-y-1 hover:shadow-lg"
                    >
                        <h3 className="text-xl font-semibold text-gray-900">
                            Server Support
                        </h3>

                        <p className="text-sm text-green-500 mt-2">
                            15-minute response • 24/7/365
                        </p>

                        <p className="text-gray-600 mt-4 leading-relaxed">
                            Your server's down. Call us. We answer in 15 minutes. Not helpdesk, actual admins.
                            Domain controller crashed? Exchange Server down? VMware won't boot? Fixed.
                        </p>

                        {/* 🔥 SERVER TAGS */}
                        <div className="flex flex-wrap gap-3 mt-6">
                            {serverTags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1.5 text-sm rounded-md 
                  bg-green-50 text-green-600 border border-green-100
                  transition-colors duration-200 
                  hover:bg-green-100"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* 🔷 3 SMALL CARDS */}
                    <div className="grid md:grid-cols-3 gap-8">

                        {/* CARD 1 */}
                        <div
                            className="group bg-white border border-gray-200 rounded-xl p-6 
              transition-all duration-300 
              hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                        >
                            <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                                IT Consulting
                            </h4>

                            <p className="text-gray-600 text-sm mt-2">
                                Don't know what you need? We'll audit your setup and tell you what's broken.
                            </p>

                            <p className="text-green-600 text-sm mt-4 flex items-center gap-1">
                                Learn more
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </p>
                        </div>

                        {/* CARD 2 */}
                        <div
                            className="group bg-white border border-gray-200 rounded-xl p-6 
              transition-all duration-300 
              hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                        >
                            <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                                IT Services
                            </h4>

                            <p className="text-gray-600 text-sm mt-2">
                                Helpdesk tickets piling up? Can't afford another hire? We'll handle it.
                            </p>

                            <p className="text-green-600 text-sm mt-4 flex items-center gap-1">
                                Learn more
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </p>
                        </div>

                        {/* CARD 3 */}
                        <div
                            className="group bg-white border border-gray-200 rounded-xl p-6 
              transition-all duration-300 
              hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                        >
                            <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                                Cloud Migrations
                            </h4>

                            <p className="text-gray-600 text-sm mt-2">
                                Moving to Microsoft 365? Scared of losing emails? We've migrated 1+ PB. Zero data lost.
                            </p>

                            <p className="text-green-600 text-sm mt-4 flex items-center gap-1">
                                Learn more
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Professional;