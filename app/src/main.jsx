import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './output.css';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';

// Render the React application
ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
