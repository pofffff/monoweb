import { boxShadow, buttonSizes, colors, borderRadius, spacings } from 'styles'
import styled, { css } from 'styled-components'

import Link from 'next/link'
import { getBackgroundColor, getTextColor } from 'utils'

const buttonStyles = css`
  cursor: pointer;
  padding: ${buttonSizes.verticalS} ${buttonSizes.horizontalS};
  display: inline-block;
  width: auto;
  align-self: start;
  /* border: 1px solid ${colors.backgroundPrimary}; */
  box-shadow: ${boxShadow.button};
  border-radius: ${borderRadius.button};
  margin-block-start: ${spacings.XS};
`
interface StyledButtonProps {
  $bgColor?: string
  $textColor?: string
}
export const StyledButtonLink = styled(Link)<StyledButtonProps>`
  ${buttonStyles}

  ${({ $bgColor, $textColor }) => {
    // $bgColor &&
    if (!$bgColor) {
      $bgColor = colors.backgroundPrimary
    }
    if (!$textColor) {
      $textColor = colors.colorDark
    }
    return `
        background: ${$bgColor};
        color: ${$textColor}


    `
  }};
`

export const StyledButtonPrimary = styled.button<
  StyledButtonProps,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>`
  ${buttonStyles}
  ${({ $bgColor, $textColor }) =>
    // $bgColor &&
    `
        background: ${$bgColor};
        color: ${$textColor}


    `};
`

export const StyledButtonSecondary = styled.button<
  StyledButtonProps,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>`
  ${buttonStyles}
  ${({ $bgColor, $textColor }) =>
    // $bgColor &&
    `
        background: ${$bgColor};
        color: ${$textColor}


    `};
`

export const StyledLink = styled(Link)``
