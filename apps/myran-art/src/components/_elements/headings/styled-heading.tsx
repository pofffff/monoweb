import { breakpoints, fontSizes, sizes } from 'styles'
import styled, { css } from 'styled-components'

interface HeadingProps {}

const baseHeadingStyle = () => {
  return css`
    @include heading-style($font-size-h1, $color-content-primary);
    margin-block: ${sizes.s};
    font-weight: 400;
  `
}

export const StyledHeadingH1 = styled.h1<HeadingProps>`
  ${baseHeadingStyle}
  font-size: calc(${fontSizes.h1} - 0.5rem);

  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: ${fontSizes.h1};
  }
`

export const StyledHeadingH2ASH1 = styled.h2<HeadingProps>`
  ${baseHeadingStyle}
  font-size: calc(${fontSizes.h1} - 1rem);

  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: ${fontSizes.h1};
  }
`

export const StyledHeadingH2 = styled.h2<HeadingProps>`
  ${baseHeadingStyle}
  font-size: calc(${fontSizes.h2} - 0.5rem);

  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: ${fontSizes.h2};
  }
`

export const StyledHeadingH3 = styled.h2<HeadingProps>`
  ${baseHeadingStyle}
  font-size: calc(${fontSizes.h3} - 0.5rem);

  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: ${fontSizes.h2};
  }
`
