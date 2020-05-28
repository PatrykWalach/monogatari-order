import ApolloBoost from 'apollo-boost'
import { createCache } from './createCache'

export const client = new ApolloBoost({
  uri: 'https://graphql.anilist.co',
  cache: createCache(),
})
