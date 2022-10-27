import { createSlice } from '@reduxjs/toolkit';
import { theoryTest, techTest } from './tests-operations';
import { testInitialState } from './test-initialState';


const testSlice = createSlice({
  name: 'test',
  testInitialState,
    extraReducers: {
      
  },
}); 