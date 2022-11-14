import * as React from "react";
import Grid from "@mui/material/Grid";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import { CardButtonItem } from "../../../../components/CardButtonItem";
import { CardCarouselItem } from "../../../../components/CardCarouselItem";
import { CardItem } from "../../../../components/CardItem";
import { Container } from "../../../../components/Container";

import styles from "./MainSection.module.scss";
import { AppHeader } from "../../../../components/AppHeader";

export const MainSection = () => {
  return (
    <section className={styles.main}>
      <AppHeader />
      <Container>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6} sm={12}>
            <CardItem
              variant="yellow"
              title="BUILDING THE WORLD AROUND US"
              description="Still other clients have reserved for capital improvement projects and will work directly with our Design and Engineering team."
              buttonTitle="READ MORE"
            />
          </Grid>
          <Grid item md={3} className={styles.empty} />
          <Grid item xs={6} md={3} sm={6}>
            <CardCarouselItem list={["01", "02", "03"]} />
          </Grid>
          <Grid item md={6} className={styles.empty} />
          <Grid item xs={6} md={3} sm={6}>
            <CardButtonItem title="COMPANY VIDEO" icon={<PlayArrowIcon />} />
          </Grid>
          <Grid item md={3} className={styles.empty} />
        </Grid>
      </Container>
    </section>
  );
};
