import { Badge, HeadingH3, ImageEl, Markdown } from 'components/_elements'
import { Image1Fragment } from 'types'
import {
  StyledOverlayCard,
  StyledOverlayContent,
  StyledSold,
} from './styled-card'
import { useGlobal } from 'context'

interface Props {
  title: string
  image: Image1Fragment
  description: string
  href: string
  sold: boolean
  sizes: string
  aspectRatio: string
}

export const OverlayCard: React.FC<Props> = ({
  title,
  image,
  // description,
  href,
  sold,
  sizes,
  aspectRatio,
}) => {
  const { global } = useGlobal()

  return (
    <StyledOverlayCard href={href}>
      <ImageEl image={image} sizes={sizes} aspectRatio={aspectRatio} />
      {sold && (
        <StyledSold>
          <Badge text={global?.sold!} />
        </StyledSold>
      )}
      <StyledOverlayContent>
        <HeadingH3>{title}</HeadingH3>
        {/* <Markdown>{description}</Markdown> */}
      </StyledOverlayContent>
    </StyledOverlayCard>
  )
}
