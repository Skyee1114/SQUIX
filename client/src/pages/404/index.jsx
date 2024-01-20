import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useTranslation } from 'react-i18next';

export default function Err404() {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <Navbar colorMode="black"/> 
            <div className="absolute -z-10 w-full h-[450px] 2xl:h-[1250px] bg-[url('./assets/img/404-bg-320.jpg')] sm:bg-[url('./assets/img/404-bg-834.jpg')] xl:bg-[url('./assets/img/404-bg-1920.jpg')] bg-no-repeat 5xl:bg-cover bg-top">
            </div>
            
            <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative" >
                <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto">  
                    <div className="flex flex-col gap-2 md:gap-6 2xl:gap-8 text-left pt-[200px] md:pt-8 2xl:pt-20 pb-8 md:pb-[220px] 2xl:pb-[815px] pl-0 md:pl-12 2xl:pl-0">
                        <div className="font-bold text-[20px] 2xl:text-[70px] leading-[21px] 2xl:leading-[73px] uppercase text-white w-[190px] 2xl:w-[660px]">
                            {t("404title")}
                        </div>
                        <div className="text-[14px] 2xl:text-[24px] leading-[20px] 2xl:leading-[34px] uppercase text-white">
                            {t("404intro")}
                            <br />
                            {t("404error")}
                        </div>
                        <Link className="">
                            <Button text={t("gotomainpage")} />
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        
    );
}
