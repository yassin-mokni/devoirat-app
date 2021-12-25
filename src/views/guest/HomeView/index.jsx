import { Link } from 'react-router-dom';

const HomeView = () => {
  return (
    <main className="home-view">
      <Link to="/auth">Login</Link>
    </main>
  );
};

export default HomeView;
