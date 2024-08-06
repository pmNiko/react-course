import { STATUS } from '@/store/auth';

export const demoUser = {
  uid: 'ABC123',
  email: 'demo@google.com',
  displayName: 'Demo User',
  photoURL: 'https://demo.jpg',
};

export const initialState = {
  status: STATUS.Checking,
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authenticatedState = {
  status: STATUS.Authenticated,
  uid: demoUser.uid,
  email: demoUser.email,
  displayName: demoUser.displayName,
  photoURL: demoUser.photoURL,
  errorMessage: null,
};

export const notAuthenticatedState = {
  status: STATUS.No_Authenticated,
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};
