import { Route } from 'react-router-dom';
import Dashboard from './views/Dashboard';

const routesArray = [
  { path: '/', page: 'Dashboard', element: <Dashboard /> },
  { path: '/my-collection', page: 'My Collection', element: <Dashboard /> },
  { path: '/journal', page: 'Mani Journal', element: <Dashboard /> },
  { path: '/analytics', page: 'Usage analytics', element: <Dashboard /> },
  { path: '/shop', page: 'Shop', element: <Dashboard /> },
  { path: '/settings', page: 'Settings', element: <Dashboard /> },
];

export const routes = routesArray.map((route) => {
  return <Route key={route.path} path={route.path} element={route.element} />;
});
