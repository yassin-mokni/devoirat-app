import { Outlet } from 'react-router-dom';

const HomeView = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default HomeView;
