import { Outlet, Link } from 'react-router-dom';
import GuestGuard from 'src/components/GuestGuard';
import SplashScreen from 'src/components/SplashScreen';

const MainLayout = () => {
  return (
    <GuestGuard>
      <SplashScreen path="/auth" />
      <Outlet />
    </GuestGuard>
  );
};

export default MainLayout;
