import {
  registerUserWithEmailPassword,
  signInUserWithEmailAndPassword,
  signInWithGoogle,
} from '@/firebase/providers';
import { checkingCredentials, login, logout } from './authSlice';

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

// ? Sign In with Google
export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();

    result.ok
      ? dispatch(login(result))
      : dispatch(logout(`${result.errorCode} - ${result.errorMessage}`));
  };
};

// ? Register with Email and Password
export const startRegisterUserWithEmailAndPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });

    result.ok
      ? dispatch(
          login({
            uid: result.uid,
            email,
            displayName,
            photoURL: result.photoURL,
          })
        )
      : dispatch(logout(result.errorMessage));
  };
};

// ? Sign In with Email and Password
export const startUserEmailAndPasswordSignIn = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    console.log(email, password);
    const result = await signInUserWithEmailAndPassword({ email, password });

    result.ok
      ? dispatch(login(result))
      : dispatch(logout(`${result.errorCode} - ${result.errorMessage}`));
  };
};
