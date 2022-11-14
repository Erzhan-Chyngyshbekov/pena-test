import * as React from "react";
import cn from "classnames";

import styles from "./CardButtonItem.module.scss";

interface Props {
  variant?: "yellow";
  title: string;
  icon: React.ReactNode;
}

export const CardButtonItem: React.FC<Props> = ({ variant, title, icon }) => {
  return (
    <div className={cn(styles.wrapper, styles[`wrapper--${variant}`])}>
      <div className={cn(styles.icon, styles[`icon--${variant}`])}>{icon}</div>
      <div className={cn(styles.title, styles[`title--${variant}`])}>
        {title}
      </div>
    </div>
  );
};
