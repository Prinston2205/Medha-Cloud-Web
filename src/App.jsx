import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopBar from "./Components/topbar";
import Navbar from "./Components/navbar";
import Hero from "./Components/hero";
import Services from "./Components/service";
import Cloud from "./Components/cloud";
import Hosting from "./Components/hosting";
import Professional from "./Components/professional";
import WhatWeDo from "./Components/whatwedo";
import ClientStories from "./Components/clientstories";
import IndustryAndCTA from "./Components/industryandcta";
import Footer from "./Components/footer";
import WhiteLabelMSP from "./Pages/whitelabelmsp";

// ✅ PAGES
import WhiteLabelPage from "./Pages/whitelabelpage";
import CloudPage from "./Pages/cloudpage";
import ProfessionalPage from "./Pages/professionalpage";
import CompanyPage from "./Pages/companypage";
// import CloudServicesPage from "./Pages/cloudservicepage";


// 👉 HOME PAGE COMBINED
const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Cloud />
      <Hosting />
      <Professional />
      <WhatWeDo />
      <ClientStories />
      <IndustryAndCTA />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans">
        <TopBar />
        <Navbar />

        <Routes>
          {/* HOME PAGE */}
          <Route path="/" element={<HomePage />} />

          {/* ALL DROPDOWN ROUTES */}
          <Route path="/whitelabel" element={<WhiteLabelMSP />} />
          <Route path="/cloud" element={<CloudPage />} />
          <Route path="/proFessional" element={<ProfessionalPage />} />
          <Route path="/company" element={<CompanyPage />} />
          {/* <Route path="/cloudh" element={<CloudServicesPage />} /> */}
          
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;