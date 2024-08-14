import { createSlice } from '@reduxjs/toolkit';

export const STATUS = {
  No_Authenticated: 'no-authenticated',
  Authenticated: 'authenticated',
  Checking: 'checking',
};

const initialState = {
  status: STATUS.Checking,
  user: {},
  errorMessage: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onChecking: (state) => {
      state.status = STATUS.Checking;
      state.user = {};
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = STATUS.Authenticated;
      state.user = payload;
      state.errorMessage = undefined;
    },
    onLogout: (state, { payload }) => {
      state.status = STATUS.No_Authenticated;
      state.user = {};
      state.errorMessage = payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, clearErrorMessage } =
  authSlice.actions;
