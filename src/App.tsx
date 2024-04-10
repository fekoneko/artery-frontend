import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { useUser } from './lib/auth';
import LoginPage from './pages/auth/LoginPage';
import RegistrationPage from './pages/auth/RegistrationPage';
import NotFoundPage from './pages/main/NotFoundPage';
import FeedPage from './pages/main/FeedPage';
import LoadingPage from './pages/LoadingPage';
import MainLayout from './pages/main/MainLayout';
import CartPage from './pages/main/CartPage';
import ProfilePage from './pages/main/ProfilePage';
import ProductPage from './pages/main/ProductPage';
import PickPointsPage from './pages/main/PickPointsPage';
import { CartProvider } from './contexts/CartContext';

const App = () => {
  const user = useUser({ retry: false });

  return (
    <div className="relative h-dvh w-screen overflow-hidden bg-slate-800 text-slate-400">
      <Routes>
        {user.isLoading && (
          <Route>
            <Route index element={<LandingPage />} />
            <Route path="*" element={<LoadingPage />} />
          </Route>
        )}

        {user.isError && (
          <Route>
            <Route index element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Route>
        )}

        {user.isSuccess && (
          <Route
            path="*"
            element={
              <CartProvider>
                <Routes>
                  <Route element={<MainLayout />}>
                    <Route index element={<Navigate to="/feed" />} />
                    <Route path="/login" element={<Navigate to="/feed" />} />
                    <Route path="/register" element={<Navigate to="/feed" />} />
                    <Route path="/feed" element={<FeedPage />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/pickpoints" element={<PickPointsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Route>
                </Routes>
              </CartProvider>
            }
          />
        )}
      </Routes>
    </div>
  );
};
export default App;
