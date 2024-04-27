import type { TestimonialBlockFragment } from '@myran/types';

type Props = TestimonialBlockFragment;

export const Testimonial: React.FC<Props> = ({
  quote, authorName, authorTitle,
}) => {
  return <div>Testimonial</div>;
};
