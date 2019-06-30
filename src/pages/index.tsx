import React from "react";

import { SEO } from "../components/atoms";
import { Footer, HeroSection } from "../components/organisms";

const IndexPage = () => (
  <>
    {/* TODO: Optimize SEO */}
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HeroSection></HeroSection>
    <Footer />
  </>
);

export default IndexPage;
