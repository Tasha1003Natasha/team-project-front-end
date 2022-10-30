import { createSlice } from '@reduxjs/toolkit';
import { theoryTest, techTest, results } from './tests-operations';
import { testInitialState } from './test-initialState';

const testSlice = createSlice({
  name: 'test',
  initialState: testInitialState,

  extraReducers: {
    [theoryTest.fulfilled]: (state, { payload }) => {
      state.testTheory = payload;
      state.testTech = [];
    },
    [techTest.fulfilled]: (state, { payload }) => {
      state.testTech = payload;
      state.testTheory = [];
    },
    [results.fulfilled]: (state, { payload }) => {
      state.results.correct = payload.correct;
      state.results.incorrect = payload.incorrect;
    },
  },
});
export const testReducer = testSlice.reducer;
