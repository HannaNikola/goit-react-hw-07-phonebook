
import {createSlice } from "@reduxjs/toolkit";



export const contactSlise = createSlice({
  name: 'contact',
  initialState : {
     contacts: {
     items: [],
     isLoading: false,
     error: null
  }

    // contacts: [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ],
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


// {
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null
//   },
//   filter: ""
// }



export const contactReduce = contactSlise.reducer;
export const { ADD_CONTACT, DELETE_CONTACT } = contactSlise.actions;









// export const contactReducer = (state =initialState, action) => {

    
//     switch (action.type) {
//       case ADD_CONTACT:
//         return {
//           ...state,
//           contacts: [...state.contacts, action.payload],
//         };
//       case DELETE_CONTACT:
//         return {
//           ...state,
//           contacts: state.contacts.filter(
//             contact => contact.id !== action.payload
//           ),
//         };
//       case FILTER_CONTACT:
//        return {
//           ...state,
//           filter: action.payload,
//        };
//       default:
//         return state;
//     };

// };


