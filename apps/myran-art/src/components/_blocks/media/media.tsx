import { ImageEl, Video } from 'components/_elements'
import { MediaBlockFragment } from 'types'
import { StyledInnerContainer, StyledMedia } from './styled-media'
import { aspectRatios } from 'styles'

interface Props extends MediaBlockFragment {}

export const Media: React.FC<Props> = ({ big, image, video }) => {
  const sizes = big
    ? '(min-width: 768px) 100vw, 600px'
    : '(min-width: 768px) 100vw, 400px'

  return (
    <StyledMedia>
      <StyledInnerContainer $big={!!big}>
        {image?.responsiveImage && (
          <ImageEl
            aspectRatio={aspectRatios.content}
            image={image}
            sizes={sizes}
          />
        )}
        {video && <Video src={video.url} preload={'none'} />}
      </StyledInnerContainer>
    </StyledMedia>
  )
}
