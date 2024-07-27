import { signInWithGoogle } from '@/firebase/providers';
import { checkingCredentials, login, logout } from './authSlice';

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();

    result.ok
      ? dispatch(login(result))
      : dispatch(logout(`${result.errorCode} - ${result.errorMessage}`));
  };
};
