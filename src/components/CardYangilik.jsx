import React from "react";

const CardYangilik = ({ author, body, img_url, title }) => {
  return (
    <div className="bg-white text-center mx-4 overflow-hidden">
      <img
        className="transition-all hover:scale-[1.1]"
        src={img_url}
        alt=""
        width={350}
      />
      <div className="p-6">
        <h1 className="text-center text-[#ffb606] mb-2 uppercase text-[13px]">
          Tadbirlar
        </h1>
        <div className="text-center mb-3 hovr cursor-pointer transition-all">
          <p className="text-[#333] text-[21px] mb-2">{title}</p>
          <hr className="bg-[#ffb606] h-1 mx-auto w-[60px]" />
        </div>
        <h5 className="text-[14px] text-[#5d5d5d] mb-2">
          By {author}
          On Iyun 21, 2022
        </h5>
        <p className="text-[18px] text-[#847878]">{body}</p>
        <button className="px-4 py-2 text-white bg-[#ffb606] mt-6 rounded-lg">
          Read More
        </button>
      </div>
    </div>
  );
};

export default CardYangilik;
