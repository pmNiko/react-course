import { createSlice } from '@reduxjs/toolkit';

const STATUS = {
  No_Authenticated: 'no-authenticated',
  Authenticated: 'authenticated',
  Checking: 'checking',
};

const initialState = {
  status: STATUS.Checking,
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { uid, email, displayName, photoURL } = action.payload;

      state.uid = uid;
      state.email = email;
      state.displayName = displayName;
      state.photoURL = photoURL;
      state.errorMessage = null;
      state.status = STATUS.Authenticated;
    },
    logout: (state, action) => {
      initialState, (state.errorMessage = action.payload);
      state.status = STATUS.No_Authenticated;
    },
    checkingCredentials: (state) => {
      state.status = STATUS.Checking;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
