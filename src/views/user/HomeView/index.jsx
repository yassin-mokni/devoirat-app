import { useDispatch } from 'react-redux';
import { logout } from 'src/store/slices/auth';

const HomeView = () => {
  const dispatch = useDispatch();
  return (
    <main className="home-view">
      <span onClick={() => dispatch(logout())}>logout</span>
    </main>
  );
};

export default HomeView;
