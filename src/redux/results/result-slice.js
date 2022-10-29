import { createSlice } from '@reduxjs/toolkit';
import { results } from './resalts-operation';

export const initialState = {
  results: 0,
};

const resultsSlice = createSlice({
  name: 'results',
  initialState,
  extraredusers: {
    [results.fulfilled]: (state, { payload }) => {
      state.results = payload;
    },
  },
});

export const resultsReducer = resultsSlice.reducer;
