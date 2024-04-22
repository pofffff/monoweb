import styled from 'styled-components';
import {
  breakpoints, contentSpacing,
} from 'styles';

export interface StyledGridProps {
  $maxColumns?: string;
  $spacing?: boolean;
}
export const StyledGrid = styled.div<StyledGridProps>`
  display: grid;
  grid-template-columns: 1fr;

  ${({ $spacing }) => $spacing && `grid-gap: ${contentSpacing.l};`}
  /* gap: ${(spacing) => (spacing ? contentSpacing.m : '0')}; */

  @media screen and (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and(min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(
      ${({ $maxColumns }) => $maxColumns || 'auto-fill'},
      minmax(0, 1fr)
    );
  }
`;
