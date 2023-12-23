import { configureStore } from '@reduxjs/toolkit';
import { contactReduce } from './reducerContactSlice';
import { filterReduce } from 'store/reducerFilterSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const persistConfig = {
  key: 'contact',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactReduce);

export const store = configureStore({
    reducer:  {
    contact: persistedReducer,
    filter: filterReduce,
  },
});


export const  persistor = persistStore(store)

