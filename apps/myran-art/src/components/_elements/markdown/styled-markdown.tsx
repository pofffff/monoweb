import Markdown from 'markdown-to-jsx'
import { spacings } from 'styles'
import styled from 'styled-components'

interface MarkdownProps {
  $center: boolean
  children?: string | null
}

export const StyledMarkDown = styled(Markdown)<MarkdownProps>`
  max-width: 100%;
  a {
    text-decoration: none;
    text-decoration: underline;
    &:hover {
    }
  }

  > * {
    margin-block-end: ${spacings.XS};

    ${({ $center }) =>
      $center &&
      `
      text-align: center;
    `}
  }
`
