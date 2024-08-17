import {
  authSlice,
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout,
  STATUS,
} from '../../../src/store/auth/authSlice';
import {
  authenticatedAuthSliceState,
  initialAuthSliceState,
  notAuthenticatedAuthSliceState,
} from '../../fixtures/authState';
import { testUserCredentials } from '../../fixtures/testUser';

describe('Pruebas en el authSlice', () => {
  test('Debe de regresar el state inicial', () => {
    expect(authSlice.getInitialState()).toEqual(initialAuthSliceState);
  });

  test('Debe realizar un login', () => {
    const state = authSlice.reducer(
      initialAuthSliceState,
      onLogin(testUserCredentials)
    );

    expect(state.user).toEqual(testUserCredentials);
    expect(state.status).toEqual(STATUS.Authenticated);
  });

  test('Debe realizar el logout', () => {
    const state = authSlice.reducer(authenticatedAuthSliceState, onLogout());

    expect(state).toEqual(notAuthenticatedAuthSliceState);
    expect(state.status).toEqual(STATUS.No_Authenticated);
  });

  test('Debe realizar el logout si no cuenta con las credenciales correctas', () => {
    const errorMessage = 'Las credenciales no son correctas';
    const state = authSlice.reducer(
      initialAuthSliceState,
      onLogout(errorMessage)
    );

    expect(state.status).toEqual(STATUS.No_Authenticated);
    expect(state.errorMessage).toEqual(errorMessage);
  });

  test('Debe realizar el clearMessage', () => {
    const errorMessage = 'Las credenciales no son correctas';
    const state = authSlice.reducer(
      initialAuthSliceState,
      onLogout(errorMessage)
    );

    expect(state.errorMessage).toEqual(errorMessage);

    const newState = authSlice.reducer(state, clearErrorMessage());

    expect(newState.errorMessage).toBeUndefined();
  });

  test('Debe realizar el onCheking', () => {
    const state = authSlice.reducer(
      initialAuthSliceState,
      onLogin(testUserCredentials)
    );

    expect(state.status).toEqual(STATUS.Authenticated);

    const newState = authSlice.reducer(state, onChecking());

    expect(newState.status).toEqual(STATUS.Checking);
  });
});
