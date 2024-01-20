import React from "react";
import Button from "./Buttons/Button";
import { Link } from "react-router-dom";
import TwitterIcon from "../assets/img/socials/twitter.png";
import TwitterHoverIcon from "../assets/img/socials/twitter_.png";
import ReditIcon from "../assets/img/socials/redit.png";
import ReditHoverIcon from "../assets/img/socials/redit_.png";
import GoogleIcon from "../assets/img/socials/google.png";
import GoogleHoverIcon from "../assets/img/socials/google_.png";
import InstagramIcon from "../assets/img/socials/instagram.png";
import InstagramHoverIcon from "../assets/img/socials/instagram_.png";
import TiktokIcon from "../assets/img/socials/tiktok.png";
import TiktokHoverIcon from "../assets/img/socials/tiktok_.png";
import YoutubeIcon from "../assets/img/socials/youtube.png";
import YoutubeHoverIcon from "../assets/img/socials/youtube_.png";
import DonateIcon from "../assets/img/donate.svg";
import { useTranslation } from 'react-i18next';

export default function IntroSection() {
  const { t, i18n } = useTranslation();
  return (
    <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative ">
      <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto ">            
        <div className="relative flex flex-col md:flex-row justify-between">
          <div>
            <div className={` ${i18n.language === 'en' ? `w-[250px] md:w-[500px] 2xl:w-[700px] 3xl:w-[800px]` : `w-[304px] md:w-[550px] 2xl:w-[750px] 3xl:w-[870px]`} flex flex-row gap-3 md:gap-7 2xl:gap-6`}>
              <div className="min-w-[7px] md:min-w-[10px] 2xl:min-w-[15px] mt-0.5 -mb-14 md:my-1.5 3xl:my-2.5 bg-primary-gradient rounded"> </div>
              <div className="text-white font-bold text-[28px] md:text-[46px] 2xl:text-[64px] 3xl:text-[78px] leading-[31px] md:leading-[44px] 2xl:leading-[61px] 3xl:leading-[75px] text-left  relative ">
                {t('introtitle')}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:px-10 py-4 md:py-6 2xl:p-12 3xl:p-8 gap-[17px] md:gap-[40px] 2xl:gap-[95px]">
              <div className="order-last lg:order-first inline-flex flex-col w-fit  ">
                <Button icon={DonateIcon} text={t('donateviastripe')} />
                <Link >
                  <div className="pt-[20px] 2xl:pt-[35px] font-bold text-[14px] 2xl:text-[18px] ">
                    <p className="relative z-10 transition duration-300 hover:text-[#FFA801] text-white uppercase text-left">{t('orsubscribetonewsteller')}</p> 
                  </div>
                </Link>
              </div>
              <div className=" flex flex-row md:gap-[17px] pl-4 md:pl-0 2xl:pt-3">
                <div className="min-w-[10px] 2xl:min-w-[15px] h-[75px] 2xl:mt-1.5 bg-primary-gradient rounded hidden md:block">
                  {" "}
                </div>
                <div className="relative w-[262px] md:w-[353px] 2xl:w-[470px] text-[14px] md:text-[18px] 2xl:text-[23px] leading-[16px] md:leading-[21px] 2xl:leading-[27px] text-left text-white ">
                  {t('projectintro')}
                </div>
              </div>
            </div>
          </div>        
          <div className="flex flex-col items-center gap-[11px] pt-4 md:pt-0 2xl:pt-24 3xl:pt-32">
            <div className="text-sm font-bold text-white">{t('followus')}</div>
            <div className="flex flex-row md:flex-col gap-[11px]">
              <div className="relative z-10">
                <img src={TwitterIcon} alt="" className="w-[29px] md:w-[50px] h-[29px] md:h-[50px] cursor-pointer"/>
                <img
                  src={TwitterHoverIcon}
                  className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100 w-[29px] md:w-[50px] h-[29px] md:h-[50px] cursor-pointer"
                  alt=""
                />
              </div>
              <div className="relative z-10">
                <img src={ReditIcon} alt="" className="w-[29px] md:w-[50px] h-[29px] md:h-[50px] cursor-pointer" />
                <img
                  src={ReditHoverIcon}
                  className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition duration-300 w-[29px] md:w-[50px] h-[29px] md:h-[50px] cursor-pointer"
                  alt=""
                />
              </div>
              <div className="relative z-10">
                <img src={InstagramIcon} alt="" className="w-[29px] md:w-[50px] h-[29px] md:h-[50px] cursor-pointer" />
                <img
                  src={InstagramHoverIcon}
                  className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100 w-[29px] md:w-[50px] h-[29px] md:h-[50px] cursor-pointer"
                  alt=""
                />
              </div>
              <div className="relative z-10">
                <img src={TiktokIcon} alt="" className="w-[29px] md:w-[50px] h-[29px] md:h-[50px] cursor-pointer" />
                <img
                  src={TiktokHoverIcon}
                  className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100 w-[29px] md:w-[50px] h-[29px] md:h-[50px] cursor-pointer"
                  alt=""
                />
              </div>
              <div className="relative z-10">
                <img src={GoogleIcon} alt="" className="w-[29px] md:w-[50px] h-[29px] md:h-[50px] cursor-pointer" />
                <img
                  src={GoogleHoverIcon}
                  className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100 w-[29px] md:w-[50px] h-[29px] md:h-[50px] cursor-pointer"
                  alt=""
                />
              </div>
              <div className="relative z-10">
                <img src={YoutubeIcon} alt="" className="w-[29px] md:w-[50px] h-[29px] md:h-[50px] cursor-pointer" />
                <img
                  src={YoutubeHoverIcon}
                  className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100 w-[29px] md:w-[50px] h-[29px] md:h-[50px] cursor-pointer"
                  alt=""
                />
              </div>
            </div>          
          </div>        
        </div>
      </div>
    </div>
  );
}
