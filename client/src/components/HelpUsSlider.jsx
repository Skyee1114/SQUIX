import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import Arrow from "./Arrow";

const HelpUsSlider = ({ cardList, className }) => {    

    const swiperRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    let swiper

    return (
        <div>   
            <div className="flex absolute -bottom-12 xl:-bottom-28 4xl:-bottom-16"
            >
                <Arrow direction="left" onClick={() => swiperRef.current.slidePrev()} />
                <Arrow direction="right" onClick={() => swiperRef.current.slideNext()}/>
            </div>            
            
            <Swiper
                ref={swiperRef}
                onSwiper={(swiper) => {
                    if (swiperRef.current !== swiper) {
                        swiperRef.current = swiper;                        
                    }
                }}
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                id="image-slider"
                speed={1500}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                slidesPerView={4}
                modules={[EffectCoverflow, Autoplay]}
                className={"mySwiper " + className ? className : ""}
            >
                {
                    cardList.map((item, index) => {
                        return  <SwiperSlide key={index} style={{ width: '70%'}}>
                            {item.card}
                        </SwiperSlide>
                    })
                }
            </Swiper>            
        </div>
    )
}

export default HelpUsSlider;