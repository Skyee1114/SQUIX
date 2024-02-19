import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import ModelHover from "../../assets/img/model3d_hover.jpg";
import Hover2560 from "../../assets/img/model3d_hover-2560.svg";
import Hover834 from "../../assets/img/model3d_hover-834.svg";
import Hover320 from "../../assets/img/model3d_hover-320.svg";
import Model from "../../assets/img/model3d.jpg";

function Lore() {
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

    const { t } = useTranslation();

    return (
        <div className="flex flex-col md:flex-row justify-between max-w-[1520px] mx-auto gap-12">
            <div className="order-last md:order-first h-[80px] md:h-[500px] 2xl:h-[750px] min-w-[240px] 2xl:min-w-[400px] overflow-auto mt-4 " id="model_flow">

                
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
                    <div
                        className="absolute w-full h-full z-20 bg-transparent"
                    ></div>
                    {activeIndex === index || hoverIndex === index ? <>
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
                        <img
                        src={ModelHover}
                        alt={""}
                        className={`w-full h-full z-0 `}
                        />
                    </>
                    : <img
                        src={Model}
                        alt={""}
                        className={`w-full h-full z-0 `}
                    />
                    }
                    
                    </div>
                ))}
                <div className="hidden md:block sticky right-0 top-0 md:bottom-0 w-[142px] md:w-[204px] 2xl:w-[365px] h-20 bg-gradient-to-l md:bg-gradient-to-t from-[#3b362b] to-transparent mt-[-95px] ml-[-155px] md:ml-0"></div>
                </div>
            </div>
            <div className='w-full text-left pe-0 md:pe-16'>
                <p className='text-white font-bold text-[30px] 2xl:text-[47px] mb-8'>{t('lore1title')} {activeIndex}</p>
                <p className='text-white text-[15px] 2xl:text-[23px] mb-4'>{t('lore1intro')}</p>
                <p className='text-white text-[15px] 2xl:text-[23px]  mb-4'>{t('lore1intro')}</p>
                <p className='text-white text-[15px] 2xl:text-[23px]  mb-4'>{t('lore1intro')}</p>
            </div>
        </div>



    )
}

export default Lore