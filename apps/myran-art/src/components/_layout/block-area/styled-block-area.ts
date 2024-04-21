import styled from 'styled-components'
import { spacings } from 'styles'

export const StyledBlockArea = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-inline: ${spacings.M}; */

  > * {
    padding-block-start: ${spacings.L};
  }

  > *:last-child {
    padding-block-end: ${spacings.L};
  }
`
