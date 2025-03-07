import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { routes } from '../routes';
import SideNav from '../components/SideNav/SideNav';
import TopBar from '../components/TopBar';
import { SidebarProvider, useSidebar } from '../contexts/SidebarContext';

const appRouter = createBrowserRouter(createRoutesFromElements(routes));

export const App = () => {
  return (
    <SidebarProvider>
      <MainApp />
    </SidebarProvider>
  );
};

const MainApp = () => {
  const { isOpen } = useSidebar();

  return (
    <div className="flex overflow-hidden bg-gradient-to-br from-paleGreen to-white">
      <SideNav />
      <div className="flex flex-col flex-1">
        <TopBar />
        <div
          className={`flex-1 overflow-auto transition-all duration-300 ease-in-out ${
            isOpen ? 'ml-60' : 'ml-16'
          }`}
        >
          <RouterProvider router={appRouter} />
        </div>
      </div>
    </div>
  );
};

export default App;
