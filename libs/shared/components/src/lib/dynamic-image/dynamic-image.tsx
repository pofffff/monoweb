import React from 'react';

import Image from 'next/image';

import clsx from 'clsx';

import type { Image1Fragment } from '@shared/types';

import styles from './dynamic-image.module.scss';

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

  const mobileStyle = { aspectRatio: aspectRatioMobile } as React.CSSProperties;
  const tabletStyle = { aspectRatio: aspectRatioTablet } as React.CSSProperties;
  const desktopStyle = { aspectRatio: aspectRatioDesktop } as React.CSSProperties;

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
        <figure className={clsx(styles.mobile, styles.figure)} style={mobileStyle}>
          <ImageElement
            alt={mobileImage.alt ?? ''}
            base64={mobileImage?.responsiveImage?.base64 ?? ''}
            src={mobileImage?.responsiveImage?.src ?? ''}
          />
        </figure>
      )}

      {tabletImage?.responsiveImage && (
        <figure className={clsx(styles.tablet, styles.figure)} style={tabletStyle}>
          <ImageElement
            alt={tabletImage.alt ?? ''}
            base64={tabletImage?.responsiveImage?.base64 ?? ''}
            src={tabletImage?.responsiveImage?.src ?? ''}
          />
        </figure>
      )}

      {desktopImage?.responsiveImage && (
        <figure className={clsx(styles.desktop, styles.figure)} style={desktopStyle}>
          <ImageElement
            alt={desktopImage.alt ?? ''}
            base64={desktopImage?.responsiveImage?.base64 ?? ''}
            src={desktopImage?.responsiveImage?.src ?? ''}
          />
        </figure>
      )}
    </>
  );
};
