import { combineReducers } from 'redux';
import { IUserState, userReducer } from 'components';

export interface IStoreState {
    userReducer: IUserState;
}

const reducers = combineReducers<IStoreState>({
    userReducer,
});

export default reducers;
