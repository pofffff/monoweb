import {
  Content,
  Gallery,
  Hero,
  List,
  Media,
  Showcase,
  Testimonial,
} from '../../_blocks'

export const blockComponents: Record<string, React.FC<any>> = {
  ContentRecord: Content,
  GalleryRecord: Gallery,
  HeroRecord: Hero,
  ListRecord: List,
  MediaRecord: Media,
  ShowcaseRecord: Showcase,
  TestimonialRecord: Testimonial,
}
