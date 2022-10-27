import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, tokenAuth } from 'API';
import { toast } from 'react-toastify';

export const techTest = createAsyncThunk('test/tech', async credentials => {
  if (!tokenAuth) {
    toast.error('Login please, first');
  }
  const { data } = await API.get('/api/test/tech', credentials);
  console.log(data);
  return data;
});

export const theoryTest = createAsyncThunk('test/theory', async credentials => {
  if (!tokenAuth) {
    toast.error('Login please, first');
  }

  const { data } = await API.get('/api/test/theory', credentials);
  console.log(data);
  return data;
});
