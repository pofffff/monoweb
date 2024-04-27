import clsx from 'clsx';

import {
  Image, Video,
} from '@shared/components/server';
import { aspectRatios } from '@shared/style';

import type { MediaBlockFragment } from '@myran/types';

import styles from './media.module.scss';

type Props = MediaBlockFragment;

export const Media: React.FC<Props> = ({
  big, image, video,
}) => {
  const sizes = big
    ? '(min-width: 768px) 100vw, 600px'
    : '(min-width: 768px) 100vw, 400px';

  return (
    <div className={clsx(styles.root)}>
      <div className={clsx(styles.inner, big && styles.inner__big)}>
        {image?.responsiveImage && (
          <Image
            aspectRatio={aspectRatios.square}
            image={image}
            sizes={sizes}
          />
        )}
        {video && <Video preload="none" src={video.url} />}
      </div>
    </div>
  );
};
