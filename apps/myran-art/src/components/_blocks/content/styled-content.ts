import styled from 'styled-components'

interface StyledContentProps {
  $center: boolean
}
export const StyledContent = styled.div<StyledContentProps>`
  display: flex;

  ${({ $center }) =>
    $center &&
    `
    justify-content: center;
`}
`
