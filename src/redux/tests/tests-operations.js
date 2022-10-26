import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, tokenAuth } from 'API';
import { toast } from 'react-toastify';

export const currentTest = createAsyncThunk('test', async credentials => {
  const { data } = await API.get('/api/test', credentials);
  console.log(data);
  return data;
});
