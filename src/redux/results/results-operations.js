import { API } from 'API';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const userResults = createAsyncThunk('/results', async () => {
  const { data } = await API.get('results');
  return data;
});
