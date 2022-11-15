import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { makeStyles } from "@mui/styles";

import "./CardCarouselItem.scss";
import "swiper/css";
import "swiper/css/navigation";

interface Props {
  list: string[];
}

export const CardCarouselItem: React.FC<Props> = ({ list }) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Swiper
        className="swiper"
        modules={[Navigation]}
        slidesPerView={1}
        navigation={true}
      >
        {list.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={styles.item}>
              <span className={styles.current}>{item}</span>
              <span className={styles.total}>{`/ 0${list.length}`}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    height: "300px",
    background: "white",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
  },
  current: {
    fontWeight: 700,
    fontSize: "30px",
    marginRight: "10px",
  },
  total: { fontWeight: 500 },
});
