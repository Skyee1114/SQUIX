import React from "react";
import Button from "../../components/Buttons/Button";
import { register } from '../../actions/auth';
import { useTranslation } from 'react-i18next';

export default function Verify() {
  const { t } = useTranslation();
  const VerifyEmailButtonClick = () => {
    
  };  
  return (
    <div>
      <div className="absolute -z-10 w-full h-[800px] 2xl:h-[1250px] bg-[url('./assets/img/verify-bg-320.jpg')] sm:bg-[url('./assets/img/verify-bg-834.jpg')] xl:bg-[url('./assets/img/verify-bg-1920.jpg')] bg-no-repeat 5xl:bg-cover bg-top">
      </div>   
      <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative" >
        <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto">  
          <div className="flex flex-col gap-8 pb-8 sm:pb-24 xl:pb-40 2xl:pb-48 pt-8 2xl:pt-16">
            <div className="text-center text-white text-[18px] md:text-[20px] 2xl:text-[54px] leading-[26px] md:leading-[28px] 2xl:leading-[78px] font-bold  uppercase">
              {t('verifytitle')}
            </div>
            <div className="flex flex-row mx-auto">
              <div className=" lg:w-[582px] 2xl:w-[801px] lg:h-[177px] 2xl:h-[477px] p-8 2xl:p-20 bg-white rounded-[3px] shadow flex-col justify-between items-start gap-4 lg:gap-0 inline-flex relative">
                <div className="text-black text-[18px] md:text-[24px] 2xl:text-[54px] leading-[16px] md:leading-[21px] 2xl:leading-[78px] font-bold text-left uppercase">
                  {t('verifyyouraccount')}
                </div>
                <div className="w-[7.88px] 2xl:w-[15.12px] h-[52px] 2xl:h-[44.62px] bg-gradient-to-b from-amber-500 to-orange-500 rounded-[3px] absolute left-0 top-8 2xl:top-24" />
                <div className="2xl:w-[641px] 2xl:h-[74.22px] text-black text-[14px] 2xl:text-[23px] leading-[16px] 2xl:leading-[26px] text-left font-normal font-['Jost'] ">
                  {t('verifyintro')}
                </div>
                <Button
                  text={t('verifyemail')}
                  className={"w-full text-center flex items-center justify-center"}
                  onClick={() => VerifyEmailButtonClick()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
