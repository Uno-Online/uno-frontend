import { createBrowserRouter } from 'react-router-dom';
import { CreateNewAccount } from '../pages/create-new-account/create-new-account';

import { Home } from '../pages/home/home';
import { TestPage } from '@/pages/test/test';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    index: true,
    element: <TestPage />,
  },
  {
    path: '/new-account',
    element: <CreateNewAccount />,
  },
]);
