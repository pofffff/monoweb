import {
  ButtonPrimary,
  HeadingH1,
  HeadingH2,
  Markdown,
  DynamicImage,
} from 'components'
import { HeroContent, StyledHero, StyledInnerContainer } from './styled-hero'

import { HeroBlockFragment } from 'types'
import { aspectRatios } from 'styles'

interface Props extends HeroBlockFragment {
  priority: boolean
  index: number
}

export const Hero: React.FC<Props> = ({
  center,
  description,
  title,
  subtitle,
  contentBackground,
  ctaLabel,
  ctaLink,
  desktopImage,
  tabletImage,
  mobileImage,
  priority,
  index,
}) => {
  const isH1 = index === 0
  return (
    <StyledHero>
      <StyledInnerContainer background={contentBackground?.hex}>
        <HeroContent $center={!!center} background={contentBackground?.hex}>
          <HeadingH1 isH1={isH1}>{title}</HeadingH1>
          <HeadingH2>{subtitle}</HeadingH2>
          <Markdown>{description}</Markdown>
          {ctaLink?.pageSlug && ctaLabel && (
            <ButtonPrimary
              backgroundColor={contentBackground?.hex}
              href={ctaLink.pageSlug}
            >
              {ctaLabel}
            </ButtonPrimary>
          )}
        </HeroContent>
        <DynamicImage
          priority={priority}
          aspectRatioMobile={aspectRatios.heroMobile}
          aspectRatioTablet={aspectRatios.heroTablet}
          aspectRatioDesktop={aspectRatios.heroDesktop}
          mobileImage={mobileImage}
          tabletImage={tabletImage}
          desktopImage={desktopImage}
          sizes="(min-width: 1025px) 920px, (max-width: 1024px) 450px"
        />
      </StyledInnerContainer>
    </StyledHero>
  )
}
