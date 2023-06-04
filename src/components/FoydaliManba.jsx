import React from "react";
import Slider from "react-slick";
import Gerb from "../assets/gerb.png";
import Edu from "../assets/edu.jpg";
import MyGov from "../assets/mygov.png";
import Portal from "../assets/portal.png";

const manbalar = [
  {
    id: 1,
    name: "O‘zbekiston Respublikasi Prezidentining rasmiy sayti",
    logo: Gerb,
  },
  {
    id: 2,
    name: "O`zbekiston Respublikasi Xalq ta`lim vazirligi  rasmiy sayti",
    logo: Edu,
  },
  {
    id: 3,
    name: "Yagona interaktiv davlat xizmatlari portali",
    logo: MyGov,
  },
  {
    id: 4,
    name: "O’zbekiston Respublikasi ochiq ma’lumotlar portali",
    logo: Portal,
  },
];

const FoydaliManba = () => {
  return (
    <div className="py-12">
      <div className="cantainer">
        <div className="mb-[60px] text-center ">
          <h1 className="text-[34px] text-[#333] mb-5">
            FOYDALI MANBALAR / ПОЛЕЗНЫЕ РЕСУРСЫ
          </h1>
          <div className="relative ">
            <hr className="w-[200px] mx-auto h-1 bg-[#ffb606]" />
            <div className="mx-auto w-3 h-3 bg-[#333] absolute right-[50%] -top-[5px] br p-1"></div>
          </div>

          <p className="mt-5 text-[18px] text-[#877a7a]">
            O'qituvchilar va Ota-onalar uchun foydali bo'lgan manbalar /
            Ресурсы, полезные для учителей и родителей
          </p>
        </div>

        <Slider
          dots={true}
          slidesToShow={3}
          customPaging={(i) => {
            return <a>{i}</a>;
          }}
        >
          {manbalar.map((manba) => (
            <div key={manba.id} className="relative p-10">
              <div className=" mr-3 cursor-pointer bg-white  p-5 rounded-[10px_10px_55px_10px] manba-brd h-[200px] flex justify-center items-center">
                <div className=" rounded-[50%] z-50 absolute manba-brd -top-[0px]">
                  <img
                    className="w-[85px] h-[85px]"
                    src={manba.logo}
                    alt=""
                    width={85}
                    height={85}
                  />
                </div>

                <h1 className="text-[21px] text-[#5d5d5d] text-center">
                  {manba.name}
                </h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FoydaliManba;
