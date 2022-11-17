import * as React from "react";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "./CardNewsItem.scss";
import styles from "./CardNewsItem.module.scss";
import "swiper/css";
import "swiper/css/pagination";

type CardNews = {
  title: string;
  date: string;
  description: string;
  commentsCount: string | number;
};

interface Props {
  list: CardNews[];
}

export const CardNewsItem: React.FC<Props> = ({ list }) => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      className="swiperr"
    >
      {list.map((item, index) => (
        <SwiperSlide key={index}>
          <div className={styles.wrapper}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.date}>{item.date}</div>
            <div className={styles.description}>{item.description}</div>
            <div className={styles.count}>{item.commentsCount} comments</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
