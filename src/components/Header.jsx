import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="bg-white py-[24px] pb-[50px]">
      <div className="cantainer">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Header;
