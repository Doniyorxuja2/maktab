import React from "react";
import Slider from "react-slick";
import LinkDrop from "./LinkDrop";

const Hero = () => {
  return (
    <div className="">
      <LinkDrop></LinkDrop>
      <Slider
        dots={true}
        arrows={false}
       
        autoplay={true}
        autoplaySpeed={2000}
        customPaging={(i) => {
          return <a>{i}</a>;
        }}
      >
        <div>
          <img className="w-full" src="../public/main-bg.jpg" alt="" />
        </div>
        <div>
          <img className="w-full" src="../public/main-bg1.jpg" alt="" />
        </div>{" "}
        <div>
          <img className="w-full" src="../public/main-bg2.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
