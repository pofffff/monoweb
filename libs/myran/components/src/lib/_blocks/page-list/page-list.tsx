import { useId } from 'react';

import clsx from 'clsx';

import { aspectRatios } from '@shared/style';
import { getHref } from '@shared/utils';

import type {
  PageListBlockFragment,
  PageTypeChildFragment,
} from '@myran/types';

import { OverlayCard } from './overlay-card/overlay-card';
import styles from './page-list.module.scss';
import { StackedCard } from './stacked-card/stacked-card';

type Props = PageListBlockFragment;

export const PageList: React.FC<Props> = ({
  pageType, listType,
}) => {
  const uid = useId();
  const list = pageType?.children;
  if (!list || list.length < 1) {
    return null;
  }

  const OverlayListMapper = (item: PageTypeChildFragment) => {
    const {
      id, title, pageSlug, image, description, parent, sold,
    } = item;
    const href = getHref({
      parent: parent?.pageSlug, target: pageSlug,
    });
    return (
      <OverlayCard
        key={`card-${id}`}
        aspectRatio={aspectRatios.square}
        description={description}
        href={href}
        image={image}
        sizes="(min-width: 768px) 100vw, 400px"
        sold={sold}
        title={title}
      />
    );
  };

  // const SideBySideListMapper = (item, _index) => {
  //   const {
  //     id, title, pageSlug, image, description, parent,
  //   } = item;
  //   const href = getHref({
  //     parent: parent.pageSlug, target: pageSlug,
  //   });
  //   return (
  //     // <SideBySideCard
  //     //   key={`card-${id}`}
  //     //   href={href}
  //     //   image={image}
  //     //   title={title}
  //     //   description={description}
  //     // />
  //     <p>Side by side</p>
  //   );
  // };

  const StackedListMapper = (item: PageTypeChildFragment) => {
    const {
      id, title, pageSlug, image, description, parent, sold,
    } = item;
    const href = getHref({
      parent: parent?.pageSlug, target: pageSlug,
    });
    return (
      <StackedCard
        key={`card-${id}`}
        aspectRatio={aspectRatios.square}
        description={description}
        href={href}
        image={image}
        sizes="(min-width: 768px) 100vw, 400px"
        sold={sold}
        title={title}
      />
    );
  };

  // TODO fix any types
  return (
    <div className={clsx(styles.root, 'block', 'grid__large')}>
      {listType === 'overlay' && list.map(OverlayListMapper as any)}
      {/* {listType === 'side-by-side' && list.map(SideBySideListMapper)} */}
      {listType === 'stacked' && list.map(StackedListMapper as any)}
    </div>
  );
};
