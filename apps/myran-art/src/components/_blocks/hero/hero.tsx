import {
  ButtonPrimary,
  DynamicImage,
  HeadingH1,
  HeadingH2,
  Markdown,
} from 'components';
import { aspectRatios } from 'styles';
import { HeroBlockFragment } from 'types';

import {
  HeroContent, StyledHero, StyledInnerContainer,
} from './styled-hero';

interface Props extends HeroBlockFragment {
  priority: boolean;
  index: number;
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
  const isH1 = index === 0;
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
          aspectRatioDesktop={aspectRatios.heroDesktop}
          aspectRatioMobile={aspectRatios.heroMobile}
          aspectRatioTablet={aspectRatios.heroTablet}
          desktopImage={desktopImage}
          mobileImage={mobileImage}
          priority={priority}
          sizes="(min-width: 1025px) 920px, (max-width: 1024px) 450px"
          tabletImage={tabletImage}
        />
      </StyledInnerContainer>
    </StyledHero>
  );
};
