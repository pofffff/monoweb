import { NavItemFragment, SiteFragment } from 'types'
import {
  StyledHeader,
  StyledHeading,
  StyledLogoLink,
  StyledNav,
  StyledNavItem,
  StyledTopHeader,
} from './styled-header'
import { HeadingH2 } from 'components/_elements'

interface Props {
  menu: NavItemFragment[]
  site: SiteFragment
}

export const Header: React.FC<Props> = ({ menu, site }) => {
  return (
    <StyledHeader>
      <StyledTopHeader>
        {/* <StyledLogoLink href={'/'}>
          <LogoSvg />
        </StyledLogoLink> */}
        <StyledHeading href={'/'}>
          <HeadingH2>{site.globalSeo?.siteName}</HeadingH2>
        </StyledHeading>
      </StyledTopHeader>

      <StyledNav>
        {menu.map((item) => {
          return (
            (item?.pageLink || item?.url) && (
              <StyledNavItem key={item.id} href={`/${item.pageLink?.pageSlug}`}>
                {item.title}
              </StyledNavItem>
            )
          )
        })}
      </StyledNav>
    </StyledHeader>
  )
}
