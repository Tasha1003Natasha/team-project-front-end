import { createSlice } from '@reduxjs/toolkit';
import { theoryTest, techTest } from './tests-operations';
import { testInitialState } from './test-initialState';

const testSlice = createSlice({
  name: 'test',
  initialState: testInitialState,

  extraReducers: {
    [theoryTest.fulfilled]: (state, { payload }) => {
      state.testTheory = payload;
    },
    [techTest.fulfilled]: (state, { payload }) => {
      state.testTech = payload;
    },
  },
});
export const testReducer = testSlice.reducer;
