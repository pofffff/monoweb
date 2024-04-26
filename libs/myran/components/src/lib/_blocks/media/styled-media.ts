import styled from 'styled-components'
import { breakpoints, spacings } from 'styles'

interface StyledMediaProps {
  $big: boolean
}
export const StyledMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const StyledInnerContainer = styled.div<StyledMediaProps>`
  width: 100%;
  /* width: 100%; */
  ${({ $big }) =>
    !$big &&
    `
    width: 250px;
    `}

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 600px;
    flex-direction: row;

    ${({ $big }) =>
      !$big &&
      `
    width: 400px;
    `}
  }
`
