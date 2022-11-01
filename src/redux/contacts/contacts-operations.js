import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'API';

export const getContacts = createAsyncThunk('/contacts', async () => {
  const { data } = await API.get('/contacts');
  return data;
});
