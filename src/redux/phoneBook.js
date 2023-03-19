import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { addContact, deleteContact, fetchContacts } from './phoneBook.oper';

export const phoneBook = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '' },

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    delItem: (state, action) => {
      state.items = state.items.filter(it => it.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.fulfilled, (state, { payload }) => {
      state.contacts.items = payload;
    });
    builder.addCase(addContact.fulfilled, (state, { payload }) => {
      state.contacts.items.push(payload);
    });
    builder.addCase(deleteContact.fulfilled, (state, { payload }) => {
      state.contacts.items = state.contacts.items.filter(
        it => it.id !== payload.id
      );
    });
  },
});
const persistConfig = {
  key: 'root',
  storage,
  blaсklist: ['filter'],
};

export const persistedPhoneBookReduser = persistReducer(
  persistConfig,
  phoneBook.reducer
);
