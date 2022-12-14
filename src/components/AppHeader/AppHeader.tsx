import * as React from "react";
import { Container } from "../Container";
import { ReactComponent as LogoIcon } from "../../assets/icons/Logo.svg";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import styles from "./AppHeader.module.scss";

export const AppHeader = () => {
  return (
    <Container>
      <AppBar
        color="transparent"
        position="static"
        elevation={0}
        className={styles.appBar}
      >
        <Toolbar style={{ padding: 0 }}>
          <Typography component="div" sx={{ flexGrow: 1, maxHeight: "100px" }}>
            <LogoIcon className={styles.logo} />
          </Typography>
          <FacebookIcon className={styles.icon} />
          <TwitterIcon className={styles.icon} />
          <ShoppingCartIcon className={styles.icon} />
          <IconButton edge="end" aria-label="menu" sx={{ p: 0 }}>
            <MenuIcon className={styles.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
