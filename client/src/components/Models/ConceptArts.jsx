import React, { useState } from "react";

function ConceptArts() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="max-w-[1520px] mx-auto">
      <div className="flex flex-col justify-between items-center -gap-16">
        <img src="img/top-vector.svg" alt="" className="w-1/2 xl:w-fit"/>
        <img
          src="img/concept_art.png"
          alt="concept_art"
          className=" rounded-[3px]"
        />
        <img src="img/bottom-vector.svg" alt="" className="w-1/2 xl:w-fit" />
      </div>    

      <div className="flex gap-5 pb-4 mt-4 overflow-x-auto " id="model_flow">
        {["1", "1", "1", "1", "1", "1", "1"].map((img, index) => (
          <img
            src="img/concept_art.jpg"
            alt="concept_art"
            className={`w-[190px] 2xl:w-[365px] h-[78px] 2xl:h-[151px] rounded-[3px] ${
              activeIndex === index ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ConceptArts;