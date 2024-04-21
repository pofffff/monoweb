import styled from 'styled-components'
import { colors, contentSpacing } from 'styles'

export const StyledBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.625rem;
  margin: ${contentSpacing.m};
  border-radius: 100px;
  background-color: ${colors.colorDark};
  color: ${colors.contentLight};
  text-transform: uppercase;

  span {
    font-size: 0.85rem;
  }
`
