import {
  Content,
  Gallery,
  Hero,
  List,
  Media,
  PageList,
  Showcase,
  Testimonial,
} from 'components/_blocks'

import { ContentBlock } from 'types'
import { StyledBlockArea } from './styled-block-area'

interface Props {
  blocks?: Array<ContentBlock>
}

const BlockAreaMapper: React.FC<any> = (block: ContentBlock, index: number) => {
  const priority = index === 0
  const typename = block.__typename
  const key = `${typename}-${index}-${block.id}`

  switch (typename) {
    case 'HeroRecord':
      return <Hero index={index} {...block} priority={priority} key={key} />

    case 'ContentRecord':
      return <Content {...block} key={key} />

    case 'GalleryRecord':
      return <Gallery {...block} key={key} />

    case 'ListRecord':
      return <List {...block} key={key} />

    case 'MediaBlockRecord':
      return <Media {...block} key={key} />

    case 'ShowcaseRecord':
      return <Showcase {...block} key={key} />

    case 'TestimonialRecord':
      return <Testimonial {...block} key={key} />

    case 'PageListRecord':
      return <PageList {...block} key={key} />
  }
}

export const BlockArea: React.FC<Props> = ({ blocks }) => {
  return <StyledBlockArea>{blocks?.map(BlockAreaMapper)}</StyledBlockArea>
}
