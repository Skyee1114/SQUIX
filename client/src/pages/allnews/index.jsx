import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NewsImg_1920 from "../../assets/img/news-1920.jpg";
import NewsImg_834 from "../../assets/img/news-834.jpg"
import NewsImg_320 from "../../assets/img/news-320.jpg"
import Button from "../../components/Buttons/Button";
import Tag from "../../components/Tag";
import TopPostImg from "../../assets/img/top-posts.jpg";
import NewsTagImg from "../../assets/img/news_tag.svg";
import { useTranslation } from 'react-i18next';

function AllNews() {
  const { t } = useTranslation();
  return (
    <>
      <Navbar colorMode="black"/>
      <div className="bg-white md:bg-[#F5F1ED] py-[24px] md:py-[40px] 2xl:py-[80px]">
        <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative" >
          <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto">
            <div className="4xl:flex flew-row justify-between">
              <div className="4xl:max-w-[1135px] flex flex-col gap-[20px] md:gap-[50px]">
                <div className="flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-10">
                  <div className="font-bold text-[32px] 2xl:text-[54px] leading-[28px] 2xl:leading-[54px] uppercase">
                    {t('allnews')}
                  </div>
                  <div className="flex flex-row gap-8">
                    <div className="font-bold text-[14px] md:text-[16px] 2xl:text-[20px] leading-[13px] md:leading-[15px] 2xl:leading-[19px] text-[#FFA801] uppercase">
                      {t('latestfirst')}
                    </div>
                    <div className="font-bold text-[14px] md:text-[16px] 2xl:text-[20px] leading-[13px] md:leading-[15px] 2xl:leading-[19px] text-[#FFA801] uppercase">
                      <span className="text-black cursor-pointer">&lt;</span> {t('december')} 2023 <span className="text-black cursor-pointer">&gt;</span>
                    </div>
                  </div>                  
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-0 ml-0 md:ml-[-20px] 2xl:ml-0">
                  
                  <img src={NewsImg_1920} alt="" className="hidden 2xl:block" />
                  <img src={NewsImg_834} alt="" className="hidden md:block 2xl:hidden"/>
                 
                  <img src={NewsImg_320} alt="" className="block md:hidden w-full "/>
                                

                  <div
                    className="px-0 md:px-10 gap-[12px] xl:gap-[26px] flex flex-col bg-white rounded-[3px] pt-0 md:pt-[32px] ml-0 md:ml-[-220px] 2xl:ml-[-40px] md:shadow-2xl"
                    
                  >
                    <div className="pt-[8] flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
                      <div className="flex flex-row gap-[17px] order-last lg:order-first">
                        {[`${t("tagforthesection")}3-1`, `${t("tagforthesection")}3-2`].map(
                          (tag, index) => (
                            <div>
                              <div className="hidden md:block">
                                <Tag size="big"  text={tag} key={index}/>                              
                              </div>                            
                              <div className="block md:hidden">
                                <Tag size="mobile"  text={tag} key={index}/>                              
                              </div> 
                            </div>                             
                          )
                        )}
                      </div>
                      <div className="flex items-center font-bold text-[12px] lg:text-[15px] leading-[13px] lg:leading-[17px] uppercase">
                        {t('december')} 26, 2023
                      </div>
                    </div>
                    <div className="font-bold text-[18px] lg:text-[28px] 2xl:text-[47px] leading-[20px] lg:leading-[32px] 2xl:leading-[54px] text-left bg-white">
                      {t('news1')}
                    </div>
                    <div className=" text-[14px] lg:text-[16px] 2xl:text-[23px] leading-[16px] lg:leading-[18px] 2xl:leading-[26px] text-left">
                      {t('news1intro')}
                    </div>
                    <div className="flex flex-row items-center justify-between mb-4 md:mb-12">
                      <Button text={t('viewmore')} />
                      <div className="hidden md:block">
                        <div className="flex flex-row items-center h-fit gap-[10px] hover:text-[#FFA801] cursor-pointer">
                          <div className="text-sm font-bold uppercase">{t('share')}</div>
                          <div>
                            <svg
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.1203 8.65301L16.5407 2.85889C16.3587 2.67012 16.0797 2.61086 15.8368 2.70863C15.5931 2.80733 15.4334 3.04341 15.4334 3.30605V6.09592H15.2188C10.6042 6.09592 6.84955 9.85053 6.84955 14.4652V15.7528C6.84955 16.0514 7.05985 16.3004 7.35078 16.3683C7.39809 16.3802 7.44524 16.3854 7.4924 16.3854C7.73539 16.3854 7.96801 16.2429 8.08039 16.0189C9.28734 13.6042 11.714 12.1046 14.4136 12.1046H15.4334V14.8943C15.4334 15.1571 15.5931 15.3932 15.8368 15.4909C16.0781 15.5896 16.3587 15.5296 16.5407 15.3407L22.1203 9.54655C22.3606 9.2968 22.3606 8.9037 22.1203 8.65301Z"
                                fill="currentColor"
                              />
                              <path
                                d="M19.7254 23.2636H4.27438C2.85462 23.2636 1.69922 22.1083 1.69922 20.6884V8.67108C1.69922 7.25132 2.85462 6.09592 4.27438 6.09592H6.84955C7.32422 6.09592 7.70788 6.47958 7.70788 6.95425C7.70788 7.42892 7.32422 7.81259 6.84955 7.81259H4.27438C3.8005 7.81259 3.41589 8.1972 3.41589 8.67108V20.6884C3.41589 21.1623 3.8005 21.5469 4.27438 21.5469H19.7254C20.1991 21.5469 20.5837 21.1623 20.5837 20.6884V13.8214C20.5837 13.3467 20.9674 12.9629 21.442 12.9629C21.9169 12.9629 22.3005 13.3467 22.3005 13.8214V20.6884C22.3005 22.1083 21.1451 23.2636 19.7254 23.2636Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>                      
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-0 ml-0 md:ml-[-20px] 2xl:ml-0">
                  
                  <img src={NewsImg_1920} alt="" className="hidden 2xl:block" />
                  <img src={NewsImg_834} alt="" className="hidden md:block 2xl:hidden"/>
                 
                  <img src={NewsImg_320} alt="" className="block md:hidden w-full "/>
                                

                  <div
                    className="px-0 md:px-10 gap-[12px] xl:gap-[26px] flex flex-col bg-white rounded-[3px] pt-0 md:pt-[32px] ml-0 md:ml-[-220px] 2xl:ml-[-40px] md:shadow-2xl"
                    
                  >
                    <div className="pt-[8] flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
                      <div className="flex flex-row gap-[17px] order-last lg:order-first">
                        {[`${t("tagforthesection")}3-1`, `${t("tagforthesection")}3-2`].map(
                          (tag, index) => (
                            <div>
                              <div className="hidden md:block">
                                <Tag size="big"  text={tag} key={index}/>                              
                              </div>                            
                              <div className="block md:hidden">
                                <Tag size="mobile"  text={tag} key={index}/>                              
                              </div> 
                            </div>                             
                          )
                        )}
                      </div>
                      <div className="flex items-center font-bold text-[12px] lg:text-[15px] leading-[13px] lg:leading-[17px] uppercase">
                        {t("december")} 26, 2023
                      </div>
                    </div>
                    <div className="font-bold text-[18px] lg:text-[28px] 2xl:text-[47px] leading-[20px] lg:leading-[32px] 2xl:leading-[54px] text-left bg-white">
                      {t("news1")}
                    </div>
                    <div className=" text-[14px] lg:text-[16px] 2xl:text-[23px] leading-[16px] lg:leading-[18px] 2xl:leading-[26px] text-left">
                      {t("news1intro")}
                    </div>
                    <div className="flex flex-row items-center justify-between mb-4 md:mb-12">
                      <Button text={t("viewmore")} />
                      <div className="hidden md:block">
                        <div className="flex flex-row items-center h-fit gap-[10px] hover:text-[#FFA801] cursor-pointer">
                          <div className="text-sm font-bold uppercase">{t("share")}</div>
                          <div>
                            <svg
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.1203 8.65301L16.5407 2.85889C16.3587 2.67012 16.0797 2.61086 15.8368 2.70863C15.5931 2.80733 15.4334 3.04341 15.4334 3.30605V6.09592H15.2188C10.6042 6.09592 6.84955 9.85053 6.84955 14.4652V15.7528C6.84955 16.0514 7.05985 16.3004 7.35078 16.3683C7.39809 16.3802 7.44524 16.3854 7.4924 16.3854C7.73539 16.3854 7.96801 16.2429 8.08039 16.0189C9.28734 13.6042 11.714 12.1046 14.4136 12.1046H15.4334V14.8943C15.4334 15.1571 15.5931 15.3932 15.8368 15.4909C16.0781 15.5896 16.3587 15.5296 16.5407 15.3407L22.1203 9.54655C22.3606 9.2968 22.3606 8.9037 22.1203 8.65301Z"
                                fill="currentColor"
                              />
                              <path
                                d="M19.7254 23.2636H4.27438C2.85462 23.2636 1.69922 22.1083 1.69922 20.6884V8.67108C1.69922 7.25132 2.85462 6.09592 4.27438 6.09592H6.84955C7.32422 6.09592 7.70788 6.47958 7.70788 6.95425C7.70788 7.42892 7.32422 7.81259 6.84955 7.81259H4.27438C3.8005 7.81259 3.41589 8.1972 3.41589 8.67108V20.6884C3.41589 21.1623 3.8005 21.5469 4.27438 21.5469H19.7254C20.1991 21.5469 20.5837 21.1623 20.5837 20.6884V13.8214C20.5837 13.3467 20.9674 12.9629 21.442 12.9629C21.9169 12.9629 22.3005 13.3467 22.3005 13.8214V20.6884C22.3005 22.1083 21.1451 23.2636 19.7254 23.2636Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>                      
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-0 ml-0 md:ml-[-20px] 2xl:ml-0">
                  
                  <img src={NewsImg_1920} alt="" className="hidden 2xl:block" />
                  <img src={NewsImg_834} alt="" className="hidden md:block 2xl:hidden"/>
                 
                  <img src={NewsImg_320} alt="" className="block md:hidden w-full "/>
                                

                  <div
                    className="px-0 md:px-10 gap-[12px] xl:gap-[26px] flex flex-col bg-white rounded-[3px] pt-0 md:pt-[32px] ml-0 md:ml-[-220px] 2xl:ml-[-40px] md:shadow-2xl"
                    
                  >
                    <div className="pt-[8] flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
                      <div className="flex flex-row gap-[17px] order-last lg:order-first">
                        {[`${t("tagforthesection")}3-1`, `${t("tagforthesection")}3-2`].map(
                          (tag, index) => (
                            <div>
                              <div className="hidden md:block">
                                <Tag size="big"  text={tag} key={index}/>                              
                              </div>                            
                              <div className="block md:hidden">
                                <Tag size="mobile"  text={tag} key={index}/>                              
                              </div> 
                            </div>                             
                          )
                        )}
                      </div>
                      <div className="flex items-center font-bold text-[12px] lg:text-[15px] leading-[13px] lg:leading-[17px] uppercase">
                        {t("december")} 26, 2023
                      </div>
                    </div>
                    <div className="font-bold text-[18px] lg:text-[28px] 2xl:text-[47px] leading-[20px] lg:leading-[32px] 2xl:leading-[54px] text-left bg-white">
                      {t("news1")}
                    </div>
                    <div className=" text-[14px] lg:text-[16px] 2xl:text-[23px] leading-[16px] lg:leading-[18px] 2xl:leading-[26px] text-left">
                      {t("news1intro")}
                    </div>
                    <div className="flex flex-row items-center justify-between mb-4 md:mb-12">
                      <Button text={t("viewmore")} />
                      <div className="hidden md:block">
                        <div className="flex flex-row items-center h-fit gap-[10px] hover:text-[#FFA801] cursor-pointer">
                          <div className="text-sm font-bold uppercase">{t("share")}</div>
                          <div>
                            <svg
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.1203 8.65301L16.5407 2.85889C16.3587 2.67012 16.0797 2.61086 15.8368 2.70863C15.5931 2.80733 15.4334 3.04341 15.4334 3.30605V6.09592H15.2188C10.6042 6.09592 6.84955 9.85053 6.84955 14.4652V15.7528C6.84955 16.0514 7.05985 16.3004 7.35078 16.3683C7.39809 16.3802 7.44524 16.3854 7.4924 16.3854C7.73539 16.3854 7.96801 16.2429 8.08039 16.0189C9.28734 13.6042 11.714 12.1046 14.4136 12.1046H15.4334V14.8943C15.4334 15.1571 15.5931 15.3932 15.8368 15.4909C16.0781 15.5896 16.3587 15.5296 16.5407 15.3407L22.1203 9.54655C22.3606 9.2968 22.3606 8.9037 22.1203 8.65301Z"
                                fill="currentColor"
                              />
                              <path
                                d="M19.7254 23.2636H4.27438C2.85462 23.2636 1.69922 22.1083 1.69922 20.6884V8.67108C1.69922 7.25132 2.85462 6.09592 4.27438 6.09592H6.84955C7.32422 6.09592 7.70788 6.47958 7.70788 6.95425C7.70788 7.42892 7.32422 7.81259 6.84955 7.81259H4.27438C3.8005 7.81259 3.41589 8.1972 3.41589 8.67108V20.6884C3.41589 21.1623 3.8005 21.5469 4.27438 21.5469H19.7254C20.1991 21.5469 20.5837 21.1623 20.5837 20.6884V13.8214C20.5837 13.3467 20.9674 12.9629 21.442 12.9629C21.9169 12.9629 22.3005 13.3467 22.3005 13.8214V20.6884C22.3005 22.1083 21.1451 23.2636 19.7254 23.2636Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>                      
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-0 ml-0 md:ml-[-20px] 2xl:ml-0">
                  
                  <img src={NewsImg_1920} alt="" className="hidden 2xl:block" />
                  <img src={NewsImg_834} alt="" className="hidden md:block 2xl:hidden"/>
                 
                  <img src={NewsImg_320} alt="" className="block md:hidden w-full "/>
                                

                  <div
                    className="px-0 md:px-10 gap-[12px] xl:gap-[26px] flex flex-col bg-white rounded-[3px] pt-0 md:pt-[32px] ml-0 md:ml-[-220px] 2xl:ml-[-40px] md:shadow-2xl"
                    
                  >
                    <div className="pt-[8] flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
                      <div className="flex flex-row gap-[17px] order-last lg:order-first">
                        {[`${t("tagforthesection")}3-1`, `${t("tagforthesection")}3-2`].map(
                          (tag, index) => (
                            <div>
                              <div className="hidden md:block">
                                <Tag size="big"  text={tag} key={index}/>                              
                              </div>                            
                              <div className="block md:hidden">
                                <Tag size="mobile"  text={tag} key={index}/>                              
                              </div> 
                            </div>                             
                          )
                        )}
                      </div>
                      <div className="flex items-center font-bold text-[12px] lg:text-[15px] leading-[13px] lg:leading-[17px] uppercase">
                        {t("december")} 26, 2023
                      </div>
                    </div>
                    <div className="font-bold text-[18px] lg:text-[28px] 2xl:text-[47px] leading-[20px] lg:leading-[32px] 2xl:leading-[54px] text-left bg-white">
                      {t("news1")}
                    </div>
                    <div className=" text-[14px] lg:text-[16px] 2xl:text-[23px] leading-[16px] lg:leading-[18px] 2xl:leading-[26px] text-left">
                      {t("news1intro")}
                    </div>
                    <div className="flex flex-row items-center justify-between mb-4 md:mb-12">
                      <Button text={t("viewmore")} />
                      <div className="hidden md:block">
                        <div className="flex flex-row items-center h-fit gap-[10px] hover:text-[#FFA801] cursor-pointer">
                          <div className="text-sm font-bold uppercase">{t("share")}</div>
                          <div>
                            <svg
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.1203 8.65301L16.5407 2.85889C16.3587 2.67012 16.0797 2.61086 15.8368 2.70863C15.5931 2.80733 15.4334 3.04341 15.4334 3.30605V6.09592H15.2188C10.6042 6.09592 6.84955 9.85053 6.84955 14.4652V15.7528C6.84955 16.0514 7.05985 16.3004 7.35078 16.3683C7.39809 16.3802 7.44524 16.3854 7.4924 16.3854C7.73539 16.3854 7.96801 16.2429 8.08039 16.0189C9.28734 13.6042 11.714 12.1046 14.4136 12.1046H15.4334V14.8943C15.4334 15.1571 15.5931 15.3932 15.8368 15.4909C16.0781 15.5896 16.3587 15.5296 16.5407 15.3407L22.1203 9.54655C22.3606 9.2968 22.3606 8.9037 22.1203 8.65301Z"
                                fill="currentColor"
                              />
                              <path
                                d="M19.7254 23.2636H4.27438C2.85462 23.2636 1.69922 22.1083 1.69922 20.6884V8.67108C1.69922 7.25132 2.85462 6.09592 4.27438 6.09592H6.84955C7.32422 6.09592 7.70788 6.47958 7.70788 6.95425C7.70788 7.42892 7.32422 7.81259 6.84955 7.81259H4.27438C3.8005 7.81259 3.41589 8.1972 3.41589 8.67108V20.6884C3.41589 21.1623 3.8005 21.5469 4.27438 21.5469H19.7254C20.1991 21.5469 20.5837 21.1623 20.5837 20.6884V13.8214C20.5837 13.3467 20.9674 12.9629 21.442 12.9629C21.9169 12.9629 22.3005 13.3467 22.3005 13.8214V20.6884C22.3005 22.1083 21.1451 23.2636 19.7254 23.2636Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>                      
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-0 ml-0 md:ml-[-20px] 2xl:ml-0">
                  
                  <img src={NewsImg_1920} alt="" className="hidden 2xl:block" />
                  <img src={NewsImg_834} alt="" className="hidden md:block 2xl:hidden"/>
                 
                  <img src={NewsImg_320} alt="" className="block md:hidden w-full "/>
                                

                  <div
                    className="px-0 md:px-10 gap-[12px] xl:gap-[26px] flex flex-col bg-white rounded-[3px] pt-0 md:pt-[32px] ml-0 md:ml-[-220px] 2xl:ml-[-40px] md:shadow-2xl"
                    
                  >
                    <div className="pt-[8] flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
                      <div className="flex flex-row gap-[17px] order-last lg:order-first">
                        {[`${t("tagforthesection")}3-1`, `${t("tagforthesection")}3-2`].map(
                          (tag, index) => (
                            <div>
                              <div className="hidden md:block">
                                <Tag size="big"  text={tag} key={index}/>                              
                              </div>                            
                              <div className="block md:hidden">
                                <Tag size="mobile"  text={tag} key={index}/>                              
                              </div> 
                            </div>                             
                          )
                        )}
                      </div>
                      <div className="flex items-center font-bold text-[12px] lg:text-[15px] leading-[13px] lg:leading-[17px] uppercase">
                        {t("december")} 26, 2023
                      </div>
                    </div>
                    <div className="font-bold text-[18px] lg:text-[28px] 2xl:text-[47px] leading-[20px] lg:leading-[32px] 2xl:leading-[54px] text-left bg-white">
                      {t("news1")}
                    </div>
                    <div className=" text-[14px] lg:text-[16px] 2xl:text-[23px] leading-[16px] lg:leading-[18px] 2xl:leading-[26px] text-left">
                      {t("news1intro")}
                    </div>
                    <div className="flex flex-row items-center justify-between mb-4 md:mb-12">
                      <Button text={t("viewmore")} />
                      <div className="hidden md:block">
                        <div className="flex flex-row items-center h-fit gap-[10px] hover:text-[#FFA801] cursor-pointer">
                          <div className="text-sm font-bold uppercase">{t("share")}</div>
                          <div>
                            <svg
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.1203 8.65301L16.5407 2.85889C16.3587 2.67012 16.0797 2.61086 15.8368 2.70863C15.5931 2.80733 15.4334 3.04341 15.4334 3.30605V6.09592H15.2188C10.6042 6.09592 6.84955 9.85053 6.84955 14.4652V15.7528C6.84955 16.0514 7.05985 16.3004 7.35078 16.3683C7.39809 16.3802 7.44524 16.3854 7.4924 16.3854C7.73539 16.3854 7.96801 16.2429 8.08039 16.0189C9.28734 13.6042 11.714 12.1046 14.4136 12.1046H15.4334V14.8943C15.4334 15.1571 15.5931 15.3932 15.8368 15.4909C16.0781 15.5896 16.3587 15.5296 16.5407 15.3407L22.1203 9.54655C22.3606 9.2968 22.3606 8.9037 22.1203 8.65301Z"
                                fill="currentColor"
                              />
                              <path
                                d="M19.7254 23.2636H4.27438C2.85462 23.2636 1.69922 22.1083 1.69922 20.6884V8.67108C1.69922 7.25132 2.85462 6.09592 4.27438 6.09592H6.84955C7.32422 6.09592 7.70788 6.47958 7.70788 6.95425C7.70788 7.42892 7.32422 7.81259 6.84955 7.81259H4.27438C3.8005 7.81259 3.41589 8.1972 3.41589 8.67108V20.6884C3.41589 21.1623 3.8005 21.5469 4.27438 21.5469H19.7254C20.1991 21.5469 20.5837 21.1623 20.5837 20.6884V13.8214C20.5837 13.3467 20.9674 12.9629 21.442 12.9629C21.9169 12.9629 22.3005 13.3467 22.3005 13.8214V20.6884C22.3005 22.1083 21.1451 23.2636 19.7254 23.2636Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>                      
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-0 ml-0 md:ml-[-20px] 2xl:ml-0">
                  
                  <img src={NewsImg_1920} alt="" className="hidden 2xl:block" />
                  <img src={NewsImg_834} alt="" className="hidden md:block 2xl:hidden"/>
                 
                  <img src={NewsImg_320} alt="" className="block md:hidden w-full "/>
                                

                  <div
                    className="px-0 md:px-10 gap-[12px] xl:gap-[26px] flex flex-col bg-white rounded-[3px] pt-0 md:pt-[32px] ml-0 md:ml-[-220px] 2xl:ml-[-40px] md:shadow-2xl"
                    
                  >
                    <div className="pt-[8] flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
                      <div className="flex flex-row gap-[17px] order-last lg:order-first">
                        {[`${t("tagforthesection")}3-1`, `${t("tagforthesection")}3-2`].map(
                          (tag, index) => (
                            <div>
                              <div className="hidden md:block">
                                <Tag size="big"  text={tag} key={index}/>                              
                              </div>                            
                              <div className="block md:hidden">
                                <Tag size="mobile"  text={tag} key={index}/>                              
                              </div> 
                            </div>                             
                          )
                        )}
                      </div>
                      <div className="flex items-center font-bold text-[12px] lg:text-[15px] leading-[13px] lg:leading-[17px] uppercase">
                      {t("december")} 26, 2023
                      </div>
                    </div>
                    <div className="font-bold text-[18px] lg:text-[28px] 2xl:text-[47px] leading-[20px] lg:leading-[32px] 2xl:leading-[54px] text-left bg-white">
                      {t("news1")}
                    </div>
                    <div className=" text-[14px] lg:text-[16px] 2xl:text-[23px] leading-[16px] lg:leading-[18px] 2xl:leading-[26px] text-left">
                      {t("news1intro")}
                    </div>
                    <div className="flex flex-row items-center justify-between mb-4 md:mb-12">
                      <Button text={t("viewmore")} />
                      <div className="hidden md:block">
                        <div className="flex flex-row items-center h-fit gap-[10px] hover:text-[#FFA801] cursor-pointer">
                          <div className="text-sm font-bold uppercase">{t("share")}</div>
                          <div>
                            <svg
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.1203 8.65301L16.5407 2.85889C16.3587 2.67012 16.0797 2.61086 15.8368 2.70863C15.5931 2.80733 15.4334 3.04341 15.4334 3.30605V6.09592H15.2188C10.6042 6.09592 6.84955 9.85053 6.84955 14.4652V15.7528C6.84955 16.0514 7.05985 16.3004 7.35078 16.3683C7.39809 16.3802 7.44524 16.3854 7.4924 16.3854C7.73539 16.3854 7.96801 16.2429 8.08039 16.0189C9.28734 13.6042 11.714 12.1046 14.4136 12.1046H15.4334V14.8943C15.4334 15.1571 15.5931 15.3932 15.8368 15.4909C16.0781 15.5896 16.3587 15.5296 16.5407 15.3407L22.1203 9.54655C22.3606 9.2968 22.3606 8.9037 22.1203 8.65301Z"
                                fill="currentColor"
                              />
                              <path
                                d="M19.7254 23.2636H4.27438C2.85462 23.2636 1.69922 22.1083 1.69922 20.6884V8.67108C1.69922 7.25132 2.85462 6.09592 4.27438 6.09592H6.84955C7.32422 6.09592 7.70788 6.47958 7.70788 6.95425C7.70788 7.42892 7.32422 7.81259 6.84955 7.81259H4.27438C3.8005 7.81259 3.41589 8.1972 3.41589 8.67108V20.6884C3.41589 21.1623 3.8005 21.5469 4.27438 21.5469H19.7254C20.1991 21.5469 20.5837 21.1623 20.5837 20.6884V13.8214C20.5837 13.3467 20.9674 12.9629 21.442 12.9629C21.9169 12.9629 22.3005 13.3467 22.3005 13.8214V20.6884C22.3005 22.1083 21.1451 23.2636 19.7254 23.2636Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>                      
                    </div>
                  </div>
                </div>
              </div>
              <div className=" hidden 4xl:block">
                <div className="text-[24px] font-bold text-left mt-[20px] mb-[50px] uppercase">
                  {t("topposts")}
                </div>
                <div className="flex flex-col gap-[52px]">
                  <div className="relative">
                    <img src={TopPostImg} alt="" />
                    <div className="text-white font-bold text-[32px] max-w-[270px] leading-[92%] text-left absolute bottom-[28px] left-[28px] flex flex-col gap-2 items-start">
                      {t("meetproject")}
                      <Button text={t("viewmore")} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[35px] ps-2">
                    <div className="flex flex-col items-start gap-2 relative pt-[30px] pb-[20px] px-[20px]">
                      <img
                        src={NewsTagImg}
                        alt=""
                        className="absolute top-0 left-0"
                      />
                      <div className="font-bold text-black text-[16px] uppercase">
                        {t("december")} 23, 2023
                      </div>
                      <div className="text-[16px] text-black text-left">
                        {t("post11")}
                        <br /> {t("post12")}
                      </div>
                      <Tag size="big" text={t("tagforthesection")} />
                    </div>
                    <div className="flex flex-col items-start gap-2 relative pt-[30px] pb-[20px] px-[20px]">
                      <img
                        src={NewsTagImg}
                        alt=""
                        className="absolute top-0 left-0"
                      />
                      <div className="font-bold text-black text-[16px] uppercase">
                        {t("december")} 23, 2023
                      </div>
                      <div className="text-[16px] text-black text-left">
                        {t("post11")}
                        <br /> {t("post12")}
                      </div>
                      <Tag size="big" text={t("tagforthesection")} />
                    </div>
                    <div className="flex flex-col items-start gap-2 relative pt-[30px] pb-[20px] px-[20px]">
                      <img
                        src={NewsTagImg}
                        alt=""
                        className="absolute top-0 left-0"
                      />
                      <div className="font-bold text-black text-[16px] uppercase">
                        {t("december")} 23, 2023
                      </div>
                      <div className="text-[16px] text-black text-left">
                        {t("post11")}
                        <br /> {t("post12")}
                      </div>
                      <Tag size="big" text={t("tagforthesection")} />
                    </div>
                    <div className="flex flex-col items-start gap-2 relative pt-[30px] pb-[20px] px-[20px]">
                      <img
                        src={NewsTagImg}
                        alt=""
                        className="absolute top-0 left-0"
                      />
                      <div className="font-bold text-black text-[16px] uppercase">
                        {t("december")} 23, 2023
                      </div>
                      <div className="text-[16px] text-black text-left">
                        {t("post11")}
                        <br /> {t("post12")}
                      </div>
                      <Tag size="big" text={t("tagforthesection")} />
                    </div>
                    <div className="flex flex-col items-start gap-2 relative pt-[30px] pb-[20px] px-[20px]">
                      <img
                        src={NewsTagImg}
                        alt=""
                        className="absolute top-0 left-0"
                      />
                      <div className="font-bold text-black text-[16px] uppercase">
                        {t("december")} 23, 2023
                      </div>
                      <div className="text-[16px] text-black text-left">
                        {t("post11")}
                        <br /> {t("post12")}
                      </div>
                      <Tag size="big" text={t("tagforthesection")} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllNews;