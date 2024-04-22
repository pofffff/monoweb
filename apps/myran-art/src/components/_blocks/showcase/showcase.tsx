import {
  HeadingH2, ImageEl, Markdown,
} from 'components/_elements';
import { HeadingH3 } from 'components/_elements/headings/heading-h3';
import { aspectRatios } from 'styles';
import { ShowcaseBlockFragment } from 'types';

import {
  StyledShowcase, StyledShowcaseContent,
} from './styled-showcase';

type Props = ShowcaseBlockFragment;

export const Showcase: React.FC<Props> = ({
  alignImageLeft,
  background,
  description,
  title,
  subtitle,
  image,
}) => {
  return (
    <StyledShowcase
      $left={alignImageLeft ? true : false}
      background={background?.hex}
    >
      <StyledShowcaseContent>
        <HeadingH2>{title}</HeadingH2>
        <HeadingH3>{subtitle}</HeadingH3>
        <Markdown>{description}</Markdown>
      </StyledShowcaseContent>
      <ImageEl
        aspectRatio={aspectRatios.showcase}
        image={image ?? null}
        sizes="(min-width: 768px) 100vw, 620px"
      />
    </StyledShowcase>
  );
};
