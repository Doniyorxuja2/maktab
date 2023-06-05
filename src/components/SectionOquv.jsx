import React from "react";
import Slider from "react-slick";
import UserLogo from "../assets/user-logo.png";
const oqituvchi = [
  {
    id: 1,
    title: "Faxirli O'qituvchi-1",
    text: " 10 yildan ortiq tajribaga ega",
  },
  {
    id: 2,
    title: "Faxirli O'qituvchi-2",
    text: " 20 yildan ortiq tajribaga ega",
  },
  {
    id: 3,
    title: "Faxirli O'qituvchi-3",
    text: " 15 yildan ortiq tajribaga ega",
  },
  {
    id: 4,
    title: "Faxirli O'qituvchi-4",
    text: " 10 yildan ortiq tajribaga ega",
  },
  {
    id: 5,
    title: "Faxirli O'qituvchi-5",
    text: " 30 yildan ortiq tajribaga ega",
  },
];

const SectionOquv = () => {
  return (
    <div className="py-12 bg-[#f1f1f1]">
      <div className="cantainer">
        <div className="mb-[40px] text-center ">
          <h1 className="text-[34px] text-[#333] mb-5">
            BIZNING O'QITUVCHILARIMIZ / НАШИ УЧИТЕЛЯ
          </h1>
          <div className="relative ">
            <hr className="w-[200px] mx-auto h-1 bg-[#ffb606]" />
            <div className="mx-auto w-3 h-3 bg-[#333] absolute right-[50%] -top-[5px] br p-1"></div>
          </div>

          <p className="mt-5 text-[18px] text-[#877a7a]">
            Maktabimiz faxriy o'qituvchilari / Почетные учителя нашей школы
          </p>
        </div>

        <Slider
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]}
          dots={true}
          slidesToShow={3}
          customPaging={(i) => {
            return <a>{i}</a>;
          }}
        >
          {oqituvchi.map((oqi) => (
            <div key={oqi.id} className=" ">
              <div className="mr-3 cursor-pointer ">
                <div className="overflow-hidden ">
                  <img
                    className="transition-all w-full hover:scale-[1.1]"
                    src={UserLogo}
                    alt=""
                  />
                </div>
                <div className="p-5 bg-[#ffb606] text-center">
                  <h3 className="text-[21px] text-white">{oqi.title}</h3>
                  <h3 className="text-[18px] text-white">{oqi.text}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionOquv;
