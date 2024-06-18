import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import Portfolio from './components/portfolio';
import Home from './components/home';

function App() {
  return (
    <ApolloProvider client={client}>
        <main className="card">
          {/* <Portfolio /> */}
          <Home/>
        </main>
    </ApolloProvider>
  );
}

export default App;
