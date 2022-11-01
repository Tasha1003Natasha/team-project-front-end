import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'API';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    const { data } = await API.get('/contacts');
    return data;
  }
);
