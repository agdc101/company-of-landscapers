import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './utils/apolloClient';
import AnimationRoutes from './components/AnimationRoutes';
import { AnimatePresence } from 'framer-motion';

function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
              <AnimatePresence>
                <AnimationRoutes />
              </AnimatePresence>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
