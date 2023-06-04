// import React, { useEffect } from "react";
import { FaKey, FaUser, FaPenFancy } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";

// import { useState } from "react";
// import { Api } from "../Apikey";
import CountUp from "react-countup";
const icons = [
  { id: 1, name: "Ўқитувчилар сони", count: 120, logo: <FaUser></FaUser> },
  {
    id: 2,
    name: "ЎҚУВЧИЛАР СОНИ",
    count: 2760,
    logo: <BsPeopleFill></BsPeopleFill>,
  },
  { id: 3, name: "СИНФЛАР СОНИ", count: 93, logo: <FaKey></FaKey> },
  {
    id: 4,
    name: "ТЎГАРАКЛАР СОНИ",
    count: 60,
    logo: <FaPenFancy></FaPenFancy>,
  },
];

const SectionParalax = () => {
  // const [oquvchi, setOquvchi] = useState([]);
  // useEffect(() => {
  //   getOquvchi();
  // }, []);

  // const getOquvchi = async () => {
  //   const res = await fetch(
  //     `https://byijsmhahnnqyxcckiaq.supabase.co/rest/v1/statistics${Api}`
  //   );
  //   const data = await res.json();
  //   setOquvchi(data);
  // };

  return (
    <div className="h-[140vh]">
      <div
        style={{
          width: "100%",
          background: "url(./assets/contact.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
        className="flex justify-center flex-col text-center h-[70vh]"
      >
        <h1 className=" text-white text-center mb-5">Biz bilan bog’lanish</h1>
        <p className=" text-white text-center mb-5">
          Agar sizda maktab direktorga savolingiz yoki takliflaringiz bo’lsa
          quyida keltirilgan platformalar orqali yuborishingiz mumkin
        </p>
        <button className="  rounded-md flex mx-auto w-[370px] mb-5 p-4 bg-[#ffb606] text-white">
          Direktorga murojaat / Связаться с директором
        </button>
        <button className="rounded-md flex mx-auto p-4 w-[300px] bg-white text-gray-700 hover:bg-[#ffb606] hover:text-white">
          Ariza yuborish / Подавать заявление{" "}
        </button>
      </div>
      <div
        style={{
          width: "100%",
          background: "url(./assets/stol.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
        className="flex justify-center flex-col text-center h-[70vh]"
      >
        <h1 className=" text-white text-center mb-5 text-[34px]">
          MAKTAB STATISTIKASI / СТАТИСТИКА ШКОЛЫ
        </h1>
        <div className="relative mb-5">
          <hr className="w-[200px] mx-auto h-[2px] bg-black" />
          <div className="mx-auto w-3 h-3 bg-[#333] absolute right-[50%] -top-[7px] br p-1"></div>
        </div>
        <p className=" text-white text-center text-[18px] mb-[60px]">
          Maktabning asosiy ko'rsatgich parametrlari / Основные индикаторные
          параметры школы
        </p>
        <div className="flex justify-between cantainer gap-4 text-white ">
          {icons.map((i) => (
            <div key={i.id} className=" ">
              <div className="roundPara mb-5 relative ">
                <div className="absolute p-3 rounded-[50%] right-[40%]  mx-auto -top-[24px] ">
                  {" "}
                  <img
                    className=""
                    src={i.logo}
                    alt="Icons"
                    width={25}
                    height={25}
                  />
                </div>
                <CountUp
                  start={0}
                  end={i.count}
                  className="text-[48px] mb-[25px] tracking-[3px]"
                />
                <h3 className="text-[21px] text-white uppercase">{i.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionParalax;
