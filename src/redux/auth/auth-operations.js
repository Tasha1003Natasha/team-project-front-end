import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, tokenAuth } from 'API';
import { toast } from 'react-toastify';

export const signUp = createAsyncThunk('auth/register', async user => {
  try {
    const { data } = await API.post('auth/register', user);
    // if (data.status === 201) {
    //   toast.message(
    //     'Email is registraited, if you whant check yourself, login now'
    //   );
    // }
    return data;
  } catch (error) {
    if (error.response.status === 409) {
      toast.error('Email in use!', {
        theme: 'colored',
      });
    }
  }
});

export const logIn = createAsyncThunk('auth/login', async user => {
  try {
    const { data } = await API.post('auth/login', user);
    tokenAuth.set(data.token);
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      toast.error('Server error, please try again later', {
        theme: 'colored',
      });
    }
    if (error.response.status !== 401) {
      toast.error('Wrong email or password, please try again!', {
        theme: 'colored',
      });
    }
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await API.post('auth/logout');
    tokenAuth.unset();
  } catch {
    toast.error('Server error, please try again later', {
      theme: 'colored',
    });
  }
});

export const userCurrent = createAsyncThunk(
  'auth/current',
  async (_, { getState }) => {
    try {
      const { auth } = getState();
      tokenAuth.set(auth.token);
      const { data } = await API.get('auth/current');
      return data;
    } catch (error) {
      tokenAuth();
      toast.error('Oops, we got an error :(((( Dont worry and try again.', {
        theme: 'colored',
      });
    }
  }
);
