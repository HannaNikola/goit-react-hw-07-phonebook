
import {createSlice } from "@reduxjs/toolkit";



export const contactSlise = createSlice({
  name: 'contact',
  initialState : {
     contacts: {
     items: [],
     isLoading: false,
     error: null
  }

  
  },
  reducers: {
    ADD_CONTACT(state, action) {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    },
    DELETE_CONTACT(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
  },
});



export const contactReduce = contactSlise.reducer;
export const { ADD_CONTACT, DELETE_CONTACT } = contactSlise.actions;









    


