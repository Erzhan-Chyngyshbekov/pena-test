import * as React from "react";
import Grid from "@mui/material/Grid";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { makeStyles } from "@mui/styles";

import { AppColors } from "../../../../styles/common";
import { CardButtonItem } from "../../../../components/CardButtonItem";
import { CardItem } from "../../../../components/CardItem";
import { CardReviewItem } from "../../../../components/CardReviewItem";
import { CardSearchItem } from "../../../../components/CardSearchItem";
import { Container } from "../../../../components/Container";

export const ReviewsSection = () => {
  const styles = useStyles();

  return (
    <>
      <section className={styles.section}>
        <Container>
          <Grid container spacing={0}>
            <Grid item xs={6} md={3} sm={6}>
              <CardButtonItem
                variant="yellow"
                title="DOWNLOAD PRICE"
                icon={<PictureAsPdfOutlinedIcon />}
              />
            </Grid>
            <Grid item xs={6} md={3} sm={6}>
              <CardButtonItem
                title="CONTACT US"
                icon={<ExpandCircleDownIcon />}
              />
            </Grid>
            <Grid item xs={12} md={6} sm={12}>
              <CardSearchItem />
            </Grid>
          </Grid>
        </Container>
      </section>

      <Container>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6} sm={12}>
            <CardReviewItem
              list={[
                {
                  author: "Martin H. Jhonsons",
                  review:
                    "Together, we'll couple our knowledge, expertise, and innovative capabilities with your astute knowledge of your business—to maximize and optimize results. This is all accomplished in a number of ways.",
                },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <CardItem
              variant="gray"
              title="YOUR BUILDING IS IN GOOD HANDS"
              description="Our mission is to provide the highest level of service for our client-partners from concept through construction."
              buttonTitle="ABOUT COMPANY"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const useStyles = makeStyles({
  section: {
    width: "100%",
    background: `linear-gradient(to right, transparent 50%, ${AppColors.PRIMARY_GRAY_2} 50%)`,
    "@media screen and (max-width: 900px)": {
      background: `${AppColors.PRIMARY_GRAY_2}`,
    },
  },
});
