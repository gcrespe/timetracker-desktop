import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'mobx-react';
import { Stores } from './stores';

ReactDOM.render(
  <React.StrictMode>
    <Provider {...Stores}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
