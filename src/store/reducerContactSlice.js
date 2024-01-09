
import {createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';




axios.defaults.baseURL =
  'https://658c9aa4859b3491d3f63ee2.mockapi.io/contacts';




export const fetchContactsApi = createAsyncThunk(
  'contactsNumber/fetchAll',
  async(_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    console.log(response.data)
      return response.data;
   } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
  
  }
);




export const addContactApi = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const responseAdd = await axios.post('/contacts', newContact);
      return responseAdd.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const deleteContactApi = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const hendlePending = state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      }

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

export const contactSlise = createSlice({
  name: 'contact',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
  },
  
  extraReducers: builder => {
    builder
      .addCase(fetchContactsApi.pending, hendlePending)
      .addCase(fetchContactsApi.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.isLoading = false;})
      .addCase(fetchContactsApi.rejected, handleRejected)

      .addCase(addContactApi.pending, hendlePending)
      .addCase(addContactApi.fulfilled, (state, action) => {
        state.contacts.items = [...state.contacts.items, action.payload];
        state.contacts.isLoading = false;
      })
      .addCase(addContactApi.rejected, handleRejected)
      
      .addCase(deleteContactApi.pending, hendlePending)
      .addCase(deleteContactApi.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload.id
        );
        state.contacts.isLoading = false;
      })
      .addCase(deleteContactApi.rejected, handleRejected);
  }
});

export const contactReduce = contactSlise.reducer;





    


