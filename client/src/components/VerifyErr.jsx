import React from "react";
import Button from "./Buttons/Button";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function VerifyErr() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="absolute -z-10 w-full h-[800px] 2xl:h-[1250px] bg-[url('./assets/img/verify-bg-320.jpg')] sm:bg-[url('./assets/img/verify-bg-834.jpg')] xl:bg-[url('./assets/img/verify-bg-1920.jpg')] bg-no-repeat 5xl:bg-cover bg-top">
      </div>   
      <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative" >
        <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto">  
          <div className="flex flex-col gap-8 pb-6 sm:pb-24 xl:pb-40 2xl:pb-48 pt-8 2xl:pt-16">
            <div className="text-center text-white text-[18px] md:text-[20px] 2xl:text-[54px] leading-[26px] md:leading-[28px] 2xl:leading-[78px] font-bold  uppercase">
              {t('verifytitle')}
            </div>
            <div className="flex flex-row mx-auto">
              <div className=" lg:w-[582px] 2xl:w-[654px] lg:h-[241px] 2xl:h-[450px] p-8 2xl:p-20 bg-white rounded-[3px] shadow flex-col justify-between items-start gap-4 lg:gap-0 inline-flex relative">
                <div className="text-black text-[18px] md:text-[24px] 2xl:text-[54px] leading-[16px] md:leading-[21px] 2xl:leading-[78px] font-bold text-left uppercase">
                  {t('error')}
                </div>
                <div className="w-full 2xl:w-[548px] h-16 p-5 bg-[#A34F4F] bg-opacity-20 justify-start items-center gap-[18px] inline-flex">
                <div className="relative w-6 h-6">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="signs">
                      <path
                        id="Vector 8"
                        d="M18.5098 4.99996L4.99996 18.5098"
                        stroke="#A45050"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        id="Vector 9"
                        d="M5 4.99996L18.5098 18.5098"
                        stroke="#A45050"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                </div>
                  <div className="text-black text-[14px] 2xl:text-[20px] leading-[20px] 2xl:leading-[28px] font-medium font-['Jost']">
                    {t('error')}
                  </div>
                </div>
                <div className="w-[7.88px] 2xl:w-[15.12px] h-[52px] 2xl:h-[44.62px] bg-gradient-to-b from-amber-500 to-orange-500 rounded-[3px] absolute left-0 top-8 2xl:top-24" />
                <div className="2xl:w-[548px]  text-black text-[14px] 2xl:text-[23px] leading-[16px] 2xl:leading-[26px] text-left font-normal font-['Jost'] ">
                  {t('verifyerrorintro')}
                </div>
                <Link 
                  to={"/please-verify"}
                  className="w-full"
                  >
                  <Button
                    text={t('tryverifyagain')}
                    className={"w-full text-center flex items-center justify-center"}
                  />
                </Link>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
