import * as React from "react";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Rating from "@mui/material/Rating";

import "./CardReviewItem.scss";
import "swiper/css";
import "swiper/css/pagination";

type CardReview = {
  author: string;
  review: string;
};

interface Props {
  list: CardReview[];
  variant?: "yellow";
}

export const CardReviewItem: React.FC<Props> = ({ list, variant }) => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      className="swiper"
    >
      {list.map((item, index) => (
        <SwiperSlide key={index}>
          <div className={cn("wrapper", `wrapper--${variant}`)}>
            <div className="avatar"></div>
            <div className="author">{item.author}</div>
            <Rating className="rating" name="read-only" value={5} readOnly />
            <div className="review">{item.review}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
