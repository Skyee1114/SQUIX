import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Buttons/Button";
import Tag from "./Tag";
import Arrow from "./Arrow";
import { useTranslation } from 'react-i18next';
import { getNewsList, getNewsImage } from "../actions/admin";

export default function Gallery() {

  const { t, i18n } = useTranslation();  
  const currentLanguage = i18n.language;

  const [news, setNews] = useState([]);
  const [newsImage, setNewsImage] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(1);
  const [progressStatus, setProgressStatus] = useState(0);

  const [currentNews, setCurrentNews] = useState(null);
  const [currentNewsImage, setCurrentNewsImage] = useState(null);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);

  const handleLeftClick = () => {
    if (currentPosition > 1) {
      setCurrentPosition(currentPosition - 1);
    }
  };

  const handleRightClick = () => {
    if (currentPosition < news.length) {
      setCurrentPosition(currentPosition + 1);
    } else {
      setCurrentPosition(1);
    }
  };

  useEffect(() => {
    getNewsList().then(data => {
      if (data) {
        setNews(data);
        setCurrentNews(data[0]);
  
        const promises = data.map(newsItem => {
          return getNewsImage({ id: newsItem.id }).then(data => {
            if (data) {
              const imageUrl = URL.createObjectURL(data);
              return imageUrl;
            }
          });
        });
  
        Promise.all(promises).then(imageUrls => {
          setNewsImage(imageUrls);
          setCurrentNewsImage(imageUrls[0]);
        });        
       
      }
    }).catch(err => {
      console.error(err);
    });
  }, []);
   
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  useEffect(() => {
    if (currentPosition > news.length) {
      setCurrentPosition(1);
      return;
    }
    setCurrentNews(news[currentPosition - 1]);    
    setCurrentNewsImage(newsImage[currentPosition - 1]);
    const interval = setInterval(() => {
      setProgressStatus((prevStatus) => {
        if (prevStatus < 100) {
          return prevStatus + 0.1;
        } else {
          clearInterval(interval);
          setCurrentPosition(currentPosition + 1);
          return prevStatus;
        }
      });
    }, 10);
    return () => clearInterval(interval);
  }, [currentPosition]);

  useEffect(() => {
    setProgressStatus(0); // Reset progressStatus to 0 when currentPosition changes
  }, [currentPosition]);

  useEffect(() => {
    if (currentPosition === 1) {
      setStart(0);
      setEnd(3);
    } else if (currentPosition > start && currentPosition >= end) {
      setStart(currentPosition - 3);
      setEnd(currentPosition);
    } else if (currentPosition <= start && currentPosition < end) {
      setStart(currentPosition - 1);
      setEnd(currentPosition + 2);
    }
  }, [currentPosition]);

  return (
    <div className="relative z-10 pt-20 4xl:pt-28">
      <div className="-mt-16 sm:mt-0 bg-[#020911] sm:bg-transparent 2xl:bg-[#020911]">
        <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative">
          <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto">
            <div className="2xl:bg-[#020911] flex flex-col sm:flex-row justify-between items-center sm:items-stretch pb-[20px] xl:pb-[60px] 3xl:pb-[100px]">
              <div className="relative z-20 w-screen">
                <img
                  src={currentNewsImage}
                  className="rounded-[10px]  w-[320px] sm:w-[376px] xl:w-[647px] 3xl:w-[750px] h-[289px] sm:h-[488px] xl:h-[655px] 3xl:h-[750px]  object-cover"
                  alt=""
                />
              </div>
              <div className="relative flex flex-col justify-between -mt-72 sm:-mt-14 xl:mt-0">
                <div className="flex flex-col-reverse justify-between sm:flex-col gap-8 sm:gap-0">
                  <div className="flex flex-row-reverse pb-[5px] sm:pb-[15px] z-20">
                    <div className="flex flex-row items-center w-[90px] sm:w-[170px] justify-between ">
                      <div className="flex bg-black rounded-[3px]">
                        <Arrow direction="left" onClick={handleLeftClick} />
                        <Arrow direction="right" onClick={handleRightClick} />
                      </div>
                      <div className="flex-auto text-lg sm:text-3xl font-bold text-right text-white">
                        {currentPosition}/{news.length}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[10px] 3xl:gap-[18px]  z-20 relative">
                    {newsImage.slice(start, end).map((image, index) => (
                      <div
                        className={`flex flex-col text-red-900 cursor-pointer`}
                        onClick={() => setCurrentPosition(index + start + 1)}
                        key={index}
                      >
                        {index + start !== currentPosition - 1 ? (
                          <div className="h-[3px]"></div>
                        ) : (
                          <div
                            className={`bg-primary-gradient  h-[3px] rounded-[3px]`}
                            style={{ width: `${progressStatus}%` }}
                          >
                            {" "}
                          </div>
                        )}
                        <img
                          src={image}
                          alt=""
                          className="rounded-[3px] w-[89px] sm:w-[124px] xl:w-[220px] 3xl:w-[524px] h-[49px] sm:h-[67px] xl:h-[106px] 3xl:h-[122px] object-cover"
                          style={{
                            filter:
                              index + start !== currentPosition - 1
                                ? "grayscale(100%)"
                                : "none",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col mt-40 xl:mt-48 3xl:mt-60 sm:w-[280px] md:w-[476px] xl:w-[763px] 3xl:w-[884px] z-20 sm:absolute sm:right-0 bg-white rounded-[3px]">
                    <div
                      className="bg-primary-gradient  h-[7px] rounded-[3px]"
                      style={{ width: `${progressStatus}%` }}
                    >
                      {" "}
                    </div>
                    <div className="px-4 md:px-10 gap-[10px] xl:gap-[20px] 3xl:gap-[24px] flex flex-col bg-white rounded-[3px] pt-[18px] xl:pt-[24px] 3xl:pt-[32px]">
                      <div className="flex flex-col-reverse gap-2 md:flex-row justify-between">
                        {currentNews && currentNews.tags ? 
                          <div className="flex flex-row gap-[17px]">
                              {currentNews.tags[currentLanguage].map((tag, index) => (
                                  <Tag key={index} size={window.innerWidth > 835 ? "big" : "mobile"} text={tag} />
                              ))}                          
                          </div> 
                          : null
                        }
                        <div className="flex items-center font-bold text-[15px] leading-4">
                          {currentNews ? formatDate(currentNews.date) : ""}
                        </div>
                      </div>
                      <div className="font-bold text-[20px] md:text-[28px] xl:text-[47px] leading-[23px] md:leading-[32px] xl:leading-[54px] text-left bg-white">
                        {currentNews ? currentNews.titles[currentLanguage] : ""}
                      </div>
                      <div className="font-normal text-[14px] md:text-[16px] xl:text-[23px] leading-[16px] md:leading-[18px] xl:leading-[27px] text-left">
                        {currentNews ? currentNews.contents[currentLanguage] : ""}
                      </div>
                      <div className="flex flex-row items-center justify-between mb-4 xl:mb-8 3xl:mb-12">
                        <Button text={t('viewmore')} />
                        <div className="flex flex-row items-center h-fit gap-[10px] transition duration-300 hover:text-[#FFA801] cursor-pointer">
                          <div className="text-xs md:text-sm font-bold uppercase">{t('share')}</div>
                          <div>
                            <svg
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.1203 8.65301L16.5407 2.85889C16.3587 2.67012 16.0797 2.61086 15.8368 2.70863C15.5931 2.80733 15.4334 3.04341 15.4334 3.30605V6.09592H15.2188C10.6042 6.09592 6.84955 9.85053 6.84955 14.4652V15.7528C6.84955 16.0514 7.05985 16.3004 7.35078 16.3683C7.39809 16.3802 7.44524 16.3854 7.4924 16.3854C7.73539 16.3854 7.96801 16.2429 8.08039 16.0189C9.28734 13.6042 11.714 12.1046 14.4136 12.1046H15.4334V14.8943C15.4334 15.1571 15.5931 15.3932 15.8368 15.4909C16.0781 15.5896 16.3587 15.5296 16.5407 15.3407L22.1203 9.54655C22.3606 9.2968 22.3606 8.9037 22.1203 8.65301Z"
                                fill="currentColor"
                              />
                              <path
                                d="M19.7254 23.2636H4.27438C2.85462 23.2636 1.69922 22.1083 1.69922 20.6884V8.67108C1.69922 7.25132 2.85462 6.09592 4.27438 6.09592H6.84955C7.32422 6.09592 7.70788 6.47958 7.70788 6.95425C7.70788 7.42892 7.32422 7.81259 6.84955 7.81259H4.27438C3.8005 7.81259 3.41589 8.1972 3.41589 8.67108V20.6884C3.41589 21.1623 3.8005 21.5469 4.27438 21.5469H19.7254C20.1991 21.5469 20.5837 21.1623 20.5837 20.6884V13.8214C20.5837 13.3467 20.9674 12.9629 21.442 12.9629C21.9169 12.9629 22.3005 13.3467 22.3005 13.8214V20.6884C22.3005 22.1083 21.1451 23.2636 19.7254 23.2636Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to={"/news/all"}>
                  <div className={`uppercase -mt-8 sm:mt-0 z-10 ${i18n.language === 'english' || i18n.language === 'korean' ? `text-base xl:text-lg` : ` text-xs xl:text-lg`}  font-bold text-left transition duration-300 hover:text-[#FFA801] cursor-pointer text-white`}>
                    {t('viewallnews')} &gt;
                  </div>
                </Link>                
              </div>
            </div>
          </div>
        </div>
      </div>
  <div className="bg-[#020911] w-screen absolute top-[450px] h-0 sm:h-40 lg:h-96 2xl:h-0"></div>
  </div>
  );
}
