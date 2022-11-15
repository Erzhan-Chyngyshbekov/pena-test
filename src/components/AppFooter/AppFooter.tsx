import * as React from "react";
import { Container } from "../Container";
import { makeStyles } from "@mui/styles";

import { AppColors } from "../../styles/common";
// import styles from "./AppFooter.module.scss";

const NAV_LIST = [
  "Services",
  "Our Works",
  "News & Events",
  "Work with us",
  "F.A.Q",
  "Contact us",
  "Shop",
];

export const AppFooter = () => {
  const styles = useStyles();

  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.copyright}>
          2015 © Copyright - Foundation theme by
          <span className={styles.span}> Stylemixthemes</span>
        </div>
        <ul className={styles.list}>
          {NAV_LIST.map((item, index) => (
            <li className={styles.item} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    minHeight: "80px",
    height: "100%",
    padding: "20px 0",
    "@media screen and (max-width: 900px)": {
      flexDirection: "column-reverse",
    },
  },
  copyright: {
    fontSize: "12px",
    fontWeight: "700",
    color: AppColors.TITLE_ACTIVE_3,
  },
  span: {
    color: AppColors.PRIMARY_BLUE,
    cursor: "pointer",
  },
  list: {
    display: "flex",
    fontSize: "12px",
    fontWeight: "700",
    color: AppColors.TITLE_ACTIVE_3,
    "@media screen and (max-width: 900px)": {
      marginRight: "auto",
      flexDirection: "column",
    },
  },
  item: {
    listStyleType: "none",
    margin: "0 15px",
    cursor: "pointer",
    "@media screen and (max-width: 900px)": {
      marginBottom: "20px",
    },
    "&:last-child": {
      marginRight: "0",
    },
    "&:nth-child(2)": {
      color: AppColors.PRIMARY_BLUE,
    },
  },
});
