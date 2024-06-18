import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import Portfolio from './components/portfolio';

function App() {
  return (
    <ApolloProvider client={client}>
        <main className="card">
          <Portfolio />
        </main>
    </ApolloProvider>
  );
}

export default App;
