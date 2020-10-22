import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'reducers';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createBrowserHistory();

const store = createStore(
    reducers(history),
    composeEnhancer(
        applyMiddleware(
            routerMiddleware(history),
            // other middlewares
        ),
    ),
);

ReactDOM.render(
    <Provider store={store}>
        <App history={history} />
    </Provider>,
    document.getElementById('root'),
);

serviceWorker.unregister();
