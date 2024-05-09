import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import PropTypes from "prop-types";
import { authReducer } from "./authReducer";
import { types } from "@auth/types";

// const initialState = {
//   logged: false,
//   user: null,
// };

const init = () => {
  const userItem = localStorage.getItem("user");
  const user = JSON.parse(userItem);
  return {
    logged: !!user,
    user,
  };
};

// Componente Proveedor del contexto
// En este vamos a combinar el contexto
// con el reductor de acciones
export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (name = "") => {
    const user = { id: "ABC", name };

    localStorage.setItem("user", JSON.stringify(user));

    dispatch({ type: types.login, payload: user });
  };

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: types.logout });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element,
};
