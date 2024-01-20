import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import Arrow from "./Arrow";


const ImageSlider = ({ title, imgList, className }) => {
    let swiper
    return (
        <>
            <div className="flex justify-between md:px-8 w-full items-center py-8">
                <div className="text-black font-bold text-[14px] md:text-[36px] leading-[14px] md:leading-[36px] text-left w-[60%]">{title}</div>
                <div className="flex items-center">
                    <Arrow direction="left" onClick={() => {
                        swiper?.slidePrev();
                    }} />
                    <Arrow direction="right" onClick={() => {
                        swiper?.slideNext();
                    }} />
                    <div className="font-bold text-[16px] md:text-[32px] ms-2">3/7</div>
                </div>
            </div>
            <Swiper
                style={
                    {
                        "--swiper-pagination-bottom": 0,
                        background: "transparent",
                        padding: "0px",
                        paddingBottom: "2rem",
                        overflowY: "visible"
                    }
                }
                onSwiper={(swiperInstance) => {
                    swiper = swiperInstance;
                }}
                id="image-slider"
                speed={1500}
                spaceBetween={-20}
                // centeredSlides={true}
                loop={true}
                parallax={true}

                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 0,
                    scale: 0.8,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}

                effect={"coverflow"}
                grabCursor={true}
                modules={[EffectCoverflow, Autoplay]}
                className={"mySwiper " + className ? className : ""}
            >

                {
                    imgList.map((item, index) => {
                        return <SwiperSlide className="rounded-xl" key={index} style={{ width: '70%', height: '100%', padding: 0 }}>
                            <div className={`w-full h-full bg-cover bg-no-repeat rounded-xl ${item.position}`} style={{
                                backgroundImage: `url('${item.img}')`
                            }}>

                            </div>

                        </SwiperSlide>

                    })
                }
            </Swiper ></>
    )
}

export default ImageSlider;