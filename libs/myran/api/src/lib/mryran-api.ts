import { getClient } from '@shared/api';

import {
  BasePageDocument,
  type BasePageProps,
  fragmentTypes,
  PageDocument,
  type PageFragment,
  type SiteLocale,
} from '@myran/types';

import { constants } from './config';

export const datoClient = () => {
  const TOKEN = process.env['DATO_TOKEN'];
  if (!TOKEN) {
    throw new Error('Missing DatoCMS token');
  }
  const client = getClient(fragmentTypes.possibleTypes, TOKEN);

  const getPage = async (slugStr: string): Promise<PageFragment> => {
    const slug = slugStr === '/' ? 'root' : slugStr;
    const { data } = await client.query({
      query: PageDocument,
      variables: {
        locale: constants.DEFAULT_LANG as SiteLocale,
        slug,
      },
    });

    const { page } = data as { page: PageFragment };
    return page;
  };

  const getBasePage = async (): Promise<BasePageProps> => {
    const { data } = await client.query({
      query: BasePageDocument,
      variables: { locale: constants.DEFAULT_LANG as SiteLocale },
    });

    if (!data) {
      throw new Error('Failed to fetch basePage data');
    }

    const {
      allNavItems, footer, _site,
    } = data;

    return {
      footer, menu: allNavItems, site: _site,
    };
  };

  return {
    getBasePage, getPage,
  };
};
