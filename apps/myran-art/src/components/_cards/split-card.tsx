import { DynamicImage } from 'components/_elements/image/dynamic-image';
import { Image1Fragment } from 'types';

import {
  CardTitle,
  ContentWrapper,
  StyledStackedCard,
} from './styled-card';

interface Props {
  backgroundColor: string;
  title?: string;
  description?: string;
  image?: Image1Fragment;
  spacing: boolean;
  href: string;
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
          desktopImage={image}
          mobileImage={image}
          tabletImage={image}
        />
      )}
      <ContentWrapper spacing={spacing}>
        {title && <CardTitle>{title}</CardTitle>}
        {/* {description && <CardDescription>{description}</CardDescription>} */}
      </ContentWrapper>
    </StyledStackedCard>
  );
};
