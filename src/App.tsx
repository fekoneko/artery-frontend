import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Reg from './pages/Reg';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <NotFound />
  },
  {
    path: '/reg',
    element: <Reg />
  },
  {
    path:  '/auth',
    element: <Auth />
  }
])

const App = () => {
  return (
    <div className="relative h-dvh w-screen overflow-hidden bg-slate-800 text-slate-500">
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
