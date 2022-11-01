import { createSlice } from '@reduxjs/toolkit';
import { getContacts } from './contacts-operations';

export const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: ' contacts',
  initialState,
  extraReducers: {
    [getContacts.fulfilled]: (state, { payload }) => {
      state.contacts = payload;
      state.contacts = [];
    },
  },
});
export const contactsReducer = contactsSlice.reducer;
