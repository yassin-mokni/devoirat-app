import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { adminLogin } from 'src/store/slices/auth';
import { Button, TextField, Box, FormHelperText, Alert } from '@mui/material';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import ARROW from 'src/assets/images/icons/ArrowRightAuth.svg';

const AdminLoginView = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const isMountedRef = useIsMountedRef();

  return (
    <main className="auth-view">
      <h1 className="title">Connexion</h1>
      <Formik
        initialValues={{
          email: 'admin@example.com',
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
            dispatch(adminLogin({ email, password }));
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
              Connexion
            </Button>
          </form>
        )}
      </Formik>
    </main>
  );
};

export default AdminLoginView;
