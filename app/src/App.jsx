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
import Portfolio from './views/Portfolio';

function App() {

  const homePageLoader = async () => {
    try {
      const homepageData = await client.query({ query: get_homepage });
      const portfolioData = await client.query({ query: get_portfolio });
  
      return {
        homepageData: homepageData.data,
        portfolioData: portfolioData.data,
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
      children: [
        { 
          index: true, 
          element: <Home />, 
          loader: homePageLoader, 
          prefetch: true
        },
        { 
          path: '/about', 
          element: <About />
        },
        { 
          path: '/portfolio/:slug',
          element: <Portfolio />, 
          loader: portfolioPageLoader,
        },
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
