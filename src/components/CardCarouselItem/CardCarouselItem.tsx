import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "./CardCarouselItem.scss";
import "swiper/css";
import "swiper/css/navigation";

interface Props {
  list: string[];
}

export const CardCarouselItem: React.FC<Props> = ({ list }) => {
  return (
    <div className="container">
      <Swiper
        className="swiper"
        modules={[Navigation]}
        slidesPerView={1}
        navigation={true}
      >
        {list.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="item">
              <span className="current">{item}</span>
              <span className="total">{`/ 0${list.length}`}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
