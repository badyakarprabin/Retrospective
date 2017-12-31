import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import rootReducer from './reducers';

const store = createStore(rootReducer,
    applyMiddleware(thunk, promiseMiddleware()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default store;
