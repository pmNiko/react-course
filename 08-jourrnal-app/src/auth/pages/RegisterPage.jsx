import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '@auth/layout';
import { AuthPaths } from '@auth/paths';
import { useForm } from '@/hooks';
import { useState } from 'react';

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
              helperText={displayNameIsValid}
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
              helperText={emailIsValid}
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
              helperText={passwordIsValid}
            />
          </Grid>

          {/* Grid buttons */}
          <Grid container spacing={2} my={2}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
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
