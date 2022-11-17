import * as React from "react";
import Grid from "@mui/material/Grid";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

import { Container } from "../../../../components/Container";
import { CardButtonItem } from "../../../../components/CardButtonItem";
import { CardCarouselItem } from "../../../../components/CardCarouselItem";
import { CardItem } from "../../../../components/CardItem";
import { CardSignUpItem } from "../../../../components/CardSignUpItem";

import styles from "./ProjectsSection.module.scss";

export const ProjectsSection = () => {
  return (
    <Container>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} md={3}>
          <CardItem
            variant="long"
            title="Contemporary Villa"
            description="Diversity is a buzzword often heard by brand managers, business tycoons, politicians, and more; but it's much more than that. To us at DM Construction, diversity is the name of the game. We offer a diverse set of skills to all clients in all fields, but also offer a diverse group of individuals who are able to deliver those skills."
            buttonTitle="VIEW PROJECT"
          />
        </Grid>
        <Grid item container xs={12} sm={6} md={6}>
          <Grid className={styles.empty} item xs={6} md={6} />
          <Grid className={styles.empty} item xs={6} md={6} />
          <Grid className={styles.empty} item xs={6} md={6} />
          <Grid item xs={6} sm={12} md={6}>
            <CardCarouselItem
              list={["01", "02", "03", "04", "05", "06", "07", "08", "09"]}
            />
          </Grid>
        </Grid>
        <Grid item container md={3}>
          <Grid item xs={6} sm={6} md={12}>
            <CardButtonItem
              variant="yellow"
              icon={<SettingsSuggestIcon />}
              title="WORK WITH US"
            />
          </Grid>
          <Grid item xs={6} sm={6} md={12}>
            <CardSignUpItem title="SUBSCRIBE" buttonTitle="SIGN UP" />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
