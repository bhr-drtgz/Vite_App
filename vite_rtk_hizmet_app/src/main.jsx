import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app";

import "bootstrap/dist/css/bootstrap.min.css";
import store from './redux/store';
import { Provider } from 'react-redux';
import ThemeContextProvider from './companents/ThemeContext';
import AuthContextProvider from './companents/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>
);
