import React, { useState, useEffect } from "react";
import Model3D from "./Model3D";
import ConceptArts from "./ConceptArts";
import Video from "./Video";
import Lore from "./Lore";
import { useTranslation } from 'react-i18next';

const ModelPage = () => {

  const { t } = useTranslation();

  const [viewType, setViewType] = useState('');

  useEffect(() => {
    setViewType(t('3dmodel'));
  }, [t]);
  
  const btnClass =
    "font-bold text-[15px] 2xl:text-[20px] text-center flex items-center justify-center relative cursor-pointer w-[150px] 2xl:w-[200px] h-[40px] 2xl:h-[60px] bg-repeat-round transition duration-300 ease-in-out";
  const activeClass = "w-[150px] 2xl:w-[200px] h-[40px] 2xl:h-[60px] bg-repeat-round bg-[url('./assets/img/3dbtn_back.svg')] text-[#FFA801] opacity-100 transition-opacity duration-300";
  const inactiveClass = "opacity-0 transition-opacity duration-300";

  return (
    <div className={`overflow-hidden  bg-[url('./assets/img/model_back.svg')] bg-no-repeat 6xl:bg-cover bg-top ${viewType === t('3dmodel') || viewType === t('lore') ? "pb-16 2xl:pb-40" : "pb-16"}  pt-16 2xl:pt-20`}>
      <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative">
        <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto">        
          <div className="flex flex-col lg:flex-row items-center  gap-[40px] 3xl:gap-[150px] overflow-auto pb-12">
            <img src="img/logoP3.png" alt="logoP3" className=" w-[99px] md:w-[132px] 2xl:w-[237px] absolute lg:relative" />
            <div className="uppercase flex flex-row justify-between gap-3 2xl:gap-8 mx-auto pt-32 lg:pt-0 relative z-30 ">
              {[ `${t('3dmodel')}`, `${t('conceptarts')}`, `${t('video')}`, `${t('lore')}`].map(
                (item, index) => {
                  const isActive = viewType === item;
                  return (
                    <div>
                      <div className={`absolute ${ isActive ? activeClass : inactiveClass }`}>
                      </div>
                      <div
                        className={`${btnClass} ${ isActive ? "text-[#FFA801]" :"text-white"} hover:text-[#FFA801]`}
                        onClick={() => {
                          setViewType(item);
                        }}
                        key={index}
                      >
                        {item}
                      </div>
                      
                    </div>
                    
                  );
                }
              )}
            </div>
          </div>
          {viewType === `${t('3dmodel')}` && <Model3D />}
          {viewType === `${t('conceptarts')}` && <ConceptArts />}
          {viewType === `${t('video')}` && <Video />}
          {viewType === `${t('lore')}` && <Lore />}
        </div>
      </div>
    </div>
  );

};

export default ModelPage;
