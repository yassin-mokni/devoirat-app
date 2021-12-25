import { Link } from 'react-router-dom';
import LOGO from 'src/assets/images/logo/Lockup-White.svg';

const SplashScreen = ({ path = '/' }) => {
  return (
    <main className="splash-screen">
      <span className="pattern top"></span>
      <Link to={path}>
        <img className="logo" alt="Logo of our website" src={LOGO} />
      </Link>
      <span className="pattern bottom"></span>
    </main>
  );
};

export default SplashScreen;
