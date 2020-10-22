import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import storage from 'redux-persist/lib/storage';
import reducers from 'reducers';

const persistConfig = {
    key: 'root',
    storage,
};

const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createBrowserHistory();

const rootReducer = reducers(history);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(
    routerMiddleware(history),
    // other middlewares
);

let store = createStore(persistedReducer, composeEnhancer(middleware));

let persistor = persistStore(store);

export { store, persistor, history };
