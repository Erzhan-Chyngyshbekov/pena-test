import * as React from "react";
import cn from "classnames";
import { makeStyles } from "@mui/styles";

import { AppColors } from "../../styles/common";

// import styles from "./CardButtonItem.module.scss";

interface Props {
  variant?: "yellow";
  title: string;
  icon: React.ReactNode;
}

export const CardButtonItem: React.FC<Props> = ({ variant, title, icon }) => {
  const styles = useStyles();

  return (
    <div
      className={cn(
        styles.wrapper,
        variant ? styles[`wrapper--${variant}`] : ""
      )}
    >
      <div
        className={cn(styles.icon, variant ? styles[`icon--${variant}`] : "")}
      >
        {icon}
      </div>
      <div
        className={cn(styles.title, variant ? styles[`title--${variant}`] : "")}
      >
        {title}
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  wrapper: {
    height: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: AppColors.PRIMARY_BLUE,
    cursor: "pointer",
  },
  "wrapper--yellow": { background: AppColors.PRIMARY_YELLOW },
  icon: {
    width: "80px",
    height: "80px",
    marginBottom: "15px",
    "& svg": { width: "80px", height: "80px", color: "white" },
  },
  "icon--yellow": { "& svg": { color: AppColors.PRIMARY_GRAY_4 } },
  title: {
    color: "white",
    fontWeight: 100,
  },
  "title--yellow": { color: AppColors.PRIMARY_GRAY_4 },
});
