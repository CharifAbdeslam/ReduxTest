import axios from 'axios';
const API_URL = 'https://jsonplaceholder.typicode.com/users';
export const GET_USERS = 'GET_USERS'

export function getUser(){
  const req = axios.get(API_URL);
  return (dispatch) => {
              req.then(({data})=>dispatch({type:GET_USERS,payload:data}))
  }
}
