import React from 'react';
import { useQuery } from '@apollo/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './utils/apolloClient';
import { get_homepage, get_portfolio } from './utils/queries';
import { AnimatePresence } from 'framer-motion';
import Home from './views/Home';
import About from './views/About';
import RootLayout from './components/Layout';
import Error from './views/Error';

function App() {

  const homePageLoader = async () => {
    try {
      const [homepageData, portfolioData] = await Promise.all([
        client.query({ query: get_homepage }),
        client.query({ query: get_portfolio }),
      ]);

    return {
      homepageData: homepageData.data,
      portfolioData: portfolioData.data,
    };

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
        { index: true, element: <Home />, loader: homePageLoader, prefetch: true},
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
