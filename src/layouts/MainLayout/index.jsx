import { Outlet, Link } from 'react-router-dom';
import GuestGuard from 'src/components/GuestGuard';

const MainLayout = () => {
  return (
    <GuestGuard>
      <p>Main</p>
      <Link to="/">App</Link>
      <Link to="/test">Test</Link>
      <Link to="/auth">Login</Link>
      <Link to="/auth/register">Register</Link>
      <Link to="/auth/xyz">Auth Xyz</Link>
      <Link to="/xyz">Xyz</Link>
      <Outlet />
    </GuestGuard>
  );
};

export default MainLayout;
