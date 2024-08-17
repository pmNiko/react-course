import { configureStore } from '@reduxjs/toolkit';
import { renderHook, act, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useAuthStore } from '../../src/hooks/useAuthStore';
import { authSlice, STATUS } from '../../src/store/auth/authSlice';
import {
  initialAuthSliceState,
  notAuthenticatedAuthSliceState,
} from '../fixtures/authState';
import { registerUser, testUserCredentials } from '../fixtures/testUser';
import { calendarApi } from '../../src/api';

const getMockStore = (initialState) => {
  return configureStore({
    reducer: {
      auth: authSlice.reducer,
    },
    preloadedState: {
      auth: { ...initialState },
    },
  });
};

describe('Pruebas en el useAuthStore', () => {
  beforeEach(() => localStorage.clear());

  test('Debe retornar el state por defecto', () => {
    const mockStore = getMockStore({ ...initialAuthSliceState });

    const { result } = renderHook(useAuthStore, {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    expect(result.current).toEqual({
      errorMessage: undefined,
      status: 'checking',
      user: {},
      checkAuthToken: expect.any(Function),
      startSignIn: expect.any(Function),
      startSignUp: expect.any(Function),
      onSignOut: expect.any(Function),
    });
  });

  test('"startSignIn" debe de realizar el login correctamente', async () => {
    const mockStore = getMockStore({ ...notAuthenticatedAuthSliceState });
    const { result } = renderHook(useAuthStore, {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    // await act(
    //   async () => await result.current.startSignIn(testUserCredentials)
    // );
    await waitFor(() => result.current.startSignIn(testUserCredentials));

    const { errorMessage, status, user } = result.current;

    expect({ errorMessage, status, user }).toEqual({
      errorMessage: undefined,
      status: STATUS.Authenticated,
      user: {
        uid: '66bd2a21482fb0d0d73d8dc1',
        name: 'nikolas',
        email: 'nikolas@gmail.com',
      },
    });

    expect(localStorage.getItem('token')).toEqual(expect.any(String));
    expect(localStorage.getItem('token-init-date')).toEqual(expect.any(String));
  });

  test('"startSignIn" debe de fallar la autenticación', async () => {
    const mockStore = getMockStore({ ...notAuthenticatedAuthSliceState });
    const { result } = renderHook(useAuthStore, {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    await waitFor(() =>
      result.current.startSignIn({
        email: 'nikolas@gmail.com',
        password: '123456789',
      })
    );

    const { errorMessage, status, user } = result.current;

    expect({ errorMessage, status, user }).toEqual({
      errorMessage: expect.any(String),
      status: STATUS.No_Authenticated,
      user: {},
    });

    expect(localStorage.getItem('token')).toBeNull();
    expect(localStorage.getItem('token-init-date')).toBeNull();

    waitFor(() => expect(result.current.errorMessage).toBeUndefined());
  });

  test('"startSignUp" debe de crear un nuevo usuario', async () => {
    const mockStore = getMockStore({ ...notAuthenticatedAuthSliceState });
    const { result } = renderHook(useAuthStore, {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    const spy = jest.spyOn(calendarApi, 'post').mockReturnValue({
      data: {
        ok: true,
        uid: '66c120bb91a51222f4dc083e',
        name: registerUser.name,
        token: 'sothing-token',
      },
    });

    await waitFor(() => result.current.startSignUp({ ...registerUser }));

    const { errorMessage, status, user } = result.current;

    expect({ errorMessage, status, user }).toEqual({
      errorMessage: undefined,
      status: STATUS.Authenticated,
      user: {
        email: registerUser.email,
        name: registerUser.name,
        uid: expect.any(String),
      },
    });

    spy.mockRestore();
  });

  test('"startSignUp" debe de fallar en la creación', async () => {
    const mockStore = getMockStore({ ...notAuthenticatedAuthSliceState });
    const { result } = renderHook(useAuthStore, {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    await waitFor(() => result.current.startSignUp({ ...testUserCredentials }));

    const { errorMessage, status, user } = result.current;

    expect({ errorMessage, status, user }).toEqual({
      errorMessage: expect.any(String),
      status: STATUS.No_Authenticated,
      user: {},
    });
  });

  test('"checkAuthToken" debe de fallar si no hay token', async () => {
    const mockStore = getMockStore({ ...initialAuthSliceState });
    const { result } = renderHook(useAuthStore, {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    await waitFor(() => result.current.checkAuthToken());

    const { errorMessage, status, user } = result.current;

    expect({ errorMessage, status, user }).toEqual({
      errorMessage: undefined,
      status: STATUS.No_Authenticated,
      user: {},
    });
  });

  test('"checkAuthToken" debe de autenticar si hay un token', async () => {
    const { data } = await calendarApi.post('/auth', testUserCredentials);
    localStorage.setItem('token', data.token);

    const mockStore = getMockStore({ ...initialAuthSliceState });
    const { result } = renderHook(useAuthStore, {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    await waitFor(() => result.current.checkAuthToken());

    const { errorMessage, status, user } = result.current;

    expect({ errorMessage, status, user }).toEqual({
      errorMessage: undefined,
      status: STATUS.Authenticated,
      user: expect.any(Object),
    });
  });

  test('"checkAuthToken" debe de fallar si hay un token expirado', async () => {
    localStorage.setItem('token', 'expired-token');

    const mockStore = getMockStore({ ...initialAuthSliceState });
    const { result } = renderHook(useAuthStore, {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    await waitFor(() => result.current.checkAuthToken());

    const { errorMessage, status, user } = result.current;

    expect({ errorMessage, status, user }).toEqual({
      errorMessage: undefined,
      status: STATUS.No_Authenticated,
      user: {},
    });
  });
});
