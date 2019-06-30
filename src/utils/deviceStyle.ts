import { css, FlattenSimpleInterpolation } from "styled-components";

export const desktop = (style: any): FlattenSimpleInterpolation => css`
  @media (min-width: 992px) {
    ${style};
  }
`;

export const tablet = (style: any): FlattenSimpleInterpolation => css`
  @media (min-width: 768px) {
    ${style};
  }
`;

export const onlyMobile = (style: any): FlattenSimpleInterpolation => css`
  @media (max-width: 767px) {
    ${style};
  }
`;
