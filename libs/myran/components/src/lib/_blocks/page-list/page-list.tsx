import { PageListBlockFragment } from 'types'
import { StyledPageList } from './styled-page-list'
import { Grid } from 'components/_elements'
import { OverlayCard, StackedCard } from 'components/_cards'
import { getHref } from 'utils'
import { useId } from 'react'
import { aspectRatios } from 'styles'

interface Props extends PageListBlockFragment {}

export const PageList: React.FC<Props> = ({ pageType, listType }) => {
  const uid = useId()
  const list = pageType?.children
  if (!list || list.length < 1) {
    return null
  }

  const OverlayListMapper = (item, _index) => {
    const { id, title, pageSlug, image, description, parent, sold } = item
    const href = getHref({ parent: parent.pageSlug, target: pageSlug })
    return (
      <OverlayCard
        key={`card-${id}`}
        href={href}
        image={image}
        title={title}
        sold={sold}
        description={description}
        sizes="(min-width: 768px) 100vw, 400px"
        aspectRatio={aspectRatios.listItem}
      />
    )
  }

  const SideBySideListMapper = (item, _index) => {
    const { id, title, pageSlug, image, description, parent } = item
    const href = getHref({ parent: parent.pageSlug, target: pageSlug })
    return (
      // <SideBySideCard
      //   key={`card-${id}`}
      //   href={href}
      //   image={image}
      //   title={title}
      //   description={description}
      // />
      <p>Side by side</p>
    )
  }

  const StackedListMapper = (item, _index) => {
    const { id, title, pageSlug, image, description, parent, sold } = item
    const href = getHref({ parent: parent.pageSlug, target: pageSlug })
    return (
      <StackedCard
        key={`card-${id}`}
        href={href}
        image={image}
        title={title}
        sold={sold}
        description={description}
        sizes="(min-width: 768px) 100vw, 400px"
        aspectRatio={aspectRatios.listItem}
      />
    )
  }

  return (
    <StyledPageList>
      <Grid key={`Grid-${uid}`} $spacing>
        {listType === 'overlay' && list.map(OverlayListMapper)}
        {listType === 'side-by-side' && list.map(SideBySideListMapper)}
        {listType === 'stacked' && list.map(StackedListMapper)}
      </Grid>
    </StyledPageList>
  )
}
