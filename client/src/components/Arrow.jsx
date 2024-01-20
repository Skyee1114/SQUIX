import React from "react";
import ArrowRight from "../assets/img/arrow_right.svg";
import ArrowLeft from "../assets/img/arrow_left.svg";

export default function Arrow({ direction, onClick }) {
  if (direction === "right")
    return (
      <div
        className="px-2 py-1 sm:px-3 sm:py-2 bg-black rounded-tr-[3px] rounded-br-[3px] hover:bg-[#FFA801] cursor-pointer transition duration-300"
        onClick={onClick}
      >
        <img src={ArrowRight} alt="" className="w-[8px] md:w-full"/>
      </div>
    );
  else if (direction === "left")
    return (
      <div
        className="px-2 py-1 sm:px-3 sm:py-2 bg-black rounded-tl-[3px] rounded-bl-[3px] hover:bg-[#FFA801] cursor-pointer transition duration-300"
        onClick={onClick}
      >
        <img src={ArrowLeft} alt="" className="w-[8px] md:w-full" />
      </div>
    );
}
