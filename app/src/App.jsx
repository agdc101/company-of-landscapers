import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import Header from './components/header';
import Home from './components/home';

function App() {
  return (
    <ApolloProvider client={client}>
        <main className="card">
          {/* <Portfolio /> */}
          {/* <Header/> */}
          <Home/>
        </main>
    </ApolloProvider>
  );
}

export default App;
