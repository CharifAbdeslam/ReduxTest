import { combineReducers } from 'redux';
import all from './api';
const reducers = combineReducers({
users: all
});
export default reducers;
