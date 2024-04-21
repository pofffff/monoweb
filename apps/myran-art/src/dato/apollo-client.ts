import {
  ApolloClient,
  InMemoryCache,
  PossibleTypesMap,
  createHttpLink,
} from '@apollo/client'

import { config } from 'config'
import { setContext } from '@apollo/client/link/context'

export const getClient = (possibleTypes: PossibleTypesMap) => {
  const uri = `${config.DATO_BASE_URL}${config.DATO_PREVIEW ? 'preview/' : ''}`

  const httpLink = createHttpLink({ uri })

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        Authorization: config.DATO_TOKEN ? `Bearer ${config.DATO_TOKEN}` : '',
      },
    }
  })

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({ possibleTypes }),
  })
}
