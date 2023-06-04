import React from "react";
import { MdArrowDropDown } from "react-icons/md";

const LinkDrop = () => {
  return (
    <div className="">
      <div className="cantainer relative ">
        <div className="w-[67px] h-[67px] bg-white absolute z-10 left-[14px] -top-[30px] -rotate-45 "></div>
        {/* <div className="w-[67px] h-[67px] bg-red-300 absolute z-10 -right-[108px] -top-[30px] -rotate-45 "></div> */}
        <div className=" bg-white borderT w-full  absolute z-20 px-12  ">
          <ul className="flex justify-between items-center gap-1">
            <li className="item cursor-pointer text-[18px] hover:text-white">
              Asosiy
            </li>
            <li className="item cursor-pointer flex gap-1 items-center">
              <a href=" " className="cursor-pointer text-[18px]">
                {" "}
                Maktab
              </a>
              <MdArrowDropDown />
              <ul className="drop-list">
                <li className="drop text-[18px] hover:text-white">
                  Raxbariyat
                </li>
                <li className="drop text-[18px] hover:text-white">
                  Maktab haqida
                </li>
                <li className="drop text-[18px] hover:text-white">
                  O'qituvchilar
                </li>
              </ul>
            </li>
            <li className="item cursor-pointer flex gap-1 items-center">
              <a href="" className="cursor-pointer text-[18px]">
                {" "}
                Hujjatlar
              </a>
              <MdArrowDropDown />
              <ul className="drop-list">
                <li className="drop text-[18px] hover:text-white">
                  Ta'limga oid qonunlar
                </li>
                <li className="drop text-[18px] hover:text-white">
                  Xalq ta'lim vazirligi meyoriy hujjatlar
                </li>
                <li className="drop">Maktab nizomi</li>
              </ul>
            </li>{" "}
            <li className="item cursor-pointer hover:text-white text-[18px]">Yangiliklar</li>{" "}
            <li className="item cursor-pointer flex gap-1 items-center">
              <a href="" className="cursor-pointer  text-[18px]">
                {" "}
                Kitoblar
              </a>
              <MdArrowDropDown />
              <ul className="drop-list">
                <li className="drop text-[18px] hover:text-white">5-sinf</li>
                <li className="drop text-[18px] hover:text-white">6-sinf</li>
                <li className="drop text-[18px] hover:text-white">7-sinf</li>
                <li className="drop text-[18px] hover:text-white">8-sinf</li>
                <li className="drop text-[18px] hover:text-white">9-sinf</li>
                <li className="drop text-[18px] hover:text-white">10-sinf</li>
                <li className="drop text-[18px] hover:text-white">11-sinf</li>
              </ul>
            </li>{" "}
            <li className="item cursor-pointer flex gap-1 items-center">
              <a href="" className="text-[18px]">
                {" "}
                Media
              </a>
              <MdArrowDropDown />
              <ul className="drop-list">
                <li className="drop text-[18px] hover:text-white">
                  Fotolavhalar
                </li>
                <li className="drop text-[18px] hover:text-white">
                  Videolavhalar
                </li>
              </ul>
            </li>{" "}
            <li className="item cursor-pointer flex gap-1 items-center">
              <a
                href=""
                className="cursor-pointer text-[18px]"
              >
                Interaktiv xizmatlar
              </a>
              <MdArrowDropDown />
              <ul className="drop-list">
                <li className="drop text-[18px] hover:text-white">
                  Raxbariyat
                </li>
                <li className="drop text-[18px] hover:text-white">
                  Maktab haqida
                </li>
                <li className="drop text-[18px] hover:text-white">
                  O'qituvchilar
                </li>
              </ul>
            </li>
            <li className="item cursor-pointer text-[18px] hover:text-white">
              Aloqa
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LinkDrop;
