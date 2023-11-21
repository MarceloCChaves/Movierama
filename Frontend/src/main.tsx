import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes';
import { ToastContainer } from 'react-toastify';
import "./styles/global.scss";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router/>
        <ToastContainer />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
