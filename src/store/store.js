import { configureStore } from '@reduxjs/toolkit';
import { contactReduce } from './reducerContactSlice';
import { filterReduce } from 'store/reducerFilterSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const myMiddleWare = store => next => action => {
  console.log('myMiddleWare', action);
  next(action);
}



const persistConfig = {
  key: 'contact',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactReduce);

export const store = configureStore({
  reducer: {
    contact: persistedReducer,
    filter: filterReduce,
  },

  
  middleware(getDefaultMiddleware) {
    const defaultMiddleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    });
   return [...defaultMiddleware, myMiddleWare]
  }
});



export const  persistor = persistStore(store)


