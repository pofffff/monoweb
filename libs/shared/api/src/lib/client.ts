import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  PossibleTypesMap,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const uri = 'https://graphql.datocms.com/';

export const getClient = (possibleTypes: PossibleTypesMap, TOKEN: string) => {
  const httpLink = createHttpLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        Authorization: TOKEN ? `Bearer ${TOKEN}` : '',
      },
    };
  });

  return new ApolloClient({
    cache: new InMemoryCache({ possibleTypes }),
    link: authLink.concat(httpLink),
  });
};
