import { AuthLayout } from "@auth/layout";
import { AuthPaths } from "@auth/paths";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container mt={1}>
          <Grid item xs={12} mt={2}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nikolas Paneblanco"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Correo@google.com"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} mt={2}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="********"
              fullWidth
            />
          </Grid>

          {/* Grid buttons */}
          <Grid container spacing={2} my={2}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
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
