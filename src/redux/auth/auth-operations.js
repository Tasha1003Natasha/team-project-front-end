import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, tokenAuth } from 'API';
import { toast } from 'react-toastify';

export const signIn = createAsyncThunk('auth/register', async user => {
  const { data } = await API.post('auth/register', user);
  return data;
});

export const logIn = createAsyncThunk('auth/login', async user => {
  try {
    const { data } = await API.post('auth/login', user);
    tokenAuth.set(data.token);
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      toast.error('Server error, please try again later');
    }
    if (error.response.status !== 401) {
      toast.error('Wrong email or password, please try again.');
    }
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await API.post('auth/logout');
    tokenAuth.unset();
  } catch {
    toast.error('Server error, please try again later');
  }
});
