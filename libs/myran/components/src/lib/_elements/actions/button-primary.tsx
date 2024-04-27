import { colors } from 'styles'
import { StyledButtonLink, StyledButtonPrimary } from './styled-actions'
import { getBackgroundColor, getTextColor } from 'utils'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  external?: boolean
  backgroundColor?: string
}

export const ButtonPrimary: React.FC<Props> = ({
  children,
  href,
  onClick,
  external,
  backgroundColor,
}) => {
  const bgColor = getBackgroundColor(
    backgroundColor,
    colors.colorLight,
    colors.colorDark,
  )
  const textColor = getTextColor(bgColor, colors.colorLight, colors.colorDark)

  if (href) {
    if (external) {
      return (
        <StyledButtonLink
          $bgColor={bgColor}
          $textColor={textColor}
          href={href}
          rel="noreferrer noopener"
          target="_blank"
        >
          {children}
        </StyledButtonLink>
      )
    } else {
      return (
        <StyledButtonLink $bgColor={bgColor} $textColor={textColor} href={href}>
          {children}
        </StyledButtonLink>
      )
    }
  } else if (onClick) {
    return (
      <StyledButtonPrimary
        $bgColor={bgColor}
        $textColor={textColor}
        onClick={onClick}
      >
        {children}
      </StyledButtonPrimary>
    )
  } else {
    return null
  }
}
