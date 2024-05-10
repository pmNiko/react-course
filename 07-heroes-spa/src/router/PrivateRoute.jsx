import { AuthContext } from "@/auth";
import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  useEffect(() => {
    localStorage.setItem("lastPath", pathname + search);
  }, [pathname, search]);

  return logged ? children : <Navigate to="/login" />;
};
