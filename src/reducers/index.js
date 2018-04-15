import { combineReducers } from 'redux';
import all from './api';
import one from './api';
const reducers = combineReducers({
users: all,
user:one
});
export default reducers;
