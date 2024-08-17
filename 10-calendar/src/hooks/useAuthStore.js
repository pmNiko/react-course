import { useDispatch, useSelector } from 'react-redux';
import {
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout,
} from '../store/auth/authSlice';
import { calendarApi } from '../api';
import { onLogoutCalendar } from '../store/calendar/calendarSlice';

export const useAuthStore = () => {
  const dispatch = useDispatch();

  const { status, user, errorMessage } = useSelector((state) => state.auth);

  const startSignIn = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const resp = await calendarApi.post('/auth', { email, password });
      const { uid, name, token } = resp.data;
      localStorage.setItem('token', token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(onLogin({ uid, name, email }));
    } catch (error) {
      dispatch(onLogout(error.response.data?.msg || '--'));
      setTimeout(() => {
        console.log(error);
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startSignUp = async ({ name: username, email, password }) => {
    dispatch(onChecking());
    try {
      const resp = await calendarApi.post('/auth/new', {
        name: username,
        email,
        password,
      });
      const { uid, name, token } = resp.data;
      localStorage.setItem('token', token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(onLogin({ uid, name, email }));
    } catch (error) {
      dispatch(onLogout('Error en el alta de usuario'));
      setTimeout(() => {
        console.log(error);
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const checkAuthToken = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) return dispatch(onLogout());

      const resp = await calendarApi.post('/auth/renew');
      const data = resp.data;
      localStorage.setItem('token', token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(onLogin({ uid: data.uid, name: data.name }));
    } catch (error) {
      console.log(error);
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const onSignOut = () => {
    localStorage.clear();
    dispatch(onLogoutCalendar());
    dispatch(onLogout());
  };

  return {
    // ?Properties
    errorMessage,
    status,
    user,

    //* Methods
    checkAuthToken,
    startSignIn,
    startSignUp,
    onSignOut,
  };
};
