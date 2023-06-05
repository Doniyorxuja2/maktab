import React, { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";
import { Api } from "../Apikey";
import CardYangilik from "./CardYangilik";

const Yangiliklar = () => {
  const [yangilik, setYangilik] = useState([]);
  useEffect(() => {
    getYangilik();
  }, []);

  const getYangilik = async () => {
    const res = await fetch(
      `https://byijsmhahnnqyxcckiaq.supabase.co/rest/v1/news${Api}`
    );
    const data = await res.json();
    setYangilik(data);
  };

  return (
    <div className=" bg-[#f2f2f2] py-8">
      <div className="cantainer">
        <div className="mb-[40px] text-center ">
          <h1 className="text-[34px] text-[#333] mb-5">
            ENG SO'NGGI YANGILIKLAR{" "}
          </h1>
          <div className="relative ">
            <hr className="w-[200px] mx-auto h-1 bg-[#ffb606]" />
            <div className="mx-auto w-3 h-3 bg-[#333] absolute right-[50%] -top-[5px] br p-1"></div>
          </div>

          <p className="mt-5 text-[18px] text-[#877a7a]">
            Maktab hayotidagi eng so'nggi va qiziqarli yangiliklar
          </p>
        </div>

        <Slider
          dots={true}
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
          slidesToShow={3}
          customPaging={(i) => {
            return <a>{i}</a>;
          }}
        >
          {yangilik?.map((yangi) => (
            <div key={yangi.id} className="">
              <CardYangilik {...yangi}></CardYangilik>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Yangiliklar;
