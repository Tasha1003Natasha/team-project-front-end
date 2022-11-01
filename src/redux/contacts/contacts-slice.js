import { createSlice } from '@reduxjs/toolkit';
import { getContacts } from './contacts-operations';

export const initialState = {
  contacts: null,
};

const contactsSlice = createSlice({
  name: ' contacts',
  initialState,
  extraReducers: {
    [getContacts.fulfilled]: (state, { payload }) => {
      state.testTheory = payload;
      state.testTech = [];
    },
  },
});
export const contactsReducer = contactsSlice.reducer;
