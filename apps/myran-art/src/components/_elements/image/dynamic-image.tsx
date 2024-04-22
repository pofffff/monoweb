import Image from 'next/image';

import { Image1Fragment } from 'types';

import {
  StyledDesktopImage,
  StyledMobileImage,
  StyledTabletImage,
} from './styled-image';

interface Props {
  mobileImage?: Image1Fragment | null;
  tabletImage?: Image1Fragment | null;
  desktopImage?: Image1Fragment | null;

  aspectRatioMobile?: string;
  aspectRatioTablet?: string;
  aspectRatioDesktop?: string;
  priority?: boolean;
  sizes?: string;
}

export const DynamicImage: React.FC<Props> = ({
  mobileImage,
  tabletImage,
  desktopImage,
  aspectRatioMobile,
  aspectRatioTablet,
  aspectRatioDesktop,
  priority,
  sizes = 'auto',
}) => {
  if (!mobileImage && !tabletImage && !desktopImage) {
    return null;
  }

  const ImageElement: React.FC<{
    src: string;
    base64: string;
    alt: string;
  }> = ({
    src, base64, alt,
  }) => {
    return src && base64
      ? (
        <Image
          alt={alt}
          blurDataURL={base64 ?? ''}
          placeholder="blur"
          priority={priority}
          sizes={sizes}
          src={src}
          fill
        />
        )
      : null;
  };

  return (
    <>
      {mobileImage?.responsiveImage && (
        <StyledMobileImage $aspectRatio={aspectRatioMobile}>
          <ImageElement
            alt={mobileImage.alt ?? ''}
            base64={mobileImage?.responsiveImage?.base64 ?? ''}
            src={mobileImage?.responsiveImage?.src ?? ''}
          />
        </StyledMobileImage>
      )}

      {tabletImage?.responsiveImage && (
        <StyledTabletImage $aspectRatio={aspectRatioTablet}>
          <ImageElement
            alt={tabletImage.alt ?? ''}
            base64={tabletImage?.responsiveImage?.base64 ?? ''}
            src={tabletImage?.responsiveImage?.src ?? ''}
          />
        </StyledTabletImage>
      )}

      {desktopImage?.responsiveImage && (
        <StyledDesktopImage $aspectRatio={aspectRatioDesktop}>
          <ImageElement
            alt={desktopImage.alt ?? ''}
            base64={desktopImage?.responsiveImage?.base64 ?? ''}
            src={desktopImage?.responsiveImage?.src ?? ''}
          />
        </StyledDesktopImage>
      )}
    </>
  );
};
