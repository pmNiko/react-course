import {
  authSlice,
  checkingCredentials,
  login,
  logout,
  STATUS,
} from '@/store/auth/authSlice';
import {
  authenticatedState,
  demoUser,
  initialState,
  notAuthenticatedState,
} from '../../fixtures/authFixtures';

describe('Pruebas en el authSlice', () => {
  test('Debe de regresar el estado inicial y llamarse el "auth"', () => {
    const state = authSlice.reducer(initialState, {});

    expect(state).toEqual(initialState);
    expect(authSlice.name).toBe('auth');
  });

  test('El estado inicial debe estar en "checking"', () => {
    const state = authSlice.reducer(initialState, {});

    expect(state.status).toBe(STATUS.Checking);
  });

  test('Debe de realizar la autenticación', () => {
    const state = authSlice.reducer(initialState, login(demoUser));

    expect(state.status).toBe(STATUS.Authenticated);
    expect(state).toEqual(authenticatedState);
  });

  test('Debe de realizar el logout sin argumentos', () => {
    const state = authSlice.reducer(authenticatedState, {});

    expect(state).toBe(authenticatedState);

    const newState = authSlice.reducer(state, logout);

    expect(newState).toEqual(notAuthenticatedState);
  });

  test('Debe de realizar el logout con mensaje de error', () => {
    const newState = authSlice.reducer(
      authenticatedState,
      logout({ errorMessage: 'Error Logout not found' })
    );

    expect(newState).toEqual({
      ...notAuthenticatedState,
      errorMessage: 'Error Logout not found',
    });
  });

  test('Debe de cambiar el estado a "checking"', () => {
    const state = authSlice.reducer(authenticatedState, checkingCredentials);

    expect(state.status).toBe(STATUS.Checking);
  });
});
