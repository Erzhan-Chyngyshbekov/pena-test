import * as React from "react";
import Grid from "@mui/material/Grid";

import { CardCarouselItem } from "../../../../components/CardCarouselItem";
import { CardItem } from "../../../../components/CardItem";
import { Container } from "../../../../components/Container";

import styles from "./SecvicesSection.module.scss";

export const ServicesSection = () => {
  return (
    <Container>
      <Grid container spacing={0}>
        <Grid item xs={6} md={3}>
          <CardItem
            title="OUR SERVICES"
            description="Our mission is to provide the highest level of service for our client-partners from concept through construction."
            arrowVariant="bottom"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <CardItem variant="empty" />
        </Grid>
        <Grid item xs={6} md={3}>
          <CardItem
            title="General Contracting"
            description="This allows the Design and Engineering team to originate drawings, specifications, structural calculations, details and scopes of work that deliver exactly what the client had intended to achieve. "
            arrowVariant="left"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <CardItem variant="empty" />
        </Grid>
        <Grid item xs={6} md={3}>
          <CardCarouselItem list={["01", "02", "03", "04", "05", "06"]} />
        </Grid>
        <Grid item xs={6} md={3}>
          <CardItem
            title="Project design and engineering"
            description="Through Stage-Gate, Design and Engineering methodology, DMCS ensure client-partners realize clearly defined project objective to achieve intended results."
            arrowVariant="right"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <CardItem variant="empty" />
        </Grid>
        <Grid item xs={6} md={3}>
          <CardItem
            title="Capital improvements"
            description="This results in scope creep and slippage of the schedule that ultimately result in additional costs to the owner."
            arrowVariant="top"
          />
        </Grid>
      </Grid>
    </Container>
  );
};
