import React, { useState, useEffect } from "react";
import Hover2560 from "../../assets/img/model3d_hover-2560.svg";
import Hover834 from "../../assets/img/model3d_hover-834.svg";
import Hover320 from "../../assets/img/model3d_hover-320.svg";
import Arts from "../../assets/img/conceptarts.jpg";
import ArtsHover from "../../assets/img/conceptarts_hover.jpg";

function Video() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [playHover, setPlayHover] = useState(false);  

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
    <div className="max-w-[1520px] mx-auto">
      <div className="relative">
        <div className="flex flex-col justify-between items-center">
          <img src="img/top-vector.svg" alt="" className="w-1/2 xl:w-fit"/>
          <img src="img/video.png" alt="video" className="mx-auto" />
          <img src="img/bottom-vector.svg" alt="" className="w-1/2 xl:w-fit" />
        </div>
        <img
          src={`img/${playHover ? "play_btn_hover.svg" : "play_btn.svg"}`}
          alt="play"
          className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[132px] h-[132px]"
          onMouseEnter={() => setPlayHover(true)}
          onMouseLeave={() => setPlayHover(false)}
        />
      </div>

      <div
        className="pb-4 mt-4 overflow-x-auto z-10 "
        id="model_flow"
      >
        <div className="flex flex-row justify-between w-fit">          

          {["1", "2", "3", "4", "5", "6"].map((image, index) => (
            <div
              className="relative w-[142px] md:w-[204px] 2xl:w-[365px] mx-4 my-3 flex flex-col items-center cursor-pointer"
              key={index}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleLeave}
            >
              <div
                className="absolute w-full h-full z-10 bg-transparent"
              ></div>
              {activeIndex === index || hoverIndex === index ? <>
                <img
                  src={Hover2560}
                  alt={""}
                  className="absolute z-10 -mt-2.5 hidden 2xl:block"                  
                />
                <img
                  src={Hover834}
                  alt={""}
                  className="absolute z-10 -mt-[7px] hidden md:block 2xl:hidden"                  
                />
                <img
                  src={Hover320}
                  alt={""}
                  className="absolute z-10 -mt-[5px] block md:hidden"                  
                />
                <img
                  src={ArtsHover}
                  alt={""}
                  className={`w-full h-full z-0 `}
                />
              </>
              : <img
                src={Arts}
                alt={""}
                className={`w-full h-full z-0 `}
              />
              }
              
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default Video;
