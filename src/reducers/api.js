import {GET_USERS} from '../actions/index';
const INITIAL_STATE = {all:[]};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case GET_USERS:
        return{...state,all:action.payload}
    default:
    return state
  }
}
