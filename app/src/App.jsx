import React from 'react';
import client from './apolloClient';
import { ApolloProvider } from '@apollo/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import RootLayout from './components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About />},
    ],
  }
]);

function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;
