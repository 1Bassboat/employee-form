import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';          // ADD THIS IMPORT
import store from './redux/store';               // ADD THIS IMPORT

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>                     {/* WRAP APP IN PROVIDER */}
      <App />
    </Provider>
  </React.StrictMode>
);
