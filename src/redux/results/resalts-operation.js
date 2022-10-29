import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, tokenAuth } from 'API';
import { toast } from 'react-toastify';

export const results = createAsyncThunk('/results', async answers => {
  if (!tokenAuth) {
    toast.error('Login please, first');
  }

  const { data } = await API.post('/results', answers);
  console.log(data);
  return data;

  //   try {
  //     const { data } = await API.post('/results', answers);
  //     console.log(answers);
  //     console.log(data);

  //     return data;
  //   } catch (error) {
  //     if (error.response.status === 401) {
  //       toast.error('Server error, please try again later');
  //     }
  //   }
});
