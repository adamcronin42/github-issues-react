import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
require('dotenv').config();

const cache = new InMemoryCache();
const token = process.env.REACT_APP_GITHUB_TOKEN;
const client = new ApolloClient({
  link: createHttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      authorization: `bearer ${token}`,
    },
  }),
  cache,
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
