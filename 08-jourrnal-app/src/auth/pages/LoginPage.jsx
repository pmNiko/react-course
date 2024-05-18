import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthPaths } from "@auth/paths";
import { AuthLayout } from "@auth/layout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid container mt={1}>
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
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
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
