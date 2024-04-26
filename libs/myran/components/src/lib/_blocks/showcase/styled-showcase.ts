import styled from 'styled-components'
import { breakpoints, spacings } from 'styles'

interface StyledShowcaseProps {
  background?: string
  $left: boolean
}

export const StyledShowcase = styled.div<StyledShowcaseProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-block-start: ${spacings.S};

  padding: 0;
  background: ${({ background }) => background ?? 'none'};

  @media screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;

    div:first-child {
      margin-inline-end: ${spacings.S};

      ${({ $left }) => $left && `margin-inline-start: ${spacings.S};`}
    }

    ${({ $left }) => $left && `flex-direction: row-reverse;`}

    > * {
      flex: 1;
    }
  }
`
export const StyledShowcaseContent = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${breakpoints.tablet}) {
    /* padding: ${spacings.S}; */
  }
`
