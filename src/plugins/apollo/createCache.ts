import { InMemoryCache } from 'apollo-boost'

export const createCache = () =>
  new InMemoryCache({
    cacheRedirects: {
      Query: {
        Media: (_, args, { getCacheKey }) =>
          getCacheKey({ __typename: 'Media', id: args.id }),
      },
    },
    freezeResults: true,
  })
