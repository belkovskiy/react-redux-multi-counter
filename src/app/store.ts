import { configureStore } from '@reduxjs/toolkit';
import countersReducer from '../features/counters/countersSlice';

export const store = configureStore({
  reducer: {
    allCounters: countersReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
