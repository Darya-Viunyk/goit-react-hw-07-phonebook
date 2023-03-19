import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const contactsAxios = axios.create({
  baseURL: 'https://64162be00b3cdc7b2ca30241.mockapi.io/api/v1',
});
export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await contactsAxios.get('/contacts');
  return data;
});
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await contactsAxios.post('/contacts', contact);
    return data;
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const { data } = await contactsAxios.delete(`/contacts/${id}`);
    return data;
  }
);
