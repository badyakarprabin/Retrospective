import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './component/App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

