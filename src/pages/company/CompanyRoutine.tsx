import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../common/MainLayout';
import NotFoundPage from '../common/NotFoundPage';

const CompanyRoutine = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Navigate to="/feed" />} />
        <Route path="/login" element={<Navigate to="/feed" />} />
        <Route path="/register" element={<Navigate to="/feed" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
export default CompanyRoutine;
