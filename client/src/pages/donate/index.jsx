import React from 'react'
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { Link } from 'react-router-dom'
import Navbar from "../../components/Navbar";
import Arrow from "../../components/Arrow";
import Button from "../../components/Buttons/Button";
import Footer from "../../components/Footer";
import { useTranslation } from 'react-i18next';


const Donate = () => {
  const { t, i18n } = useTranslation();
  const [option, setOption] = useState('');
  
  useEffect(() => {
    setOption(t('sproud'));
  }, [t]);

  const optionItemClick = (index) => {
    setOption(index);    
  };

  // const [donateoption, setDonateOption] = useState('sproud');
  
  // const optionItemClick = (index) => {
  //   setDonateOption(index);    
  // };

  const donateOptionPrice = {
    [`${t('sproud')}`]: '25€',
    [`${t('original')}`]: '50€',
    [`${t('pioneer')}`]: '80€',
    [`${t('founder')}`]: '150€',
    [`${t('oldman')}`]: '250€',
    [`${t('royal')}`]: '500€',
    [`${t('ultimate')}`]: '1000€'
  };
  
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      height: "60vh",
    },
    overlay: {
      backgroundColor: "#000000b0",
      zIndex:10
    },
  };

  const currentEyePosition = {
    [`${t('option10')}`]: 0,
    [`${t('option11')}`]: 1,
    [`${t('option12')}`]: 2,
    [`${t('option13')}`]: 3,
    [`${t('option14')}`]: 4,  
  };

  const [currentEye, setCurrentEye] = useState('')

  const eyeOptionClick = (index) => {
    setCurrentEye(index);
  };

  const [eyepopup, setEyePopup] = useState(false);
  
    const eyeClick = () => {
      setEyePopup(!eyepopup);        
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='overflow-hidden'>
      <div className="absolute -z-10 w-full h-[1200px] bg-[url('./assets/img/donate-bg-320.jpg')] sm:bg-[url('./assets/img/donate-bg-834.jpg')] xl:bg-[url('./assets/img/donate-bg-1920.jpg')] bg-no-repeat 5xl:bg-cover bg-top">
      </div>      
      <Navbar colorMode="light"/>
      <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative" >
        <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto pt-4 xl:pt-16">   
          <Link >
            <div className='font-bold text-[14px] md:text-[16px] xl:text-[32px] transition duration-300 hover:text-[#FFA801] text-white uppercase text-start pl-5 md:pl-10'>
              <p className='hidden md:block'>&lt; {t('backtomain')}</p>
              <p className='block md:hidden'>&lt; {t('back')}</p>              
            </div>
          </Link>
          <div className="w-[280px] md:w-[450px] xl:w-[680px] 2xl:w-[950px] flex flex-row gap-3 md:gap-7 2xl:gap-6 pt-4">
            <div className="min-w-[7px] md:min-w-[10px] xl:min-w-[15px] mt-0.5 -mb-28 md:my-1.5 xl:my-2.5 bg-primary-gradient rounded"> </div>            
            <div className="text-white font-bold text-[32px] md:text-[46px] xl:text-[78px] leading-[31px] md:leading-[44px] xl:leading-[75px] text-left  relative ">
              <p className='hidden 2xl:block'>{t('donateintrotitle1')}</p>
              <p className='block 2xl:hidden'>{t('donateintrotitle2')}</p>              
            </div>
          </div>
          <div className="flex flex-col px-6 md:px-10 py-4 md:py-6 2xl:p-10 gap-[10px] md:gap-[20px] 2xl:gap-[40px]">
            <div className="relative w-[250px] md:w-[352px] xl:w-[510px] 2xl:w-[710px] text-[16px] md:text-[22px] xl:text-[32px] leading-[18px] md:leading-[25px] xl:leading-[37px] text-left text-white ">
              {t('donateintro1')}
            </div>
            <div className="w-[262px] md:w-[353px] xl:w-[480px] 2xl:w-[710px] text-[14px] md:text-[18px] xl:text-[23px] leading-[16px] md:leading-[21px] xl:leading-[27px] text-left text-white ">
              {t('donateintro2')}
            </div>          
          </div>
          
          <div className="flex rounded-[3px] justify-end">
            <Arrow direction="left" />
            <Arrow direction="right" />
          </div>     
          <div className="flex items-start" >            
            <div className=" flex flex-row gap-[13px] pt-4">
              <div className="bg-[url('./assets/img/sproud.jpg')] cursor-pointer shadow-3xl relative  bg-cover overflow-hidden w-[174px] 2xl:w-[281px] h-[276px] 2xl:h-[430px]">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex p-[10px] 2xl:p-[18px]">
                    <img
                      src="img/triangle.svg"
                      className="w-[20px] 2xl:w-[31px] "
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col-reverse">
                      <div className="flex flex-row gap-1 py-2 2xl:py-4 px-2 z-10 ">
                        <div className="text-white text-[21px] 2xl:text-[32px] font-bold font-['Jost'] leading-[14px] 2xl:leading-[22px]">
                          25
                        </div>
                        <div className="text-right text-white text-[12px] 2xl:text-[17px] font-bold font-['Jost'] leading-[8px] 2xl:leading-[12px]">
                          €
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-3 2xl:gap-5 pr-2 2xl:pr-5">
                      <div className={`text-right text-white ${i18n.language === 'ru' ? `text-[15px] 2xl:text-[25px]` : `text-[25px] 2xl:text-[35px]`} font-bold font-['Jost'] leading-[17px] 2xl:leading-[24px]`}>
                        {t('sproud')}
                      </div>
                      <div className="text-right text-yellow-400 text-[11px] 2xl:text-[16px] font-bold font-['Jost'] leading-[7px] 2xl:leading-[11px] pb-[20px] 2xl:pb-[30px]">
                        {t('viewdetails')} &gt;
                      </div>
                    </div>
                  </div>
                  <img
                    src="img/rectangle.svg"
                    alt=""
                    className=" absolute -bottom-[6px] z-0 w-[97px] 2xl:w-[151px] h-[97px]  2xl:h-[157px]"
                  />
                </div>
              </div>
              <div className="bg-[url('./assets/img/original.jpg')] cursor-pointer shadow-3xl relative  bg-cover overflow-hidden w-[174px] 2xl:w-[281px] h-[276px] 2xl:h-[430px] ">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex p-[10px] 2xl:p-[18px]">
                    <img
                      src="img/triangle.svg"
                      className="w-[20px] 2xl:w-[31px] "
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col-reverse">
                      <div className="flex flex-row gap-1 py-2 2xl:py-4 pl-2 z-10 ">
                        <div className="text-white text-[21px] 2xl:text-[32px] font-bold font-['Jost'] leading-[14px] 2xl:leading-[22px]">
                          50
                        </div>
                        <div className="text-right text-white text-[12px] 2xl:text-[17px] font-bold font-['Jost'] leading-[8px] 2xl:leading-[12px]">
                          €
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-3 2xl:gap-5 pr-2 2xl:pr-5">
                      <div className={`text-right text-white ${i18n.language === 'ru' ? `text-[15px] 2xl:text-[25px]` : `text-[25px] 2xl:text-[35px]`} font-bold font-['Jost'] leading-[17px] 2xl:leading-[24px]`}>
                        {t('original')}
                      </div>
                      <div className="text-right text-yellow-400 text-[11px] 2xl:text-[16px] font-bold font-['Jost'] leading-[7px] 2xl:leading-[11px] pb-[20px] 2xl:pb-[30px]">
                        {t('viewdetails')} &gt;
                      </div>
                    </div>
                  </div>
                  <img
                    src="img/rectangle.svg"
                    alt=""
                    className=" absolute -bottom-[6px] z-0 w-[97px] 2xl:w-[151px] h-[97px]  2xl:h-[157px]"
                  />
                </div>
              </div>
              <div className="bg-[url('./assets/img/pioneer.jpg')] cursor-pointer shadow-3xl relative  bg-cover overflow-hidden w-[174px] 2xl:w-[281px] h-[276px] 2xl:h-[430px] ">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex p-[10px] 2xl:p-[18px]">
                    <img
                      src="img/triangle.svg"
                      className="w-[20px] 2xl:w-[31px] "
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col-reverse">
                      <div className="flex flex-row gap-1 py-2 2xl:py-4 pl-2 z-10 ">
                        <div className="text-white text-[21px] 2xl:text-[32px] font-bold font-['Jost'] leading-[14px] 2xl:leading-[22px]">
                          80
                        </div>
                        <div className="text-right text-white text-[12px] 2xl:text-[17px] font-bold font-['Jost'] leading-[8px] 2xl:leading-[12px]">
                          €
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-3 2xl:gap-5 pr-2 2xl:pr-5">
                      <div className={`text-right text-white ${i18n.language === 'ru' ? `text-[15px] 2xl:text-[25px]` : `text-[25px] 2xl:text-[35px]`} font-bold font-['Jost'] leading-[17px] 2xl:leading-[24px]`}>
                        {t('pioneer')}
                      </div>
                      <div className="text-right text-yellow-400 text-[11px] 2xl:text-[16px] font-bold font-['Jost'] leading-[7px] 2xl:leading-[11px] pb-[20px] 2xl:pb-[30px]">
                        {t('viewdetails')} &gt;
                      </div>
                    </div>
                  </div>
                  <img
                    src="img/rectangle.svg"
                    alt=""
                    className=" absolute -bottom-[6px] z-0 w-[97px] 2xl:w-[151px] h-[97px]  2xl:h-[157px]"
                  />
                </div>
              </div>
              <div className="bg-[url('./assets/img/pioneer.jpg')] cursor-pointer shadow-3xl relative  bg-cover overflow-hidden w-[174px] 2xl:w-[281px] h-[276px] 2xl:h-[430px] ">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex p-[10px] 2xl:p-[18px]">
                    <img
                      src="img/triangle.svg"
                      className="w-[20px] 2xl:w-[31px] "
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col-reverse">
                      <div className="flex flex-row gap-1 py-2 2xl:py-4 pl-2 z-10 ">
                        <div className="text-white text-[21px] 2xl:text-[32px] font-bold font-['Jost'] leading-[14px] 2xl:leading-[22px]">
                          150
                        </div>
                        <div className="text-right text-white text-[12px] 2xl:text-[17px] font-bold font-['Jost'] leading-[8px] 2xl:leading-[12px]">
                          €
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-3 2xl:gap-5 pr-2 2xl:pr-5">
                      <div className={`text-right text-white ${i18n.language === 'ru' ? `text-[15px] 2xl:text-[25px]` : `text-[25px] 2xl:text-[35px]`} font-bold font-['Jost'] leading-[17px] 2xl:leading-[24px]`}>
                        {t('founder')}
                      </div>
                      <div className="text-right text-yellow-400 text-[11px] 2xl:text-[16px] font-bold font-['Jost'] leading-[7px] 2xl:leading-[11px] pb-[20px] 2xl:pb-[30px]">
                        {t('viewdetails')} &gt;
                      </div>
                    </div>
                  </div>
                  <img
                    src="img/rectangle.svg"
                    alt=""
                    className=" absolute -bottom-[6px] z-0 w-[97px] 2xl:w-[151px] h-[97px]  2xl:h-[157px]"
                  />
                </div>
              </div>
              <div className="bg-[url('./assets/img/pioneer.jpg')] cursor-pointer shadow-3xl relative  bg-cover overflow-hidden w-[174px] 2xl:w-[281px] h-[276px] 2xl:h-[430px] ">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex p-[10px] 2xl:p-[18px]">
                    <img
                      src="img/triangle.svg"
                      className="w-[20px] 2xl:w-[31px] "
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col-reverse">
                      <div className="flex flex-row gap-1 py-2 2xl:py-4 pl-2 z-10 ">
                        <div className="text-white text-[21px] 2xl:text-[32px] font-bold font-['Jost'] leading-[14px] 2xl:leading-[22px]">
                          250
                        </div>
                        <div className="text-right text-white text-[12px] 2xl:text-[17px] font-bold font-['Jost'] leading-[8px] 2xl:leading-[12px]">
                          €
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-3 2xl:gap-5 pr-2 2xl:pr-5">
                      <div className={`text-right text-white ${i18n.language === 'ru' ? `text-[15px] 2xl:text-[25px]` : `text-[25px] 2xl:text-[35px]`} font-bold font-['Jost'] leading-[17px] 2xl:leading-[24px]`}>
                        {t('oldman')}
                      </div>
                      <div className="text-right text-yellow-400 text-[11px] 2xl:text-[16px] font-bold font-['Jost'] leading-[7px] 2xl:leading-[11px] pb-[20px] 2xl:pb-[30px]">
                        {t('viewdetails')} &gt;
                      </div>
                    </div>
                  </div>
                  <img
                    src="img/rectangle.svg"
                    alt=""
                    className=" absolute -bottom-[6px] z-0 w-[97px] 2xl:w-[151px] h-[97px]  2xl:h-[157px]"
                  />
                </div>
              </div>
              <div className="bg-[url('./assets/img/pioneer.jpg')] cursor-pointer shadow-3xl relative  bg-cover overflow-hidden w-[174px] 2xl:w-[281px] h-[276px] 2xl:h-[430px] ">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex p-[10px] 2xl:p-[18px]">
                    <img
                      src="img/triangle.svg"
                      className="w-[20px] 2xl:w-[31px] "
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col-reverse">
                      <div className="flex flex-row gap-1 py-2 2xl:py-4 pl-2 z-10 ">
                        <div className="text-white text-[21px] 2xl:text-[32px] font-bold font-['Jost'] leading-[14px] 2xl:leading-[22px]">
                          500
                        </div>
                        <div className="text-right text-white text-[12px] 2xl:text-[17px] font-bold font-['Jost'] leading-[8px] 2xl:leading-[12px]">
                          €
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-3 2xl:gap-5 pr-2 2xl:pr-5">
                      <div className={`text-right text-white ${i18n.language === 'ru' ? `text-[15px] 2xl:text-[25px]` : `text-[25px] 2xl:text-[35px]`} font-bold font-['Jost'] leading-[17px] 2xl:leading-[24px]`}>
                        {t('royal')}
                      </div>
                      <div className="text-right text-yellow-400 text-[11px] 2xl:text-[16px] font-bold font-['Jost'] leading-[7px] 2xl:leading-[11px] pb-[20px] 2xl:pb-[30px]">
                        {t('viewdetails')} &gt;
                      </div>
                    </div>
                  </div>
                  <img
                    src="img/rectangle.svg"
                    alt=""
                    className=" absolute -bottom-[6px] z-0 w-[97px] 2xl:w-[151px] h-[97px]  2xl:h-[157px]"
                  />
                </div>
              </div>
              <div className="bg-[url('./assets/img/pioneer.jpg')] cursor-pointer shadow-3xl relative  bg-cover overflow-hidden w-[174px] 2xl:w-[281px] h-[276px] 2xl:h-[430px] ">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex p-[10px] 2xl:p-[18px]">
                    <img
                      src="img/triangle.svg"
                      className="w-[20px] 2xl:w-[31px] "
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col-reverse">
                      <div className="flex flex-row gap-1 py-2 2xl:py-4 pl-2 z-10 ">
                        <div className="text-white text-[21px] 2xl:text-[32px] font-bold font-['Jost'] leading-[14px] 2xl:leading-[22px]">
                          1000
                        </div>
                        <div className="text-right text-white text-[12px] 2xl:text-[17px] font-bold font-['Jost'] leading-[8px] 2xl:leading-[12px]">
                          €
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-3 2xl:gap-5 pr-2 2xl:pr-5">
                      <div className={`text-right text-white ${i18n.language === 'ru' ? `text-[15px] 2xl:text-[25px]` : `text-[25px] 2xl:text-[35px]`} font-bold font-['Jost'] leading-[17px] 2xl:leading-[24px]`}>
                        {t('ultimate')}
                      </div>
                      <div className="text-right text-yellow-400 text-[11px] 2xl:text-[16px] font-bold font-['Jost'] leading-[7px] 2xl:leading-[11px] pb-[20px] 2xl:pb-[30px]">
                        {t('viewdetails')}&gt;
                      </div>
                    </div>
                  </div>
                  <img
                    src="img/rectangle.svg"
                    alt=""
                    className=" absolute -bottom-[6px] z-0 w-[97px] 2xl:w-[151px] h-[97px]  2xl:h-[157px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white 2xl:bg-[#F5F1ED] -mt-20 2xl:-mt-32 5xl:-mt-16">    
        <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative" >
          <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto pb-20 2xl:pb-40 pt-40 lg:pt-52 2xl:pt-72 5xl:pt-60">   
            <div className='text-[20px] lg:text-[54px] leading-[17px] lg:leading-[78px] font-bold uppercase pb-8 md:pb-2 2xl:pb-8'>
              <p>{t('chooseyouroption')}</p>
            </div>
            <div className='hidden lg:block'>
              <table className='w-full text-center '>
                <thead className=''>
                  <tr className=''>
                    <th className='py-8'></th>
                    <th className='py-8'>
                      <p className='font-bold text-[15px] 2xl:text-[20px] leading-[17px] 2xl:leading-[23px] bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text'>{t('sproud')}</p>
                      <p className='font-bold text-[18px] 2xl:text-[33px] leading-[20px] 2xl:leading-[38px] pt-2'>25€</p>
                    </th>
                    <th className='py-8'>
                      <p className='font-bold text-[15px] 2xl:text-[20px] leading-[17px] 2xl:leading-[23px] bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text'>{t('original')}</p>
                      <p className='font-bold text-[18px] 2xl:text-[33px] leading-[20px] 2xl:leading-[38px] pt-2'>50€</p>
                    </th>
                    <th className='py-8'>
                      <p className='font-bold text-[15px] 2xl:text-[20px] leading-[17px] 2xl:leading-[23px] bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text'>{t('pioneer')}</p>
                      <p className='font-bold text-[18px] 2xl:text-[33px] leading-[20px] 2xl:leading-[38px] pt-2'>80€</p>
                    </th>
                    <th className='py-8'>
                      <p className='font-bold text-[15px] 2xl:text-[20px] leading-[17px] 2xl:leading-[23px] bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text'>{t('founder')}</p>
                      <p className='font-bold text-[18px] 2xl:text-[33px] leading-[20px] 2xl:leading-[38px] pt-2'>150€</p>
                    </th>
                    <th className='py-8'>
                      <p className='font-bold text-[15px] 2xl:text-[20px] leading-[17px] 2xl:leading-[23px] bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text'>{t('oldman')}</p>
                      <p className='font-bold text-[18px] 2xl:text-[33px] leading-[20px] 2xl:leading-[38px] pt-2'>250€</p>
                    </th>
                    <th className='py-8'>
                      <p className='font-bold text-[15px] 2xl:text-[20px] leading-[17px] 2xl:leading-[23px] bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text'>{t('royal')}</p>
                      <p className='font-bold text-[18px] 2xl:text-[33px] leading-[20px] 2xl:leading-[38px] pt-2'>500€</p>
                    </th>
                    <th className='py-8'>
                      <p className='font-bold text-[15px] 2xl:text-[20px] leading-[17px] 2xl:leading-[23px] bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text'>{t('ultimate')}</p>
                      <p className='font-bold text-[18px] 2xl:text-[33px] leading-[20px] 2xl:leading-[38px] pt-2'>1000€</p>
                    </th>
                  </tr>
                </thead>              
                <tbody className=''>
                  <tr className='bg-[#F5F1ED] 2xl:bg-white'>
                    <th className='pl-10 text-start'>
                      <p className='text-[12px] leading-[13px]'>{t('option1')}</p>
                    </th>
                    <td className='text-center  py-4 border-r border-[#E7E3D8] '>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>                    
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                    <td className='text-center  py-4'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                  </tr>
                  <tr>
                    <th className='pl-10 text-start'>
                      <p className='text-[12px] leading-[13px]'>{t('option2')}</p>
                    </th>
                    <td className='text-center py-4 border-r border-[#E7E3D8] '>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>                    
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                    <td className='text-center py-4'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                  </tr>
                  <tr className='bg-[#F5F1ED] 2xl:bg-white'>
                    <th className='pl-10 text-start'>
                      <p className='text-[12px] leading-[13px] w-[120px]'>{t('option3')}</p>
                    </th>
                    <td className='text-center  py-4 border-r border-[#E7E3D8] '>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>
                      <p className='font-bold text-[12px] leading-[13px]'>'{t('sproud')}'</p>                    
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>
                      <p className='font-bold text-[12px] leading-[13px]'>'{t('original')}'</p>       
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                      <p className='font-bold text-[12px] leading-[13px]'>'{t('pioneer')}'</p>    
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>
                      <p className='font-bold text-[12px] leading-[13px]'>'{t('founder')}'</p>         
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                      <p className='font-bold text-[12px] leading-[13px]'>'{t('oldman')}'</p>    
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                      <p className='font-bold text-[12px] leading-[13px]'>'{t('royal')}'</p>
                    </td>
                    <td className='text-center  py-4'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                      <p className='font-bold text-[12px] leading-[13px]'>'{t('ultimate')}'</p>
                    </td>
                  </tr>
                  <tr>
                    <th className='pl-10 text-start'>
                      <p className='text-[12px] leading-[13px]'>{t('option4')}</p>
                    </th>
                    <td className='text-center py-4 border-r border-[#E7E3D8] '>
                             
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                    <td className='text-center py-4'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                  </tr>
                  <tr className='bg-[#F5F1ED] 2xl:bg-white'>
                    <th className='pl-10 text-start'>
                      <p className='text-[12px] leading-[13px]'>{t('option5')}</p>
                    </th>
                    <td className='text-center  py-4 border-r border-[#E7E3D8] '>                                       
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>                       
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>                       
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                    <td className='text-center  py-4'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                  </tr>
                  <tr>
                    <th className='pl-10 text-start'>
                      <p className='text-[12px] leading-[13px]'>{t('option6')}</p>
                    </th>
                    <td className='text-center py-4 border-r border-[#E7E3D8] '>                             
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>                        
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>                         
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>                       
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                    <td className='text-center py-4'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                  </tr>
                  <tr className='bg-[#F5F1ED] 2xl:bg-white'>
                    <th className='pl-10 text-start'>
                      <p className='text-[12px] leading-[13px]'>{t('option7')}</p>
                    </th>
                    <td className='text-center  py-4 border-r border-[#E7E3D8] '>                                       
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>                       
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>                       
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>                       
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>                         
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                    <td className='text-center  py-4'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                  </tr>
                  <tr>
                    <th className='pl-10 text-start'>
                      <p className='text-[12px] leading-[13px]'>{t('option8')}</p>
                    </th>
                    <td className='text-center py-4 border-r border-[#E7E3D8] '>                             
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>                        
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>                         
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>                       
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>                        
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>                          
                    </td>
                    <td className='text-center py-4'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                  </tr>
                  <tr className='bg-[#F5F1ED] 2xl:bg-white'>
                    <th className='pl-10 text-start'>
                      <p className='text-[12px] leading-[13px] w-[160px]'>{t('option9')}</p>
                    </th>
                    <td className='text-center  py-4 border-r border-[#E7E3D8] '>                                       
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>  
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>                        
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>                          
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>    
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>                      
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>                            
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                    <td className='text-center  py-4'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                  </tr>   
                  <tr>
                    <th className='pl-2 text-start'>
                      <div className='flex flex-row items-center gap-2'>                        
                        <img 
                          src="img/option_eye.svg" 
                          alt="" 
                          onClick={() => {
                            eyeOptionClick(t('option10'));
                            eyeClick();
                          }}
                          className='cursor-pointer'
                        />
                        <p className='text-[12px] leading-[13px]'>{t('option10')}</p>
                      </div>                      
                    </th>
                    <td className='text-center py-4 border-r border-[#E7E3D8] '>                             
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>  
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>                       
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>  
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>                        
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>   
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>                     
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>    
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>                     
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>   
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>                        
                    </td>
                    <td className='text-center py-4'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                  </tr>   
                  <tr className='bg-[#F5F1ED] 2xl:bg-white'>
                    <th className='pl-2 text-start'>
                      <div className='flex flex-row items-center gap-2'>                        
                        <img 
                          src="img/option_eye.svg" 
                          alt="" 
                          onClick={() => {
                            eyeOptionClick(t('option11'));
                            eyeClick();
                          }}
                          className='cursor-pointer'
                        />
                        <p className='text-[12px] leading-[13px]'>{t('option11')}</p>
                      </div>                      
                    </th>
                    <td className='text-center  py-4 border-r border-[#E7E3D8] '>                                       
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>  
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>                        
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>                          
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>    
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>                      
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>                            
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                    <td className='text-center  py-4'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                  </tr>   
                  <tr>
                    <th className='pl-2 text-start'>
                      <div className='flex flex-row items-center gap-2'>                        
                        <img 
                          src="img/option_eye.svg" 
                          alt="" 
                          onClick={() => {
                            eyeOptionClick(t('option12'));
                            eyeClick();
                          }}
                          className='cursor-pointer'
                        />
                        <p className='text-[12px] leading-[13px]'>{t('option12')}</p>
                      </div>                      
                    </th>
                    <td className='text-center py-4 border-r border-[#E7E3D8] '>                             
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>                                             
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'> 
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>   
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>                     
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>    
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>                     
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>   
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>                        
                    </td>
                    <td className='text-center py-4'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                  </tr>    
                  <tr className='bg-[#F5F1ED] 2xl:bg-white'>
                    <th className='pl-2 text-start'>
                      <div className='flex flex-row items-center gap-2'>                        
                        <img 
                          src="img/option_eye.svg" 
                          alt="" 
                          onClick={() => {
                            eyeOptionClick(t('option13'));
                            eyeClick();
                          }}
                          className='cursor-pointer'
                        />
                        <p className='text-[12px] leading-[13px]'>{t('option13')}</p>
                      </div>                      
                    </th>
                    <td className='text-center  py-4 border-r border-[#E7E3D8] '>                                       
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>  
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>    
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>                      
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>                            
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                    <td className='text-center  py-4'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                  </tr>    
                  <tr>
                    <th className='pl-2 text-start'>
                      <div className='flex flex-row items-center gap-2'>                        
                        <img 
                          src="img/option_eye.svg" 
                          alt="" 
                          onClick={() => {
                            eyeOptionClick(t('option14'));
                            eyeClick();
                          }}
                          className='cursor-pointer'
                        />
                        <p className='text-[12px] leading-[13px]'>{t('option14')}</p>
                      </div>                      
                    </th>
                    <td className='text-center py-4 border-r border-[#E7E3D8] '>                             
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>                                             
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'> 
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>   
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>                     
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>    
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>                     
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>   
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>                        
                    </td>
                    <td className='text-center py-4'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                  </tr>   
                  <tr className='bg-[#F5F1ED] 2xl:bg-white'>
                    <th className='pl-10 text-start'>
                      <p className='text-[12px] leading-[13px] w-[150px]'>{t('option15')}</p>
                    </th>
                    <td className='text-center  py-4 border-r border-[#E7E3D8] '>                                       
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>  
                    </td>
                    <td className='text-center py-4 border-r border-[#E7E3D8]'>
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>   
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>
                    </td>
                    <td className='text-center  py-4 border-r border-[#E7E3D8]'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                    <td className='text-center  py-4'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>     
                    </td>
                  </tr> 
                  <tr className=''>
                    <td className='py-8'>                      
                    </td>
                    <td className='text-center  py-8 '>   
                      <div className='inline-block'>
                        <div className='hidden 2xl:block'>
                          <Button
                            onClick={() => {
                              openModal();
                              optionItemClick(t('sproud'));
                            }}
                            text={t('donate')}
                            className={
                              ""
                            }
                          /> 
                        </div>
                        <div className='block 2xl:hidden'>
                          <Button
                            onClick={() => {
                              openModal();
                              optionItemClick(t('sproud'));
                            }}
                            text={t('pay')}
                            className={
                              "w-[75px] flex justify-center"
                            }
                          /> 
                        </div>                         
                      </div>                                                        
                    </td>
                    <td className='text-center  py-8 '>   
                      <div className='inline-block'>
                        <div className='hidden 2xl:block'>
                          <Button
                            onClick={() => {
                              openModal();
                              optionItemClick(t('original'));
                            }}
                            text={t('donate')}
                            className={
                              ""
                            }
                          /> 
                        </div>
                        <div className='block 2xl:hidden'>
                          <Button
                            onClick={() => {
                              openModal();
                              optionItemClick(t('original'));
                            }}
                            text={t('pay')}
                            className={
                              "w-[75px] flex justify-center"
                            }
                          /> 
                        </div>
                      </div>                                     
                    </td>
                    <td className='text-center  py-8'>   
                      <div className='inline-block'>
                        <div className='hidden 2xl:block'>
                          <Button
                            onClick={() => {
                              openModal();
                              optionItemClick(t('pioneer'));
                            }}
                            text={t('donate')}
                            className={
                              ""
                            }
                          /> 
                        </div>
                        <div className='block 2xl:hidden'>
                          <Button
                            onClick={() => {
                              openModal();
                              optionItemClick(t('pioneer'));
                            }}
                            text={t('pay')}
                            className={
                              "w-[75px] flex justify-center"
                            }
                          /> 
                        </div>  
                      </div>                                    
                    </td>
                    <td className='text-center  py-8 '>   
                      <div className='inline-block'>
                        <div className='hidden 2xl:block'>
                          <Button
                            onClick={() => {
                              openModal();
                              optionItemClick(t('founder'));
                            }}
                            text={t('donate')}
                            className={
                              ""
                            }
                          /> 
                        </div>
                        <div className='block 2xl:hidden'>
                          <Button
                            onClick={() => {
                              openModal();
                              optionItemClick(t('founder'));
                            }}
                            text={t('pay')}
                            className={
                              "w-[75px] flex justify-center"
                            }
                          /> 
                        </div> 
                      </div>                                    
                    </td>
                    <td className='text-center  py-8'>   
                      <div className='inline-block'>
                        <div className='hidden 2xl:block'>
                          <Button
                            onClick={() => {
                              openModal();
                              optionItemClick(t('oldman'));
                            }}
                            text={t('donate')}
                            className={
                              ""
                            }
                          /> 
                        </div>
                        <div className='block 2xl:hidden'>
                          <Button
                            onClick={() => {
                              openModal();
                              optionItemClick(t('oldman'));
                            }}
                            text={t('pay')}
                            className={
                              "w-[75px] flex justify-center"
                            }
                          /> 
                        </div> 
                      </div>                                    
                    </td>
                    <td className='text-center  py-8'>   
                      <div className='inline-block'>
                        <div className='hidden 2xl:block'>
                          <Button
                            onClick={() => {
                              openModal();
                              optionItemClick(t('royal'));
                            }}
                            text={t('donate')}
                            className={
                              ""
                            }
                          /> 
                        </div>
                        <div className='block 2xl:hidden'>
                          <Button
                            onClick={() => {
                              openModal();
                              optionItemClick(t('royal'));
                            }}
                            text={t('pay')}
                            className={
                              "w-[75px] flex justify-center"
                            }
                          /> 
                        </div> 
                      </div>                                    
                    </td>
                    <td className='text-center  py-8'>   
                      <div className='inline-block'>
                        <div className='hidden 2xl:block'>
                          <Button
                            onClick={() => {
                              openModal();
                              optionItemClick(t('ultimate'));
                            }}
                            text={t('donate')}
                            className={
                              ""
                            }
                          /> 
                        </div>
                        <div className='block 2xl:hidden'>
                          <Button
                            onClick={() => {
                              openModal();
                              optionItemClick(t('ultimate'));
                            }}
                            text={t('pay')}
                            className={
                              "w-[75px] flex justify-center"
                            }
                          /> 
                        </div> 
                      </div>                                     
                    </td>
                  </tr>                      
                </tbody>
              </table>
            </div>
            <div className='absolute z-10 pt-5 2xl:pt-0 hidden lg:block' style={{ transform: `translateY(${-1000 + currentEyePosition[currentEye] * 60}px) translateX(20px)` }}>
              {
              eyepopup && 
              
              <div className="bg-[url('./assets/img/optioneye_model.svg')] flex flex-row px-6 pt-6 pb-16 gap-4 w-[671px] h-[515px]">
                <div>
                  <img src="./img/pioneer.jpg" alt="" className='w-[281px] h-[430px]'/>                     
                </div>                                
                <div className='flex flex-col justify-between text-white text-start w-[290px]'>
                    <div>
                      <p className='text-[40px] leading-[38px] font-bold py-12'>{currentEye}</p>
                      <p className='text-[23px] leading-[26px]'>{t('optioncardintro')}</p>
                    </div>
                    <div className="flex flex-row items-center h-fit gap-[10px] transition duration-300 hover:text-[#FFA801] cursor-pointer">
                      <div className="text-xs md:text-sm font-bold uppercase">{t('share')}</div>
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
              
              
              }
            </div>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
              style={customStyles}
            >
              <div className="w-[300px] md:w-[600px] lg:w-[660px] p-8 md:p-20 gap-[20px] md:gap-[40px] 2xl::gap-[60px] bg-white rounded-tl-[3px] rounded-bl-[3px]  flex-col  items-start inline-flex relative z-50">
                <img src="img/close.svg" className='absolute right-2 top-2 w-[10px] md:w-[20px]' alt="" onClick={closeModal}/>
                <div className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text text-[20px] md:text-[54px] font-bold font-['Jost'] uppercase leading-none ">
                  {option}
                </div>
                <div className="w-[8px] md:w-[15.12px] h-[24px] md:h-[44.62px] bg-gradient-to-b from-amber-500 to-orange-500 rounded-[3px] absolute left-0 top-6 md:top-20" />
                <div className='flex flex-col md:flex-row gap-4'>
                  <div>
                    <img src="./img/sproud.jpg" alt="" className='w-[174px] lg:w-[281px] h-[276px] lg:h-[430px]'/>
                  </div>
                  <div className='flex flex-col gap-4 w-[250px] lg:w-[200px] text-[16px] leading-[18px]'>
                    <p>{t('option1')}</p>                   
                    <p>{t('option2')}</p>
                    <p>{t('option3')}</p>
                    <p>{t('option10')}</p>
                    <p>{t('option11')}</p>
                    <p>{t('option12')}</p>
                    <p>{t('option13')}</p>
                    <p>{t('option14')}</p>
                    <p>{t('option15')}</p>
                  </div>
                </div>
                <div className='font-bold text-[54px]'>
                  <p>{donateOptionPrice[option]}</p>
                </div>                
                <Button
                    text={t('donate')}
                    className={
                      "w-full text-center flex items-center justify-center"
                    }
                />
              </div>
            </Modal>
            <div className='block lg:hidden overflow-x-auto overflow-y-hidden'>
              <div className='flex flex-row gap-9'>
                <div onClick={() =>optionItemClick(t('sproud'))}>
                  <p className={`font-bold text-[15px] leading-[17px] ${option !== t('sproud') ? 'text-[#616485]' : 'bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text'}`}>{t('sproud')}</p>
                  <p className={`font-bold text-[18px] leading-[20px] pt-2 ${option !==t('sproud') ? 'text-[#616485]' : 'text-black'}`}>25€</p>
                </div>
                <div onClick={() =>optionItemClick(t('original'))}>
                  <p className={`font-bold text-[15px] leading-[17px] ${option !== t('original') ? 'text-[#616485]' : 'bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text'}`}>{t('original')}</p>
                  <p className={`font-bold text-[18px] leading-[20px] pt-2 ${option !== t('original') ? 'text-[#616485]' : 'text-black'}`}>50€</p>
                </div>
                <div onClick={() =>optionItemClick(t('pioneer'))}>
                  <p className={`font-bold text-[15px] leading-[17px] ${option !== t('pioneer') ? 'text-[#616485]' : 'bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text'}`}>{t('pioneer')}</p>
                  <p className={`font-bold text-[18px] leading-[20px] pt-2 ${option !== t('pioneer') ? 'text-[#616485]' : 'text-black'}`}>80€</p>
                </div>
                <div onClick={() =>optionItemClick(t('founder'))}>
                  <p className={`font-bold text-[15px] leading-[17px] ${option !== t('founder') ? 'text-[#616485]' : 'bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text'}`}>{t('founder')}</p>
                  <p className={`font-bold text-[18px] leading-[20px] pt-2 ${option !== t('founder') ? 'text-[#616485]' : 'text-black'}`}>150€</p>
                </div>
                <div onClick={() =>optionItemClick(t('oldman'))}>
                  <p className={`font-bold text-[15px] leading-[17px] ${option !== t('oldman') ? 'text-[#616485]' : 'bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text'}`}>{t('oldman')}</p>
                  <p className={`font-bold text-[18px] leading-[20px] pt-2 ${option !== t('oldman') ? 'text-[#616485]' : 'text-black'}`}>250€</p>
                </div>
                <div onClick={() =>optionItemClick(t('royal'))}>
                  <p className={`font-bold text-[15px] leading-[17px] ${option !== t('royal') ? 'text-[#616485]' : 'bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text'}`}>{t('royal')}</p>
                  <p className={`font-bold text-[18px] leading-[20px] pt-2 ${option !== t('royal') ? 'text-[#616485]' : 'text-black'}`}>500€</p>
                </div>
                <div onClick={() =>optionItemClick(t('ultimate'))}>
                  <p className={`font-bold text-[15px] leading-[17px] ${option !== t('ultimate') ? 'text-[#616485]' : 'bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text'}`}>{t('ultimate')}</p>
                  <p className={`font-bold text-[18px] leading-[20px] pt-2 ${option !== t('ultimate') ? 'text-[#616485]' : 'text-black'}`}>1000€</p>
                </div>
              </div>
              
            </div>
            <div className='block lg:hidden pt-8'>
              <table className='w-full text-center '>
                <tbody>
                  <tr className='bg-[#F5F1ED]'>
                    <th className='pl-10 text-start'>
                      <p className='text-[12px] leading-[13px]'>{t('option1')}</p>
                    </th>
                    <td className='text-center  py-4 '>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>                    
                    </td>
                  </tr>
                  <tr className=''>
                    <th className='pl-10 text-start'>
                      <p className='text-[12px] leading-[13px]'>{t('option2')}</p>
                    </th>
                    <td className='text-center  py-4 '>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>                    
                    </td>
                  </tr>
                  <tr className='bg-[#F5F1ED]'>
                    <th className='pl-10 text-start'>
                      <p className='text-[12px] leading-[13px] w-[120px]'>{t('option3')}</p>
                    </th>
                    <td className='text-center  py-4'>
                      <div className="inline-block">
                        <img src="img/donate.svg" alt="" />
                      </div>            
                      <p className='font-bold text-[12px] leading-[13px]'>'{option}'</p>           
                    </td>
                  </tr>
                  <tr className=''>
                    <th className='pl-10 text-start'>
                      <p className='text-[12px] leading-[13px]'>{t('option4')}</p>
                    </th>
                    <td className='text-center  py-4'>
                      {option !== t('sproud') ? (
                        <div className="inline-block">
                          <img src="img/donate.svg" alt="" />
                        </div>
                      ) : (
                        <div className="inline-block">
                          <img src="img/donate_not.svg" alt=""/>
                        </div>
                      )}                   
                    </td>
                  </tr>
                  <tr className='bg-[#F5F1ED]'>
                    <th className='pl-10 text-start'>
                      <p className='text-[12px] leading-[13px]'>{t('option5')}</p>
                    </th>
                    <td className='text-center  py-4'>
                      {(option !== t('sproud') && option !== t('original') && option !== t('pioneer')) ? (
                        <div className="inline-block">
                          <img src="img/donate.svg" alt="" />
                        </div>
                      ) : (
                        <div className="inline-block">
                          <img src="img/donate_not.svg" alt="" />
                        </div>
                      )}                   
                    </td>
                  </tr>
                  <tr className=''>
                    <th className='pl-10 text-start'>
                      <p className='text-[12px] leading-[13px]'>{t('option6')}</p>
                    </th>
                    <td className='text-center  py-4'>
                      {(option !== t('sproud') && option !== t('original') && option !== t('pioneer') && option !== t('founder')) ? (
                        <div className="inline-block">
                          <img src="img/donate.svg" alt="" />
                        </div>
                      ) : (
                        <div className="inline-block">
                          <img src="img/donate_not.svg" alt="" />
                        </div>
                      )}                    
                    </td>
                  </tr>
                  <tr className='bg-[#F5F1ED]'>
                    <th className='pl-10 text-start'>
                      <p className='text-[12px] leading-[13px]'>{t('option7')}</p>
                    </th>
                    <td className='text-center  py-4'>
                      {(option !== t('sproud') && option !== t('original') && option !== t('pioneer') && option !== t('founder') && option !== t('oldman')) ? (
                        <div className="inline-block">
                          <img src="img/donate.svg" alt="" />
                        </div>
                      ) : (
                        <div className="inline-block">
                          <img src="img/donate_not.svg" alt="" />
                        </div>
                      )}                    
                    </td>
                  </tr>
                  <tr className=''>
                    <th className='pl-10 text-start'>
                      <p className='text-[12px] leading-[13px]'>{t('option8')}</p>
                    </th>
                    <td className='text-center  py-4'>
                      {(option !== t('sproud') && option !== t('original') && option !== t('pioneer') && option !== t('founder') && option !== t('oldman')  && option !== t('royal')) ? (
                        <div className="inline-block">
                          <img src="img/donate.svg" alt="" />
                        </div>
                      ) : (
                        <div className="inline-block">
                          <img src="img/donate_not.svg" alt="" />
                        </div>
                      )}                       
                    </td>
                  </tr>
                  <tr className='bg-[#F5F1ED]'>
                    <th className='pl-10 text-start'>
                      <p className='text-[12px] leading-[13px] w-[160px]'>{t('option9')}</p>
                    </th>
                    <td className='text-center  py-4'>
                      {option !== t('sproud') ? (
                        <div className="inline-block">
                          <img src="img/donate.svg" alt="" />
                        </div>
                      ) : (
                        <div className="inline-block">
                          <img src="img/donate_not.svg" alt="" />
                        </div>
                      )}                        
                    </td>
                  </tr>
                  <tr>
                    <th className='pl-2 text-start'>
                      <div className='flex flex-row items-center gap-2'>                        
                        <img 
                          src="img/option_eye.svg" 
                          alt="" 
                          onClick={() => {
                            eyeOptionClick(t('option11'));
                            eyeClick();
                          }}
                          className='cursor-pointer'
                        />
                        <p className='text-[12px] leading-[13px]'>{t('option10')}</p>
                      </div>                      
                    </th>
                    <td className='text-center  py-4'>
                      {option !== t('sproud') ? (
                        <div className="inline-block">
                          <img src="img/donate.svg" alt="" />
                        </div>
                      ) : (
                        <div className="inline-block">
                          <img src="img/donate_not.svg" alt="" />
                        </div>
                      )}                      
                    </td>
                  </tr>
                  <tr className='bg-[#F5F1ED]'>
                    <th className='pl-2 text-start'>
                      <div className='flex flex-row items-center gap-2'>                        
                        <img 
                          src="img/option_eye.svg" 
                          alt="" 
                          onClick={() => {
                            eyeOptionClick(t('option11'));
                            eyeClick();
                          }}
                          className='cursor-pointer'
                        />
                        <p className='text-[12px] leading-[13px]'>{t('option11')}</p>
                      </div>                      
                    </th>
                    <td className='text-center  py-4'>
                      {option !== t('sproud') ? (
                        <div className="inline-block">
                          <img src="img/donate.svg" alt="" />
                        </div>
                      ) : (
                        <div className="inline-block">
                          <img src="img/donate_not.svg" alt="" />
                        </div>
                      )}                       
                    </td>
                  </tr>
                  <tr className=''>
                    <th className='pl-2 text-start'>
                      <div className='flex flex-row items-center gap-2'>                        
                        <img 
                          src="img/option_eye.svg" 
                          alt="" 
                          onClick={() => {
                            eyeOptionClick(t('option12'));
                            eyeClick();
                          }}
                          className='cursor-pointer'
                        />
                        <p className='text-[12px] leading-[13px]'>{t('option12')}</p>
                      </div>                      
                    </th>
                    <td className='text-center  py-4'>
                      {option !== t('sproud') && option !== t('original') && option !== t('pioneer') ? (
                        <div className="inline-block">
                          <img src="img/donate.svg" alt="" />
                        </div>
                      ) : (
                        <div className="inline-block">
                          <img src="img/donate_not.svg" alt="" />
                        </div>
                      )}                       
                    </td>
                  </tr>
                  <tr className='bg-[#F5F1ED]'>
                    <th className='pl-2 text-start'>
                      <div className='flex flex-row items-center gap-2'>                        
                        <img 
                          src="img/option_eye.svg" 
                          alt="" 
                          onClick={() => {
                            eyeOptionClick(t('option13'));
                            eyeClick();
                          }}
                          className='cursor-pointer'
                        />
                        <p className='text-[12px] leading-[13px]'>{t('option13')}</p>
                      </div>                      
                    </th>
                    <td className='text-center  py-4'>
                      {option !== t('sproud') && option !== t('original') && option !== t('pioneer') ? (
                        <div className="inline-block">
                          <img src="img/donate.svg" alt="" />
                        </div>
                      ) : (
                        <div className="inline-block">
                          <img src="img/donate_not.svg" alt="" />
                        </div>
                      )}                    
                    </td>
                  </tr>
                  <tr className=''>
                    <th className='pl-2 text-start'>
                      <div className='flex flex-row items-center gap-2'>                        
                        <img 
                          src="img/option_eye.svg" 
                          alt="" 
                          onClick={() => {
                            eyeOptionClick(t('option14'));
                            eyeClick();
                          }}
                          className='cursor-pointer'
                        />
                        <p className='text-[12px] leading-[13px]'>{t('option14')}</p>
                      </div>                      
                    </th>
                    <td className='text-center  py-4'>
                      {option !== t('sproud') && option !== t('original') && option !== t('pioneer') ? (
                        <div className="inline-block">
                          <img src="img/donate.svg" alt="" />
                        </div>
                      ) : (
                        <div className="inline-block">
                          <img src="img/donate_not.svg" alt="" />
                        </div>
                      )}                     
                    </td>
                  </tr>
                  <tr className='bg-[#F5F1ED]'>
                    <th className='pl-10 text-start'>
                      <p className='text-[12px] leading-[13px] w-[150px]'>{t('option15')}</p>
                    </th>
                    <td className='text-center  py-4'>
                      {option !== t('sproud') && option !== t('original') && option !== t('pioneer') && option !== t('founder') && option !== t('oldman') ? (
                        <div className="inline-block">
                          <img src="img/donate.svg" alt="" />
                        </div>
                      ) : (
                        <div className="inline-block">
                          <img src="img/donate_not.svg" alt="" />
                        </div>
                      )}                     
                    </td>
                  </tr>
                  
                </tbody>
              </table>
              <div className='flex justify-center pt-8'>
                <Button
                  onClick={() => {
                    openModal();
                  }}
                  text={t('donate')}
                  className={
                    ""
                  }
                /> 
              </div>
              
            </div>
            

          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default Donate;