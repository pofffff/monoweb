import { clsx } from 'clsx';

import type { ContentBlock } from '@myran/types';

import {
  Content,
  Gallery,
  Hero,
  List,
  Media,
  PageList,
  Showcase,
  Testimonial,
} from '../_blocks';

import styles from './block-content.module.scss';

interface Props {
  blocks?: Array<ContentBlock>;
}

const BlockContentMapper: React.FC<any> = (block: ContentBlock, index: number) => {
  const priority = index === 0;
  const typename = block.__typename;
  const key = `${typename}-${index}-${block.id}`;

  switch (typename) {
    case 'HeroRecord':
      return (
        <Hero
          index={index}
          {...block}
          key={key}
          priority={priority}
        />
      );

    case 'ContentRecord':
      return <Content {...block} key={key} />;

    case 'GalleryRecord':
      return <Gallery {...block} key={key} />;

    case 'ListRecord':
      return <List {...block} key={key} />;

    case 'MediaBlockRecord':
      return <Media {...block} key={key} />;

    case 'ShowcaseRecord':
      return <Showcase {...block} key={key} />;

    case 'TestimonialRecord':
      return <Testimonial {...block} key={key} />;

    case 'PageListRecord':
      return <PageList {...block} key={key} />;
  }
};

export const BlockContent: React.FC<Props> = ({ blocks }) => {
  return <div className={clsx(styles.root)}>{blocks?.map(BlockContentMapper)}</div>;
};
