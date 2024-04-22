import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

const DonateCard = ({role}) => {
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
        <div className="cursor-pointer shadow-3xl w-[174px] 2xl:w-[281px] relative">
            <img src={`img/${role}.png`} alt={role} />
            <div className="flex flex-col w-full h-full justify-between absolute top-0">
                <div className="flex p-[10px] 2xl:p-[18px] z-10">
                    <img
                      src="img/triangle.svg"
                      className="w-[20px] 2xl:w-[31px]"
                      alt=""
                    />
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col-reverse">
                      <div className="flex flex-row gap-1 py-2 2xl:py-4 px-2 z-10 ">
                        <div className="text-white text-[21px] 2xl:text-[32px] font-bold font-['Jost'] leading-[14px] 2xl:leading-[22px]">
                          {prices[role]}
                        </div>
                        <div className="text-right text-white text-[12px] 2xl:text-[17px] font-bold font-['Jost'] leading-[8px] 2xl:leading-[12px]">
                          €
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-3 2xl:gap-5 pr-2 2xl:pr-5 z-10">
                      <div className={`text-right text-white ${i18n.language === 'russian' ? `text-[15px] 2xl:text-[25px]` : `text-[25px] 2xl:text-[35px]`} font-bold font-['Jost'] leading-[17px] 2xl:leading-[24px]`}>
                        {t(role)}
                      </div>
                      <div className="text-right text-yellow-400 text-[11px] 2xl:text-[16px] font-bold font-['Jost'] leading-[7px] 2xl:leading-[11px] pb-[20px] 2xl:pb-[30px]">
                        {t('viewdetails')} &gt;
                      </div>
                    </div>
                </div>
                <img
                    src="img/rectangle.svg"
                    alt=""
                    className=" absolute -bottom-[8px] -left-[1px] z-0 w-[97px] 2xl:w-[151px] h-[97px]  2xl:h-[157px]"
                />
            </div>
        </div>
    );
}

export default DonateCard;