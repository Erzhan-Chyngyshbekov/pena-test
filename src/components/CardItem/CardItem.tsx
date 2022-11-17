import * as React from "react";
import cn from "classnames";
import Button from "@mui/material/Button";

import styles from "./CardItem.module.scss";

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
  variant,
  buttonTitle,
  arrowVariant,
}) => {
  return (
    <div className={cn(styles.wrapper, styles[`wrapper--${variant}`])}>
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
