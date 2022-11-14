import * as React from "react";
import Grid from "@mui/material/Grid";
import BoltIcon from "@mui/icons-material/Bolt";
import OpacityIcon from "@mui/icons-material/Opacity";
import SettingsIcon from "@mui/icons-material/Settings";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

import { Container } from "../../../../components/Container";
import { CardNewsItem } from "../../../../components/CardNewsItem";
import { CardReviewItem } from "../../../../components/CardReviewItem";
import { CardStatsItem } from "../../../../components/CardStatsItem";

import styles from "./StatsSection.module.scss";

export const StatsSection = () => {
  return (
    <Container>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={6}>
          <CardReviewItem
            variant="yellow"
            list={[
              {
                author: "Tony SH. Schults",
                review:
                  " When selecting DMCS as the design-build team, clients benefit in terms of efficiency and continuity that translate into cost savings and optimized schedules. Contact us today and see how DMCS can best serve you from concept-through-construction.",
              },
              {
                author: "Tony SH. Schults",
                review:
                  " When selecting DMCS as the design-build team, clients benefit in terms of efficiency and continuity that translate into cost savings and optimized schedules. Contact us today and see how DMCS can best serve you from concept-through-construction.",
              },
            ]}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardStatsItem
            icon={<BoltIcon />}
            count={55000}
            title="Expert Witness"
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardStatsItem
            variant="empty"
            icon={<OpacityIcon />}
            count={124600}
            title="Constructions"
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardNewsItem
            list={[
              {
                title: "NEWS",
                date: "12 february, 2015",
                description: "Project Design and Engineering Services",
                commentsCount: 23,
              },
              {
                title: "NEWS",
                date: "12 february, 2015",
                description: "Project Design and Engineering Services",
                commentsCount: 23,
              },
              {
                title: "NEWS",
                date: "12 february, 2015",
                description: "Project Design and Engineering Services",
                commentsCount: 23,
              },
            ]}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardReviewItem
            list={[
              {
                author: "David Mc. Adams",
                review:
                  "In most urban areas, construction has already built existing structures, many having been standing for decades.",
              },
            ]}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardStatsItem
            variant="empty"
            icon={<SettingsIcon />}
            count={18000}
            title="Procurement"
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardStatsItem
            icon={<LightbulbIcon />}
            count={78150}
            title="Project Managments"
          />
        </Grid>
      </Grid>
    </Container>
  );
};
