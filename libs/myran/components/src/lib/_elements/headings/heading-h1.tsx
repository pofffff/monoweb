import { StyledHeadingH1, StyledHeadingH2ASH1 } from './styled-heading'

interface Props {
  children: React.ReactNode
  isH1?: boolean
}
export const HeadingH1: React.FC<Props> = ({ children, isH1 }) => {
  if (isH1) {
    return <StyledHeadingH1>{children}</StyledHeadingH1>
  }

  return <StyledHeadingH2ASH1>{children}</StyledHeadingH2ASH1>
}
