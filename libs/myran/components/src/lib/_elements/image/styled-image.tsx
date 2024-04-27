import styled from 'styled-components'
import { breakpoints } from 'styles'

interface StyledImageProps {
  $aspectRatio?: string
}

export const StyledMobileImage = styled.div<StyledImageProps>`
  position: relative;
  aspect-ratio: 16/9;
  width: 100%;

  ${({ $aspectRatio }) =>
    $aspectRatio &&
    `
        aspect-ratio: ${$aspectRatio};
    `};

  @media screen and (min-width: ${breakpoints.tablet}) {
    display: none;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`

export const StyledTabletImage = styled.div<StyledImageProps>`
  position: relative;
  aspect-ratio: 16/9;
  width: 100%;
  display: none;

  ${({ $aspectRatio }) =>
    $aspectRatio &&
    `
        aspect-ratio: ${$aspectRatio};
    `};

  @media screen and (min-width: ${breakpoints.tablet}) {
    display: block;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`

export const StyledDesktopImage = styled.div<StyledImageProps>`
  position: relative;
  aspect-ratio: 16/9;
  width: 100%;
  display: none;

  ${({ $aspectRatio }) =>
    $aspectRatio &&
    `
        aspect-ratio: ${$aspectRatio};
    `};

  @media screen and (min-width: ${breakpoints.desktop}) {
    display: block;
  }
`

export const StyledImage = styled.div<StyledImageProps>`
  position: relative;
  aspect-ratio: 16/9;
  width: 100%;

  ${({ $aspectRatio }) =>
    $aspectRatio &&
    `
        aspect-ratio: ${$aspectRatio};
    `};
`
