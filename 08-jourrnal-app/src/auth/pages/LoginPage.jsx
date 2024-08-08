import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { useForm } from '@/hooks';
import {
  startGoogleSignIn,
  startUserEmailAndPasswordSignIn,
} from '@/store/auth';
import { AuthLayout } from '@auth/layout';
import { AuthPaths } from '@auth/paths';

const initialFormData = {
  email: '',
  password: '',
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { email, password, onInputChange, formState } =
    useForm(initialFormData);

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(startUserEmailAndPasswordSignIn(formState));
  };

  const onGoogleSignIn = () => {
    // console.info('Login on Google sign-in');
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form
        role="form"
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container mt={1}>
          <Grid item xs={12} mt={2}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} mt={2}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="********"
              fullWidth
              name="password"
              inputProps={{
                'data-testid': 'password',
              }}
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container mt={2}>
            <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
              <Alert
                sx={{ display: errorMessage ? 'show' : 'none' }}
                severity="error"
              >
                {errorMessage}
              </Alert>
            </Grid>
          </Grid>

          {/* Grid buttons */}
          <Grid container spacing={2} my={2}>
            <Grid item xs={12} sm={6}>
              <Button
                aria-label="login-btn"
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} textAlign="center">
              <Button
                aria-label="google-btn"
                disabled={isAuthenticating}
                onClick={onGoogleSignIn}
                variant="contained"
                fullWidth
              >
                <Google />
                <Typography ml={1}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          {/* Grid buttons */}

          <Grid container direction="row" justifyContent="end">
            <Link
              component={RouterLink}
              color="inherit"
              to={AuthPaths.Register.absolute}
            >
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
