import React from "react";
import Slider from "react-slick";
import LinkDrop from "./LinkDrop";
import Bg from "../assets/main-bg.jpg";
import Bg1 from "../assets/main-bg1.jpg";
import Bg2 from "../assets/main-bg2.jpg";

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
          <img className="w-full" src={Bg} alt="" />
        </div>
        <div>
          <img className="w-full" src={Bg1} alt="" />
        </div>{" "}
        <div>
          <img className="w-full" src={Bg2} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
