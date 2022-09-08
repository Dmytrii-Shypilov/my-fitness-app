import React from 'react';
import ReactDOM from 'react-dom/client';
import store from 'redux/store';
import { Provider } from 'react-redux/es/exports';

import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
