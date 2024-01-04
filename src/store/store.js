import { configureStore } from '@reduxjs/toolkit';
import { contactReduce } from './reducerContactSlice';
import { filterReduce } from 'store/reducerFilterSlice';



export const store = configureStore({
  reducer: {
    contact: contactReduce,
    filter: filterReduce,
  },
});


