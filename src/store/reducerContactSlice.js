
import {createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// import { getContacts } from "components/Api";


axios.defaults.baseURL =
  'https://658c9aa4859b3491d3f63ee2.mockapi.io/contacts';



  // const fetchContactsApi = createAsyncThunk(
  //   'contactsNumber/fetchAll',
  //   async () => {
  //     const data = await getContacts();
  //     return data;
  //   }
  // );

export const fetchContactsApi = createAsyncThunk(
  'contactsNumber/fetchAll',
  async(_, thunkAPI) => {
  try {
    const response = await axios.get('contacts');
    console.log(response.data)
      return response.data;
   } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
  
  }
);




export const addContactApi = createAsyncThunk(
  'contacts/addContact',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactApi = createAsyncThunk(
  'contacts/deleteContact',
  async (_, thunkAPI) => {
    try {
      const response = await axios.delete('/contacts/:id');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const contactSlise = createSlice({
  name: 'contact',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
  },
  reducers: {
    ADD_CONTACT(state, action) {
      state.contacts.items.push(action.payload);
    },
    DELETE_CONTACT(state, action) {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsApi.pending, (state) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContactsApi.fulfilled, (state, action) => {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
      })
      .addCase(fetchContactsApi.rejected, (state, action) => {
        state.contacts.isLoading = false; 
        state.contacts.error = action.payload;
      });
  }
});

export const contactReduce = contactSlise.reducer;
export const { ADD_CONTACT, DELETE_CONTACT } = contactSlise.actions;




    


