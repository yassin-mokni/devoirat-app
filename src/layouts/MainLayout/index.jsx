import { Outlet } from 'react-router-dom';
import GuestGuard from 'src/components/GuestGuard';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = () => {
  return (
    <GuestGuard>
      <div className="main-layout">
        <Sidebar />
        <div className="container">
          <Header />
          <Outlet />
        </div>
      </div>
    </GuestGuard>
  );
};

export default MainLayout;
