import Image from 'next/image'
import { Image1Fragment } from 'types'
import {
  StyledDesktopImage,
  StyledMobileImage,
  StyledTabletImage,
} from './styled-image'

interface Props {
  mobileImage?: Image1Fragment | null
  tabletImage?: Image1Fragment | null
  desktopImage?: Image1Fragment | null

  aspectRatioMobile?: string
  aspectRatioTablet?: string
  aspectRatioDesktop?: string
  priority?: boolean
  sizes?: string
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
    return null
  }

  const ImageElement: React.FC<{
    src: string
    base64: string
    alt: string
  }> = ({ src, base64, alt }) => {
    return src && base64 ? (
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        fill
        priority={priority}
        placeholder="blur"
        blurDataURL={base64 ?? ''}
      />
    ) : null
  }

  return (
    <>
      {mobileImage?.responsiveImage && (
        <StyledMobileImage $aspectRatio={aspectRatioMobile}>
          <ImageElement
            src={mobileImage?.responsiveImage?.src ?? ''}
            base64={mobileImage?.responsiveImage?.base64 ?? ''}
            alt={mobileImage.alt ?? ''}
          />
        </StyledMobileImage>
      )}

      {tabletImage?.responsiveImage && (
        <StyledTabletImage $aspectRatio={aspectRatioTablet}>
          <ImageElement
            src={tabletImage?.responsiveImage?.src ?? ''}
            base64={tabletImage?.responsiveImage?.base64 ?? ''}
            alt={tabletImage.alt ?? ''}
          />
        </StyledTabletImage>
      )}

      {desktopImage?.responsiveImage && (
        <StyledDesktopImage $aspectRatio={aspectRatioDesktop}>
          <ImageElement
            src={desktopImage?.responsiveImage?.src ?? ''}
            base64={desktopImage?.responsiveImage?.base64 ?? ''}
            alt={desktopImage.alt ?? ''}
          />
        </StyledDesktopImage>
      )}
    </>
  )
}
