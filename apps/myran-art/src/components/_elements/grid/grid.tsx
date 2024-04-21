import { StyledGrid, StyledGridProps } from './styled-grid'
import { gridSpacing } from 'styles'

import { HTMLAttributes } from 'react'

export interface Props extends StyledGridProps {
  children?: React.ReactNode
  className?: string
  style?: HTMLAttributes<HTMLDivElement>['style']
}

export type GridSpacing = keyof typeof gridSpacing

export const Grid: React.FC<Props> = ({
  children,
  className,
  style,
  $spacing = true,
}) => {
  return (
    <StyledGrid
      $spacing={$spacing}
      $maxColumns={'6'}
      className={className}
      style={style}
    >
      {children}
    </StyledGrid>
  )
}
