import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './utils/apolloClient';
import Home from './views/Home';
import RootLayout from './components/Layout';
import Error from './views/Error';
import PortfolioEntry from './views/PortfolioEntry';
import Portfolio from './views/Portfolio';
import NotFound from './views/NotFound';
import { globalLoader, homePageLoader, portfolioPageLoader } from './utils/loaders';

function App() {
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
        },
        {
          path: '*',
          element: <NotFound />
        }
      ],
    }
  ]);

  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;
