import { StackedCard } from 'components/_cards';
import { aspectRatios } from 'styles';
import {
  ListSize, PageLinkFragment,
} from 'types';
import { getHref } from 'utils';

import {
  StyledListItem, StyledVerticalList,
} from './styled-list';

interface Props {
  items: PageLinkFragment[];
  size: ListSize;
}

export const VerticalList: React.FC<Props> = ({
  items, size,
}) => {
  function ItemMapper(item: PageLinkFragment, index: number) {
    const {
      image, title, description, sold,
    } = item;
    return (
      <StyledListItem key={index} size={size}>
        <StackedCard
          aspectRatio={aspectRatios.listItem}
          href={getHref({
            parent: item.parent?.pageSlug,
            target: item.pageSlug,
          })}
          image={image!}
          sizes="350px"
          sold={sold!}
          title={title!}
        />
      </StyledListItem>
    );
  }

  return <StyledVerticalList>{items.map(ItemMapper)}</StyledVerticalList>;
};
