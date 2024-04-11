import { Navigate, Route, Routes } from 'react-router-dom';
import { CartProvider } from '../../contexts/CartContext';
import MainLayout from '../common/MainLayout';
import FeedPage from './FeedPage';
import ProductPage from './ProductPage';
import CartPage from './CartPage';
import ProfilePage from './ProfilePage';
import PickPointsPage from './PickPointsPage';
import NotFoundPage from '../common/NotFoundPage';
import OrderPage from './OrderPage';
import PaymentPage from './PaymentPage';

const ClientRoutine = () => {
  return (
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
          <Route path="/order" element={<OrderPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </CartProvider>
  );
};
export default ClientRoutine;
