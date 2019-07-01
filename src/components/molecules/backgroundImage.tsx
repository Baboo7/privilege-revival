import BackgroundImage, { IFluidObject } from "gatsby-background-image";
import React from "react";
import styled, { css } from "styled-components";

import { colors, fontSizes } from "../../theme";
import { onlyMobile, tablet } from "../../utils/deviceStyle";

interface IProps {
  className?: string;
  fluid?: IFluidObject | [IFluidObject];
  overlayColor?: string;
  title?: string | null;
}

export default ({
  className,
  fluid,
  overlayColor = "transparent",
  title = null,
}: IProps) => (
  <BackgroundImageStyled className={className} fluid={fluid}>
    <Overlay color={overlayColor} />
    {title !== null && <Title>{title}</Title>}
  </BackgroundImageStyled>
);

const BackgroundImageStyled = styled(BackgroundImage)`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

interface IOverlay {
  color: string;
}

const Overlay = styled.div<IOverlay>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ color }: IOverlay) => color};
  opacity: 0.4;
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${colors.white};
  font-family: Arial;
  letter-spacing: 0.5em;
  text-shadow: 5px 5px 5px ${colors.black};

  ${onlyMobile(css`
    font-size: ${fontSizes.mobile.title};
  `)}

  ${tablet(css`
    font-size: ${fontSizes.desktop.title};
  `)}
`;
