import {
  Badge, HeadingH3, ImageEl,
} from 'components/_elements';
import { useGlobal } from 'context';
import { Image1Fragment } from 'types';

import {
  StyledOverlayCard,
  StyledOverlayContent,
  StyledSold,
} from './styled-card';

interface Props {
  title: string;
  image: Image1Fragment;
  description: string;
  href: string;
  sold: boolean;
  sizes: string;
  aspectRatio: string;
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
  const { global } = useGlobal();

  return (
    <StyledOverlayCard href={href}>
      <ImageEl aspectRatio={aspectRatio} image={image} sizes={sizes} />
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
  );
};
