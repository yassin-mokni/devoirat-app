import { Outlet } from 'react-router-dom';
import AuthGuard from 'src/components/AuthGuard';
import Sidebar from './Sidebar';
// import Header from './Header';

const AdminDashboardLayout = () => {
  return (
    <AuthGuard>
      <div className="admin-dash-layout">
        <Sidebar />
        <div className="container">
          {/* <Header /> */}
          <Outlet />
        </div>
      </div>
    </AuthGuard>
  );
};

export default AdminDashboardLayout;
