import { AuthContext } from "@/auth";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);

  return logged ? <Navigate to="/" /> : children;
};
