import { sizes } from 'styles'
import { Image1Fragment } from 'types'
import { StyledImage } from './styled-image'
import Image from 'next/image'

interface Props {
  image: Image1Fragment | null
  priority?: boolean
  sizes?: string
  aspectRatio: string
}

export const ImageEl: React.FC<Props> = ({
  image,
  aspectRatio,
  priority = false,
  sizes = 'auto',
}) => {
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
    <StyledImage $aspectRatio={aspectRatio}>
      <ImageElement
        src={image?.responsiveImage?.src ?? ''}
        base64={image?.responsiveImage?.base64 ?? ''}
        alt={image?.alt ?? ''}
      />
    </StyledImage>
  )
}
