import {
  ListBlockFragment, ListSize,
} from 'types';

import { StyledList } from './styled-list';
import { VerticalList } from './vertical-list';

type Props = ListBlockFragment;

const listTypes = { vertical: 'Vertical scroll' };

export const List: React.FC<Props> = ({
  listType,
  size,
  links,
  pagination,
}) => {
  return (
    <StyledList size={size as ListSize}>
      {listType === listTypes.vertical && (
        <VerticalList items={links} size={size as ListSize} />
      )}
    </StyledList>
  );
};
