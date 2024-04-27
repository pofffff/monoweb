import { StyledFlex } from './styled-flex'

export interface Props {
  children?: React.ReactNode
  className?: string
  align?: 'stretch' | 'center' | 'start' | 'end' | 'baseline'
}
export const Flex: React.FC<Props> = ({
  children,
  align = 'stretch',

  className,
}) => {
  return (
    <StyledFlex align={align} className={className}>
      {children}
    </StyledFlex>
  )
}
