import {GET_USERS} from '../actions/index';
import {ONE_USER} from '../actions/index';
const INITIAL_STATE = {all:[],one:{}};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case GET_USERS:
        return Object.assign({},state,{all:action.payload})
    case ONE_USER:
        return Object.assign({},state,{one:action.payload})
    default:
    return state
  }
}
