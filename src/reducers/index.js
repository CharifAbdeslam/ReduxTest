import { combineReducers } from 'redux';
import users from './api';
const reducers = combineReducers({
users: users
});
export default reducers;
