import { Outlet, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from 'src/store/slices/auth';
import AuthGuard from 'src/components/AuthGuard';

const DashboardLayout = () => {
  const dispatch = useDispatch();
  return (
    <AuthGuard>
      <p>Dash</p>
      <Link to="/">App</Link>
      <Link to="/exams">Exams</Link>
      <Link to="/xyz">Xyz</Link>
      <button onClick={() => dispatch(logout())}>Logout</button>
      <Outlet />
    </AuthGuard>
  );
};

export default DashboardLayout;
