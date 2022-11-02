import { createSlice } from '@reduxjs/toolkit';
import { getTeams } from './contacts-operations';

export const initialState = {
  teams: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getTeams.fulfilled]: (state, { payload }) => {
      state.teams = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

