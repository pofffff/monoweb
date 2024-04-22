import { useId } from 'react';

import {
  OverlayCard, StackedCard,
} from 'components/_cards';
import { Grid } from 'components/_elements';
import { aspectRatios } from 'styles';
import { PageListBlockFragment } from 'types';
import { getHref } from 'utils';

import { StyledPageList } from './styled-page-list';

type Props = PageListBlockFragment;

export const PageList: React.FC<Props> = ({
  pageType, listType,
}) => {
  const uid = useId();
  const list = pageType?.children;
  if (!list || list.length < 1) {
    return null;
  }

  const OverlayListMapper = (item, _index) => {
    const {
      id, title, pageSlug, image, description, parent, sold,
    } = item;
    const href = getHref({
      parent: parent.pageSlug, target: pageSlug,
    });
    return (
      <OverlayCard
        key={`card-${id}`}
        aspectRatio={aspectRatios.listItem}
        description={description}
        href={href}
        image={image}
        sizes="(min-width: 768px) 100vw, 400px"
        sold={sold}
        title={title}
      />
    );
  };

  const SideBySideListMapper = (item, _index) => {
    const {
      id, title, pageSlug, image, description, parent,
    } = item;
    const href = getHref({
      parent: parent.pageSlug, target: pageSlug,
    });
    return (
      // <SideBySideCard
      //   key={`card-${id}`}
      //   href={href}
      //   image={image}
      //   title={title}
      //   description={description}
      // />
      <p>Side by side</p>
    );
  };

  const StackedListMapper = (item, _index) => {
    const {
      id, title, pageSlug, image, description, parent, sold,
    } = item;
    const href = getHref({
      parent: parent.pageSlug, target: pageSlug,
    });
    return (
      <StackedCard
        key={`card-${id}`}
        aspectRatio={aspectRatios.listItem}
        description={description}
        href={href}
        image={image}
        sizes="(min-width: 768px) 100vw, 400px"
        sold={sold}
        title={title}
      />
    );
  };

  return (
    <StyledPageList>
      <Grid key={`Grid-${uid}`} $spacing>
        {listType === 'overlay' && list.map(OverlayListMapper)}
        {listType === 'side-by-side' && list.map(SideBySideListMapper)}
        {listType === 'stacked' && list.map(StackedListMapper)}
      </Grid>
    </StyledPageList>
  );
};
