import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const link = createHttpLink({
  uri: process.env.REACT_APP_APOLLO_SERVER_URL
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
  });