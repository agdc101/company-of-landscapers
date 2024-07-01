import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';

function App() {
  return (
    <ApolloProvider client={client}>
        <main className="card">
          {/* <Portfolio /> */}
          <Header/>
          <Home/>
          {/* <About/> */}
        </main>
    </ApolloProvider>
  );
}

export default App;
