import { StyledHeadingH2, StyledHeadingH3 } from './styled-heading'

interface Props {
  children: React.ReactNode
}
export const HeadingH3: React.FC<Props> = ({ children }) => {
  return <StyledHeadingH3>{children}</StyledHeadingH3>
}
