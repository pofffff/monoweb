import ImageComponent from 'next/image';

import clsx from 'clsx';

import type { Image1Fragment } from '@shared/types';

import styles from './image.module.scss';
interface Props {
  image: Image1Fragment | null;
  priority?: boolean;
  sizes?: string;
  aspectRatio: string;
}

export const Image: React.FC<Props> = ({
  image,
  aspectRatio,
  priority = false,
  sizes = 'auto',
}) => {
  const style = { aspectRatio } as React.CSSProperties;
  const ImageElement: React.FC<{
    src: string;
    base64: string;
    alt: string;
  }> = ({
    src, base64, alt,
  }) => {
    return src && base64
      ? (
        <ImageComponent
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
    <div className={clsx(styles.root)} style={style}>
      <ImageElement
        alt={image?.alt ?? ''}
        base64={image?.responsiveImage?.base64 ?? ''}
        src={image?.responsiveImage?.src ?? ''}
      />
    </div>
  );
};
