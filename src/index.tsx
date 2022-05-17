import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Registro from './pages/registro'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Registro />
  </React.StrictMode>
);

