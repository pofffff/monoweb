import {
  CardDescription,
  CardTitle,
  ContentWrapper,
  StyledStackedCard,
} from './styled-card'

import { HeadingH2 } from 'components'
import { Image1Fragment } from 'types'
import { DynamicImage } from 'components/_elements/image/dynamic-image'

interface Props {
  backgroundColor: string
  title?: string
  description?: string
  image?: Image1Fragment
  spacing: boolean
  href: string
}

export const SplitCard: React.FC<Props> = ({
  title,
  description,
  href,
  image,
  spacing,
}) => {
  return (
    <StyledStackedCard href={href}>
      {image && (
        <DynamicImage
          mobileImage={image}
          desktopImage={image}
          tabletImage={image}
        />
      )}
      <ContentWrapper spacing={spacing}>
        {title && <CardTitle>{title}</CardTitle>}
        {/* {description && <CardDescription>{description}</CardDescription>} */}
      </ContentWrapper>
    </StyledStackedCard>
  )
}
