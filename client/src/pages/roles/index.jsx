import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
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
import NewsTagImg from "../../assets/img/news_tag.svg";
import Button from "../../components/Buttons/Button";
import PDFIcon from "../../assets/img/pdf_icon.svg";
import GoogleBlueIcon from "../../assets/img/socials/blue_google.png";
import GoogleBlueHoverIcon from "../../assets/img/socials/google_.png";
import Footer from "../../components/Footer";
import { useTranslation } from 'react-i18next';
import ContentsReader from "../../components/ContentsReader";
import { getJobs, getJobsList } from "../../actions/admin";

function Roles() {

  const { t, i18n } = useTranslation();  
  const currentLanguage = i18n.language;
  
  const { id } = useParams();

  const [jobs, setJobs] = useState([
    {
      id: 1,
      titles: {
        english: "",
        russian: "",
        korean: "",
        spanish: "",
        portuguese: ""
      },
      summary: {
        english: "",
        russian: "",
        korean: "",
        spanish: "",
        portuguese: ""        
      },
      division: {
        english: "",
        russian: "",
        korean: "",
        spanish: "",
        portuguese: ""        
      },
      position: {
        english: "",
        russian: "",
        korean: "",
        spanish: "",
        portuguese: ""        
      },
      date: "",
    }
  ]);

  const [currentJobs, setCurrentJobs] = useState(
    {
        id: id,
        titles: {
            english: "",
            russian: "",
            korean: "",
            spanish: "",
            portuguese: ""                
        },
        summary: {
            english: "",
            russian: "",
            korean: "",
            spanish: "",
            portuguese: ""                
        },
        division: {
          english: "",
          russian: "",
          korean: "",
          spanish: "",
          portuguese: ""                
      },
      position: {
        english: "",
        russian: "",
        korean: "",
        spanish: "",
        portuguese: ""                
      },
      contents: {
          english: "",
          russian: "",
          korean: "",
          spanish: "",
          portuguese: ""                
      },
      date: "",
    }
  );    

  useEffect(() => {
    window.scrollTo(0, 0);

    getJobs({id}).then( data => {
      if(data) {
          setCurrentJobs(data);
          console.log('data:', data);          
      }
    }).catch(err => {
        console.error(err);
    })

    getJobsList().then(data => {
      if (data) {
        setJobs(data);
      }
    }).catch(err => {
      console.error(err);
    }); 

  }, [id]);

  return (
    <>
      <div className="absolute -z-10 w-full h-[800px] bg-[url('./assets/img/choose_option-bg-320.jpg')] sm:bg-[url('./assets/img/choose_option-bg-834.jpg')] xl:bg-[url('./assets/img/choose_option-bg-1920.jpg')] bg-no-repeat 5xl:bg-cover bg-top">
      </div>      
      <Navbar colorMode="light"/>   
      <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative" >
        <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto pt-4 xl:pt-16">   

          <div className="flex flex-col lg:flex-row justify-between pb-10 sm:pb-32 md:pb-12 lg:pb-24 xl:pb-72 2xl:pb-20">            
            <div>              
              <div className='text-start pl-5 md:pl-10'>
                <Link to={"/"}>
                  <p className="font-bold text-[14px] md:text-[16px] 2xl:text-[32px] transition duration-300 hover:text-[#FFA801] text-white uppercase inline-block">&lt; {t('otherroles')}</p>
                </Link>
              </div>              
              <div className="flex flex-row gap-3 md:gap-7 2xl:gap-6 pt-4">
                <div className="min-w-[7px] lg:min-w-[10px] xl:min-w-[15px] mt-0.5 -mb-28 xl:-mb-24 bg-primary-gradient rounded"> </div>            
                <div className="text-white font-bold text-[32px] md:text-[46px] 2xl:text-[78px] leading-[31px] md:leading-[44px] 2xl:leading-[75px] text-left  relative ">
                  <p className=''>{currentJobs.titles[currentLanguage]}</p>              
                </div>
              </div>       
              <div className="pt-4 md:pt-8 2xl:pt-12 pl-5 md:pl-10 relative w-[284px] md:w-[530px] 2xl:w-[1090px] text-[16px] md:text-[22px] 2xl:text-[32px] leading-[18px] md:leading-[25px] 2xl:leading-[37px] text-left text-white ">
                {currentJobs.summary[currentLanguage]}                
              </div>              
            </div>
            <div className="flex flex-col items-center gap-[11px] pt-4 sm:pt-12 lg:pt-0 2xl:pt-24 ">
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

      <div className="2xl:bg-[#F5F1ED]">
        <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative" >
          <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto">
            <div className="4xl:flex gap-8">
              <div
                className="4xl:min-w-[1127px] flex flex-col items-start gap-8 bg-white py-8 2xl:py-20 px-0 2xl:px-20 2xl:shadow-2xl"
              >
                <ContentsReader news={currentJobs} language={currentLanguage}/>  
                <div id="htmlContent" className="hidden" dangerouslySetInnerHTML={{ __html: currentJobs.contents[currentLanguage] }} />
                <div className="flex flex-col md:flex-row gap-2 md:gap-12 items-center w-full md:w-auto pt-4">
                  <Button icon={PDFIcon} text={t('downloadpdfstyleportfolio')} className={"w-full md:w-auto flex justify-center"} />
                  <Link to={"https://www.artstation.com/squixgg"}>
                    <div className="flex gap-1 items-center text-[#00A3FF] text-[20px]">
                      <div className="relative">
                        <img src={GoogleBlueIcon} alt="" width={50} height={50} />
                        <img
                          src={GoogleBlueHoverIcon}
                          className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100"
                          alt=""
                          width={50}
                          height={50}
                        />
                      </div>
                      <p>{t('viewonartstation')}</p>                    
                    </div>
                  </Link>                  
                </div>
              </div>

              <div className=" pt-20 hidden 4xl:block">
                <div className="text-[24px] font-bold text-left mb-4 uppercase">
                  {t('otherroles')}
                </div>
                <div className="flex flex-col gap-[52px]">
                  <div className="flex flex-col gap-[35px] ps-2">
                  {jobs
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .map((jobsItem, index) => (   
                    <Link to={`/roles/${jobsItem.id}`} key={jobsItem.id}>
                      <div className="flex flex-col items-start gap-2 relative pt-[30px] pb-[20px] px-[32px]">
                        <img
                          src={NewsTagImg}
                          alt=""
                          className="absolute top-0 left-2"
                        />
                        <div className="font-bold text-black text-[16px] uppercase">
                          { jobsItem.titles[currentLanguage] }
                        </div>
                        <div className="text-[16px] text-black text-left">
                          { jobsItem.summary[currentLanguage]}
                        </div>
                        <div className="font-bold text-[16px] text-[#FFA801]">
                          {t('viewmore')} &gt;
                        </div>
                      </div>
                    </Link>
                  ))}                 
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

export default Roles;
