import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from 'store/store';
// import {persistor, store } from './store/store';
// import { PersistGate } from 'redux-persist/integration/react';



const theme = {
  spacing: value => `${value * 4}px`,
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyle />
        </ThemeProvider>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
