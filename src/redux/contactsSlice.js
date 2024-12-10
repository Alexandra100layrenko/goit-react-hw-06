import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
        const index = state.items.findIndex(
            contact => contact.name.toLowerCase() === action.payload.name.toLowerCase()
        );
        if (index === -1) {
             state.items.push(action.payload);
        }
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});

// selectors
export const selectContacts = state => state.contacts.items;
// actions, rducers
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;