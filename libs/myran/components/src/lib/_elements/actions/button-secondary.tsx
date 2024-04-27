import { StyledButtonLink, StyledButtonSecondary } from './styled-actions'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  external?: boolean
}

export const ButtonSecondary: React.FC<Props> = ({
  children,
  href,
  onClick,
  external,
}) => {
  if (href) {
    if (external) {
      return (
        <StyledButtonLink href={href} rel="noreferrer noopener" target="_blank">
          {children}
        </StyledButtonLink>
      )
    } else {
      return <StyledButtonLink href={href}>{children}</StyledButtonLink>
    }
  } else if (onClick) {
    return (
      <StyledButtonSecondary onClick={onClick}>
        {children}
      </StyledButtonSecondary>
    )
  } else {
    return null
  }
}
