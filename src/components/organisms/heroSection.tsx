import { StaticQuery, graphql } from "gatsby";
import React from "react";
import styled, { css } from "styled-components";

import { colors } from "../../theme";
import { onlyMobile, tablet } from "../../utils/deviceStyle";
import { BackgroundImage } from "../molecules";
import { IFluid } from "../types";

interface IData {
  file: IFluid;
}

const HeroSection = () => (
  <StaticQuery
    query={graphql`
      query {
        file(base: { eq: "privilege.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data: IData) => (
      <Wrapper>
        <BackgroundImageStyled
          fluid={data.file.childImageSharp.fluid}
          title="Privilège"
        />
        <Content>
          <Title>Privilege</Title>
        </Content>
      </Wrapper>
    )}
  />
);

export default HeroSection;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100vh;
  min-height: 100vh;
  background-color: ${colors.white};

  ${tablet(css`
    flex-direction: row;
  `)}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;
  box-sizing: border-box;
  padding: 10px 30px;
  padding-top: 80px;
  color: ${colors.white};

  ${onlyMobile(css`
    max-height: 55vh;
  `)}

  ${tablet(css`
    max-width: 50%;
    padding: 80px 60px 20px 60px;
  `)}
`;

const Title = styled.h1`
  color: ${colors.white};

  ${onlyMobile(css`
    font-size: ${fontSizes.mobile.title};
  `)}

  ${tablet(css`
    font-size: ${fontSizes.desktop.title};
  `)}
`;

const BackgroundImageStyled = styled(BackgroundImage)`
  flex-grow: 1;

  ${tablet(css`
    max-width: 50%;
  `)}
`;
