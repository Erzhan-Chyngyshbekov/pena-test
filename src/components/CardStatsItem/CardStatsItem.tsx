import * as React from "react";
import cn from "classnames";
import { makeStyles } from "@mui/styles";

import { AppColors } from "../../styles/common";

// import styles from "./CardStatsItem.module.scss";

interface Props {
  variant?: "empty";
  icon: React.ReactNode;
  count: string | number;
  title: string;
}

export const CardStatsItem: React.FC<Props> = ({
  variant,
  icon,
  count,
  title,
}) => {
  const styles = useStyles();

  return (
    <div
      className={cn(
        styles.wrapper,
        variant ? styles[`wrapper--${variant}`] : ""
      )}
    >
      <div className={styles.icon}>{icon}</div>
      <div className={styles.count}>{count.toLocaleString()}</div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

const ICON_WRAPPER_SIZE = "80px";
const ICON_SIZE = "34px";

const useStyles = makeStyles({
  wrapper: {
    height: "300px",
    padding: "30px",
    color: "$PRIMARY_GRAY_5",
    background: "white",
  },
  "wrapper--empty": { background: AppColors.PRIMARY_GRAY },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: ICON_WRAPPER_SIZE,
    height: ICON_WRAPPER_SIZE,
    background: AppColors.PRIMARY_YELLOW,
    "& svg": {
      width: ICON_SIZE,
      height: ICON_SIZE,
      color: AppColors.PRIMARY_BLUE,
    },
  },
  count: { marginTop: "20px", fontSize: "36px" },
  title: { marginTop: "5px" },
});
