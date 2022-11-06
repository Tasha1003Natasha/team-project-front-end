import { createSlice } from '@reduxjs/toolkit';
import {
  logIn,
  logOut,
  signUp,
  updateToken,
  userCurrent,
} from './auth-operations';

export const initialState = {
  token: '',
  isLogin: false,
  user: {},
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [signUp.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isLogin = true;
    },
    [signUp.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [logIn.pending]: state => {
      state.isLogin = false;
      state.error = null;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.token = payload.token;
      state.isLogin = true;
      state.user = payload.user;
    },
    [logIn.rejected]: (state, { payload }) => {
      state.isLogin = false;
      state.error = payload;
    },
    [logOut.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [logOut.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isLogin = false;
      state.token = '';
      state.user = {};
    },
    [logOut.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [userCurrent.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [userCurrent.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isLogin = true;
      // state.token = payload.token;
      // state.user.email = payload.user.email;
      state.user = payload;
    },
    [userCurrent.rejected]: (state, { payload }) => {
      state.loading = false;
      state.token = '';
      state.error = payload;
    },
    [updateToken]: (state, { payload }) => {
      state.token = payload;
    },
  },
});

export const authReducer = authSlice.reducer;
