import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'API';
// import { toast } from 'react-toastify';

export const techResults = createAsyncThunk(
  'results/tech',
  async credentials => {
    const { data } = await API.post('results/tech', credentials);
    return data;
  }
);

export const theoryResults = createAsyncThunk(
  'results/theory',
  async credentials => {
    const { data } = await API.post('results/theory', credentials);
    return data;
  }
);
