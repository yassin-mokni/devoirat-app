import { Outlet, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from 'src/store/slices/auth';
import GuestGuard from 'src/components/GuestGuard';

const AuthLayout = () => {
  const dispatch = useDispatch();
  return (
    <GuestGuard>
      <p>Auth</p>
      <Link to="/">Home</Link>
      <Link to="/auth/login">Login</Link>
      <Link to="/auth/register">Register</Link>
      <Link to="/auth/xyz">Xyz</Link>
      <button
        onClick={() =>
          dispatch(login({ email: 'john.doe@example.com', password: 'secret' }))
        }
      >
        Login
      </button>
      <Outlet />
    </GuestGuard>
  );
};

export default AuthLayout;
