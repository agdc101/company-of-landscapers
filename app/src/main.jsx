import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Define the HTTP link to your GraphQL endpoint
const httpLink = new HttpLink({
  uri: 'http://company-of-landscapers.ddev.site/api',
});

// Create a middleware link to add the Authorization header
const authLink = setContext((_, { headers }) => {
  const token = '-I4MEf5_NhW247a8egnmxPqTq0PYHXro';
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Initialize Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink), // Concatenate authLink and httpLink
  cache: new InMemoryCache(),
});

// Example query to test the setup
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
  .then((result) => console.log(result))
  .catch((error) => console.error('Error fetching data:', error)); // Add error handling

// Render the React application
ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
