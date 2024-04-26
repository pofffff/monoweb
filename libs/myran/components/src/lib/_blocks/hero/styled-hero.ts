import { breakpoints, colors, spacings } from 'styles'

import { getTextColor } from 'utils'
import styled from 'styled-components'

export const StyledHero = styled.div`
  width: 100%;
`

export const StyledInnerContainer = styled.div<{ background?: string }>`
  display: flex;
  flex-direction: column;
  /* padding-inline: ${spacings.M}; */

  @media screen and (min-width: ${breakpoints.desktop}) {
    display: grid;
    grid-template-columns: auto 450px;
    grid-template-rows: unset;
  }
`

interface HeroContentProps {
  background?: string
  $center: boolean
}

export const HeroContent = styled.div<HeroContentProps>`
  padding: ${spacings.S};
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ background }) => {
    if (!background) return
    const textColor = getTextColor(
      background,
      colors.contentLight,
      colors.contentDark,
    )
    return (
      background &&
      `
        background: ${background};
        color: ${textColor};
    `
    )
  }};

  ${({ $center }) =>
    $center &&
    `
        align-items: center;

    `};

  @media screen and (min-width: ${breakpoints.tablet}) {
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
  }
`
