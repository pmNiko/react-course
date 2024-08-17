import { STATUS } from '../../src/store/auth/authSlice';

export const initialAuthSliceState = {
  status: STATUS.Checking,
  user: {},
  errorMessage: undefined,
};

export const userAuthenticated = {
  uid: 'act9087dfñ2',
  name: 'nikolas',
};

export const authenticatedAuthSliceState = {
  status: STATUS.Authenticated,
  user: userAuthenticated,
  errorMessage: undefined,
};

export const notAuthenticatedAuthSliceState = {
  status: STATUS.No_Authenticated,
  user: {},
  errorMessage: undefined,
};
