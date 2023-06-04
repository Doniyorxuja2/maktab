import React from "react";
import Bg from "../assets/main-bg.jpg";

const SectionBiz = () => {
  return (
    <div className="py-[40px]">
      <div className="cantainer flex gap-6">
        <div className=" flex flex-col justify-center">
          <h2 className="text-[34px] text-[#333] mb-6">BIZNING MAKTAB </h2>
          <div className="flex gap-1 items-center mb-6">
            <hr className="w-[200px] h-[3px] bg-[#ffb606]" />
            <div className="h-3 w-3 bg-black"></div>
          </div>
          <p className="text-[#807a7a] text-[18px]">
            Toshkent shaxar Yunusobod tumani xalq taʼlimi boʻlimiga qarashli
            97-umumiy oʻrta taʼlim maktabi/ 97-я общеобразовательная школа
            Юнусабадского района города Ташкента
          </p>
        </div>

        <img
          className="w-[400px] h-[300px]"
          src={Bg}
          alt=""
          width={410}
          height={310}
        />
      </div>
    </div>
  );
};

export default SectionBiz;
