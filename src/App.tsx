import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { useUser } from './lib/auth';
import { useEffect } from 'react';
import LoginPage from './pages/auth/LoginPage';
import RegistrationPage from './pages/auth/RegistrationPage';
import NotFoundPage from './pages/main/NotFoundPage';
import FeedPage from './pages/main/FeedPage';
import LoadingPage from './pages/LoadingPage';

const App = () => {
  const user = useUser();

  useEffect(() => {
    if (user.isStale && user.failureCount < 1) user.refetch();
  }, [user]);

  return (
    <div className="relative h-dvh w-screen overflow-hidden bg-slate-800 text-slate-400">
      <Routes>
        <Route index element={<LandingPage />} />

        {user.isLoading && <Route path="*" element={<LoadingPage />} />}

        {user.isError &&
          (user.error?.response?.status === 401 ? (
            // Unauthorized
            <Route>
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegistrationPage />} />
              <Route path="*" element={<Navigate to="login" />} />
            </Route>
          ) : (
            // Other status code or network error
            <Route path="*" element={<Navigate to="" />} />
          ))}

        {user.isSuccess && (
          <Route>
            <Route index element={<Navigate to="feed" />} />
            <Route path="feed" element={<FeedPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        )}
      </Routes>
    </div>
  );
};
export default App;
