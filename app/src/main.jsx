import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios';
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider, gql } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://company-of-landscapers.ddev.site/admin/graphiql?schemaUid=ae5cb1b6-ff87-4394-be39-61c36b97dac5',
  fetch: (uri, options) => {
    // Replace with your actual token (avoid storing it directly in code)
    const token = '-I4MEf5_NhW247a8egnmxPqTq0PYHXro';
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
    return axios(uri, options);
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// const client = ...

client
  .query({
    query: gql`
      query GetEntries {
        entries {
          title
        }
      }
    `,
  })
  .then((result) => console.log(result));


ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </ApolloProvider>
)
