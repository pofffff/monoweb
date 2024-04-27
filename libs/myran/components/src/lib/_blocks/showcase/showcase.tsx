import clsx from 'clsx';

import {
  Image, Markdown,
} from '@shared/components/server';
import { aspectRatios } from '@shared/style';

import type { ShowcaseBlockFragment } from '@myran/types';

import styles from './showcase.module.scss';

type Props = ShowcaseBlockFragment;

export const Showcase: React.FC<Props> = ({
  alignImageLeft,
  background,
  description,
  title,
  subtitle,
  image,
}) => {
  const backgroundStyle = background?.hex ? { backgroundColor: background.hex } as React.CSSProperties : {};
  return (
    <div
      className={clsx(styles.root, alignImageLeft && styles.root__left)}
      style={backgroundStyle}
    >
      <div className={clsx(styles.content)}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        {description && <Markdown text={description} />}
      </div>
      <Image
        aspectRatio={aspectRatios.portrait}
        image={image ?? null}
        sizes="(min-width: 768px) 100vw, 620px"
      />
    </div>
  );
};
