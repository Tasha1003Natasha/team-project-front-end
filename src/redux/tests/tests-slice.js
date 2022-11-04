import { createSlice } from '@reduxjs/toolkit';
import { results, getTest } from './tests-operations';
import { testInitialState } from './test-initialState';

const testSlice = createSlice({
  name: 'test',
  initialState: testInitialState,

  extraReducers: {
    [getTest.fulfilled]: (state, { payload }) => {
      state.currentTest = payload;
    },

    [results.fulfilled]: (state, { payload }) => {
      state.results.correct = payload.correct;
      state.results.incorrect = payload.incorrect;
    },
    [getTest.rejected]: (state, { payload }) => {
      state.currentTest = [];
    },
  },
});
export const testReducer = testSlice.reducer;
