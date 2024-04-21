import { ListSize, PageLinkFragment } from 'types'
import { StyledListItem, StyledVerticalList } from './styled-list'
import { getHref } from 'utils'
import { aspectRatios } from 'styles'
import { StackedCard } from 'components/_cards'

interface Props {
  items: PageLinkFragment[]
  size: ListSize
}

export const VerticalList: React.FC<Props> = ({ items, size }) => {
  function ItemMapper(item: PageLinkFragment, index: number) {
    const { image, title, description, sold } = item
    return (
      <StyledListItem size={size} key={index}>
        <StackedCard
          image={image!}
          title={title!}
          aspectRatio={aspectRatios.listItem}
          sold={sold!}
          sizes="350px"
          href={getHref({
            parent: item.parent?.pageSlug,
            target: item.pageSlug,
          })}
        />
      </StyledListItem>
    )
  }

  return <StyledVerticalList>{items.map(ItemMapper)}</StyledVerticalList>
}
