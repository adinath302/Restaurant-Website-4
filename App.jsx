import React from "react";
import Navbar from "./component/Navbar/Navbar.jsx";
import Hero from "./component/Hero/Hero.jsx";

const App = () => {
  return (
    <div className="overflow-hidden bg-white2">
      <Navbar />
      <Hero/>
    </div>
  );
};

export default App;
