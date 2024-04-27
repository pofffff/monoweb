import Link from 'next/link';

import { Image } from '@shared/components/server';
import type { Image1Fragment } from '@shared/types';

import { Badge } from '../../../_elements';

import styles from './overlay-card.module.scss';

interface Props {
  title?: string | null;
  image?: Image1Fragment | null;
  description?: string | null;
  href: string;
  sold: boolean;
  sizes: string;
  aspectRatio: string;
}

export const OverlayCard: React.FC<Props> = ({
  title,
  image,
  // description,
  href,
  sold,
  sizes,
  aspectRatio,
}) => {
  return (
    <Link className={styles.root} href={href}>
      {image && <Image aspectRatio={aspectRatio} image={image} sizes={sizes} /> }
      {sold && (
        <div className={styles.sold}>
          {/* // TODO */}
          <Badge text="Sold" />
        </div>
      )}
      <div className={styles.content}>
        <h3>{title}</h3>
        {/* <Markdown>{description}</Markdown> */}
      </div>
    </Link>
  );
};
