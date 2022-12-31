import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import SnackbarProvider from 'react-simple-snackbar';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import './index.css'; 
import {client} from './api/api';
import theme from './themes';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './state/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <StoreProvider>
          <SnackbarProvider>  
            <App />
          </SnackbarProvider>
        </StoreProvider>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
