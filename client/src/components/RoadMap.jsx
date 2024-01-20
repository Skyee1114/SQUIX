import React from "react";
import { useTranslation } from 'react-i18next';

export default function RoadMap() {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-[url('./assets/img/roadmap-bg.jpg')] relative  bg-cover bg-center h-[2300px] sm:h-[2400px] 2xl:h-[3567px] -mt-[200px] overflow-hidden">
      <img
        src="img/roadmap_tree.png"
        className="absolute z-10 h-[2450px] 2xl:h-[3747px] top-28 2xl:top-0 object-cover w-full hidden sm:block"
        alt=""
      />
      <img
        src="img/roadmap_tree1.png"
        className="absolute z-0 top-[450px] object-cover w-[230px] block sm:hidden"
        alt=""
      />
      
      <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative">
        <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto pt-[142px] md:pt-[140px] xl:pt-[130px] z-10 relative ">     
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="absolute w-[500px] md:w-[866px] xl:w-[1798px]">
              <img
                src="img/round.svg"
                className="relative -z-10 -ml-[50px] md:-ml-[90px] xl:-ml-[250px] -mt-[10px] md:-mt-[58px] xl:-mt-[175px]"
                alt=""
              />
            </div>
            <div className="text-black text-[32px] md:text-[63px] xl:text-[80px] 2xl:text-[97px] text-left font-bold z-10 leading-[110px] relative uppercase ">
              {t('roadmap')}
            </div>
            <div className="text-black text-left text-[14px] md:text-[25px] xl:text-[40px] font-bold uppercase pb-6">
              2023-2024
            </div>
            <div className="w-[290px] md:w-[330px] xl:w-[602.45px] text-left  text-black text-[14px] xl:text-[23px] font-normal leading-tight">
              {t('projectintro')}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end sm:items-center md:items-stretch gap-0 sm:gap-3 md:gap-0 pt-[60px] xl:pt-[120px] z-20 relative">
          <div className="relative flex flex-row-reverse md:flex-row  3xl:pl-[140px]">
            <img
              src="img/roadmap_december.svg"
              className=" absolute -mt-[40px] -z-10 ml-8 hidden 2xl:block"
              width={748}
              height={271}
              alt=""
            />
            <div className="flex flex-col bg-transparent sm:bg-white gap-0 2xl:gap-4 px-0 sm:px-[15px] 2xl:px-[34px] py-0 sm:py-[10px] 2xl:py-[26px] rounded-lg">
              <div className="flex flex-row items-start md:items-center gap-[4px] md:gap-[10px]">
                <img
                  src="img/triangle.svg"
                  className=" w-[19px] md:w-[35px] "
                  alt=""
                />
                <div className="text-black text-[20px] md:text-[32px] 2xl:text-[47px] font-bold uppercase ">
                  {t('december')}
                </div>
              </div>
              <div className={`flex flex-col p-[10px] ${i18n.language === 'en' || i18n.language === 'kr' ? `gap-[15px]` : `gap-[5px]`}  2xl:gap-[25px]`}>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('decemberroadmap1')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('decemberroadmap2')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('decemberroadmap3')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('decemberroadmap4')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('decemberroadmap5')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('decemberroadmap6')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('decemberroadmap7')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`relative flex flex-row-reverse ${i18n.language === 'en' || i18n.language === 'kr' ? `md:-mt-[110px]` : ` md:-mt-[170px]`} 3xl:pr-[70px]`}>
            <img
              src="img/roadmap_january.svg"
              className=" absolute -mt-[45px] -z-10 mr-[420px] hidden 2xl:block"
              width={423}
              height={157}
              alt=""
            />
            <div className="flex flex-col bg-transparent sm:bg-white gap-0 2xl:gap-4 px-0 sm:px-[15px] 2xl:px-[34px] py-0 sm:py-[10px] 2xl:py-[26px] rounded-lg">
              <div className="flex flex-row items-center gap-[10px]">
                <img
                  src="img/triangle.svg"
                  className=" w-[19px] md:w-[35px] "
                  alt=""
                />
                <div className="text-black text-[20px] md:text-[32px] 2xl:text-[47px] font-bold uppercase ">
                  {t('january')}
                </div>
              </div>
              <div className={`flex flex-col p-[10px] ${i18n.language === 'en' || i18n.language === 'kr' ? `gap-[15px]` : `gap-[5px]`} 2xl:gap-[25px]`}>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('januaryroadmap1')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('januaryroadmap2')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('januaryroadmap3')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('januaryroadmap4')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('januaryroadmap5')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('januaryroadmap6')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-row-reverse md:flex-row md:-mt-[40px]  3xl:pl-[140px]">
            <img
              src="img/roadmap_february.svg"
              className=" absolute -mt-[40px] -z-10 ml-14 hidden 2xl:block"
              width={748}
              height={271}
              alt=""
            />
            <div className="flex flex-col bg-transparent sm:bg-white gap-0 2xl:gap-4 px-0 sm:px-[15px] 2xl:px-[34px] py-0 sm:py-[10px] 2xl:py-[26px] rounded-lg">
              <div className="flex flex-row items-center gap-[10px]">
                <img
                  src="img/triangle.svg"
                  className=" w-[19px] md:w-[35px] "
                  alt=""
                />
                <div className="text-black text-[20px] md:text-[32px] 2xl:text-[47px] font-bold uppercase ">
                  {t('february')}
                </div>
              </div>
              <div className={`flex flex-col p-[10px] ${i18n.language === 'en' || i18n.language === 'kr' ? `gap-[15px]` : `gap-[5px]`} 2xl:gap-[25px]`}>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('februaryroadmap1')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('februaryroadmap2')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('februaryroadmap3')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('februaryroadmap4')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('februaryroadmap5')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`relative flex flex-row-reverse ${i18n.language === 'en' || i18n.language === 'kr' ? `md:-mt-[90px]` : `md:-mt-[150px]`} 3xl:pr-[70px]`}>
            <img
              src="img/roadmap_march.svg"
              className=" absolute -mt-[45px] -z-10 mr-[420px] hidden 2xl:block"
              width={423}
              height={157}
              alt=""
            />
            <div className="flex flex-col bg-transparent sm:bg-white gap-0 2xl:gap-4 px-0 sm:px-[15px] 2xl:px-[34px] py-0 sm:py-[10px] 2xl:py-[26px] rounded-lg">
              <div className="flex flex-row items-center gap-[10px]">
                <img
                  src="img/triangle.svg"
                  className=" w-[19px] md:w-[35px] "
                  alt=""
                />
                <div className="text-black text-[20px] md:text-[32px] 2xl:text-[47px] font-bold uppercase">
                  {t('march')}
                </div>
              </div>
              <div className={`flex flex-col p-[10px] ${i18n.language === 'en' || i18n.language === 'kr' ? `gap-[15px]` : `gap-[5px]`} 2xl:gap-[25px]`}>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('marchroadmap1')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('marchroadmap2')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('marchroadmap3')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('marchroadmap4')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-row-reverse md:flex-row md:-mt-[40px]  3xl:pl-[140px]">
            <img
              src="img/roadmap_april.svg"
              className=" absolute -mt-[40px] -z-10 ml-14 hidden 2xl:block"
              width={916}
              height={290}
              alt=""
            />
            <div className="flex flex-col bg-transparent sm:bg-white gap-0 2xl:gap-4 px-0 sm:px-[15px] 2xl:px-[34px] py-0 sm:py-[10px] 2xl:py-[26px] rounded-lg">
              <div className="flex flex-row items-center gap-[10px]">
                <img
                  src="img/triangle.svg"
                  className=" w-[19px] md:w-[35px] "
                  alt=""
                />
                <div className="text-black text-[20px] md:text-[32px] 2xl:text-[47px] font-bold uppercase ">
                  {t('april')}
                </div>
              </div>
              <div className={`flex flex-col p-[10px] ${i18n.language === 'en' || i18n.language === 'kr' ? `gap-[15px]` : `gap-[5px]`} 2xl:gap-[25px]`}>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                  {t('aprilroadmap1')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('aprilroadmap2')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('aprilroadmap3')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('aprilroadmap4')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`relative flex flex-row-reverse ${i18n.language === 'en' || i18n.language === 'kr' ? `md:pt-[80px]` : `pt-[0px] 2xl:pt-[80px]`} 3xl:pr-[70px]`}>
            <img
              src="img/roadmap_may.svg"
              className=" absolute -mt-[45px] -z-10 mr-[420px] hidden 2xl:block"
              width={521}
              height={194}
              alt=""
            />
            <div className="flex flex-col bg-transparent sm:bg-white gap-0 2xl:gap-4 px-0 sm:px-[15px] 2xl:px-[34px] py-0 sm:py-[10px] 2xl:py-[26px] rounded-lg">
              <div className="flex flex-row items-center gap-[10px]">
                <img
                  src="img/triangle.svg"
                  className=" w-[19px] md:w-[35px] "
                  alt=""
                />
                <div className="text-black text-[20px] md:text-[32px] 2xl:text-[47px] font-bold uppercase">
                  {t('may')}
                </div>
              </div>
              <div className={`flex flex-col p-[10px] ${i18n.language === 'en' || i18n.language === 'kr' ? `gap-[15px]` : `gap-[5px]`} 2xl:gap-[25px]`}>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('mayroadmap1')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('mayroadmap2')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('mayroadmap3')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('mayroadmap4')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('mayroadmap5')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('mayroadmap6')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('mayroadmap7')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-row-reverse md:flex-row md:-mt-[20px]  3xl:pl-[140px]">
            <img
              src="img/roadmap_june.svg"
              className=" absolute -mt-[40px] -z-10 ml-14 hidden 2xl:block"
              width={746}
              height={165}
              alt=""
            />
            <div className="flex flex-col bg-transparent sm:bg-white gap-0 2xl:gap-4 px-0 sm:px-[15px] 2xl:px-[34px] py-0 sm:py-[10px] 2xl:py-[26px] rounded-lg">
              <div className="flex flex-row items-center gap-[10px]">
                <img
                  src="img/triangle.svg"
                  className=" w-[19px] md:w-[35px] "
                  alt=""
                />
                <div className="text-black text-[20px] md:text-[32px] 2xl:text-[47px] font-bold uppercase ">
                  {t('june')}
                </div>
              </div>
              <div className={`flex flex-col p-[10px] ${i18n.language === 'en' || i18n.language === 'kr' ? `gap-[15px]` : `gap-[5px]`} 2xl:gap-[25px]`}>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('juneroadmap1')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('juneroadmap2')}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-[18px] h-[18px] relative">
                    <div className="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#9F7F4F]" />
                    <div className="w-[8.63px] h-[8.63px] left-[9px] top-[2.90px] absolute origin-top-left rotate-45 bg-[#9F7F4F]" />
                  </div>
                  <div className="w-[130px] sm:w-[200px] 2xl:w-[335px] text-left text-black text-[14px] md:text-[16px] 2xl:text-[23px] font-normal leading-none">
                    {t('juneroadmap3')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <img
        src="img/ring_roadmap.png"
        className="absolute z-0 -mt-[720px] -ml-[0px] hidden 2xl:block"
        alt=""
      />
    </div>
  );
}
