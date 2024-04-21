import { ListBlockFragment, ListSize } from 'types'
import { VerticalList } from './vertical-list'
import { StyledList } from './styled-list'

interface Props extends ListBlockFragment {}

const listTypes = {
  vertical: 'Vertical scroll',
}

export const List: React.FC<Props> = ({
  listType,
  size,
  links,
  pagination,
}) => {
  return (
    <StyledList size={size as ListSize}>
      {listType === listTypes.vertical && (
        <VerticalList size={size as ListSize} items={links} />
      )}
    </StyledList>
  )
}
