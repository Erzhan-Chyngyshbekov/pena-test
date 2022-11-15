import * as React from "react";
import Grid from "@mui/material/Grid";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { makeStyles } from "@mui/styles";

import { AppColors } from "../../../../styles/common";
import { AppHeader } from "../../../../components/AppHeader";
import { CardButtonItem } from "../../../../components/CardButtonItem";
import { CardCarouselItem } from "../../../../components/CardCarouselItem";
import { CardItem } from "../../../../components/CardItem";
import { Container } from "../../../../components/Container";

export const MainSection = () => {
  const styles = useStyles();

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
            <CardButtonItem title="COMPANY VIDEO" icon={<PlayCircleIcon />} />
          </Grid>
          <Grid item md={3} className={styles.empty} />
        </Grid>
      </Container>
    </section>
  );
};

const useStyles = makeStyles({
  main: {
    width: "100%",
    minHeight: "900px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: `linear-gradient(to right, ${AppColors.PRIMARY_GRAY} calc(100% / 2 + 300px), ${AppColors.PRIMARY_GRAY_2} calc(100% / 2 - 300px))`,
    "@media screen and (max-width: 1200px)": {
      background: `linear-gradient(to right, ${AppColors.PRIMARY_GRAY} 75%, ${AppColors.PRIMARY_GRAY_2} 25%)`,
    },
    "@media screen and (max-width: 900px)": {
      background: `linear-gradient(to right, ${AppColors.PRIMARY_GRAY} 50%, ${AppColors.PRIMARY_GRAY_2} 50%)`,
    },
  },
  empty: {
    "@media screen and (max-width: 900px)": {
      display: "none",
    },
  },
});
