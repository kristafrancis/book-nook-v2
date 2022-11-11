// src/gatsby-plugin-apollo/client.js
import fetch from 'isomorphic-fetch';
import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://localhost:3001/graphql/',
    fetch
  })
});

export default client;
