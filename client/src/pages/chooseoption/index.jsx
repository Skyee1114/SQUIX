import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import Footer from "../../components/Footer";
import Tag from "../../components/Tag";
import Button from "../../components/Buttons/Button";
import NewsTagImg from "../../assets/img/news_tag.svg";
import OptionImg1_1920 from "../../assets/img/option1-1920.jpg";
import OptionImg1_834 from "../../assets/img/option1-834.jpg";
import OptionImg1_320 from "../../assets/img/option1-320.jpg";
import OptionImg2_1920 from "../../assets/img/option2-1920.jpg";
import OptionImg2_834 from "../../assets/img/option2-834.jpg";
import OptionImg2_320 from "../../assets/img/option2-320.jpg";
import OptionImg3_1920 from "../../assets/img/option3-1920.jpg";
import OptionImg3_834 from "../../assets/img/option3-834.jpg";
import OptionImg3_320 from "../../assets/img/option3-320.jpg";
import QuoteImg from "../../assets/img/quote.svg";
import Navbar from "../../components/Navbar";
import TwitterIcon from "../../assets/img/socials/twitter.png";
import TwitterHoverIcon from "../../assets/img/socials/twitter_.png";
import ReditIcon from "../../assets/img/socials/redit.png";
import ReditHoverIcon from "../../assets/img/socials/redit_.png";
import GoogleIcon from "../../assets/img/socials/google.png";
import GoogleHoverIcon from "../../assets/img/socials/google_.png";
import InstagramIcon from "../../assets/img/socials/instagram.png";
import InstagramHoverIcon from "../../assets/img/socials/instagram_.png";
import TiktokIcon from "../../assets/img/socials/tiktok.png";
import TiktokHoverIcon from "../../assets/img/socials/tiktok_.png";
import YoutubeIcon from "../../assets/img/socials/youtube.png";
import YoutubeHoverIcon from "../../assets/img/socials/youtube_.png";
import ImageSlider from "../../components/ImageSlider";
import OptionImg4_1920 from "../../assets/img/option4-1920.jpg";
import OptionImg4_320 from "../../assets/img/option4-320.jpg";
import OptionRelatedImg from "../../assets/img/option_related.png";
import { useTranslation } from 'react-i18next';

function ChooseOption() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>   
      <div className="absolute -z-10 w-full h-[800px] bg-[url('./assets/img/choose_option-bg-320.jpg')] sm:bg-[url('./assets/img/choose_option-bg-834.jpg')] xl:bg-[url('./assets/img/choose_option-bg-1920.jpg')] bg-no-repeat 5xl:bg-cover bg-top">
      </div>      
      <Navbar colorMode="light"/>   
      
      <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative" >
        <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto pt-4 xl:pt-16">   

          <div className="flex flex-col lg:flex-row justify-between">            
            <div>
              <div className='text-start pl-5 md:pl-10'>
                <Link to={"/"}>
                  <p className="font-bold text-[14px] lg:text-[16px] 2xl:text-[32px] transition duration-300 hover:text-[#FFA801] text-white uppercase inline-block">&lt; {t('back')}</p> 
                </Link>                               
              </div>
              <div className="w-[300px] md:w-[450px] xl:w-[680px] 2xl:w-[1120px] flex flex-row gap-3 md:gap-7 2xl:gap-6 pt-4">
                <div className="min-w-[7px] lg:min-w-[10px] xl:min-w-[15px] mt-0.5 -mb-28 lg:my-1.5 xl:my-2.5 bg-primary-gradient rounded"> </div>            
                <div className="text-white font-bold text-[32px] lg:text-[46px] 2xl:text-[78px] leading-[31px] lg:leading-[44px] 2xl:leading-[75px] text-left  relative ">
                  <p className=''>{t('chooseoptiontitle')}</p>              
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ms-8 flex gap-4 text-white py-6 xl:py-12">
                  <Tag size="big" text={t('tagforthesection')} />
                  <Tag size="big" text={t('tagforthesection')} />
                </div>
              </div>              
              <div className="pt-4 md:pt-0 pl-5 md:pl-10 relative w-[284px] md:w-[304px] lg:w-[530px] 2xl:w-[1060px] text-[16px] lg:text-[22px] 2xl:text-[32px] leading-[18px] lg:leading-[25px] 2xl:leading-[37px] text-left text-white ">
                {t('chooseoptionintro')}
              </div>              
            </div>
            <div className="flex flex-col items-center gap-[11px] pt-4 sm:pt-12 md:pt-0 2xl:pt-24 ">
              <div className="text-sm font-bold text-white">{t('followus')}</div>
              <div className="flex flex-row lg:flex-col gap-[11px]">
                <div className="relative z-10">
                  <img src={TwitterIcon} alt="" className="w-[29px] md:w-[50px] h-[29px] md:h-[50px] cursor-pointer"/>
                  <img
                    src={TwitterHoverIcon}
                    className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100 w-[29px] md:w-[50px] h-[29px] md:h-[50px] cursor-pointer"
                    alt=""
                  />
                </div>
                <div className="relative z-10">
                  <img src={ReditIcon} alt="" className="w-[29px] md:w-[50px] h-[29px] md:h-[50px] cursor-pointer" />
                  <img
                    src={ReditHoverIcon}
                    className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition duration-300 w-[29px] md:w-[50px] h-[29px] md:h-[50px] cursor-pointer"
                    alt=""
                  />
                </div>
                <div className="relative z-10">
                  <img src={InstagramIcon} alt="" className="w-[29px] md:w-[50px] h-[29px] md:h-[50px] cursor-pointer" />
                  <img
                    src={InstagramHoverIcon}
                    className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100 w-[29px] md:w-[50px] h-[29px] md:h-[50px] cursor-pointer"
                    alt=""
                  />
                </div>
                <div className="relative z-10">
                  <img src={TiktokIcon} alt="" className="w-[29px] md:w-[50px] h-[29px] md:h-[50px] cursor-pointer" />
                  <img
                    src={TiktokHoverIcon}
                    className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100 w-[29px] md:w-[50px] h-[29px] md:h-[50px] cursor-pointer"
                    alt=""
                  />
                </div>
                <div className="relative z-10">
                  <img src={GoogleIcon} alt="" className="w-[29px] md:w-[50px] h-[29px] md:h-[50px] cursor-pointer" />
                  <img
                    src={GoogleHoverIcon}
                    className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100 w-[29px] md:w-[50px] h-[29px] md:h-[50px] cursor-pointer"
                    alt=""
                  />
                </div>
                <div className="relative z-10">
                  <img src={YoutubeIcon} alt="" className="w-[29px] md:w-[50px] h-[29px] md:h-[50px] cursor-pointer" />
                  <img
                    src={YoutubeHoverIcon}
                    className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100 w-[29px] md:w-[50px] h-[29px] md:h-[50px] cursor-pointer"
                    alt=""
                  />
                </div>
              </div>          
          </div>           
          </div>
        </div>
      </div>      
      <div className="2xl:bg-[#F5F1ED] mt-6 sm:mt-16 lg:mt-20 xl:mt-64 2xl:mt-20 ">
        <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative" >
          <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto">
            <div className="4xl:flex gap-8">
              <div
                className="4xl:max-w-[1127px] flex flex-col items-start gap-8 bg-white py-10 2xl:py-20 px-0 2xl:px-20 2xl:shadow-2xl"
              >
                <div className="text-black text-[32px] lg:text-[54px] leading-[28px] lg:leading-[78px] font-bold 2xl:uppercase text-start w-[90%] md:w-[100%]">
                  <p>
                    {t('chooseoptiontitle1')}
                  </p>                  
                </div>
                <div className="text-black text-[14px] md:text-[16px] 2xl:text-[23px] leading-[16px] md:leading-[18px] 2xl:leading-[27px] text-left">
                  <p>
                    {t('chooseoptionintro1')}                   
                  </p>
                  <br />
                  <p>
                    {t('chooseoptionintro2')} 
                  </p>
                  <br />
                  <p>
                    {t('chooseoptionintro3')}                    
                  </p>
                  <p>
                    {t('chooseoptionintro4')}                      
                  </p>
                  <br />
                  <p>
                    {t('chooseoptionintro5')}  
                  </p>
                </div>
                <img src={OptionImg1_1920} alt="option1" className="w-full hidden xl:block" />
                <img src={OptionImg1_834} alt="option1" className="w-full hidden sm:block xl:hidden" />
                <img src={OptionImg1_320} alt="option1" className="w-full block sm:hidden" />
                <div className="text-black text-[14px] md:text-[16px] 2xl:text-[23px] leading-[16px] md:leading-[18px] 2xl:leading-[27px] text-left">
                  <p>
                    {t('chooseoptionintro5')}                    
                  </p>
                </div>

                <img src={OptionImg2_1920} alt="option2" className="w-full hidden xl:block" />
                <img src={OptionImg2_834} alt="option2" className="w-full hidden sm:block xl:hidden" />
                <img src={OptionImg2_320} alt="option2" className="w-full block sm:hidden" />
                <div className="text-black text-[32px] lg:text-[54px] leading-[28px] lg:leading-[78px] font-bold text-start ">
                  {t('chooseoptiontitle2')}  
                </div>
                <div className="text-black text-[14px] md:text-[16px] 2xl:text-[23px] leading-[16px] md:leading-[18px] 2xl:leading-[27px] text-left">
                  <p>1. {t('chooseoptionintro6')}</p>
                  <p>2. {t('chooseoptionintro7')}</p>
                  <p>3. {t('chooseoptionintro8')}</p>
                  <p>4. {t('chooseoptionintro6')}</p>
                  <p>5. {t('chooseoptionintro7')}</p>
                  <p>6. {t('chooseoptionintro8')}</p>
                </div>
                <div className="text-black text-[14px] md:text-[16px] 2xl:text-[23px] leading-[16px] md:leading-[18px] 2xl:leading-[27px] text-left">
                  {t('chooseoptionintro9')}
                  
                </div>
                <div className="text-left text-[#616485] text-[14px] md:text-[16px] lg:text-[23px] leading-[16px] md:leading-[18px] lg:leading-[27px] px-6 lg:px-12 pt-3 lg:pt-6 pb-6 lg:pb-12 bg-[#F5F5F5] italic">
                  <img src={QuoteImg} alt="quote" className="mb-1 w-[35px] lg:w-[82px]" />
                  {t('chooseoptionintro9')}
                </div>
                <div className="text-[32px] lg:text-[36px] leading-[38px] lg:leading-[43px] text-black font-bold text-start">
                  {t('chooseoptiontitle3')}
                </div>
                <div className="text-black text-[14px] md:text-[16px] 2xl:text-[23px] leading-[16px] md:leading-[18px] 2xl:leading-[27px] text-left">
                  <p>
                    {t('chooseoptionintro2')}                   
                  </p>
                  <br />
                  <p>
                    {t('chooseoptionintro3')}                      
                  </p>
                </div>
                <div className="w-full overflow-auto">
                  <table className="w-full text-[14px] md:text-[23px] leading-[16px] md:leading-[27px]">
                    <thead>
                      <th className="p-6 border-r-8 border-white"></th>
                      <th className="p-6 bg-[#F5F5F5] border-r-8 border-white">{t('colume')}</th>
                      <th className="p-6 bg-[#F5F5F5] border-r-8 border-white">{t('colume')}</th>
                      <th className="p-6 bg-[#F5F5F5]">{t('colume')}</th>
                    </thead>
                    <tbody>
                      {["1", "2", "3", "4"].map((item, index) => (
                        <tr className="border-b-8 border-white">
                          <th className="p-6 bg-[#F5F5F5]">{t('row')} {item}</th>
                          <td className="p-6">{t('position')} 1</td>
                          <td className="p-6">{t('position')} 1</td>
                          <td className="p-6">{t('position')} 1</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>                
                <div className="text-black text-[14px] md:text-[16px] 2xl:text-[23px] leading-[16px] md:leading-[18px] 2xl:leading-[27px] text-left">
                  <p>
                    {t('chooseoptionintro1')}
                  </p>
                  <br />
                  <p>
                    {t('chooseoptionintro2')}
                  </p>
                  <br />
                  <p>
                    {t('chooseoptionintro3')}
                  </p>
                </div>
                <div className="w-full overflow-auto">
                  <table className="w-full text-[14px] md:text-[23px] leading-[16px] md:leading-[27px]">
                    <thead className="border-b border-[#61648536]">
                      <th className="p-4"></th>
                      <th className="p-4 ">{t('column')}</th>
                      <th className="p-4 ">{t('column')}</th>
                      <th className="p-4 ">{t('column')}</th>
                    </thead>
                    <tbody>
                      {["1", "2", "3", "4"].map((item, index) => (
                        <tr className="border-b border-[#61648536]">
                          <th className="p-4 ">{t('row')} {item}</th>
                          <td className="p-4">{t('position')} 1</td>
                          <td className="p-4">{t('position')} 1</td>
                          <td className="p-4">{t('position')} 1</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>                
                <div className="flex gap-2 md:gap-8">
                  <div className="text-black text-[14px] md:text-[16px] 2xl:text-[23px] leading-[16px] md:leading-[18px] 2xl:leading-[27px] text-left">
                    <p className="hidden md:block">
                      {t('chooseoptionintro1')}
                    </p>
                    <br className="hidden md:block"/>
                    <p>
                      {t('chooseoptionintro2')}
                    </p>
                    <br />
                    <p>
                      {t('chooseoptionintro10')}                      
                    </p>
                    <p className="hidden md:block">
                      {t('chooseoptionintro11')}   
                    </p>
                  </div>
                  <img src={OptionImg3_1920} alt="option3" className="w-full hidden xl:block" />
                  <img src={OptionImg3_834} alt="option3" className="w-full hidden sm:block xl:hidden" />
                  <img src={OptionImg3_320} alt="option3" className="w-full block sm:hidden" />
                </div>
                <div className="w-full hidden md:block ">
                  <ImageSlider
                    title={t('chooseoptiontitle4')} 
                    imgList={[
                      { img: OptionImg4_1920, position: "bg-top" },
                      { img: OptionImg4_1920, position: "bg-top" },
                      { img: OptionImg4_1920, position: "bg-top" },
                      { img: OptionImg4_1920, position: "bg-top" },
                      { img: OptionImg4_1920, position: "bg-top" },
                    ]}
                    className={"w-full h-[548px] "}
                  />
                </div>

                <div className="w-full block md:hidden">
                  <ImageSlider
                    title={t('chooseoptiontitle4')}
                    imgList={[
                      { img: OptionImg4_320, position: "bg-top" },
                      { img: OptionImg4_320, position: "bg-top" },
                      { img: OptionImg4_320, position: "bg-top" },
                      { img: OptionImg4_320, position: "bg-top" },
                      { img: OptionImg4_320, position: "bg-top" },
                    ]}
                    className={"w-full h-[220px]"}
                  />
                </div>
                
                
               
              </div>
              <div className="pt-20 hidden 4xl:block">
                <div className="text-[24px] font-bold text-left mb-4 uppercase">
                  {t('otherrelated')}
                </div>
                <div className="flex flex-col gap-[52px]">
                  <div className="relative">
                    <img src={OptionRelatedImg} alt="" />
                    <div className="text-white font-bold text-[32px] max-w-[270px] leading-[92%] text-left absolute bottom-[28px] left-[28px] flex flex-col gap-2 items-start">
                      {t('meetproject')}
                      <Button text={t('viewmore')} />
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
                        {t('december')} 23, 2023
                      </div>
                      <div className="text-[16px] text-black text-left">
                        {t('post11')}
                        <br /> {t('post12')}
                      </div>
                      <Tag size="big" text={t('tagforthesection')} />
                    </div>
                    <div className="flex flex-col items-start gap-2 relative pt-[30px] pb-[20px] px-[20px]">
                      <img
                        src={NewsTagImg}
                        alt=""
                        className="absolute top-0 left-0"
                      />
                      <div className="font-bold text-black text-[16px] uppercase">
                        {t('december')} 23, 2023
                      </div>
                      <div className="text-[16px] text-black text-left">
                        {t('post11')}
                        <br /> {t('post12')}
                      </div>
                      <Tag size="big" text={t('tagforthesection')} />
                    </div>
                    <div className="flex flex-col items-start gap-2 relative pt-[30px] pb-[20px] px-[20px]">
                      <img
                        src={NewsTagImg}
                        alt=""
                        className="absolute top-0 left-0"
                      />
                      <div className="font-bold text-black text-[16px] uppercase">
                        {t('december')} 23, 2023
                      </div>
                      <div className="text-[16px] text-black text-left">
                        {t('post11')}
                        <br /> {t('post12')}
                      </div>
                      <Tag size="big" text={t('tagforthesection')} />
                    </div>
                    <div className="flex flex-col items-start gap-2 relative pt-[30px] pb-[20px] px-[20px]">
                      <img
                        src={NewsTagImg}
                        alt=""
                        className="absolute top-0 left-0"
                      />
                      <div className="font-bold text-black text-[16px] uppercase">
                        {t('december')} 23, 2023
                      </div>
                      <div className="text-[16px] text-black text-left">
                        {t('post11')}
                        <br /> {t('post12')}
                      </div>
                      <Tag size="big" text={t('tagforthesection')} />
                    </div>
                    <div className="flex flex-col items-start gap-2 relative pt-[30px] pb-[20px] px-[20px]">
                      <img
                        src={NewsTagImg}
                        alt=""
                        className="absolute top-0 left-0"
                      />
                      <div className="font-bold text-black text-[16px] uppercase">
                        {t('december')} 23, 2023
                      </div>
                      <div className="text-[16px] text-black text-left">
                        {t('post11')}
                        <br /> {t('post12')}
                      </div>
                      <Tag size="big" text={t('tagforthesection')} />
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

export default ChooseOption;
