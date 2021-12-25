import LOGO from 'src/assets/images/logo/Lockup-White.svg';

const SplashScreen = () => {
  return (
    <main className="splash-screen">
      <span className="pattern top"></span>
      <img className="logo" alt="Logo of our website" src={LOGO} />
      <span className="pattern bottom"></span>
    </main>
  );
};

export default SplashScreen;
