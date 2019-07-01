import { css, FlattenSimpleInterpolation } from "styled-components";

export const desktop = (style: any): FlattenSimpleInterpolation => css`
  @media (min-width: 1025px) {
    ${style};
  }
`;

export const belowTablet = (style: any): FlattenSimpleInterpolation => css`
  @media (max-width: 1024px) {
    ${style};
  }
`;
