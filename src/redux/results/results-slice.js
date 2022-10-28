import { createSlice } from '@reduxjs/toolkit';
import { techResults, theoryResults } from './results-operations';

export const initialState = {
  total: null,
  techResults: [],
  theoryResults: [],
};

const resultsSlice = createSlice({
  name: 'results',
  initialState,
  extraReducers: {
    [techResults.fulfilled]: (state, { payload }) => {
      state.techResults = payload;
    },
    [theoryResults.fulfilled]: (state, { payload }) => {
      state.theoryResults = payload;
    },
  },
});
export const resultsReducer = resultsSlice.reducer;
