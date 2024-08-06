import { demoUser } from '../../fixtures/authFixtures';
import { checkingCredentials, login, logout } from '@/store/auth';
import {
  checkingAuthentication,
  startGoogleSignIn,
  startRegisterUserWithEmailAndPassword,
  startSignOut,
  startUserEmailAndPasswordSignIn,
} from '@/store/auth/thunks';
import {
  registerUserWithEmailPassword,
  signInUserWithEmailAndPassword,
  signInWithGoogle,
  signOut,
} from '@/firebase/providers';
import { clearNotesLogout } from '@/store/journal';

jest.mock('@/firebase/providers');

describe('Pruebas en AuthThunks', () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('Debe invocar el checkingCredentials', async () => {
    // Se le pasa un callback mocked
    await checkingAuthentication()(dispatch);

    // Se le especifica con que fn llamado el checkingAuthentication
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test('"startGoolgeSignIn" - ok debe de llamar checkingCredentials y login(dataResult)', async () => {
    const loginData = { ok: true, ...demoUser };

    // Le damos valor al mock provider
    await signInWithGoogle.mockResolvedValue(loginData);

    // thunk a testear
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test('"startGoogleSignIn" - error debe de llamar al checkingCredentials y logout con errorMessage', async () => {
    const loginErrorCredentials = {
      ok: false,
      errorCode: '403',
      errorMessage: 'credentials not found.',
    };

    // provider
    await signInWithGoogle.mockResolvedValue(loginErrorCredentials);

    // thunk
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(
      logout(
        `${loginErrorCredentials.errorCode} - ${loginErrorCredentials.errorMessage}`
      )
    );
  });

  test('"startUserEmailAndPasswordSignIn" - ok debe de llamar al checkingCredentials y login(dataResult) ', async () => {
    const loginData = { ok: true, ...demoUser };
    const formData = { email: 'foo@google.com', password: 'ABC123' };

    // provider
    await signInUserWithEmailAndPassword.mockResolvedValue(loginData);

    // thunk
    await startUserEmailAndPasswordSignIn(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test('"startUserEmailAndPasswordSignIn" - error debe de llamar al checkingCredentials y logout(errorMessage) ', async () => {
    const loginData = {
      ok: false,
      errorCode: '403',
      errorMessage: 'credentials not found.',
    };
    const formData = { email: 'foo@google.com', password: 'ABC123' };

    // provider
    await signInUserWithEmailAndPassword.mockResolvedValue(loginData);

    // thunk
    await startUserEmailAndPasswordSignIn(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(
      logout(`${loginData.errorCode} - ${loginData.errorMessage}`)
    );
  });

  test('"startRegisterUserWithEmailAndPassword" - ok debe de llamar al checkingCredentials y login(dataResult)', async () => {
    const loginData = { ok: true, ...demoUser };
    const formData = {
      email: demoUser.email,
      password: demoUser.password,
      displayName: demoUser.displayName,
    };

    await registerUserWithEmailPassword.mockResolvedValue(loginData);

    await startRegisterUserWithEmailAndPassword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(demoUser));
  });

  test('"startRegisterUserWithEmailAndPassword" - error debe de llamar al checkingCredentials y logout(errorMessage)', async () => {
    const loginData = { ok: false, errorMessage: 'Register not available' };
    const formData = {
      email: demoUser.email,
      password: demoUser.password,
      displayName: demoUser.displayName,
    };

    await registerUserWithEmailPassword.mockResolvedValue(loginData);

    await startRegisterUserWithEmailAndPassword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
  });

  test('"startSignOut" - ok debe de llamar al checkingCredentials, clearNotesLogout y logout()', async () => {
    const resultData = { ok: true };

    await signOut.mockResolvedValue(resultData);

    await startSignOut()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
    expect(dispatch).toHaveBeenCalledWith(logout());
  });

  test('"startSignOut" - error debe de llamar al checkingCredentials, clearNotesLogout y login(errorMessage)', async () => {
    const resultData = { ok: false, errorMessage: 'Error signOut action.' };

    await signOut.mockResolvedValue(resultData);

    await startSignOut()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
    expect(dispatch).toHaveBeenCalledWith(logout(resultData.errorMessage));
  });
});
