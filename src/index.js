import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DataLayer } from './DataLayer';
import reducer, { initialState } from './reducer';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={ initialState } reducer={ reducer } >
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);

