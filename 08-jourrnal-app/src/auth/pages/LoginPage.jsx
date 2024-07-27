import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Google, Password } from '@mui/icons-material';
import {
  Button,
  CircularProgress,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { AuthPaths } from '@auth/paths';
import { AuthLayout } from '@auth/layout';
import { useForm } from '@/hooks';
import { checkingAuthentication, startGoogleSignIn } from '@/store/auth';

export const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { email, password, onInputChange, formState } = useForm({
    email: 'nikolas090189@gmail.com',
    password: 'qwerty135678',
  });

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingAuthentication());
    console.log(formState);
  };

  const onGoogleSignIn = () => {
    console.info('Login on Google sign-in');
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
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
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          {/* Grid buttons */}
          <Grid container spacing={2} my={2}>
            <Grid item xs={12} sm={6}>
              <Button
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
