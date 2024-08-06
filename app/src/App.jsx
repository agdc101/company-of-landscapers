import React from 'react';
import { useQuery } from '@apollo/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './utils/apolloClient';
import { get_homepage, get_portfolio, get_global_set } from './utils/queries';
import { AnimatePresence } from 'framer-motion';
import Home from './views/Home';
import About from './views/About';
import RootLayout from './components/Layout';
import Error from './views/Error';
import PortfolioEntry from './views/PortfolioEntry';
import Portfolio from './views/Portfolio';

function App() {

  const globalLoader = async () => {
    try {
      const globalData = await client.query({ query: get_global_set });
      return {
        globalData: globalData.data,
      };
    } catch (error) {
      return { error };
    }
  };

  const homePageLoader = async () => {
    try {
      const homepageData = await client.query({ query: get_homepage });
      return {
        homepageData: homepageData.data,
      };
    } catch (error) {
      return { error };
    }
  };

  const portfolioPageLoader = async () => {
    try {
      const portfolioData = await client.query({ query: get_portfolio });
      return {
        portfolioData: portfolioData.data,
      };
    } catch (error) {
      return { error };
    }
  }
  

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <Error />,
      loader: globalLoader,
      children: [
        { 
          index: true, 
          element: <Home />, 
          loader: homePageLoader, 
          prefetch: true
        },
        { 
          path: 'portfolio',
          children: [
            {
              index: true,
              element: <Portfolio />,
              loader: portfolioPageLoader,
            },
            {
              path: ':slug', 
              element: <PortfolioEntry/>,
              loader: portfolioPageLoader,
            }
          ]
        }
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
