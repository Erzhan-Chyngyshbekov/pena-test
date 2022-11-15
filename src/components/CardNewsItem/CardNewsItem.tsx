import * as React from "react";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { makeStyles } from "@mui/styles";

import { AppColors } from "../../styles/common";
import "./CardNewsItem.scss";
// import styles from "./CardNewsItem.module.scss";
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
  const styles = useStyles();

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

const useStyles = makeStyles({
  wrapper: {
    height: "300px",
    padding: "30px",
    background: AppColors.PRIMARY_BLUE,
  },
  title: { fontSize: "28px", fontWeight: 700, color: "white" },
  date: { marginTop: "40px", color: AppColors.TITLE_ACTIVE_2 },
  description: { fontSize: "18px", marginTop: "5px", color: "white" },
  count: { marginTop: "30px", color: AppColors.TITLE_ACTIVE_2 },
});
