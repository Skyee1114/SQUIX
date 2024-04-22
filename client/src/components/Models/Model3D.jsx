import React, { useState } from "react";
import ModelCanvas from "./ModelCanvas.jsx";
import ModelHover from "../../assets/img/model3d_hover.jpg";
import Hover2560 from "../../assets/img/model3d_hover-2560.svg";
import Hover834 from "../../assets/img/model3d_hover-834.svg";
import Hover320 from "../../assets/img/model3d_hover-320.svg";
import Model from "../../assets/img/model3d.jpg";
import ModelSpinCircle from "../ModelSpinCircle.jsx"

const Model3D = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const handleHover = (index) => {
    if (index !== activeIndex) {
      setHoverIndex(index);
    }
  };

  const handleLeave = () => {
    setHoverIndex(null);
  };


  return (
    <div className="flex flex-col md:flex-row justify-between md:pb-0">
      <div
        className=" order-last md:order-first h-[80px] md:h-[500px] 2xl:h-[750px] min-w-[240px] 2xl:min-w-[400px] overflow-auto mt-[450px] md:mt-4 2xl::mt-20 z-10 "
        id="model_flow"
      >
        <div className="flex flex-row md:flex-col justify-between w-fit">
          <div className="hidden md:block sticky left-0 top-0 w-[142px] md:w-[204px] 2xl:w-[365px] h-20 bg-gradient-to-r md:bg-gradient-to-b from-[#3b362b] to-transparent mt-[-95px] ml-[-155px] md:ml-0 z-10"></div>

          {["1", "2", "3", "4", "5", "6"].map((image, index) => (
            <div
              className="relative w-[142px] md:w-[204px] 2xl:w-[365px] mx-4 md:mx-0 my-1 md:my-4 flex flex-col items-center cursor-pointer"
              key={index}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleLeave}
            >
              {(activeIndex === index || hoverIndex === index) && <>
                <img
                  src={Hover2560}
                  alt={""}
                  className="absolute z-20 -mt-2.5 hidden 2xl:block"                  
                />
                <img
                  src={Hover834}
                  alt={""}
                  className="absolute z-20 -mt-[7px] hidden md:block 2xl:hidden"                  
                />
                <img
                  src={Hover320}
                  alt={""}
                  className="absolute z-20 -mt-[5px] block md:hidden"                  
                />
              </>}
              <div
                  className={`absolute inset-0 bg-[#3b362b] transition-opacity duration-300 ease-in-out ${(activeIndex === index || hoverIndex === index) ? "opacity-0" : "opacity-50"} z-20`}
              ></div>
              <img
                src={ModelHover}
                alt={""}
                className={`w-full h-full z-0 `}
              />
              
            </div>
          ))}
          <div className="hidden md:block sticky right-0 top-0 md:bottom-0 w-[142px] md:w-[204px] 2xl:w-[365px] h-20 bg-gradient-to-l md:bg-gradient-to-t from-[#3b362b] to-transparent mt-[-95px] ml-[-155px] md:ml-0"></div>
        </div>
      </div>
      <div className="w-full h-full " >
        <div className="w-full h-full relative ">
          <div className="flex justify-center">
            <div className="absolute top-[40px] 2xl:top-0 3xl:top-[-150px]">
              <img src="img/Raceslogosdetailed.svg" alt="" className="hidden 3xl:block" />
              <img src="img/Raceslogosdetailed1.svg" alt="" className="hidden 2xl:block 3xl:hidden" />
              <img src="img/Raceslogosdetailed2.svg" alt="" className="h-96 md:h-[500px] object-cover block 2xl:hidden" />
            </div>
          </div>         
          <ModelSpinCircle />
          <div className="absolute w-full">
            <ModelCanvas />
          </div>
          
        </div>
        <div className=" relative z-10 top-[450px] md:top-[570px] 2xl:top-[920px]">
          <img
            src="img/rotate_guide.svg"
            alt="rotate_guide"
            className="w-[126px] xl:w-[226px] mx-auto mt-[-50px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Model3D;
