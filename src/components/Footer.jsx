import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Xarita from "../assets/xarita.jpg";

const Footer = () => {
  return (
    <div className="mt-[40px]">
      <div className="bg-[#000] py-6">
        <div className="cantainer flex flex-wrap justify-between items-start gap-5">
          <div className="flex flex-col text-white w-[200px] ">
            <h1 className="text-white text-[18px] mb-[25px]">MAKTAB HAQIDA</h1>
            <div className="relative">
              <hr className="mb-[25px] bg-[#333] h-[1px] w-full" />
              <hr className="w-[50%] h-[3px] bg-white absolute -top-[1px]" />
            </div>
            <p className="text-[15px] text-[#d9d3d3]">
              Тошкент шахар Юнусобод тумани халқ таълими бўлимига қарашли
              97-умумий ўрта таълим мактаби.
            </p>
          </div>
          <div className="flex flex-col text-white">
            <h1 className="text-white text-[18px] mb-[25px]">NAVIGATSIYA</h1>
            <div className="relative">
              <hr className="mb-[25px] bg-[#333] h-[1px] w-full" />
              <hr className="w-[50%] h-[3px] bg-white absolute -top-[1px]" />
            </div>

            <ul>
              <li className="  flex gap-2 items-center borderB list py-3">
                <IoIosArrowDroprightCircle className="icon  cursor-pointer" />
                <a className="text-[15px] text-[#d9d3d3]" href="">
                  Asosiy
                </a>
              </li>
              <li className="flex gap-2 items-center borderB list py-3">
                <IoIosArrowDroprightCircle className="icon  cursor-pointer" />
                <a className="text-[15px] text-[#d9d3d3]" href="">
                  {" "}
                  Yangiliklar
                </a>
              </li>{" "}
              <li className="flex gap-2 items-center borderB list py-3">
                <IoIosArrowDroprightCircle className="icon cursor-pointer" />
                <a className="text-[15px] text-[#d9d3d3]" href="">
                  {" "}
                  Raxbariyat
                </a>
              </li>{" "}
              <li className="flex gap-2 items-center borderB list py-3">
                <IoIosArrowDroprightCircle className="icon cursor-pointer" />
                <a className="text-[15px] text-[#d9d3d3]" href="">
                  {" "}
                  Maktab haqida
                </a>
              </li>{" "}
              <li className="flex gap-2 items-center borderB list py-3">
                <IoIosArrowDroprightCircle className="icon  cursor-pointer" />
                <a className="text-[15px] text-[#d9d3d3]" href="">
                  Fotolavhalar
                </a>
              </li>{" "}
              <li className="flex gap-2 items-center borderB py-3 list">
                <IoIosArrowDroprightCircle className="icon  cursor-pointer" />
                <a className="text-[15px] text-[#d9d3d3]" href="">
                  {" "}
                  Kundalik.com tizimi haqida
                </a>
              </li>
            </ul>
          </div>{" "}
          <div className="flex flex-col text-white">
            <h1 className="text-white text-[18px] mb-[25px]">
              BIZ BILAN BOG’LANING
            </h1>
            <div className="relative">
              <hr className="mb-[25px] bg-[#333] h-[1px] w-full" />
              <hr className="w-[50%] h-[3px] bg-white absolute -top-[1px]" />
            </div>
            <p className="text-[15px] text-[#d9d3d3]  py-3">
              Manzil: Toshkent shaxar Yunusobod tumani, 15-mavze
            </p>
            <p className="text-[15px] text-[#d9d3d3] py-3">
              Telefon : +99871 2366564
            </p>{" "}
            <p className="text-[15px] text-[#d9d3d3] py-3">
              Email: info@97-maktab.uz
            </p>
            <p className="text-[15px] text-[#d9d3d3] py-3">
              Faks: +99871252325244
            </p>
          </div>{" "}
          <div className="flex flex-col text-white">
            <h1 className="text-white text-[18px] mb-[25px]">
              XARITADAN KO’RINISHI
            </h1>
            <div className="relative">
              <hr className="mb-[25px] bg-[#333] h-[1px] w-full" />
              <hr className="w-[50%] h-[3px] bg-white absolute -top-[1px]" />
            </div>
            <div className="flex justify-center">
              <a
                className="text-[15px] text-[#d9d3d3]"
                href="https://goo.gl/maps/dkTSeWEuVy17Sv3G6"
              >
                <img
                  className="rounded-[5px]"
                  src={Xarita}
                  alt="maps"
                  width={250}
                  height={450}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-[#111] py-5 text-center  ">
          <div className="cantainer">
            <h1 className=" text-white">
              Copyright © 2023 - WordPress Theme : By Sparkle Themes
            </h1>
            <div className="flex justify-center w-full mx-auto gap-5 mt-6">
              <a className="text-white hover:text-gray-400" href="">
                Asosiy
              </a>
              <a className="text-white hover:text-gray-400" href="">
                Yangiliklar
              </a>
              <a className="text-white hover:text-gray-400" href="">
                Raxbariyat
              </a>
              <a className="text-white hover:text-gray-400" href="">
                Maktab haqida
              </a>
              <a className="text-white hover:text-gray-400" href="">
                Fotolavhalar
              </a>
              <a className="text-white hover:text-gray-400" href="">
                Kundalik.com tizimi haqida
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
