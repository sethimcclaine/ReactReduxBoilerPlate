import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from 'src/views/app';
import registerServiceWorker from 'src/registerServiceWorker';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

import {
    applyMiddleware,
    compose,
    createStore,
} from 'redux';

import appReducer from 'src/reducers/app-reducer';


const middleware = applyMiddleware(thunk);

const enhancer = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__ ? compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__()
) : middleware;

const store = createStore(appReducer, enhancer);

ReactDOM.render(
    <Provider store={ store }>
        <AppContainer />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
