import { journalSlice } from '@/store/journal';
import { notAuthenticatedState } from './authFixtures';
import { initialState } from './journalFixtures';

import { authSlice } from '@/store/auth';
import { configureStore } from '@reduxjs/toolkit';

export const getFixtureStore = (
  initialStateAuth = notAuthenticatedState,
  initialStateJournal = initialState
) => {
  const store = configureStore({
    reducer: {
      auth: authSlice.reducer,
      journal: journalSlice.reducer,
    },
    preloadedState: {
      auth: initialStateAuth,
      journal: initialStateJournal,
    },
  });

  return store;
};
