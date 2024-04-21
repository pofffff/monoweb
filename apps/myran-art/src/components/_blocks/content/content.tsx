import { Markdown } from 'components/_elements'
import { ContentBlockFragment } from 'types'
import { StyledContent } from './styled-content'

interface Props extends ContentBlockFragment {}

export const Content: React.FC<Props> = ({ center, text }) => {
  return (
    <StyledContent $center={!!center}>
      <Markdown center={!!center}>{text}</Markdown>
    </StyledContent>
  )
}
