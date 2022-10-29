import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, signIn } from 'redux/auth/auth-operations';
import { results } from './results-operations';

const initialState = {
  results: null,
};

const resultsSlice = createSlice({
  name: 'results',
  initialState,
  extraReducers: {
    [results.fulfilled]: (state, { payload }) => {
      state.results = payload;
    },
    [signIn.fulfilled]: (state, { payload }) => {
      state.results = payload.results;
    },

    [logIn.fulfilled]: (state, { payload }) => {
      state.results = payload.resultsData;
    },

    [logOut.fulfilled]: (state, { payload }) => {
      state.results = {};
    },
  },
});

export const resultsReducer = resultsSlice.reducer;
