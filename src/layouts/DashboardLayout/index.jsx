import { Outlet } from 'react-router-dom';
import AuthGuard from 'src/components/AuthGuard';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = () => {
  return (
    <AuthGuard>
      <div className="dashboard-layout">
        <Sidebar />
        <div className="container">
          <Header />
          <Outlet />
        </div>
      </div>
    </AuthGuard>
  );
};

export default DashboardLayout;
