import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainLayout from 'src/layouts/MainLayout';
import AuthLayout from 'src/layouts/AuthLayout';
import DashboardLayout from 'src/layouts/DashboardLayout';
import LoadingScreen from 'src/components/LoadingScreen';

const LoginView = lazy(() => import('src/views/auth/LoginView'));
const NotFoundView = lazy(() => import('src/views/NotFoundView'));

const RenderRoutes = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {!isAuthenticated && (
          <Route path="/" element={<MainLayout />}>
            <Route index element={<>Home</>} />
            <Route path="*" element={<NotFoundView />} />
          </Route>
        )}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" />} />
          <Route path="login" element={<>Login</>} />
          <Route path="*" element={<NotFoundView />} />
        </Route>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<>Dashboard</>} />
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RenderRoutes;
