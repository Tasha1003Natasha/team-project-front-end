import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, tokenAuth } from 'API';
import { toast } from 'react-toastify';

export const getTest = createAsyncThunk('tests', async type => {
  if (!tokenAuth) {
    toast.error('Login please, first', {
      theme: 'colored',
    });
  }
  const { data } = await API.get(`tests/${type}`);

  return data;
});

export const getAnswers = createAsyncThunk('tests/check', async userAnswers => {
  if (!tokenAuth) {
    toast.error('Login please, first', {
      theme: 'colored',
    });
  }
  const { data } = await API.post(`tests/check`, userAnswers);

  return data;
});

export const results = createAsyncThunk('tests/results', async answers => {
  if (!tokenAuth) {
    toast.error('Login please, first', {
      theme: 'colored',
    });
  }

  const { data } = await API.post('tests/results', answers);

  return data;
});
