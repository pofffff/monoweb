import {
  FooterFragment, NavItemFragment, SiteFragment,
} from './_generated/graphql-types';

export interface BasePageProps {
  menu?: NavItemFragment[] | null;
  footer?: FooterFragment | null;
  site?: SiteFragment;
}
