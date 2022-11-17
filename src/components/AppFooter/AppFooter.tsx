import * as React from "react";
import { Container } from "../Container";

import styles from "./AppFooter.module.scss";

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
  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.copyright}>
          2015 © Copyright - Foundation theme by
          <span> Stylemixthemes</span>
        </div>
        <ul className={styles.list}>
          {NAV_LIST.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
