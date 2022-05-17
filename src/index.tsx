import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Registro from './pages/registro/registro'
import Login from './pages/login/login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Registro />
  </React.StrictMode>
);

