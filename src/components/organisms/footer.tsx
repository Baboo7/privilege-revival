import React from "react";
import styled, { css } from "styled-components";

import { colors, fontSizes } from "../../theme";
import { tablet } from "../../utils/deviceStyle";

const Footer = () => (
  <Wrapper>
    <Copyright>©2019 Privilege All rights reserved.</Copyright>
  </Wrapper>
);

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  box-sizing: border-box;
  padding: 20px;
  background-color: ${colors.darkslategray};
`;

const Copyright = styled.p`
  color: ${colors.white};
  font-size: ${fontSizes.mobile.text};

  ${tablet(
    css`
      font-size: ${fontSizes.desktop.text};
    `
  )}
`;

export default Footer;
