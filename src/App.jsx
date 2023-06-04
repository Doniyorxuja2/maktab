import React from "react";
import Footer from "./components/Footer";
import FoydaliManba from "./components/FoydaliManba";
import Galereya from "./components/Galereya";
import Header from "./components/Header";
import Hero from "./components/Hero";

import SectionBiz from "./components/SectionBiz";
import SectionFan from "./components/SectionFan";
import SectionOquv from "./components/SectionOquv";
import SectionParalax from "./components/SectionParalax";
import Yangiliklar from "./components/Yangiliklar";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <SectionFan></SectionFan>
      <SectionBiz></SectionBiz>
      <SectionParalax></SectionParalax>
      <Yangiliklar></Yangiliklar>
      <SectionOquv></SectionOquv>
      <Galereya></Galereya>
      <FoydaliManba></FoydaliManba>
      <Footer></Footer>
    </div>
  );
};

export default App;
