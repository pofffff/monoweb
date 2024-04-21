import styled from 'styled-components'
import { spacings } from 'styles'

export const StyledPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: ${spacings.pageMaxWidth};
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  /* padding-inline: ${spacings.S}; */
`
