import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'reducers';

const store = createStore(reducers);
console.log(store.getState());

store.dispatch({
    type: 'ADD_USER',
    payload: 'John',
});
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

serviceWorker.unregister();
