import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import swiper1 from "../roshePics/FirstSliderImages/swiper1.png"
import swiper2 from "../roshePics/FirstSliderImages/swiper2.png"
import swiper3 from "../roshePics/FirstSliderImages/swiper3.png"
import swiper4 from "../roshePics/FirstSliderImages/swiper4.png"

const FirstSlider = () => {
  const swiperImages = [swiper1,swiper2,swiper3,swiper4];
  return (
      <Swiper
        slidesPerView={1}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}    
      >
        {swiperImages.map((swiper) => (
            <SwiperSlide>
              <img src={swiper} alt="swiper" className="object-cover w-full" />
            </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default FirstSlider;
