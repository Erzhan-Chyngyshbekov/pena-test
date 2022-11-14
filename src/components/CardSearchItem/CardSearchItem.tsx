import * as React from "react";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import styles from "./CardSearchItem.module.scss";

export const CardSearchItem = () => {
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
