import { config } from 'config';
import {
  BasePageDocument,
  BasePageProps,
  fragmentTypes,
  PageDocument,
  PageFragment,
  SiteLocale,
} from 'types';

import { getClient } from './apollo-client';

export const datoClient = () => {
  const client = getClient(fragmentTypes.possibleTypes);

  const getPage = async (slugStr: string): Promise<PageFragment> => {
    const slug = slugStr === '/' ? 'root' : slugStr;
    const { data } = await client.query({
      query: PageDocument,
      variables: {
        locale: config.DEFAULT_LANG as SiteLocale,
        slug,
      },
    });

    const { page } = data as { page: PageFragment };
    return page;
  };

  const getBasePage = async (): Promise<BasePageProps> => {
    const { data } = await client.query({
      query: BasePageDocument,
      variables: { locale: config.DEFAULT_LANG as SiteLocale },
    });

    if (!data) {
      throw new Error('Failed to fetch basePage data');
    }

    const {
      allNavItems, footer, _site, global,
    } = data;

    return {
      footer, global, menu: allNavItems, site: _site,
    };
  };

  return {
    getBasePage, getPage,
  };
};
