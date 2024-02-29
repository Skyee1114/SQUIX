import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Arrow from "./Arrow";
import Button from "./Buttons/Button";
import { useTranslation } from 'react-i18next';
import {donatetotalamount} from '../actions/payment'

export default function HelpUs() {
  const { t, i18n } = useTranslation();
  const images = ['sproud', 'original', 'pioneer', 'founder', 'oldman', 'royal', 'ultimate'];
  const prices = ['25', '50', '80', '150', '250', '500', '1000'];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [totalamount, setTotalAmount] = useState(0);

  const handleLeftArrowClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleRightArrowClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const fetchTotalAmount = () => {
    donatetotalamount().then(data => {
      if (data) setTotalAmount(data.totalAmount);
    });
  };

  useEffect(() => {
    // Initial fetch
    fetchTotalAmount();

    // Update total amount every 60 seconds
    const interval = setInterval(fetchTotalAmount, 60000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Calculate percentage of total amount achieved
  const percentage = (totalamount / 600000) * 100;

  return (
    <div className="-mt-[1px]  z-10   relative bg-gradient-to-l to-[#FF9D42] from-[#AB2929]  ">
      <div className="absolute w-full h-full bg-no-repeat z-0 bg-contain bg-[url('./assets/img/Elf_Female_mage.png')] hidden 2xl:block"></div>
      <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative">
        <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto">
          <div className="pb-8 pt-[40px] xl:pt-[77px] flex flex-col gap-96 md:gap-4">
            <div className="flex flex-col md:flex-row justify-between ">
              
              <div className="flex flex-col gap-[26px] w-[280px] xl:w-[405px] 3xl:w-[482px]">
                <div className={`p-2.5 bg-white bg-opacity-60 rounded-[3px] text-black ${i18n.language === 'english' || i18n.language === 'korean' ? `text-sm` : `text-[10px]`} font-bold font-['Jost'] uppercase leading-[9.94px] w-fit`}>
                  {t('99999peoplesupportedproject')}
                </div>
                <div className={`text-black ${i18n.language === 'english' || i18n.language === 'korean' ? `text-[32px] md:text-[34px] xl:text-[97px] leading-[25px] xl:leading-[92px]` : `text-[32px] md:text-[34px] xl:text-[80px] leading-[25px] xl:leading-[72px]`}  font-bold font-['Jost'] uppercase  text-left`}>
                  {t('helpusgrow')}
                </div>
                <div className=" text-black text-[16px] xl:text-[20px] 3xl:text-[23px] leading-[18px] xl:leading-[23px] 3xl:leading-[26px] font-normal font-['Jost'] text-left">
                  {t('helpintro')}
                </div>
                <Link to={"/donate"}>
                  <Button
                    text={t('viewmoredetails')}
                    type={"black"}
                    className={
                      "px-[65px] md:px-[30px] rounded-[3px] text-white text-sm 2xl:text-xl font-bold font-['Jost'] uppercase w-fit"
                    }
                  />  
                </Link>                
              </div>
              <div className="flex flex-col mt-[280px] md:-mt-[90px] 4xl:-mt-[140px] gap-[19px] pl-0 md:pl-[300px] xl:pl-[480px] 3xl:pl-[500px] absolute">
                <div className=" flex flex-row gap-[180px] xl:gap-[300px] 4xl:gap-[330px]">
                  <div>
                    <div className="absolute cursor-pointer shadow-3xl overflow-hidden bg-cover w-[174px] xl:w-[281px] 4xl:w-[315.35px] h-[276px] xl:h-[430px] 4xl:h-[482.25px]">
                      <img src={`img/${images[currentImageIndex]}.png`} alt="Sproud" className="absolute w-full h-full object-cover" />
                      <div className="flex flex-col h-full justify-between">
                        <div className="flex p-[10px] xl:p-[18px] z-10">
                          <img
                            src="img/triangle.svg"
                            className="w-[20px] xl:w-[31px] 4xl:w-[35px] "
                            alt=""
                          />
                        </div>
                        <div className="flex flex-row justify-between">
                          <div className="flex flex-col-reverse">
                            <div className="flex flex-row gap-1 py-2 xl:py-4 pl-2 z-10 ">
                              <div className="text-white text-[16px] xl:text-[32px] font-bold font-['Jost'] leading-[23px]">
                                {prices[currentImageIndex]}
                              </div>
                              <div className="text-right text-white text-[8px] xl:text-[17px] font-bold font-['Jost'] leading-3">
                                €
                              </div>
                            </div>
                          </div>
                          <div className=" flex flex-col gap-3 xl:gap-6 pr-6 z-10">
                            <div className="text-right text-white text-[25px] xl:text-[35px] 4xl:text-[43px] font-bold font-['Jost'] leading-[17px] xl:leading-[24px] 4xl:leading-[30.53px]">
                              {t(images[currentImageIndex])}
                            </div>
                            <div className="text-right text-yellow-400 text-[11px] xl:text-[16px] 3xl:text-[20px] font-bold font-['Jost'] leading-[7px] xl:leading-[11px] 3xl:leading-[14.20px] pb-[20px] xl:pb-[34px]">
                              {t('viewdetails')} &gt;
                            </div>
                          </div>
                        </div>
                        <img
                          src="img/rectangle.svg"
                          alt=""
                          className="absolute -bottom-[8px] -left-[1px] z-0 w-[97px] xl:w-[151px] 4xl:w-[169px] h-[97px] xl:h-[157px] 4xl:h-[176px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="absolute cursor-pointer shadow-3xl overflow-hidden   bg-cover  w-[174px] xl:w-[281px] 4xl:w-[315.35px] h-[276px] xl:h-[430px] 4xl:h-[482.25px]">
                      <img src={`img/${images[(currentImageIndex+1+images.length)%images.length]}.png`} alt="Original" className="absolute w-full h-full object-cover" />
                      <div className="flex flex-col h-full justify-between">
                        <div className="flex p-[10px] xl:p-[18px] z-10">
                          <img
                            src="img/triangle.svg"
                            className="w-[20px] xl:w-[31px] 4xl:w-[35px] "
                            alt=""
                          />
                        </div>
                        <div className="flex flex-row justify-between">
                          <div className="flex flex-col-reverse">
                            <div className="flex flex-row gap-1 py-2 xl:py-4 pl-2 z-10 ">
                              <div className="text-white text-[16px] xl:text-[32px] font-bold font-['Jost'] leading-[23px]">
                                {prices[(currentImageIndex+1+prices.length)%prices.length]}
                              </div>
                              <div className="text-right text-white text-[8px] xl:text-[17px] font-bold font-['Jost'] leading-3">
                                €
                              </div>
                            </div>
                          </div>
                          <div className=" flex flex-col gap-3 xl:gap-6 pr-6 z-10">
                            <div className="text-right text-white text-[25px] xl:text-[35px] 4xl:text-[43px] font-bold font-['Jost'] leading-[17px] xl:leading-[24px] 4xl:leading-[30.53px]">
                              {t(images[(currentImageIndex+1+images.length)%images.length])}
                            </div>
                            <div className="text-right text-yellow-400 text-[11px] xl:text-[16px] 3xl:text-[20px] font-bold font-['Jost'] leading-[7px] xl:leading-[11px] 3xl:leading-[14.20px] pb-[20px] xl:pb-[34px]">
                              {t('viewdetails')} &gt;
                            </div>
                          </div>
                        </div>
                        <img
                          src="img/rectangle.svg"
                          width={170}
                          height={176}
                          alt=""
                          className=" absolute -bottom-[8px] -left-[1px] z-0 w-[97px] xl:w-[151px] 4xl:w-[169px] h-[97px] xl:h-[157px] 4xl:h-[176px]"
                        />
                      </div>
                    </div>
                  </div>                 
                  <div>
                    <div className="absolute cursor-pointer shadow-3xl overflow-hidden   bg-cover  w-[174px] xl:w-[281px] 4xl:w-[315.35px] h-[276px] xl:h-[430px] 4xl:h-[482.25px]">
                      <img src={`img/${images[(currentImageIndex+2+images.length)%images.length]}.png`} alt="Pioneer" className="absolute w-full h-full object-cover" />
                      <div className="flex flex-col h-full justify-between">
                        <div className="flex p-[10px] xl:p-[18px] z-10">
                          <img
                            src="img/triangle.svg"
                            className="w-[20px] xl:w-[31px] 4xl:w-[35px] "
                            alt=""
                          />
                        </div>
                        <div className="flex flex-row justify-between">
                          <div className="flex flex-col-reverse">
                            <div className="flex flex-row gap-1 py-2 xl:py-4 pl-2 z-10 ">
                              <div className="text-white text-[16px] xl:text-[32px] font-bold font-['Jost'] leading-[23px]">
                                {prices[(currentImageIndex+2+prices.length)%prices.length]}
                              </div>
                              <div className="text-right text-white text-[8px] xl:text-[17px] font-bold font-['Jost'] leading-3">
                                €
                              </div>
                            </div>
                          </div>
                          <div className=" flex flex-col gap-3 xl:gap-6 pr-6 z-10">
                            <div className="text-right text-white text-[25px] xl:text-[35px] 4xl:text-[43px] font-bold font-['Jost'] leading-[17px] xl:leading-[24px] 4xl:leading-[30.53px]">
                              {t(images[(currentImageIndex+2+images.length)%images.length])}
                            </div>
                            <div className="text-right text-yellow-400 text-[11px] xl:text-[16px] 3xl:text-[20px] font-bold font-['Jost'] leading-[7px] xl:leading-[11px] 3xl:leading-[14.20px] pb-[20px] xl:pb-[34px]">
                              {t('viewdetails')} &gt;
                            </div>
                          </div>
                        </div>
                        <img
                          src="img/rectangle.svg"
                          width={170}
                          height={176}
                          alt=""
                          className=" absolute -bottom-[8px] -left-[1px] z-0 w-[97px] xl:w-[151px] 4xl:w-[169px] h-[97px] xl:h-[157px] 4xl:h-[176px]"
                        />
                      </div>
                    </div>
                  </div> 
                  <div>
                    <div className="absolute cursor-pointer shadow-3xl overflow-hidden   bg-cover  w-[174px] xl:w-[281px] 4xl:w-[315.35px] h-[276px] xl:h-[430px] 4xl:h-[482.25px]">
                      <img src={`img/${images[(currentImageIndex+3+images.length)%images.length]}.png`} alt="Founder" className="absolute w-full h-full object-cover" />
                      <div className="flex flex-col h-full justify-between">
                        <div className="flex p-[10px] xl:p-[18px] z-10">
                          <img
                            src="img/triangle.svg"
                            className="w-[20px] xl:w-[31px] 4xl:w-[35px] "
                            alt=""
                          />
                        </div>
                        <div className="flex flex-row justify-between">
                          <div className="flex flex-col-reverse">
                            <div className="flex flex-row gap-1 py-2 xl:py-4 pl-2 z-10 ">
                              <div className="text-white text-[16px] xl:text-[32px] font-bold font-['Jost'] leading-[23px]">
                                {prices[(currentImageIndex+3+prices.length)%prices.length]}
                              </div>
                              <div className="text-right text-white text-[8px] xl:text-[17px] font-bold font-['Jost'] leading-3">
                                €
                              </div>
                            </div>
                          </div>
                          <div className=" flex flex-col gap-3 xl:gap-6 pr-6 z-10">
                            <div className="text-right text-white text-[25px] xl:text-[35px] 4xl:text-[43px] font-bold font-['Jost'] leading-[17px] xl:leading-[24px] 4xl:leading-[30.53px]">
                              {t(images[(currentImageIndex+3+images.length)%images.length])}
                            </div>
                            <div className="text-right text-yellow-400 text-[11px] xl:text-[16px] 3xl:text-[20px] font-bold font-['Jost'] leading-[7px] xl:leading-[11px] 3xl:leading-[14.20px] pb-[20px] xl:pb-[34px]">
                              {t('viewdetails')} &gt;
                            </div>
                          </div>
                        </div>
                        <img
                          src="img/rectangle.svg"
                          width={170}
                          height={176}
                          alt=""
                          className=" absolute -bottom-[8px] -left-[1px] z-0 w-[97px] xl:w-[151px] 4xl:w-[169px] h-[97px] xl:h-[157px] 4xl:h-[176px]"
                        />
                      </div>
                    </div>
                  </div> 
                  <div>
                    <div className="absolute cursor-pointer shadow-3xl overflow-hidden   bg-cover  w-[174px] xl:w-[281px] 4xl:w-[315.35px] h-[276px] xl:h-[430px] 4xl:h-[482.25px]">
                      <img src={`img/${images[(currentImageIndex+4+images.length)%images.length]}.png`} alt="Oldman" className="absolute w-full h-full object-cover" />
                      <div className="flex flex-col h-full justify-between">
                        <div className="flex p-[10px] xl:p-[18px] z-10">
                          <img
                            src="img/triangle.svg"
                            className="w-[20px] xl:w-[31px] 4xl:w-[35px] "
                            alt=""
                          />
                        </div>
                        <div className="flex flex-row justify-between">
                          <div className="flex flex-col-reverse">
                            <div className="flex flex-row gap-1 py-2 xl:py-4 pl-2 z-10 ">
                              <div className="text-white text-[16px] xl:text-[32px] font-bold font-['Jost'] leading-[23px]">
                                {prices[(currentImageIndex+4+prices.length)%prices.length]}
                              </div>
                              <div className="text-right text-white text-[8px] xl:text-[17px] font-bold font-['Jost'] leading-3">
                                €
                              </div>
                            </div>
                          </div>
                          <div className=" flex flex-col gap-3 xl:gap-6 pr-6 z-10">
                            <div className="text-right text-white text-[25px] xl:text-[35px] 4xl:text-[43px] font-bold font-['Jost'] leading-[17px] xl:leading-[24px] 4xl:leading-[30.53px]">
                              {t(images[(currentImageIndex+4+images.length)%images.length])}
                            </div>
                            <div className="text-right text-yellow-400 text-[11px] xl:text-[16px] 3xl:text-[20px] font-bold font-['Jost'] leading-[7px] xl:leading-[11px] 3xl:leading-[14.20px] pb-[20px] xl:pb-[34px]">
                              {t('viewdetails')} &gt;
                            </div>
                          </div>
                        </div>
                        <img
                          src="img/rectangle.svg"
                          width={170}
                          height={176}
                          alt=""
                          className=" absolute -bottom-[8px] -left-[1px] z-0 w-[97px] xl:w-[151px] 4xl:w-[169px] h-[97px] xl:h-[157px] 4xl:h-[176px]"
                        />
                      </div>
                    </div>
                  </div> 
                  <div>
                    <div className="absolute cursor-pointer shadow-3xl overflow-hidden bg-cover  w-[174px] xl:w-[281px] 4xl:w-[315.35px] h-[276px] xl:h-[430px] 4xl:h-[482.25px]">
                      <img src={`img/${images[(currentImageIndex+5+images.length)%images.length]}.png`} alt="Royal" className="absolute w-full h-full object-cover" />
                      <div className="flex flex-col h-full justify-between">
                        <div className="flex p-[10px] xl:p-[18px] z-10">
                          <img
                            src="img/triangle.svg"
                            className="w-[20px] xl:w-[31px] 4xl:w-[35px] "
                            alt=""
                          />
                        </div>
                        <div className="flex flex-row justify-between">
                          <div className="flex flex-col-reverse">
                            <div className="flex flex-row gap-1 py-2 xl:py-4 pl-2 z-10 ">
                              <div className="text-white text-[16px] xl:text-[32px] font-bold font-['Jost'] leading-[23px]">
                                {prices[(currentImageIndex+5+prices.length)%prices.length]}
                              </div>
                              <div className="text-right text-white text-[8px] xl:text-[17px] font-bold font-['Jost'] leading-3">
                                €
                              </div>
                            </div>
                          </div>
                          <div className=" flex flex-col gap-3 xl:gap-6 pr-6 z-10">
                            <div className="text-right text-white text-[25px] xl:text-[35px] 4xl:text-[43px] font-bold font-['Jost'] leading-[17px] xl:leading-[24px] 4xl:leading-[30.53px]">
                              {t(images[(currentImageIndex+5+images.length)%images.length])}
                            </div>
                            <div className="text-right text-yellow-400 text-[11px] xl:text-[16px] 3xl:text-[20px] font-bold font-['Jost'] leading-[7px] xl:leading-[11px] 3xl:leading-[14.20px] pb-[20px] xl:pb-[34px]">
                              {t('viewdetails')} &gt;
                            </div>
                          </div>
                        </div>
                        <img
                          src="img/rectangle.svg"
                          width={170}
                          height={176}
                          alt=""
                          className=" absolute -bottom-[8px] -left-[1px] z-0 w-[97px] xl:w-[151px] 4xl:w-[169px] h-[97px] xl:h-[157px] 4xl:h-[176px]"
                        />
                      </div>
                    </div>
                  </div> 
                  <div>
                    <div className="absolute cursor-pointer shadow-3xl overflow-hidden   bg-cover  w-[174px] xl:w-[281px] 4xl:w-[315.35px] h-[276px] xl:h-[430px] 4xl:h-[482.25px]">
                      <img src={`img/${images[(currentImageIndex+6+images.length)%images.length]}.png`} alt="Ultimate" className="absolute w-full h-full object-cover" />
                      <div className="flex flex-col h-full justify-between">
                        <div className="flex p-[10px] xl:p-[18px] z-10">
                          <img
                            src="img/triangle.svg"
                            className="w-[20px] xl:w-[31px] 4xl:w-[35px] "
                            alt=""
                          />
                        </div>
                        <div className="flex flex-row justify-between">
                          <div className="flex flex-col-reverse">
                            <div className="flex flex-row gap-1 py-2 xl:py-4 pl-2 z-10 ">
                              <div className="text-white text-[16px] xl:text-[32px] font-bold font-['Jost'] leading-[23px]">
                                {prices[(currentImageIndex+6+prices.length)%prices.length]}
                              </div>
                              <div className="text-right text-white text-[8px] xl:text-[17px] font-bold font-['Jost'] leading-3">
                                €
                              </div>
                            </div>
                          </div>
                          <div className=" flex flex-col gap-3 xl:gap-6 pr-6 z-10">
                            <div className="text-right text-white text-[25px] xl:text-[35px] 4xl:text-[43px] font-bold font-['Jost'] leading-[17px] xl:leading-[24px] 4xl:leading-[30.53px]">
                              {t(images[(currentImageIndex+6+images.length)%images.length])}
                            </div>
                            <div className="text-right text-yellow-400 text-[11px] xl:text-[16px] 3xl:text-[20px] font-bold font-['Jost'] leading-[7px] xl:leading-[11px] 3xl:leading-[14.20px] pb-[20px] xl:pb-[34px]">
                              {t('viewdetails')} &gt;
                            </div>
                          </div>
                        </div>
                        <img
                          src="img/rectangle.svg"
                          width={170}
                          height={176}
                          alt=""
                          className=" absolute -bottom-[8px] -left-[1px] z-0 w-[97px] xl:w-[151px] 4xl:w-[169px] h-[97px] xl:h-[157px] 4xl:h-[176px]"
                        />
                      </div>
                    </div>
                  </div> 
                </div>
                <div className="relative flex gap-[10px] items-center top-[277px] xl:top-[430px] 3xl:top-[440px] 4xl:top-[490px]">
                  <div className="flex bg-black rounded-[3px]">
                    <Arrow direction="left" onClick={handleLeftArrowClick} />
                    <Arrow direction="right" onClick={handleRightArrowClick}/>
                  </div>
                  <div className="text-right text-white text-[16px] sm:text-[32px] font-bold font-['Jost'] leading-[18px] sm:leading-[37.22px]">
                    {`${currentImageIndex + 1}/${images.length}`}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row justify-between items-end">
                <div className="text-white text-sm md:text-base font-bold font-['Jost'] uppercase leading-none">
                  {t('start')}
                </div>
                <div className="w-[100px] md:w-[120px] text-white text-sm md:text-base font-bold font-['Jost'] uppercase leading-none text-right">
                  {t('ourgoal600000eur')}
                </div>
              </div>
              <div className="relative">
                <div 
                  className="w-full h-1 md:h-2 xl:h-3 2xl:h-4 absolute top-4 md:top-6 xl:top-8 bg-gradient-to-r from-orange-500 to-white absolute ml-2 sm:ml-4 md:ml-6 xl:ml-8 2xl:ml-10"
                  style={{ width: `${percentage}%` }}
                />
                <img 
                  src="img/donation_progress_bar-2560.svg" 
                  alt="" 
                  className="h-16 w-auto max-w-full hidden 3xl:block" 
                />
                <img 
                  src="img/donation_progress_bar-1512.svg" 
                  alt="" 
                  className="h-16 w-auto max-w-full hidden xl:block 3xl:hidden" 
                />
                <img 
                  src="img/donation_progress_bar-1512.svg" 
                  alt="" 
                  className="h-8 md:h-12 w-auto max-w-full sm:block xl:hidden" 
                />
              </div>            
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
