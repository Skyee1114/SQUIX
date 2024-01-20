import React from "react";
import "./Button.css";

const Button = ({ text, onClick, className, type, icon, profile }) => {
  const defaultGradient = {
    backgroundImage:
      "linear-gradient(180deg, #FFAE00 -12.86%, #FF7A00 111.98%)",
  };
  const hoverGradient = {
    backgroundImage:
      "linear-gradient(180deg, #FFCB5C -12.86%, #FFB800 111.98%)",
  };

  return (
    <button
      className={`button items-center transition-all flex gap-2 2xl:gap-3 h-[42px] 2xl:h-[63px] ease-in-out duration-300 disabled:bg-primary-disabled text-white font-bold text-[14px] 2xl:text-[20px] ${profile === "yes" ? "px-[12px] md:px-[30px]" : "px-[30px]"} py-[10px] 2xl:py-[17px]  rounded cursor-pointer uppercase ${className} ${
        type === "black" ? "bg-black  " : "bg-primary-gradient"
      }`}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="" className="w-[22px] 2xl:w-[27px] z-10"/>}
      <span className="z-10 ">{text}</span>
    </button>
  );
};

export default Button;
