import { createSlice } from '@reduxjs/toolkit';
import { logIn, signUp, userCurrent, logOut } from './auth-operations';

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
  reducers: {
    // googleAuth: (state, { payload }) => {
    //   state.token = payload.token;
    //   state.isLogin = true;
    // },
  },
  extraReducers: {
    [signUp.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [signUp.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isLogin = true;
      state.user = payload.user;
      state.token = payload.token;
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
    [logOut.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [userCurrent.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [userCurrent.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [userCurrent.rejected]: (store, { payload }) => {
      store.loading = false;
      store.token = '';
      store.error = payload;
    },
  },
});

export const authReducer = authSlice.reducer;
