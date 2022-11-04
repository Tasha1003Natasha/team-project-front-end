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
    // [theoryTest.fulfilled]: (state, { payload }) => {
    //   state.testTheory = payload;
    //   state.testTech = [];
    // },
    // [techTest.fulfilled]: (state, { payload }) => {
    //   state.testTech = payload;
    //   state.testTheory = [];
    // },
    [results.fulfilled]: (state, { payload }) => {
      state.results.correct = payload.correct;
      state.results.incorrect = payload.incorrect;
    },
    [getTest.rejected]: (state, { payload }) => {
      state.currentTest = [];
    },
    // [theoryTest.rejected]: (state, { payload }) => {
    //   state.testTheory = [];
    // },
  },
});
export const testReducer = testSlice.reducer;
