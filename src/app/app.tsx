import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { routes } from '../routes';
import SideNav from '../components/SideNav/SideNav';
import TopBar from '../components/TopBar';

const appRouter = createBrowserRouter(createRoutesFromElements(routes));

export function App() {
  return (
    <div className="flex overflow-hidden bg-gradient-to-br from-paleGreen to-white">
      <SideNav />
      <div className="flex flex-col flex-1">
        <TopBar />
        <div className="flex-1 overflow-auto ml-60">
          <RouterProvider router={appRouter} />
        </div>
      </div>
    </div>
  );
}

export default App;
