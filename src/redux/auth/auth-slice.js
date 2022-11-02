import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut } from './auth-operations';

export const initialState = {
  token: null,
  isLogin: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // googleAuth: (state, { payload }) => {
    //   state.accessToken = payload.accessToken;
    //   state.isLogin = true;
    // },
  },
  extraReducers: {
    [logIn.pending]: (state, { payload }) => {
      state.isLogin = false;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.isLogin = true;
      state.user = payload.user.email;
    },
    [logIn.rejected]: (state, { payload }) => {
      state.isLogin = false;
    },

    [logOut.fulfilled]: (state, { payload }) => {
      state.token = null;
      state.isLogin = false;
      state.token = null;
      state.user = {};
    },
  },
});

export const authReducer = authSlice.reducer;
