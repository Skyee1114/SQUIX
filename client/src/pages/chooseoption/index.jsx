import React, {useEffect, useState} from "react";
import { Link, useParams } from 'react-router-dom';
import Footer from "../../components/Footer";
import Tag from "../../components/Tag";
import Button from "../../components/Buttons/Button";
import NewsTagImg from "../../assets/img/news_tag.svg";
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
import OptionRelatedImg from "../../assets/img/option_related.png";
import { getNews, getNewsList } from "../../actions/admin";
import ContentsReader from "../../components/ContentsReader";
import { useTranslation } from 'react-i18next';

function ChooseOption() {

  const { t, i18n } = useTranslation();  
  const currentLanguage = i18n.language;
  
  const { id } = useParams();
  
  const [news, setNews] = useState([
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
      tags: {
        english: [],
        russian: [],
        korean: [],
        spanish: [],
        portuguese: []
    },
      date: "",
      subscription: "",
    }
  ]);

  const [currentNews, setCurrentNews] = useState(
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
        contents: {
            english: "",
            russian: "",
            korean: "",
            spanish: "",
            portuguese: ""                
        },
        tags: {
            english: [],
            russian: [],
            korean: [],
            spanish: [],
            portuguese: []
        },
        date: "",
        subscription: "",
    }
  );    

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    getNews({id}).then( data => {
      if(data) {
          setCurrentNews(data);
          console.log('data:', data);          
      }
    }).catch(err => {
        console.error(err);
    })

    getNewsList().then(data => {
      if (data) {
        setNews(data);
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
                  <p className=''>{currentNews.titles[currentLanguage]}</p>              
                </div>
              </div>
              <div className="hidden md:block">                

                {currentNews && currentNews.tags ? 
                  <div className="ms-8 flex flex-row gap-4 text-white py-6 xl:py-12">
                      {currentNews.tags[currentLanguage].map((tag, index) => (
                          <Tag key={index} size={window.innerWidth > 835 ? "big" : "mobile"} text={tag} />
                      ))}                          
                  </div> 
                  : null
                }
              </div>              
              <div className="pt-4 md:pt-0 pl-5 md:pl-10 relative w-[284px] md:w-[304px] lg:w-[530px] 2xl:w-[1060px] text-[16px] lg:text-[22px] 2xl:text-[32px] leading-[18px] lg:leading-[25px] 2xl:leading-[37px] text-left text-white ">
                {currentNews.summary[currentLanguage]}
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
                <ContentsReader news={currentNews} language={currentLanguage}/>               
                <div className="w-full">
                  <ImageSlider
                    title={t('chooseoptiontitle4')} 
                    imgList={[
                      { img: OptionImg4_1920, position: "bg-top" },
                      { img: OptionImg4_1920, position: "bg-top" },
                      { img: OptionImg4_1920, position: "bg-top" },
                      { img: OptionImg4_1920, position: "bg-top" },
                      { img: OptionImg4_1920, position: "bg-top" },
                    ]}
                    className={"w-full h-[300px] md:h-[548px] "}
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
                      {news[0].titles[currentLanguage]}
                      <Link to={`/news/${news[0].id}`}>
                        <Button text={t('viewmore')}/>
                      </Link>                      
                    </div>
                  </div>
                  <div className="flex flex-col gap-[35px] ps-2">                  
                  {news
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .map((newsItem, index) => (        
                    <Link to={`/news/${newsItem.id}`} key={newsItem.id} className="flex flex-col items-start gap-2 relative pt-[30px] pb-[20px] px-[32px]">
                        <img
                        src={NewsTagImg}
                        alt=""
                        className="absolute top-0 left-2"
                        />
                        <div className="font-bold text-black text-[16px] uppercase">
                          { newsItem.date ? formatDate(newsItem.date) : null}
                        </div>
                        <div className="text-[16px] text-black text-left">
                        {newsItem.titles[currentLanguage]}
                        </div>
                        {newsItem && newsItem.tags ? 
                          <div className="flex flex-row gap-[4px]">
                              {newsItem.tags[currentLanguage].map((tag, index) => (
                                  <Tag key={index} size={window.innerWidth > 835 ? "big" : "mobile"} text={tag} />
                              ))}                          
                          </div> 
                          : null
                        }
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

export default ChooseOption;
