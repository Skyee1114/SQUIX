import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SelectLang from "./SelectLang";
import ProfileButtons from "./ProfileButtons";
import LogoSvg from "../assets/img/logo.svg";
import LogoNavSvgSmall from "../assets/img/logo_nav_small.svg"
import MenuNavSvg from "../assets/img/menu_nav.svg"
import { useTranslation } from 'react-i18next';
import { useEffect, useContext } from "react";
import { loadUser } from "../actions/auth";
// import {UserContext} from "../contexts/UserContext"


export default function Header() {

  const { t } = useTranslation();

  const [mobileMenu, setMobileMenu] = useState(false);
  
  const mobileMenuButtonClick = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative ">
      <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto pt-4 2xl:pt-10">            
        <div className="pb-4 md:pb-12 2xl:pb-20">
          <div className="relative z-20 flex justify-between">
            <Link to={"/"}>
              <div>
                <img src={LogoNavSvgSmall} alt="logo" className="w-full  block 2xl:hidden" />
                <img src={LogoSvg} alt="logo" className="w-[120px] 3xl:w-full hidden 2xl:block" />
              </div>
            </Link>            
            <div>
              <div className="hidden 2xl:block" >
                <div className="flex gap-[30px] 3xl:gap-[55px] 5xl:gap-[72px]">
                  <Link
                    to={"/"}
                    className="font-bold text-[18px] text-white pt-3 transition duration-300 hover:text-[#FFA801] uppercase"
                  >
                    {t('playtest')}
                  </Link>
                  <Link
                    to={"/"}
                    className="font-bold text-[18px] text-white pt-3 transition duration-300 hover:text-[#FFA801] uppercase"
                  >
                    {t('roadmap')}
                  </Link>
                  <Link
                    to={"/"}
                    className="font-bold text-[18px] text-white pt-3 transition duration-300 hover:text-[#FFA801] uppercase"
                  >
                    {t('careers')}
                  </Link>
                  <Link
                    to={"/"}
                    className="font-bold text-[18px] text-white pt-3 transition duration-300 hover:text-[#FFA801] uppercase"
                  >
                    {t('contacts')}
                  </Link>
                  <SelectLang />
                  <ProfileButtons />
                </div>
              </div> 
              <div className=" pt-4 2xl:pt-8 w-full block 2xl:hidden" onClick={mobileMenuButtonClick}>
                <img src={MenuNavSvg} alt="menu"/>
              </div>
              {
                mobileMenu && 
                <div className="fixed top-0 left-0 w-full h-full bg-black flex flex-col gap-10 z-50">
                  <div className="flex justify-between pt-4 px-5">
                    <Link to={"/"}>
                      <div>
                        <img src={LogoNavSvgSmall} alt="logo"/>
                      </div>
                    </Link>                    
                    <div className="pt-4" onClick={mobileMenuButtonClick}>
                      <img src={MenuNavSvg} alt="menu"/>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-end">
                    <Link
                      to={"/"}
                      className="font-bold text-[14px] text-white pt-3 pr-5 transition duration-300 hover:text-[#FFA801] uppercase"
                    >
                      {t('playtest')}
                    </Link>
                    <Link
                      to={"/"}
                      className="font-bold text-[14px] text-white pt-3 pr-5 transition duration-300 hover:text-[#FFA801] uppercase"
                    >
                      {t('roadmap')}
                    </Link>
                    <Link
                      to={"/"}
                      className="font-bold text-[14px] text-white pt-3 pr-5 transition duration-300 hover:text-[#FFA801] uppercase"
                    >
                      {t('careers')}
                    </Link>
                    <Link
                      to={"/"}
                      className="font-bold text-[14px] text-white pt-3 pr-5 transition duration-300 hover:text-[#FFA801] uppercase"
                    >
                      {t('contacts')}
                    </Link>
                    <div className="pr-3"> 
                      <SelectLang />
                    </div>
                    <div className="pr-3">
                      <ProfileButtons/>
                    </div>
                  </div>
                </div>
              }   
            </div>
                
          </div>
        </div>
      </div>
    </div>
  );
}
