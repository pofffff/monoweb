import Link from 'next/link';

import clsx from 'clsx';

import {
  DynamicImage, Markdown,
} from '@shared/components/server';
import { aspectRatios } from '@shared/style';

import type { HeroBlockFragment } from '@myran/types';

import styles from './hero.module.scss';

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
  // const Title = isH1 ? <h1>{title}</h1> : <h2>{title}</h2>;
  return (
    <div className={clsx(styles.root)}>
      <div className={clsx(styles.inner)}>
        <div className={clsx(styles.content)}>
          {/* <Title /> */}
          <h2>{subtitle}</h2>
          {description && (<Markdown text={description} />)}
          {ctaLink?.pageSlug && ctaLabel && (
            <Link
              // backgroundColor={contentBackground?.hex}
              href={ctaLink.pageSlug}
            >
              {ctaLabel}
            </Link>
          )}
        </div>
        <DynamicImage
          aspectRatioDesktop={aspectRatios.portrait}
          aspectRatioMobile={aspectRatios.wide}
          aspectRatioTablet={aspectRatios.wide}
          desktopImage={desktopImage}
          mobileImage={mobileImage}
          priority={priority}
          sizes="(min-width: 1025px) 920px, (max-width: 1024px) 450px"
          tabletImage={tabletImage}
        />
      </div>
    </div>
  );
};
