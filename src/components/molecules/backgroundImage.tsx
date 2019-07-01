import BackgroundImage, { IFluidObject } from "gatsby-background-image";
import React from "react";
import styled from "styled-components";

interface IProps {
  className?: string;
  fluid?: IFluidObject | [IFluidObject];
  overlayColor?: string;
}

export default ({ className, fluid, overlayColor = "transparent" }: IProps) => (
  <BackgroundImageStyled className={className} fluid={fluid}>
    <Overlay color={overlayColor} />
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
