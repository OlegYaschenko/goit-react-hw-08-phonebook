import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    filter(state, action) {
      state.filter = action.payload;
    },
    pushContact(state, action) {
      state.items.push(action.payload);
    },
    removeContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: 'filter',
};

export const contactsPersistedReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const selectedFilter = state => state.contacts.filter;
export const selectedContacts = state => state.contacts.items;

export const { filter, pushContact, removeContact } = contactSlice.actions;
