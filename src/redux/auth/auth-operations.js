import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, tokenAuth } from 'API';
import { toast } from 'react-toastify';

export const signIn = createAsyncThunk('auth/register', async user => {
  try {
    const { data } = await API.post('auth/register', user);
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

export const userCurrent = createAsyncThunk('auth/current', async () => {
  const { data } = await API.get('auth/current');
  tokenAuth.set(data.token);
  return data;
});
