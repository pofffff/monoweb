import Link from 'next/link'
import styled from 'styled-components'
import { colors, spacings } from 'styles'

export const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const StyledTopHeader = styled.div`
  display: flex;
  color: ${colors.colorDark};
  border-right: 1px solid ${colors.colorDark};
  margin-inline-start: 5rem;
  margin-block-start: 3rem;
`
export const StyledLogoLink = styled(Link)`
  width: 20px;
  height: 20px;

  svg {
    width: 100%;
    height: 100%;
  }
`
export const StyledHeading = styled(Link)`
  display: flex;
  justify-content: center;

  &:hover {
    text-decoration: none;
  }
`

export const StyledNav = styled.nav`
  display: flex;
  /* width: 100%; */
  margin-inline: auto;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${colors.grey__400};
  padding-block-end: 1rem;
  padding-inline: 2.75rem;
`

export const StyledNavItem = styled(Link)`
  padding: 0.5rem;
  margin-inline: 1.5rem;
`
