import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";
import { Api } from "../Apikey";
import { FaAngleDoubleRight } from "react-icons/fa";

const SectionFan = () => {
  const [fanlar, setFanlar] = useState();
  useEffect(() => {
    getFan();
  }, []);

  const getFan = async () => {
    const res = await fetch(
      `https://byijsmhahnnqyxcckiaq.supabase.co/rest/v1/togaraklar${Api}`
    );
    const data = await res.json();
    setFanlar(data);
  };
  console.log(fanlar);
  return (
    <div className="py-10 bg-white">
      <div className="cantainer">
        <h1 className="text-center font-semibold uppercase text-[34px] text-[#333] mb-[30px]">
          MAKTABDAGI TASHKIL ETILADIGAN TO'GARAKLAR
        </h1>
        <div className="relative mb-4 ">
          <hr className="w-[200px] mx-auto h-[3px] bg-[#ffb606]" />
          <div className="mx-auto w-3 h-3 bg-[#333] absolute right-[50%] -top-[5px] p-1 br"></div>
        </div>
        <p className="text-center mb-[30px]">
          Siz 97-umumiy o'rta ta'lim maktabida tashkil etiladiga to'garaklar
          bilan tanishib borishingiz mumkin
        </p>
        <Slider
          dots={true}
          slidesToShow={3}
          customPaging={(i) => {
            return <a>{i}</a>;
          }}
        >
          {fanlar?.map((fan) => (
            <div key={fan?.id} className="flex bg-white gap-6 ">
              <div className="p-[25px] bg-[#333] opacity-[0.9] hover:opacity-[1] mx-5 relative overflow-hidden">
                <div>
                  <h1 className="text-[34px] text-white">{fan?.name}</h1>

                  <div className="flex items-center gap-1 hover:gap-3">
                    <button className="text-[18px] text-white">ReadMore</button>
                    <div className="flex">
                      <FaAngleDoubleRight className="h-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="h-[100px] w-[220px] bg-[#ffb606] -rotate-[35deg] -bottom-11 absolute -right-12 "></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionFan;
