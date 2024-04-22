import { HTMLAttributes } from 'react';

import { gridSpacing } from 'styles';

import {
  StyledGrid, StyledGridProps,
} from './styled-grid';

export interface Props extends StyledGridProps {
  children?: React.ReactNode;
  className?: string;
  style?: HTMLAttributes<HTMLDivElement>['style'];
}

export type GridSpacing = keyof typeof gridSpacing;

export const Grid: React.FC<Props> = ({
  children,
  className,
  style,
  $spacing = true,
}) => {
  return (
    <StyledGrid
      $maxColumns="6"
      $spacing={$spacing}
      className={className}
      style={style}
    >
      {children}
    </StyledGrid>
  );
};
