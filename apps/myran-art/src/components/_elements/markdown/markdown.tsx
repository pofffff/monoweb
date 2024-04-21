import { StyledMarkDown } from './styled-markdown'

interface Props {
  children?: string | null
  center?: boolean
}

export const Markdown: React.FC<Props> = ({ center, children }) => {
  // const preprocessMarkdown = (markdown) => markdown?.replace(/\n/g, '\n\n') ?? ''

  return (
    <StyledMarkDown $center={!!center} options={{ forceBlock: true }}>
      {children ?? ''}
    </StyledMarkDown>
  )
}
