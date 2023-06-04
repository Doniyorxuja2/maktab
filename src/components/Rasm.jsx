import React from "react";
import { BiImages } from "react-icons/bi";

const Rasm = ({ id, logo, handlemodal }) => {
  return (
    <div onClick={() => handlemodal(logo)}>
      <div className="relative rasmlar cursor-pointer">
        <img className="rasm" src={logo} alt="" />
        <div className=" transition-all hidden rasm1 bg-[#ffb606] p-[15px]  w-[60px] h-[60px] absolute bottom-0 right-0">
          <BiImages className="w-[30px] h-[30px] p-2 bg-white rounded-[50%]" />
        </div>
      </div>
    </div>
  );
};

export default Rasm;
