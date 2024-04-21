import Link from 'next/link'
import { contentSpacing } from 'styles'
import styled from 'styled-components'

export const StyledCard = styled.div``

interface SplitCardProps {
  spacing?: boolean
  shadow?: boolean
  backgroundColor?: string
}
export const StyledStackedCard = styled(Link)<SplitCardProps>`
  display: flex;
  flex-direction: column;

  ${({ backgroundColor }) => {
    return backgroundColor && `background-color: ${backgroundColor};`
  }}
`

export const ContentWrapper = styled.div<SplitCardProps>`
  display: grid;
  grid-template-rows: auto 1fr;

  ${({ backgroundColor }) =>
    backgroundColor && `margin-inline: ${contentSpacing.m}; `}
`

export const CardTitle = styled.h3`
  grid-row: 1;
  margin-block: ${contentSpacing.m};
`

export const CardDescription = styled.p`
  grid-row: 2;
  align-self: start;
`

export const StyledOverlayCard = styled(Link)`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const StyledOverlayContent = styled.div`
  position: absolute;
  padding: ${contentSpacing.m};
  bottom: 0;
  left: 0;
`

export const StyledCardImage = styled.div`
  position: relative;
`

export const StyledSold = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`
