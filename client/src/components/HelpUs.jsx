import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Arrow from "./Arrow";
import Button from "./Buttons/Button";
import { useTranslation } from 'react-i18next';
import {donatetotalamount} from '../actions/payment'
import HelpUsCard from "./HelpUsCard";
import HelpUsSlider from "./HelpUsSlider";

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
          <div className="flex flex-col gap-96 md:gap-4 pb-8 pt-[40px] xl:pt-[77px]">
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
      
      <div className="absolute top-[330px] md:-top-10 xl:-top-16 left-[15px] md:left-[350px] xl:left-[500px] 2xl:left-[600px] 4xl:left-[750px] 5xl:left-[1000px] 6xl:left-[1200px] w-[720px] md:w-[800px] xl:w-[1200px] 4xl:w-[1400px]">
        <HelpUsSlider
          cardList={[
              { card: <HelpUsCard role="sproud" /> }, 
              { card: <HelpUsCard role="original" /> },         
              { card: <HelpUsCard role="pioneer" /> },      
              { card: <HelpUsCard role="founder" /> },   
              { card: <HelpUsCard role="oldman" /> },   
              { card: <HelpUsCard role="royal" /> },   
              { card: <HelpUsCard role="ultimate" /> },   
              
          ]}
        />        
      </div>     

    </div>
  );
}
