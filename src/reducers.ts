import { combineReducers } from 'redux';
import { RouterState, connectRouter } from 'connected-react-router';
import { History } from 'history';
import { IUserState, userReducer } from 'components';

export interface IStoreState {
    userReducer: IUserState;
    router: RouterState;
}

const reducers = (history: History) =>
    combineReducers<IStoreState>({
        userReducer,
        router: connectRouter(history),
    });

export default reducers;
