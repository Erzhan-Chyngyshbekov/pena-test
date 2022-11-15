import * as React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

import { AppColors } from "../../styles/common";

// import styles from "./CardSignUpItem.module.scss";

interface Props {
  title: string;
  buttonTitle: string;
}

export const CardSignUpItem: React.FC<Props> = ({ title, buttonTitle }) => {
  const styles = useStyles();

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

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    height: "300px",
    padding: "30px",
    background: AppColors.PRIMARY_BLUE,
    color: "white",
  },
  title: {
    fontSize: "28px",
    "@media screen and (max-width: 900px)": { fontSize: "20px" },
  },
  divider: {
    height: "5px",
    width: "40px",
    margin: "20px 0",
    background: "white",
  },
  input: {
    display: "flex",
    justifyContent: "center",
    height: "48px",
    marginTop: "30px",
    background: "white",
    "& fieldset": {
      color: AppColors.PRIMARY_BLUE,
      border: "0",
      borderRadius: "0",
    },
  },
  button: {
    marginLeft: "auto !important",
    marginTop: "auto !important",
    color: "white !important",
  },
});
