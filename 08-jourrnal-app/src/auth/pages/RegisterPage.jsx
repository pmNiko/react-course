import { Link as RouterLink } from 'react-router-dom';
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { AuthLayout } from '@auth/layout';
import { AuthPaths } from '@auth/paths';
import { useForm } from '@/hooks';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startRegisterUserWithEmailAndPassword } from '@/store/auth';

const initialFormData = {
  email: '',
  password: '',
  displayName: '',
};

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe tener una @'],
  password: [
    (value) => value.length >= 6,
    'La contraseña debe tener al menos 6 caracteres',
  ],
  displayName: [(value) => value.length >= 1, 'El nombre es requerido'],
};

export const RegisterPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthetication = useMemo(
    () => status === 'checking',
    [status]
  );
  const dispatch = useDispatch();
  const [formSubmitted, setformSubmitted] = useState(false);
  const {
    email,
    password,
    displayName,
    onInputChange,
    formState,
    isFormValid,
    displayNameIsValid,
    emailIsValid,
    passwordIsValid,
  } = useForm(initialFormData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    setformSubmitted(true);

    if (!isFormValid) return;

    dispatch(startRegisterUserWithEmailAndPassword(formState));
  };

  return (
    <AuthLayout title="Register">
      <h1>FormValid {isFormValid ? 'valid' : 'invalid'}</h1>
      <form onSubmit={onSubmit} noValidate>
        <Grid container mt={1}>
          <Grid item xs={12} mt={2}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nikolas Paneblanco"
              fullWidth
              value={displayName}
              name="displayName"
              onChange={onInputChange}
              error={formSubmitted && !!displayNameIsValid}
              helperText={formSubmitted && displayNameIsValid}
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Correo@google.com"
              fullWidth
              value={email}
              name="email"
              onChange={onInputChange}
              error={formSubmitted && !!emailIsValid}
              helperText={formSubmitted && emailIsValid}
            />
          </Grid>

          <Grid item xs={12} mt={2}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="********"
              fullWidth
              value={password}
              name="password"
              onChange={onInputChange}
              error={formSubmitted && !!passwordIsValid}
              helperText={formSubmitted && passwordIsValid}
            />
          </Grid>

          {/* Grid buttons */}
          <Grid container spacing={2} my={2}>
            <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12}>
              <Button
                disabled={isCheckingAuthetication}
                type="submit"
                variant="contained"
                fullWidth
              >
                Registrarse
              </Button>
            </Grid>
          </Grid>
          {/* Grid buttons */}

          <Grid container direction="row" justifyContent="end">
            <Typography mr={2}>¿Ya tienes una cuenta?</Typography>
            <Link
              component={RouterLink}
              color="inherit"
              to={AuthPaths.Login.absolute}
            >
              Regresar al Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
