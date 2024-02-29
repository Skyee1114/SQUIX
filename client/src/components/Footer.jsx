import React, {useState, useEffect, useRef} from "react";
import SelectLang from "./SelectLang";
import Button from "./Buttons/Button";
import { Link, useLocation } from "react-router-dom";
import TwitterIcon from "../assets/img/socials/twitter.png";
import TwitterHoverIcon from "../assets/img/socials/twitter_.png";
import ReditIcon from "../assets/img/socials/redit.png";
import ReditHoverIcon from "../assets/img/socials/redit_.png";
import DiscordIcon from "../assets/img/socials/discord.png";
import DiscordHoverIcon from "../assets/img/socials/discord_.png";
import GoogleIcon from "../assets/img/socials/google.png";
import GoogleHoverIcon from "../assets/img/socials/google_.png";
import WhazAppIcon from "../assets/img/socials/whazapp.png";
import WhazAppHoverIcon from "../assets/img/socials/whazapp_.png";
import FacebookIcon from "../assets/img/socials/facebook.png";
import FacebookHoverIcon from "../assets/img/socials/facebook_.png";
import InstagramIcon from "../assets/img/socials/instagram.png";
import InstagramHoverIcon from "../assets/img/socials/instagram_.png";
import LinkedinIcon from "../assets/img/socials/linkedin.png";
import LinkedinHoverIcon from "../assets/img/socials/linkedin_.png";
import TelegramIcon from "../assets/img/socials/telegram.png";
import TelegramHoverIcon from "../assets/img/socials/telegram_.png";
import TiktokIcon from "../assets/img/socials/tiktok.png";
import TiktokHoverIcon from "../assets/img/socials/tiktok_.png";
import YoutubeIcon from "../assets/img/socials/youtube.png";
import YoutubeHoverIcon from "../assets/img/socials/youtube_.png";
import FootBrandImg from "../assets/img/footer_brand.png";
import LogoFooterImg from "../assets/img/logo_footer.svg";
import FalseIcon from "../assets/img/false.svg";
import TrueIcon from "../assets/img/true.svg";
import { useTranslation } from 'react-i18next';
import { addSubscriber } from "../actions/subscriber";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [emailerror, setEmailError] = useState(null);

  const AddSubscriber = () => {

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      // Set error message for invalid email
      setEmailError(true);
      return;
    }
    
    addSubscriber({email}).then(data => {
      if(data){
        setEmailError(false);
      }
      else {
        setEmailError(true);
      }
    });    
    setEmailError(null);
  };

  const roadmapRef = useRef(null);

  const location = useLocation()

  useEffect(() => {
    if(location?.hash == "#contacts") {
      setTimeout(() => {
        roadmapRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 800); 
    }
  }, [location])

  return (
    <div ref={roadmapRef} id="contacts" className="bg-[url('./assets/img/footer_back.png')] bg-cover bg-center bg-no-repeat overflow-hidden -mt-[1px]">
      <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative">
        <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col items-start pt-8 me-8 2xl:me-12 gap-0 2xl:gap-4">
            <div className="w-[280px]  2xl:w-[483px] text-[20px] 2xl:text-[40px] font-bold text-white uppercase text-left leading-[25px] 2xl:leading-[50px]">
              {t('footertitle')}
            </div>
            <div className="flex flex-wrap gap-3 my-4 w-[280px] 2xl:w-[483px]">
              <div className="relative">
                <Link to={"https://twitter.com/squixgg"}>
                  <img src={TwitterIcon} alt="" className="w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[50px] cursor-pointer" />
                  <img
                    src={TwitterHoverIcon}
                    className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100 w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[50px] cursor-pointer"
                    alt=""
                  />
                </Link>                
              </div>
              <div className="relative">
                <Link to={"https://www.reddit.com/r/squixgg/"}>
                  <img src={ReditIcon} alt="" className="w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[50px] cursor-pointer" />
                  <img
                    src={ReditHoverIcon}
                    className="absolute  top-0 left-0 transition duration-300 opacity-0 hover:opacity-100 w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[52px] cursor-pointer"
                    alt=""
                  />
                </Link>                
              </div>
              <div className="relative">
                <Link to={"https://www.tiktok.com/@squix.gg"}>
                  <img src={TiktokIcon} alt="" className="w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[50px] cursor-pointer" />
                  <img
                    src={TiktokHoverIcon}
                    className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100 w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[50px] cursor-pointer"
                    alt=""
                  />
                </Link>                
              </div>
              <div className="relative">
                <Link to={"https://www.youtube.com/@Squixgg"}>
                  <img src={YoutubeIcon} alt="" className="w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[50px] cursor-pointer"/>
                  <img
                    src={YoutubeHoverIcon}
                    className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100 w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[50px] cursor-pointer"
                    alt=""
                  />
                </Link>                
              </div>
              <div className="relative">
                <Link to={"/"}>
                  <img src={FacebookIcon} alt="" className="w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[50px] cursor-pointer"/>
                  <img
                    src={FacebookHoverIcon}
                    className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100 w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[52px] cursor-pointer"
                    alt=""
                  />
                </Link>                
              </div>
              <div className="relative">
                <Link to={"https://www.instagram.com/squixgg/"}>
                  <img src={InstagramIcon} alt="" className="w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[50px] cursor-pointer" />
                  <img
                    src={InstagramHoverIcon}
                    className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100 w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[50px] cursor-pointer"
                    alt=""
                  />
                </Link>                
              </div>
              <div className="relative">
                <Link to={"https://www.artstation.com/squixgg"}>
                  <img src={GoogleIcon} alt="" className="w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[50px] cursor-pointer" />
                  <img
                    src={GoogleHoverIcon}
                    className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100 w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[50px] cursor-pointer"
                    alt=""
                  />
                </Link>                
              </div>
              <div className="relative">
                <Link to={"/"}>
                  <img src={DiscordIcon} alt="" className="w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[50px] cursor-pointer" />
                  <img
                    src={DiscordHoverIcon}
                    className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100 w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[52px] cursor-pointer"
                    alt=""
                  />
                </Link>                
              </div>
              <div className="relative">
                <Link to={"https://www.twitch.tv/squixgg"}>
                  <img src={WhazAppIcon} alt="" className="w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[50px] cursor-pointer"/>
                  <img
                    src={WhazAppHoverIcon}
                    className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100 w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[50px] cursor-pointer"
                    alt=""
                  />
                </Link>                
              </div>
              <div className="relative">
                <Link to={"/"}>
                  <img src={TelegramIcon} alt="" className="w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[50px] cursor-pointer" />
                  <img
                    src={TelegramHoverIcon}
                    className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100 w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[52px] cursor-pointer"
                    alt=""
                  />
                </Link>                
              </div>
              <div className="relative">
                <Link to={"https://www.linkedin.com/company/squix"}>
                  <img src={LinkedinIcon} alt="" className="w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[50px] cursor-pointer" />
                  <img
                    src={LinkedinHoverIcon}
                    className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100 w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[52px] cursor-pointer"
                    alt=""
                  />
                </Link>                
              </div>
            </div>
            <div className="flex flex-row 2xl:flex-col items-start gap-2 2xl:gap-12 pt-4 lg:pt-8 2xl:pt-8 pb-4 lg:pb-40 2xl:pb-20 w-[280px]">
              <SelectLang className="order-last 2xl:order-first" />
              <img
                src={FootBrandImg}
                alt="footer_brand"
                className="w-[139px] 2xl:w-[250px] order-first 2xl:order-last"
              />
            </div>
            
          </div>
          <div className="relative w-full">
            <div className="2xl:absolute top-0 left-0 z-0 w-full h-full py-8 ps-0 lg:ps-16 ">
              <div className="flex flex-col 2xl:flex-row justify-between">
                <div className="2xl:w-[483px] text-white uppercase text-left">
                  <div className="font-bold text-[20px] 2xl:text-[40px] leading-[25px] 2xl:leading-[50px] uppercase">{t('subscribe')}
                    <br /> {t('tonewsteller')}
                  </div>
                  <div className="py-4 2xl:py-12 relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {setEmail(e.target.value); setEmailError(null)}}
                      className={`w-[280px] 2xl:w-[380px] h-[42px] 2xl:h-[60px] py-2 pl-4 2xl:pl-8 pr-12 2xl:pr-20 text-[14px] 2xl:text-[20px] font-['Jost'] rounded ${email ? 'bg-[#2F4254]' : 'bg-[#1E2730]'} outline-none focus:border ${emailerror === true ? 'border border-[#A45050] focus:border-[#A45050] focus:border-opacity-100' : 'focus:border-white focus:border-opacity-20'} ${emailerror === false ? 'border border-[#89A450] focus:border-[#89A450] focus:border-opacity-100' : 'focus:border-white focus:border-opacity-20'}`}
                      placeholder={t('email')}
                    />
                    {emailerror === true ?
                     <img src={FalseIcon} alt="error" className="absolute top-[27px] left-[245px] 2xl:top-[66px] 2xl:left-[330px] w-5 2xl:w-auto" style={{ pointerEvents: 'none' }} />
                     : null
                    }
                    {emailerror === false ?
                     <img src={TrueIcon} alt="error" className="absolute top-[27px] left-[245px] 2xl:top-[66px] 2xl:left-[330px] w-5 2xl:w-auto" style={{ pointerEvents: 'none' }} />
                     : null
                    }

                  </div>
                  
                  <Button 
                    text={t('subscribe')} 
                    className="px-[100px] 2xl:px-[30px]" 
                    onClick={() => AddSubscriber()}
                  />
                </div>
                <div>
                  <img src={LogoFooterImg} alt="" className="mb-8 hidden 2xl:block" />
                  <div className="flex flex-row 2xl:flex-col justify-between gap-3 pt-4 2xl:pt-0">
                    <div className={`flex flex-col justify-between items-start 2xl:items-end gap-3 ${i18n.language === 'russian' ? `text-[12px] lg:text-[18px]` : `text-[14px] lg:text-[18px]`} `}>
                      <Link
                        to="/dashboard"
                        className="text-white  text-left 2xl:text-right font-bold uppercase transition duration-300 hover:text-[#FFA801]"
                      >
                        {t('presskit')}
                      </Link>
                      <Link
                        to="/dashboard"
                        className="text-white  text-left 2xl:text-right font-bold uppercase transition duration-300 hover:text-[#FFA801]"
                      >
                        {t('careers')}
                      </Link>
                      <Link
                        to="/dashboard"
                        className="text-white  text-left 2xl:text-right font-bold uppercase transition duration-300 hover:text-[#FFA801]"
                      >
                        {t('donations')}
                      </Link>
                      <Link
                        to="/dashboard"
                        className="text-white  text-left 2xl:text-right font-bold uppercase transition duration-300 hover:text-[#FFA801]"
                      >
                        {t('kickstarter')}
                      </Link>
                    </div>
                    <div className={`flex flex-col justify-between items-start 2xl:items-end gap-3 ${i18n.language === 'russian' ? `text-[12px] lg:text-[18px]` : `text-[14px] lg:text-[18px]`} `}>
                      <Link
                        to="/dashboard"
                        className="text-white  text-left 2xl:text-right font-bold uppercase transition duration-300 hover:text-[#FFA801]"
                      >
                        {t('contacts')}
                      </Link>
                      <Link
                        to="/dashboard"
                        className="text-white  text-left 2xl:text-right font-bold uppercase transition duration-300 hover:text-[#FFA801]"
                      >
                        {t('fancontentpolicy')}
                      </Link>
                      <Link
                        to="/dashboard"
                        className="text-white  text-left 2xl:text-right font-bold uppercase transition duration-300 hover:text-[#FFA801]"
                      >
                        {t('privacypolicy')}
                      </Link>
                      <Link
                        to="/dashboard"
                        className="text-white  text-left 2xl:text-right font-bold uppercase transition duration-300 hover:text-[#FFA801]"
                      >
                        {t('cookiessettings')}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[12px] 2xl:text-[14px] text-[#ACACAC] pt-4 2xl:pt-8 w-[250px] md:w-[430px] 2xl:w-[516px] text-start 2xl:text-right 2xl:ms-auto">
                {t('copyrights')}
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
