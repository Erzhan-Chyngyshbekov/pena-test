import * as React from "react";
import cn from "classnames";

import styles from "./CardStatsItem.module.scss";

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
  return (
    <div className={cn(styles.wrapper, styles[`wrapper--${variant}`])}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.count}>{count.toLocaleString()}</div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};
