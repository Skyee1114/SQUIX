import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'
import SelectLang from './SelectLang'
import ProfileButtons from './ProfileButtons'
import NavLogoSvg from '../assets/img/logo_nav.svg'
import MenuNavSvg from "../assets/img/menu_nav.svg"
import LogoNavSvgSmall from "../assets/img/logo_nav_small.svg"
import { useTranslation } from 'react-i18next';

function AdminNavbar({colorMode}) {

    const { t } = useTranslation();
    const [mobileMenu, setMobileMenu] = useState(false);
  
    const mobileMenuButtonClick = () => {
        setMobileMenu(!mobileMenu);
    };

    return (
        <div className={colorMode === 'black' ? 'bg-[#070811]' : ''}>
            <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative ">
                <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto pt-3 2xl:pt-6">            
                    <div className="pb-3 2xl:pb-6">
                        <div className="relative z-20 flex justify-between items-center">
                            <Link to={"/"}>
                                <div>
                                    <img src={NavLogoSvg} alt="logo" className='w-[110px] 2xl:w-full'/>
                                </div>
                            </Link>                            
                            <div>
                                <div className="hidden 2xl:block" >
                                    <div className="flex gap-[100px]">
                                    <Link
                                        to={"/admin"}
                                        className="font-bold uppercase text-[18px] text-white pt-3 transition duration-300 hover:text-[#FFA801]"
                                    >
                                        <p>Users</p>
                                    </Link>
                                    <Link
                                        to={"/admin/news"}
                                        className="font-bold uppercase text-[18px] text-white pt-3 transition duration-300 hover:text-[#FFA801] h-fit"
                                    >
                                        <p>News</p>
                                    </Link>
                                    <Link
                                        to={"/admin/jobpost"}
                                        className="font-bold uppercase text-[18px] text-white pt-3 transition duration-300 hover:text-[#FFA801] h-fit"
                                    >
                                        <p>Job Post</p>
                                    </Link>                                    
                                    <ProfileButtons />
                                    </div>
                                </div> 
                                <div className="w-full block 2xl:hidden" onClick={mobileMenuButtonClick}>
                                    <img src={MenuNavSvg} alt="menu"/>
                                </div>  
                                {
                                    mobileMenu && 
                                    <div className="fixed top-0 left-0 w-full h-full bg-black flex flex-col gap-10 z-50">
                                    <div className="flex justify-between pt-4 px-5">
                                        <Link to={"/"}>
                                            <div>
                                                <img src={LogoNavSvgSmall} alt="logo"/>
                                            </div>
                                        </Link>                                        
                                        <div className="pt-4" onClick={mobileMenuButtonClick}>
                                            <img src={MenuNavSvg} alt="menu"/>
                                        </div>

                                    </div>
                                    <div className="flex flex-col gap-4 items-end">
                                        <Link
                                        to={"/admin"}
                                        className="font-bold uppercase text-[14px] text-white pt-3 pr-5 transition duration-300 hover:text-[#FFA801]"
                                        >
                                        <p>Users</p>
                                        </Link>
                                        <Link
                                        to={"/admin/news"}
                                        className="font-bold uppercase text-[14px] text-white pt-3 pr-5 transition duration-300 hover:text-[#FFA801] h-fit"
                                        >
                                        <p>News</p>
                                        </Link>
                                        <Link
                                        to={"/admin/jobpost"}
                                        className="font-bold uppercase text-[14px] text-white pt-3 pr-5 transition duration-300 hover:text-[#FFA801] h-fit"
                                        >
                                        <p>Job Post</p>
                                        </Link>
                                        
                                        <div className="pr-3">
                                        <ProfileButtons/>
                                        </div>
                                    </div>
                                    </div>
                                }   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar