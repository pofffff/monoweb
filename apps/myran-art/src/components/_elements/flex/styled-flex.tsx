import { Props } from './flex'
import styled from 'styled-components'

export const StyledFlex = styled.div<Props>`
  align-items: ${({ align }) => align};
  display: flex;
`
