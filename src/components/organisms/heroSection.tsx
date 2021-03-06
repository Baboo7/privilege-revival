import { StaticQuery, graphql } from "gatsby";
import React, { PureComponent } from "react";
import styled, { css } from "styled-components";

import { colors } from "../../theme";
import { belowTablet, desktop } from "../../utils/deviceStyle";
import { AudioPlayer, BackgroundImage } from "../molecules";
import { IFluid } from "../types";

interface IData {
  file: IFluid;
}

interface IProps {
  onMusicChanged: (musicTitle: string) => void;
}

export default class HeroSection extends PureComponent<IProps> {
  render() {
    const { onMusicChanged } = this.props;

    return (
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
              overlayColor={colors.darkslateblue}
              title="Privilège"
            />
            <Content>
              <AudioPlayer onMusicChanged={onMusicChanged} />
            </Content>
          </Wrapper>
        )}
      />
    );
  }
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100vh;
  min-height: 100vh;
  background-color: ${colors.white};

  ${desktop(css`
    flex-direction: row;
  `)}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;
  box-sizing: border-box;
  color: ${colors.white};

  ${belowTablet(css`
    max-height: 55vh;
  `)}

  ${desktop(css`
    max-width: 50%;
    padding: 80px 60px 20px 60px;
  `)}
`;

const BackgroundImageStyled = styled(BackgroundImage)`
  flex-grow: 1;

  ${desktop(css`
    max-width: 50%;
  `)}
`;
