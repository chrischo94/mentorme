import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios"
import * as serviceWorker from './serviceWorker';
import { addAuthHeader } from './utils/auth';

axios.interceptors.request.use(addAuthHeader);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
