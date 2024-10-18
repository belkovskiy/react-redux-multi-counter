import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  id: number,
  value: number
}

interface CountersState {
  counters: CounterState[];
}

const initialState: CountersState = {
  counters: [],
}

const countersSlice = createSlice({
  name: 'allCounters',
  initialState,
  reducers: {
    addCounter: (state, action: PayloadAction<number>) => {
      if (action.payload >= 0) {
        const newCounter: CounterState = {
          id: action.payload,
          value: 0,
        };
        const counter =
          state.counters.find(
            c => c.id === action.payload
          );
        if (!counter) {
          state.counters.push(newCounter);
        }
      }
    },
    increment: (state, action: PayloadAction<number>) => {
      const counter =
        state.counters.find(
          c => c.id === action.payload
        );
      if (counter) {
        counter.value += 1;
      }
    },

    decrement: (state, action: PayloadAction<number>) => {
      const counter =
        state.counters.find(
          c => c.id === action.payload
        );
      if (counter) {
        counter.value -= 1;
      }
    },
    removeCounter: (state, action: PayloadAction<number>) => {
      state.counters =
        state.counters.filter(
          counter => counter.id !== action.payload
        );
    },
    removeAllCounters: (state) => {
      state.counters = [];
    }
  },
});

export const { addCounter, increment, decrement, removeCounter, removeAllCounters } = countersSlice.actions;

export default countersSlice.reducer;