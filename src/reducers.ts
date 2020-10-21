import { combineReducers } from 'redux';
import { userReducer } from 'components';

const rootReducer = combineReducers({
    userReducer,
});

export default rootReducer;
