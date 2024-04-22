import Image from 'next/image';

import { Image1Fragment } from 'types';

import { StyledImage } from './styled-image';

interface Props {
  image: Image1Fragment | null;
  priority?: boolean;
  sizes?: string;
  aspectRatio: string;
}

export const ImageEl: React.FC<Props> = ({
  image,
  aspectRatio,
  priority = false,
  sizes = 'auto',
}) => {
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
    <StyledImage $aspectRatio={aspectRatio}>
      <ImageElement
        alt={image?.alt ?? ''}
        base64={image?.responsiveImage?.base64 ?? ''}
        src={image?.responsiveImage?.src ?? ''}
      />
    </StyledImage>
  );
};
