import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes';
import { ToastContainer } from 'react-toastify';
import "./styles/global.scss";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router/>
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
)
