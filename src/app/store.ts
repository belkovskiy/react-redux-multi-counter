import { configureStore } from '@reduxjs/toolkit';
import countersReduser from '../features/counters/countersSlice';

export const store = configureStore({
  reducer: {
    counters: countersReduser
  },
});

export type RootState = ReturnType<typeof store.getState>;
