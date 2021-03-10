import { combineReducers } from 'redux';
import usersReducer from './user-list/reducers';

const reducer = combineReducers({
    userList: usersReducer,
});

export default reducer;
