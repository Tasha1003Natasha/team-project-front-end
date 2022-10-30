import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, tokenAuth } from 'API';
import { toast } from 'react-toastify';

export const techTest = createAsyncThunk('tests/tech', async () => {
  if (!tokenAuth) {
    toast.error('Login please, first');
  }
  const { data } = await API.get('/tests/tech');
  return data;
});

export const theoryTest = createAsyncThunk('tests/theory', async () => {
  if (!tokenAuth) {
    toast.error('Login please, first');
  }

  const { data } = await API.get('/tests/theory');
  return data;
});


