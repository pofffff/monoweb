export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    CardGridModelLinksField: ['LinkRecord', 'PageRecord'],
    CtaModelLinkField: ['HomeRecord', 'PageRecord'],
    FileFieldInterface: ['FileField'],
    HomeModelContentField: [
      'ContentRecord',
      'GalleryRecord',
      'HeroRecord',
      'ListRecord',
      'MediaBlockRecord',
      'ShowcaseRecord',
      'TestimonialRecord',
    ],
    LinkModelLinkField: ['HomeRecord', 'PageRecord'],
    PageModelContentField: [
      'ContentRecord',
      'GalleryRecord',
      'HeroRecord',
      'ListRecord',
      'MediaBlockRecord',
      'PageListRecord',
      'ShowcaseRecord',
      'TestimonialRecord',
    ],
    RecordInterface: [
      'CardGridRecord',
      'ContentRecord',
      'CtaRecord',
      'FooterRecord',
      'GalleryRecord',
      'GlobalRecord',
      'HeroRecord',
      'HomeRecord',
      'LinkRecord',
      'ListRecord',
      'MediaBlockRecord',
      'NavItemRecord',
      'PageListRecord',
      'PageRecord',
      'ShowcaseRecord',
      'TestimonialRecord',
    ],
  },
};
export default result;
