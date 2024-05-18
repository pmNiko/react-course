import { LoginPage, RegisterPage } from "@auth/pages";
import { AuthPaths } from "@auth/paths";
import { Navigate, Route, Routes } from "react-router-dom";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path={AuthPaths.Login.relative} element={<LoginPage />} />
      <Route path={AuthPaths.Register.relative} element={<RegisterPage />} />

      <Route path="/*" element={<Navigate to={AuthPaths.Login.absolute} />} />
    </Routes>
  );
};
