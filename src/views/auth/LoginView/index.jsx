import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { login } from 'src/store/slices/auth';
import {
  Divider,
  Button,
  TextField,
  Box,
  FormHelperText,
  FormControlLabel,
  Switch
} from '@mui/material';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import GOOGLE from 'src/assets/images/icons/GoogleAuth.svg';
import FACEBOOK from 'src/assets/images/icons/FacebookAuth.svg';
import ARROW from 'src/assets/images/icons/ArrowRightAuth.svg';

const LoginView = () => {
  const dispatch = useDispatch();
  const isMountedRef = useIsMountedRef();

  return (
    <main className="auth-view">
      <h1 className="title">Connexion</h1>
      <div className="socialAuth">
        <Button variant="contained" className="de-btn co-facebook">
          <img src={FACEBOOK} alt="Picture of the author" />
        </Button>
        <Button variant="contained" className="de-btn co-google">
          <img src={GOOGLE} alt="Picture of the author" />
        </Button>
      </div>
      <Divider className="divider">Ou</Divider>
      <Formik
        initialValues={{
          email: 'john.doe@example.com',
          password: 'secret',
          remember_me: true,
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            const { email, password } = values;
            dispatch(login({ email, password }));
            if (isMountedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
            }
          } catch (err) {
            console.error(err);
            if (isMountedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          values
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <TextField
              className="input"
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              placeholder="Email"
              margin="normal"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              value={values.email}
              variant="outlined"
              size="small"
            />
            <TextField
              className="input"
              error={Boolean(touched.password && errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
              placeholder="Mot de passe"
              margin="normal"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
              value={values.password}
              variant="outlined"
              size="small"
            />
            <FormControlLabel
              className="loginControlLabel"
              control={<Switch />}
              label="Se souvenir de moi"
              labelPlacement="start"
              onChange={handleChange}
              value={values.remember_me}
              checked={values.remember_me}
              name="remember_me"
            />

            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
            <Button
              variant="contained"
              className="de-btn rounded sz-l co-primary"
              endIcon={<img src={ARROW} alt="Picture of the author" />}
              type="submit"
              fullWidth
            >
              Connexion
            </Button>
          </form>
        )}
      </Formik>
      <div className="link">
        <span>Vous n'avez pas encore de compte?</span>
        <Link to="/auth">Créer un compte</Link>
      </div>
      <div className="link">
        <span>Mot de passe oublié?</span>
        <Link to="/auth">Réinitialiser votre mot de passe</Link>
      </div>
    </main>
  );
};

export default LoginView;
