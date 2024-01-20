import React, { useState } from "react";
import ModelCanvas from "./ModelCanvas.jsx";
import Model3DSvg from "../../assets/img/model3d.jpg";
import ModelSpinCircle from "../ModelSpinCircle.jsx"

const Model3D = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between md:pb-0">
      <div
        className=" order-last md:order-first h-[80px] md:h-[500px] 2xl:h-[750px] min-w-[240px] 2xl:min-w-[400px] overflow-auto mt-[450px] md:mt-4 2xl::mt-20 z-10 "
        id="model_flow"
      >
        <div className="flex flex-row md:flex-col justify-between w-fit">
          <div className="sticky left-0 top-0 w-[142px] md:w-[204px] 2xl:w-[365px] h-20 bg-gradient-to-r md:bg-gradient-to-b from-[#3b362b] to-transparent mt-[-95px] ml-[-155px] md:ml-0 z-10"></div>

          {["1", "2", "3", "4", "5", "6"].map((image, index) => (
            <div
              className="relative w-[142px] md:w-[204px] 2xl:w-[365px] mx-4 md:mx-0 my-0 md:my-4"
              key={index}
            >
              <div
                className="absolute w-full h-full z-20 bg-transparent"
                onClick={() => handleClick(index)}
              ></div>
              <img
                src={Model3DSvg}
                alt={""}
                className={`w-full h-full z-0 ${
                  activeIndex === index ? "opacity-100" : "opacity-50"
                }`}
              />
            </div>
          ))}
          <div className="sticky right-0 top-0 md:bottom-0 w-[142px] md:w-[204px] 2xl:w-[365px] h-20 bg-gradient-to-l md:bg-gradient-to-t from-[#3b362b] to-transparent mt-[-95px] ml-[-155px] md:ml-0"></div>
        </div>
      </div>
      <div className="w-full h-full " >
        <div className="w-full h-full relative">
          {/* <div>
            <img
              src="img/model-logo.svg"
              alt="model logo"
              className="absolute w-full mt-16 lg:-mt-8 2xl:-mt-20 3xl:-mt-48 "
            />
          </div> */}          

          <div className="absolute top-[-150px] left-[130px]">
            <img src="img/Raceslogosdetailed.svg" alt="" className="hidden 4xl:block" />
          </div>

          <div className="absolute w-full">
          <ModelSpinCircle />
            <ModelCanvas />
          </div>
        </div>
        <div className=" relative z-10 top-[450px] md:top-[570px] 2xl:top-[920px]">
          <img
            src="img/rotate_guide.svg"
            alt="rotate_guide"
            className="w-[126px] xl:w-[226px] mx-auto mt-[-50px]"
          />
          <img
            src="img/rotate_guide_hover.svg"
            alt="rotate_guide"
            className="bottom-0 transition duration-300 opacity-0 hover:opacity-100 w-[126px] xl:w-[226px] mx-auto mt-[-25px] xl:mt-[-45px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Model3D;
