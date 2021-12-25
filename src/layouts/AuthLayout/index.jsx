import { Outlet, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from 'src/store/slices/auth';
import GuestGuard from 'src/components/GuestGuard';
import SplashScreen from 'src/components/SplashScreen';

const AuthLayout = () => {
  const dispatch = useDispatch();
  return (
    <GuestGuard>
      <div className="auth-layout">
        <SplashScreen />
        <Outlet />
      </div>
    </GuestGuard>
  );
};

export default AuthLayout;
