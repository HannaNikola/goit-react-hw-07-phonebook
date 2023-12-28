import { configureStore } from '@reduxjs/toolkit';
import { contactReduce } from './reducerContactSlice';
import { filterReduce } from 'store/reducerFilterSlice';
// import { Store } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';


export const store = configureStore({
  reducer: {
    contact: contactReduce,
    filter: filterReduce,
  },
});


// const contacts = useSelector(state => state.contact.contacts);




// const myMiddleWare = store => next => action => {
//   console.log('myMiddleWare', action);
//   next(action);
// }



// const persistConfig = {
//   key: 'contact',
//   storage,
// };

// export const store = createStore(contactReduce, enhancer);

// const persistedReducer = persistReducer(persistConfig, contactReduce);

// export const store = configureStore({
//   reducer: {
//     contact: contactReduce,
//     filter: filterReduce,
//   },
// });
  
//   middleware(getDefaultMiddleware) {
//     const defaultMiddleware = getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: ['persist/PERSIST'],
//       },
//     });
//    return [...defaultMiddleware, myMiddleWare]
//   }
// });



// export const  persistor = persistStore(store)


