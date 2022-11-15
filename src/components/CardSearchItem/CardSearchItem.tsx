import * as React from "react";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";

// import styles from "./CardSearchItem.module.scss";

export const CardSearchItem = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <FormControl fullWidth variant="standard">
        <InputLabel
          className={styles.label}
          htmlFor="input-with-icon-adornment"
        >
          What you're looking for
        </InputLabel>
        <Input
          id="standard-basic"
          className={styles.input}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon className={styles.icon} />
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};

const useStyles = makeStyles({
  wrapper: {
    height: "300px",
    padding: "30px",
    display: "flex",
    alignItems: "center",
    background: "transparent",
  },
  label: { color: "white" },
  input: {
    padding: "5px 0",
    borderBottom: "1px solid white",
  },
  icon: { color: "white" },
});
