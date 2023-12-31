import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import { store, persistor } from "./redux/store";
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './style/theme';
import './style/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ChakraProvider theme={theme}>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
     <App /> 
    </BrowserRouter>
    </PersistGate>
  </Provider>
  </ChakraProvider>
  </React.StrictMode>
);
