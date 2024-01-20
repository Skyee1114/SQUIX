import React, { useState } from 'react'
import ImageWithHover from './ImageHover';
import { useTranslation } from 'react-i18next';
import Modal from "react-modal";

const Team = () => {
    const { t } = useTranslation();
    const [currentImage, setCurrentImage] = useState('img/teams/02.png')

    const handleHover = (image) => {
        setCurrentImage(image);
    };

    const [avatarpopup, setAvatarPopup] = useState(false);
  
    const mobileAvatarClick = () => {
        setAvatarPopup(!avatarpopup);
    };
    
    // console.log(avatarpopup)

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

    const [modelIsOpen, setIsOpen] = useState(false);

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
        <div className='bg-[#F5F1ED]'>
            <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative">
                <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto">
                    <div className='hidden lg:block'>
                        <div className="grid grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-12 2xl:gap-4 py-24 4xl:py-32">
                            <ImageWithHover defaultImage="img/teams/02_.png" hoverImage="img/teams/02.png" finalImage="img/teams/02+.png" onHover={handleHover} onClick={() =>mobileAvatarClick()}/>
                            <ImageWithHover defaultImage="img/teams/03_.png" hoverImage="img/teams/03.png" finalImage="img/teams/03+.png" onHover={handleHover} onClick={() => mobileAvatarClick()}/>
                            <div className='col-span-2 flex flex-col justify-between px-4'>
                                <div className='text-[63px] xl:text-[97px] font-bold text-black leading-[70px] uppercase text-left'>{t('team')}</div>
                                <div className='text-[16px] xl:text-[20px] 4xl:text-[23px] leading-[18px] xl:leading-[23px] 4xl:leading-[26px] text-left'>{t('teamintro')}</div>
                            </div>
                            <div className='col-span-2 row-span-4 hidden 2xl:block '>
                                <img src={currentImage} className='w-[510px] h-[570px] 4xl:h-[640px]' alt='user' />
                                <div className='bg-[#020911] pt-4 4xl:pt-8 px-8 pb-8 4xl:pb-16 flex flex-col gap-2 4xl:gap-4'>
                                    <div className='text-[32px] leading-[46px] text-white text-left uppercase font-bold'>{t('team1name')}</div>
                                    <div className='text-[23px] leading-[26px] text-[#FFC700] text-left'>{t('team1title')}</div>
                                    <div className='text-[23px] leading-[26px] text-white text-left'>{t('team1intro')}</div>
                                </div>
                            </div>
                            <div className={`block 2xl:hidden absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
                                avatarpopup ? 'opacity-100' : 'opacity-0'}`}>
                                {
                                avatarpopup && 
                                <div className='flex flex-col'>
                                    <div>
                                        <img src="img/close.svg" className='absolute right-2 top-2' alt="" onClick={() => mobileAvatarClick()}/>
                                        <img src={currentImage} className='w-[420px]' alt='user' />
                                    </div>                                
                                    <div className='bg-[#020911] pt-4 4xl:pt-8 px-8 pb-8 4xl:pb-16 flex flex-col gap-2 4xl:gap-4 w-[420px]'>
                                        <div className='text-[24px] leading-[34px] text-white text-left uppercase font-bold'>{t('team1name')}</div>
                                        <div className='text-[23px] leading-[26px] text-[#FFC700] text-left'>{t('team1title')}</div>
                                        <div className='text-[14px] leading-[16px] text-white text-left'>{t('team1intro')}</div>
                                    </div>
                                </div>
                                }
                                
                            </div>
                            <ImageWithHover defaultImage="img/teams/11_.png" hoverImage="img/teams/11.png" finalImage="img/teams/11+.png" onHover={handleHover} onClick={() => mobileAvatarClick()}/>
                            <ImageWithHover defaultImage='img/teams/04_.png' hoverImage='img/teams/04.png' finalImage='img/teams/04+.png' onHover={handleHover} onClick={() => mobileAvatarClick()}/>
                            <ImageWithHover defaultImage='img/teams/01_.png' hoverImage='img/teams/01.png' finalImage='img/teams/01+.png' onHover={handleHover} onClick={() => mobileAvatarClick()}/>
                            <ImageWithHover defaultImage='img/teams/05_.png' hoverImage='img/teams/05.png' finalImage='img/teams/05+.png' onHover={handleHover} onClick={() => mobileAvatarClick()}/>
                            <ImageWithHover defaultImage='img/teams/12_.png' hoverImage='img/teams/12.png' finalImage='img/teams/12+.png' onHover={handleHover} onClick={() => mobileAvatarClick()}/>
                            <div className='col-span-2 text-[16px] xl:text-[23px] leading-[18px] xl:leading-[26px] my-auto text-left px-4'>
                                {t('teamintro')}
                            </div>
                            <ImageWithHover defaultImage='img/teams/07_.png' hoverImage='img/teams/07.png' finalImage='img/teams/07+.png' onHover={handleHover} onClick={() => mobileAvatarClick()}/>
                            <ImageWithHover defaultImage='img/teams/09_.png' hoverImage='img/teams/09.png' finalImage='img/teams/09+.png' onHover={handleHover} onClick={() => mobileAvatarClick()}/>
                            <ImageWithHover defaultImage='img/teams/10_.png' hoverImage='img/teams/10.png' finalImage='img/teams/10+.png' onHover={handleHover} onClick={() => mobileAvatarClick()}/>
                            <ImageWithHover defaultImage='img/teams/08_.png' hoverImage='img/teams/08.png' finalImage='img/teams/08+.png' onHover={handleHover} onClick={() => mobileAvatarClick()}/>
                            <ImageWithHover defaultImage='img/teams/06_.png' hoverImage='img/teams/06.png' finalImage='img/teams/06+.png' onHover={handleHover} onClick={() => mobileAvatarClick()}/>
                        </div>
                    </div>

                    <div className='block lg:hidden'>
                        <div className="grid grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-2 sm:gap-6 py-12 md:py-24 4xl:py-32">
                            <ImageWithHover defaultImage="img/teams/02_.png" hoverImage="img/teams/02.png" finalImage="img/teams/02+.png" onHover={handleHover} onClick={() => mobileAvatarClick()}/>
                            <div className='col-span-2 row-span-2 flex flex-col justify-center px-0 md:px-4'>
                                <div className='text-[32px] md:text-[63px] xl:text-[97px] font-bold text-black leading-[36px] md:leading-[70px] uppercase text-left'>{t('team')}</div>
                                <div className='text-[14px] md:text-[16px] xl:text-[20px] 4xl:text-[23px] leading-[16px] md:leading-[18px] xl:leading-[23px] 4xl:leading-[26px] text-left'>{t('teamintro')}</div>
                            </div>
                            <ImageWithHover defaultImage="img/teams/03_.png" hoverImage="img/teams/03.png" finalImage="img/teams/03+.png" onHover={handleHover} onClick={() => mobileAvatarClick()}/>
                            
                            <div className='absolute z-10  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                {
                                avatarpopup && 
                                <div className='flex flex-col'>
                                    <div>
                                        <img src="img/close.svg" className='absolute right-2 top-2' alt="" onClick={() => mobileAvatarClick()}/>
                                        <img src={currentImage} className='w-[260px] md:w-[420px]' alt='user' />
                                    </div>                                
                                    <div className='bg-[#020911] pt-4 4xl:pt-8 px-8 pb-8 4xl:pb-16 flex flex-col gap-2 4xl:gap-4 w-[260px] md:w-[420px]'>
                                        <div className='text-[16px] md:text-[24px] leading-[18px] md:leading-[34px] text-white text-left uppercase font-bold'>{t('team1name')}</div>
                                        <div className='text-[14px] md:text-[23px] leading-[16px] md:leading-[26px] text-[#FFC700] text-left'>{t('team1title')}</div>
                                        <div className='text-[8px] md:text-[14px] leading-[12px] md:leading-[16px] text-white text-left'>{t('team1intro')}</div>
                                    </div>
                                </div>
                                }
                                
                            </div>
                            <ImageWithHover defaultImage="img/teams/11_.png" hoverImage="img/teams/11.png" finalImage="img/teams/11+.png" onHover={handleHover} onClick={() => mobileAvatarClick()}/>
                            <ImageWithHover defaultImage='img/teams/04_.png' hoverImage='img/teams/04.png' finalImage='img/teams/04+.png' onHover={handleHover} onClick={() => mobileAvatarClick()}/>
                            <ImageWithHover defaultImage='img/teams/01_.png' hoverImage='img/teams/01.png' finalImage='img/teams/01+.png' onHover={handleHover} onClick={() => mobileAvatarClick()}/>
                            <ImageWithHover defaultImage='img/teams/05_.png' hoverImage='img/teams/05.png' finalImage='img/teams/05+.png' onHover={handleHover} onClick={() => mobileAvatarClick()}/>
                            <img src="img/team-logo.svg" alt="" className='row-span-2 h-[180px] md:h-[400px]'/>
                            <ImageWithHover defaultImage='img/teams/12_.png' hoverImage='img/teams/12.png' finalImage='img/teams/12+.png' onHover={handleHover} onClick={() => mobileAvatarClick()}/>
                           
                            <ImageWithHover defaultImage='img/teams/07_.png' hoverImage='img/teams/07.png' finalImage='img/teams/07+.png' onHover={handleHover} onClick={() => mobileAvatarClick()}/>
                            <ImageWithHover defaultImage='img/teams/09_.png' hoverImage='img/teams/09.png' finalImage='img/teams/09+.png' onHover={handleHover} onClick={() => mobileAvatarClick()}/>
                            <ImageWithHover defaultImage='img/teams/10_.png' hoverImage='img/teams/10.png' finalImage='img/teams/10+.png' onHover={handleHover} onClick={() => mobileAvatarClick()}/>
                            <ImageWithHover defaultImage='img/teams/08_.png' hoverImage='img/teams/08.png' finalImage='img/teams/08+.png' onHover={handleHover} onClick={() => mobileAvatarClick()}/>
                            <ImageWithHover defaultImage='img/teams/06_.png' hoverImage='img/teams/06.png' finalImage='img/teams/06+.png' onHover={handleHover} onClick={() => mobileAvatarClick()}/>
                        </div>
                    </div>
                    
                       
                </div>
            </div>
        </div>
    )
}

export default Team;