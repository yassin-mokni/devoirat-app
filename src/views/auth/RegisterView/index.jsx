import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { register } from 'src/store/slices/auth';
import {
  Divider,
  Button,
  TextField,
  Box,
  FormHelperText,
  Alert
} from '@mui/material';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import GOOGLE from 'src/assets/images/icons/GoogleAuth.svg';
import FACEBOOK from 'src/assets/images/icons/FacebookAuth.svg';
import ARROW from 'src/assets/images/icons/ArrowRightAuth.svg';

const RegisterView = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const isMountedRef = useIsMountedRef();

  return (
    <main className="auth-view">
      <h1 className="title">S'inscrire</h1>
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
          email: 'test1@example.com',
          password: 'secret',
          passwordConfirmation: 'secret',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
          password: Yup.string().max(255).required('Password is required'),
          passwordConfirmation: Yup.string()
            .max(255)
            .required('Passwords must match')
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            const { email, password } = values;
            dispatch(register({ email, password }));
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

            <TextField
              className="input register-last-input"
              error={Boolean(
                touched.passwordConfirmation && errors.passwordConfirmation
              )}
              fullWidth
              helperText={
                touched.passwordConfirmation && errors.passwordConfirmation
              }
              placeholder="Confirmation mot de passe"
              margin="normal"
              name="passwordConfirmation"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
              value={values.passwordConfirmation}
              variant="outlined"
              size="small"
            />

            {error && (
              <Alert className="error-box" severity="error">
                {error}
              </Alert>
            )}

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
              S'inscrire
            </Button>
          </form>
        )}
      </Formik>
      <div className="link">
        <span>Vous avez déjà un compte?</span>
        <Link to="/auth">Se connecter à votre compte</Link>
      </div>
    </main>
  );
};

export default RegisterView;
