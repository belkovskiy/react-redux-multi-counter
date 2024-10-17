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
  name: 'counters',
  initialState,
  reducers: {
    addCounter: (state) => {
      const newCounter: CounterState = {
        id: Date.now(),
        value: 0,
      };
      state.counters.push(newCounter);
    },
    increment: (state, action: PayloadAction<number>) => {
      const counter = state.counters.find(c => c.id === action.payload);
      if (counter) {
        counter.value += 1;
      }
    },

    decrement: (state, action: PayloadAction<number>) => {
      const counter = state.counters.find(c => c.id === action.payload);
      if (counter) {
        counter.value -= 1;
      }
    },
  },
});

export const { addCounter, increment, decrement } = countersSlice.actions;

export default countersSlice.reducer;