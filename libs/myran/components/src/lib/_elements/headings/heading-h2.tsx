import { StyledHeadingH2 } from './styled-heading'

interface Props {
  children: React.ReactNode
}
export const HeadingH2: React.FC<Props> = ({ children }) => {
  return <StyledHeadingH2>{children}</StyledHeadingH2>
}
