import React from "react";
import Photo from "../assets/photo.jpg";
import Photo1 from "../assets/photo1.jpg";
import Photo2 from "../assets/photo2.jpg";
import Photo3 from "../assets/photo3.jpg";
import Photo4 from "../assets/photo4.jpg";
import Photo5 from "../assets/photo5.jpg";
import Photo6 from "../assets/photo6.jpg";
import Photo7 from "../assets/photo7.jpg";
import Photo8 from "../assets/photo8.jpg";
import Photo9 from "../assets/photo9.jpg";
import Photo10 from "../assets/photo10.jpg";
import Photo11 from "../assets/photo11.jpg";
import Rasm from "./Rasm";
import { useState } from "react";
import ModaList from "./ModaList";

const rasmlar = [
  {
    id: 1,
    logo: Photo,
  },
  {
    id: 2,
    logo: Photo1,
  },
  {
    id: 3,
    logo: Photo2,
  },
  {
    id: 4,
    logo: Photo3,
  },
  {
    id: 5,
    logo: Photo4,
  },
  {
    id: 6,
    logo: Photo5,
  },
  {
    id: 7,
    logo: Photo6,
  },
  {
    id: 8,
    logo: Photo7,
  },
  {
    id: 9,
    logo: Photo8,
  },
  {
    id: 10,
    logo: Photo9,
  },
  {
    id: 11,
    logo: Photo10,
  },
  {
    id: 12,
    logo: Photo11,
  },
];

const Galereya = () => {
  const [galer, setGaler] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlemodal = (logo) => {
    setGaler(logo);
    setIsModalOpen(true);
  };
  console.log(galer);
  return (
    <div className="py-12">
      <div className="cantainer">
        <div className="mb-[40px] text-center ">
          <h1 className="text-[34px] text-[#333] mb-5">GALLEREYA / ГАЛЕРЕЯ</h1>
          <div className="relative ">
            <hr className="w-[200px] mx-auto h-1 bg-[#ffb606]" />
            <div className="mx-auto w-3 h-3 bg-[#333] absolute right-[50%] -top-[5px] br p-1"></div>
          </div>

          <p className="mt-5 text-[18px] text-[#877a7a]">
            Maktab hayotidan lavhalar / Выдержки из школьной жизни
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 w-auto">
          {rasmlar.map((rasm) => (
            <Rasm key={rasm.id} {...rasm} handlemodal={handlemodal}></Rasm>
          ))}
        </div>
      </div>
      <ModaList
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        galer={galer}
      ></ModaList>
    </div>
  );
};

export default Galereya;
