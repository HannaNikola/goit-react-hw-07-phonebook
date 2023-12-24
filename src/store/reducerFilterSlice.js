import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },

  reducers: {
    FILTER_CONTACT(state, action) {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});

export const filterReduce = filterSlice.reducer;
export const { FILTER_CONTACT } = filterSlice.actions;





