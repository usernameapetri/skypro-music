import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as Style from './App.Styles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { trackApi } from './services/track';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Style.GlobalStyle />
      <ApiProvider api={trackApi}>
        <Provider store={store}>
          <App />
        </Provider>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
