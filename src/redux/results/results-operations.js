import { API } from 'API';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const results = createAsyncThunk(
  '/results',
  async (usersAnswer, type) => {
    const { data } = await API.post('/results', (usersAnswer, type));
    return data;
  }
);

// export const userResults = createAsyncThunk('/results', async () => {
//   const { data } = await API.get('results');
//   return data;
// });
