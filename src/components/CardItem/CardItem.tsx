import * as React from "react";
import cn from "classnames";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";

import { AppColors } from "../../styles/common";
// import styles from "./CardItem.module.scss";

// const MyButton = styled(({variant}) => <Button />)({
//   height: "46px",
//   width: "150px",
//   marginTop: "auto",
//   fontWeight: 700,
//   borderRadius: "0",
//   boxShadow: "none",
//   background: AppColors.PRIMARY_GRAY_4,
// });

type CardArrowVariant = "top" | "right" | "bottom" | "left";

interface Props {
  title?: string;
  description?: string;
  variant?: "empty" | "yellow" | "gray" | "long";
  arrowVariant?: CardArrowVariant;
  buttonTitle?: string;
}

export const CardItem: React.FC<Props> = ({
  title,
  description,
  variant = "empty",
  buttonTitle,
  arrowVariant,
}) => {
  const styles = useStyles();

  return (
    <div
      className={cn(
        styles.wrapper,
        variant ? styles[`wrapper--${variant}`] : ""
      )}
    >
      <div className={styles.title}>{title}</div>
      <div className={cn(styles.divider, styles[`divider--${variant}`])} />
      <div
        className={cn(styles.description, styles[`description--${variant}`])}
      >
        {description}
      </div>
      {buttonTitle ? (
        <Button
          variant="contained"
          className={cn(styles.button, styles[`button--${variant}`])}
        >
          {buttonTitle}
        </Button>
      ) : (
        ""
      )}

      <div className={cn(styles.arrow, styles[`arrow--${arrowVariant}`])} />
    </div>
  );
};

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    height: "300px",
    padding: "30px",
    position: "relative",
    background: "white",
    borderRadius: "0",
  },
  "wrapper--empty": { background: AppColors.PRIMARY_GRAY },
  "wrapper--yellow": { background: AppColors.PRIMARY_YELLOW },
  "wrapper--gray": { background: AppColors.PRIMARY_GRAY },
  "wrapper--long": { height: "600px" },
  title: {
    maxWidth: "280px",
    fontSize: "28px",
    fontWeight: 700,
    "@media screen and (max-width: 900px)": { fontSize: "20px" },
  },
  divider: {
    height: "5px",
    width: "40px",
    margin: "20px 0",
    background: AppColors.PRIMARY_GRAY_4,
  },
  "divider--empty": { display: "none" },
  "divider--yellow": {},
  "divider--gray": {},
  "divider--long": {},
  description: {
    color: AppColors.TITLE_ACTIVE,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  "description--empty": {},
  "description--yellow": { color: AppColors.PRIMARY_GRAY_4 },
  "description--gray": {},
  "description--long": {},
  button: {
    height: "46px",
    width: "150px",
    marginTop: "auto !important",
    fontWeight: 700,
    borderRadius: "0 !important",
    boxShadow: "none !important",
    background: AppColors.PRIMARY_GRAY_4,
  },
  "button--empty": {},
  "button--yellow": {},
  "button--gray": {},
  "button--long": {
    color: AppColors.PRIMARY_GRAY_4,
    background: AppColors.PRIMARY_YELLOW,
  },
  arrow: {
    display: "none",
    height: "20px",
    width: "20px",
    position: "absolute",
    zIndex: 1,
    background: "white",
    transform: "rotate(45deg)",
    "@media screen and (max-width: 900px)": { display: "none" },
  },
  "arrow--left": { display: "block", left: "-10px", top: "calc(50% - 10px)" },
  "arrow--top": { display: "block", right: "calc(50% - 10px)", top: "-10px" },
  "arrow--right": { display: "block", right: "-10px", top: "calc(50% - 10px)" },
  "arrow--bottom": {
    display: "block",
    right: "calc(50% - 10px)",
    bottom: "-10px",
  },
  "arrow--undefined": {},
});
