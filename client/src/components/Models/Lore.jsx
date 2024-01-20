import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

function Lore() {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleClick = (index) => {
        setActiveIndex(index);
    };
    const { t } = useTranslation();

    return (
        <div className="flex flex-col md:flex-row justify-between max-w-[1520px] mx-auto gap-12">
            <div className="order-last md:order-first h-[80px] md:h-[500px] 2xl:h-[750px] min-w-[240px] 2xl:min-w-[400px] overflow-auto mt-4 " id="model_flow">

                
            <div className="flex flex-row md:flex-col justify-between w-fit">
              <div className="sticky left-0 top-0 w-[142px] md:w-[204px] 2xl:w-[365px] h-20 bg-gradient-to-r md:bg-gradient-to-b from-[#3b362b] to-transparent mt-[-95px] ml-[-155px] md:ml-0 z-10"></div>
              
              {["Elven City", "Orcs", "Dwarves", "The Great Portal", "The Great Portal", "The Great Portal"].map((item, index) => (
                <div className="relative w-[142px] md:w-[204px] 2xl:w-[365px] mx-4 md:mx-0 my-0 md:my-4" key={index}>
                  <div className="absolute w-full h-full z-20 bg-transparent" onClick={() => handleClick(index)}>
                    </div>
                    <img
                        
                        src={`img/${item}.png`}
                        alt={""}
                        className={`w-full h-full z-0 ${activeIndex === index ? 'opacity-100' : 'opacity-50'}`}
                    />
              </div>
              ))}
              <div className="sticky right-0 top-0 md:bottom-0 w-[142px] md:w-[204px] 2xl:w-[365px] h-20 bg-gradient-to-l md:bg-gradient-to-t from-[#3b362b] to-transparent mt-[-95px] ml-[-155px] md:ml-0"></div>
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