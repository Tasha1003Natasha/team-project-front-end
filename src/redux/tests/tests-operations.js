import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, tokenAuth } from 'API';
import { toast } from 'react-toastify';

export const techTest = createAsyncThunk('test', async credentials => {
  const { data } = await API.get('/api/test/tech', credentials);
  console.log(data);
  return data;
});

export const theoryTest = createAsyncThunk('test', async credentials => {
  const { data } = await API.get('/api/test/theory', credentials);
  console.log(data);
  return data;
});
