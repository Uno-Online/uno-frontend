import { createBrowserRouter } from 'react-router-dom';
import { CreateNewAccount } from '../pages/create-new-account/create-new-account';

import { Home } from '../pages/home/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/new-account',
    element: <CreateNewAccount />,
  },
]);
