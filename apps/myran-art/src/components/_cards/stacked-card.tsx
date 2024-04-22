import {
  Badge, ImageEl,
} from 'components/_elements';
import { useGlobal } from 'context';
import { Image1Fragment } from 'types';

import {
  CardDescription,
  CardTitle,
  ContentWrapper,
  StyledCardImage,
  StyledSold,
  StyledStackedCard,
} from './styled-card';

interface Props {
  title?: string;
  description?: string;
  image?: Image1Fragment;
  sizes: string;
  aspectRatio: string;
  href: string;
  sold: boolean;
}

export const StackedCard: React.FC<Props> = ({
  title,
  description,
  href,
  image,
  sizes,
  aspectRatio,
  sold,
}) => {
  const { global } = useGlobal();

  return (
    <StyledStackedCard href={href}>
      <StyledCardImage>
        {image && (
          <ImageEl aspectRatio={aspectRatio} image={image} sizes={sizes} />
        )}
        {sold && (
          <StyledSold>
            <Badge text={global?.sold!} />
          </StyledSold>
        )}
      </StyledCardImage>

      <ContentWrapper>
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </ContentWrapper>
    </StyledStackedCard>
  );
};
