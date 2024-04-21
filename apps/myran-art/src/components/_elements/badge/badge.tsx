import { StyledBadge } from './styled-badge'

interface Props {
  text?: string
}

export const Badge: React.FC<Props> = ({ text }) => {
  if (!text) return null

  return (
    <StyledBadge>
      <span>{text}</span>
    </StyledBadge>
  )
}
