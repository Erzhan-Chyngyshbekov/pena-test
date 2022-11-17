import * as React from "react";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Rating from "@mui/material/Rating";
import { makeStyles } from "@mui/styles";

import { AppColors } from "../../styles/common";
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
  const styles = useStyles();

  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      className="swiper"
    >
      {list.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className={cn(
              styles.wrapper,
              variant ? styles[`wrapper--${variant}`] : ""
            )}
          >
            <div className={styles.avatar}></div>
            <div className={styles.author}>{item.author}</div>
            <Rating
              className={styles.rating}
              name="read-only"
              value={5}
              readOnly
            />
            <div className={styles.review}>{item.review}</div>
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    background: "white",
  },
  "wrapper--yellow": { background: "#FCF3D3" },
  avatar: {
    width: "60px",
    height: "60px",
    background: AppColors.PRIMARY_GRAY,
    color: AppColors.PRIMARY_GRAY_4,
  },
  author: { marginTop: "15px", fontWeight: "bold" },
  rating: { marginTop: "15px", svg: { color: AppColors.PRIMARY_YELLOW_2 } },
  review: {
    marginTop: "15px",
    maxHeight: "100px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: AppColors.TITLE_ACTIVE,
  },
});
