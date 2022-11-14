import * as React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import styles from "./CardSignUpItem.module.scss";

interface Props {
  title: string;
  buttonTitle: string;
}

export const CardSignUpItem: React.FC<Props> = ({ title, buttonTitle }) => {
  return (
    <div className={styles.wrapper}>
      <Typography className={styles.title}>{title}</Typography>
      <div className={styles.divider} />
      <TextField className={styles.input} placeholder="E-mail" type="email" />
      <Button className={styles.button} variant="text">
        {buttonTitle}
      </Button>
    </div>
  );
};
