import React from "react";
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

function App() {
  return (
    <div className="font-sans">
      <TopBar />
      <Navbar />
      <Hero />
      <Services />
      <Cloud />
      <Hosting />
      <Professional />
      <WhatWeDo />
      <ClientStories />
      <IndustryAndCTA />
      <Footer />
    </div>
  );
}

export default App;