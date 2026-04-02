import React from "react";
import Navbar from "./Components/navbar";
import Hero from "./Components/hero";
import Services from "./Components/service";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}

export default App;