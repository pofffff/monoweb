import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  PossibleTypesMap,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { config } from 'config';

export const getClient = (possibleTypes: PossibleTypesMap) => {
  const uri = `${config.DATO_BASE_URL}${config.DATO_PREVIEW ? 'preview/' : ''}`;

  const httpLink = createHttpLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        Authorization: config.DATO_TOKEN ? `Bearer ${config.DATO_TOKEN}` : '',
      },
    };
  });

  return new ApolloClient({
    cache: new InMemoryCache({ possibleTypes }),
    link: authLink.concat(httpLink),
  });
};
