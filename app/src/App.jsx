import React from 'react';
import { useQuery } from '@apollo/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './utils/apolloClient';
import { get_homepage } from './utils/queries';
import { AnimatePresence } from 'framer-motion';
import Home from './views/Home';
import About from './views/About';
import RootLayout from './components/Layout';
import Error from './views/Error';

function App() {

  const homeLoader = async () => {
    try {
      const { data } = await client.query({
        query: get_homepage
      });
      return { data };

    } catch (error) {
      return { error };
    }
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home />, loader: homeLoader, prefetch: true},
        { path: '/about', element: <About />},
      ],
    }
  ]);

  return (
      <ApolloProvider client={client}>
          <AnimatePresence>
            <RouterProvider router={router} />
          </AnimatePresence>
      </ApolloProvider>
  );
}

export default App;
