import * as React from "react";

import { AppFooter } from "../../components/AppFooter";
import { MainSection } from "./components/MainSection";
import { ServicesSection } from "./components/ServicesSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { StatsSection } from "./components/StatsSection/StatsSection";
import { ProjectsSection } from "./components/ProjectsSection";

import styles from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <>
      <MainSection />

      <ServicesSection />

      <ReviewsSection />

      <StatsSection />

      <ProjectsSection />

      <AppFooter />
    </>
  );
};
