import Link from 'next/link'
import styled from 'styled-components'
import { breakpoints, spacings } from 'styles'
import { ListSize } from 'types'

interface StyledListProps {
  size: ListSize
}

function getWidth(size: ListSize) {
  switch (size) {
    case 'big':
      return '350px'
    case 'regular':
      return '200px'
    case 'small':
      return '100px'
  }
}

export const StyledList = styled.div<StyledListProps>`
  /* padding-inline: ${spacings.S}; */
`

export const StyledVerticalList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  gap: ${spacings.S};

  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    /* grid-template-columns: 1fr 1fr;
    grid-auto-rows: calc(50vh - 50px); */
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
  }
`
export const StyledListItem = styled.div<StyledListProps>`
  flex: 0 0 auto;
  scroll-snap-align: start;
  width: auto;
  ${({ size }) => `width: ${getWidth(size)};`}

  > * {
    text-align: center;
  }
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
