import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainLayout from 'src/layouts/MainLayout';
import AuthLayout from 'src/layouts/AuthLayout';
import DashboardLayout from 'src/layouts/DashboardLayout';
import LoadingScreen from 'src/components/LoadingScreen';

const LoginView = lazy(() => import('src/views/auth/LoginView'));
const NotFoundView = lazy(() => import('src/views/NotFoundView'));

const GuestHomeView = lazy(() => import('src/views/guest/HomeView'));

const UserHomeView = lazy(() => import('src/views/user/HomeView'));

const RenderRoutes = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {!isAuthenticated && (
          <Route path="/" element={<MainLayout />}>
            <Route index element={<GuestHomeView />} />
            <Route path="*" element={<NotFoundView />} />
          </Route>
        )}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" />} />
          <Route path="login" element={<LoginView />} />
          <Route path="*" element={<NotFoundView />} />
        </Route>
        {user?.role?.name === 'User' && (
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<UserHomeView />} />
            <Route path="*" element={<NotFoundView />} />
          </Route>
        )}
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<UserHomeView />} />
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RenderRoutes;
