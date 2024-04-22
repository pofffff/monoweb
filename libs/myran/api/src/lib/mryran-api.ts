import { config } from 'config';
import {
  BasePageDocument,
  BasePageProps,
  fragmentTypes,
  PageDocument,
  PageFragment,
  SiteLocale,
} from 'types';

import { getClient } from '@shared/api';

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
