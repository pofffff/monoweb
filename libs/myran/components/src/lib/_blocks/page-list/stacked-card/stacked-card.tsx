import Link from 'next/link';

import clsx from 'clsx';

import { Image } from '@shared/components/server';
import type { Image1Fragment } from '@shared/types';

import { Badge } from '../../../_elements';

import styles from './stacked-card.module.scss';

interface Props {
  aspectRatio: string;
  description?: string | null;
  href: string;
  image?: Image1Fragment | null;
  sizes: string;
  sold: boolean;
  title?: string | null;
}

export const StackedCard: React.FC<Props> = ({
  aspectRatio, description, href, image, sizes, sold, title,
}) => {
  return (
    <Link className={clsx(styles.root)} href={href}>
      {image && <Image aspectRatio={aspectRatio} image={image} sizes={sizes} />}
      {sold && (
        <div className={styles.badge}>
          <Badge text="Sold" />
          {/* // TODO */}
        </div>
      )}
      <div className={styles.content}>
        <h3>{title}</h3>
        {/* <Markdown>{description}</Markdown> */}
      </div>
    </Link>
  );
};
