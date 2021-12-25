import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initialise, setSession } from 'src/store/slices/auth';
import jwtDecode from 'jwt-decode';
import axios from 'src/utils/axios';

const Auth = ({ children }) => {
  const { isInitialised } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const isValidToken = (token) => {
    if (!token) {
      return false;
    }

    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
  };

  useEffect(async () => {
    try {
      const token = window.localStorage.getItem('token');
      if (token && isValidToken(token)) {
        setSession(token);
        const response = await axios.get('/api/v1/auth/me');
        const user = response.data;
        dispatch(initialise({ isAuthenticated: true, user }));
      } else {
        dispatch(initialise({ isAuthenticated: false, user: null }));
      }
    } catch (err) {
      console.error(err);
      dispatch(initialise({ isAuthenticated: false, user: null }));
    }
  }, []);

  if (!isInitialised) {
    return <>SplashScreen</>;
  }

  return <>{children}</>;
};

export default Auth;
