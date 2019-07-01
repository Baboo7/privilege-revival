import React from "react";

import { SEO } from "../components/atoms";
import { Footer, HeroSection } from "../components/organisms";

const IndexPage = () => (
  <>
    <SEO
      title="Home"
      keywords={[
        `privilege`,
        `musique`,
        `rock`,
        `années 80`,
        `baccara`,
        `le coup du voile`,
        `couleurs`,
        `absence`,
        `silence on tourne`,
        `les joies de l'ivresse`,
        `silence`,
        `tourne`,
        `joies`,
        `ivresse`,
        `renaissance`,
        `revival`,
        `music`,
        `80's`,
      ]}
    />
    <HeroSection />
    <Footer />
  </>
);

export default IndexPage;
