import React from 'react'
import { StyledLink } from './styled-actions'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
  external?: boolean
}

export const Link: React.FC<Props> = ({ external, href, children }) => {
  if (external) {
    return (
      <StyledLink href={href} rel="noreferrer noopener" target="_blank">
        {children}
      </StyledLink>
    )
  }

  return <StyledLink href={href}>{children}</StyledLink>
}
