import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

const HelpUsCard = ({role}) => {
    const { t, i18n } = useTranslation();

    const prices = {
        'sproud': '25',
        'original': '50',
        'pioneer': '80',
        'founder': '150',
        'oldman': '250',
        'royal': '500',
        'ultimate': '1000',
    };

    return (
        <div className="cursor-pointer shadow-3xl w-[174px] xl:w-[281px] 4xl:w-[315.35px] relative">
            <img src={`img/${role}.png`} alt={role} />
            <div className="flex flex-col w-full h-full justify-between absolute top-0">
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
                            {prices[role]}
                            </div>
                            <div className="text-right text-white text-[8px] xl:text-[17px] font-bold font-['Jost'] leading-3">
                            €
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-3 xl:gap-6 pr-6 z-10">
                        <div className="text-right text-white text-[25px] xl:text-[35px] 4xl:text-[43px] font-bold font-['Jost'] leading-[17px] xl:leading-[24px] 4xl:leading-[30.53px]">
                            {t(role)}
                        </div>
                        <div className="text-right text-yellow-400 text-[11px] xl:text-[16px] 3xl:text-[20px] font-bold font-['Jost'] leading-[7px] xl:leading-[11px] 3xl:leading-[14.20px] pb-[20px] xl:pb-[34px]">
                            {t('viewdetails')} &gt;
                        </div>
                    </div>
                </div>
                <img
                    src="img/rectangle.svg"
                    alt=""
                    className="absolute bottom-0 -left-[1px] z-0 w-[97px] xl:w-[151px] 4xl:w-[169px]"
                />
            </div>
        </div>
    );
}

export default HelpUsCard;