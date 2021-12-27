import LOGO from 'src/assets/images/logo/Lockup-Color.svg';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <img className="logo" alt="Logo of our website" src={LOGO} />
    </div>
  );
};

export default LoadingScreen;
