import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, signIn } from 'redux/auth/auth-operations';
import { userResults } from './results-operations';

const initialState = {
  results: null,
  isLogin: false,
};

const resultsSlice = createSlice({
  name: 'results',
  initialState,
  extraReducers: {
    [userResults.pending]: (state, _) => {
      state.isLogin = false;
    },

    [userResults.fulfilled]: (state, { payload }) => {
      state.isLogin = true;
      state.results = payload;
    },

    [userResults.rejected]: (state, _) => {
      state.isLogin = false;
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
